// Portal user records, kept in Sanity.
//
// The dataset is public, so every record uses an id with a dot in it
// ("portal-users.<entra object id>"). Sanity treats dotted ids as private:
// they are never served to unauthenticated readers, only with the write token.
//
// Plain fetch calls to Sanity's HTTP API (no client library), because this file
// is also used by the sign-in check in middleware.ts, which runs on the Edge
// runtime. Store only what the admin page needs.

export type PortalUser = {
  _id: string;
  oid: string;
  name: string;
  email: string;
  firstSignIn: string;
  lastSignIn: string;
  blocked: boolean;
};

const TYPE = 'portalUser';
const API_VERSION = 'v2024-10-01';
const idFor = (oid: string) => `portal-users.${oid}`;

function sanityConfig() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
  const token = process.env.SANITY_WRITE_TOKEN;
  if (!projectId || !token) return null;
  return { base: `https://${projectId}.api.sanity.io/${API_VERSION}/data`, dataset, token };
}

async function query<T>(groq: string, params: Record<string, unknown> = {}): Promise<T | null> {
  const cfg = sanityConfig();
  if (!cfg) return null;
  const url = new URL(`${cfg.base}/query/${cfg.dataset}`);
  url.searchParams.set('query', groq);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(`$${k}`, JSON.stringify(v));
  const res = await fetch(url, { headers: { Authorization: `Bearer ${cfg.token}` }, cache: 'no-store' });
  if (!res.ok) throw new Error(`Sanity query failed: ${res.status}`);
  return ((await res.json()) as { result: T }).result;
}

async function mutate(mutations: unknown[]) {
  const cfg = sanityConfig();
  if (!cfg) throw new Error('Sanity write token not configured');
  const res = await fetch(`${cfg.base}/mutate/${cfg.dataset}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${cfg.token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutations }),
    cache: 'no-store'
  });
  if (!res.ok) throw new Error(`Sanity mutate failed: ${res.status}`);
}

/** Create the record on first sign-in, or update name/email/last sign-in. */
export async function recordSignIn(u: { oid: string; name: string; email: string }) {
  if (!sanityConfig()) return;
  const now = new Date().toISOString();
  await mutate([
    {
      createIfNotExists: {
        _id: idFor(u.oid),
        _type: TYPE,
        oid: u.oid,
        name: u.name,
        email: u.email,
        firstSignIn: now,
        lastSignIn: now,
        blocked: false
      }
    },
    { patch: { id: idFor(u.oid), set: { name: u.name, email: u.email, lastSignIn: now } } }
  ]);
}

/** True if an admin has removed this person. Unknown users are not blocked. */
export async function isBlocked(oid: string): Promise<boolean> {
  const doc = await query<{ blocked?: boolean } | null>(`*[_id == $id][0]{blocked}`, { id: idFor(oid) });
  return Boolean(doc?.blocked);
}

export async function listUsers(): Promise<PortalUser[]> {
  return (
    (await query<PortalUser[]>(
      `*[_type == $type] | order(lastSignIn desc){_id, oid, name, email, firstSignIn, lastSignIn, blocked}`,
      { type: TYPE }
    )) ?? []
  );
}

export async function setBlocked(oid: string, blocked: boolean) {
  await mutate([{ patch: { id: idFor(oid), set: { blocked } } }]);
}
