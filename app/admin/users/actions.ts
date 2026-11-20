'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/require-user';
import { setBlocked } from '@/lib/portal-users';

export async function setUserAccess(formData: FormData) {
  const admin = await requireAdmin('/admin/users');
  const oid = String(formData.get('oid') ?? '');
  const block = formData.get('block') === 'true';
  if (!oid) redirect('/admin/users?error=missing');
  // Don't let an admin lock themselves out by accident.
  if (block && oid === admin.oid) redirect('/admin/users?error=self');
  await setBlocked(oid, block);
  revalidatePath('/admin/users');
  redirect(`/admin/users?status=${block ? 'removed' : 'restored'}`);
}
