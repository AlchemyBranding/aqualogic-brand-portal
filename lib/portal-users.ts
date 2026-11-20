// Portal user records, kept in Sanity.
//
// The dataset is public, so every record uses an id with a dot in it
// ("portal-users.<entra object id>"). Sanity treats dotted ids as private:
// they are never served to unauthenticated readers, only to the token-holding
// write client used here. Store only what the admin page needs.

import { getWriteClient } from '@/lib/sanity-client';

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
const idFor = (oid: string) => `portal-users.${oid}`;

/** Create the record on first sign-in, or update name/email/last sign-in. */
export async function recordSignIn(u: { oid: string; name: string; email: string }) {
  const client = getWriteClient();
  if (!client) return;
  const now = new Date().toISOString();
  await client
    .transaction()
    .createIfNotExists({
      _id: idFor(u.oid),
      _type: TYPE,
      oid: u.oid,
      name: u.name,
      email: u.email,
      firstSignIn: now,
      lastSignIn: now,
      blocked: false
    })
    .patch(idFor(u.oid), (p) => p.set({ name: u.name, email: u.email, lastSignIn: now }))
    .commit();
}

/** True if an admin has removed this person. Unknown users are not blocked. */
export async function isBlocked(oid: string): Promise<boolean> {
  const client = getWriteClient();
  if (!client) return false;
  const doc = await client.fetch<{ blocked?: boolean } | null>(
    `*[_id == $id][0]{blocked}`,
    { id: idFor(oid) },
    { cache: 'no-store' }
  );
  return Boolean(doc?.blocked);
}

export async function listUsers(): Promise<PortalUser[]> {
  const client = getWriteClient();
  if (!client) return [];
  return client.fetch<PortalUser[]>(
    `*[_type == $type] | order(lastSignIn desc){_id, oid, name, email, firstSignIn, lastSignIn, blocked}`,
    { type: TYPE },
    { cache: 'no-store' }
  );
}

export async function setBlocked(oid: string, blocked: boolean) {
  const client = getWriteClient();
  if (!client) throw new Error('Sanity write client not configured');
  await client.patch(idFor(oid)).set({ blocked }).commit();
}
