// Sanity is intentionally optional. If env vars aren't set, helpers return
// a "not configured" signal and the case study / upload routes render setup
// instructions instead of erroring at build or request time.

import { createClient, type SanityClient } from 'next-sanity';

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-10-01';

export function isSanityConfigured(): boolean {
  return Boolean(sanityProjectId);
}

let _readClient: SanityClient | null = null;
let _writeClient: SanityClient | null = null;

export function getReadClient(): SanityClient | null {
  if (!isSanityConfigured()) return null;
  if (_readClient) return _readClient;
  _readClient = createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: true
  });
  return _readClient;
}

export function getWriteClient(): SanityClient | null {
  if (!isSanityConfigured()) return null;
  const token = process.env.SANITY_WRITE_TOKEN;
  if (!token) return null;
  if (_writeClient) return _writeClient;
  _writeClient = createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    token,
    useCdn: false
  });
  return _writeClient;
}
