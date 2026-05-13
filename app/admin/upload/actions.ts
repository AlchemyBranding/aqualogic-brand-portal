'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getWriteClient } from '@/lib/sanity-client';

export async function uploadPhoto(formData: FormData) {
  const client = getWriteClient();
  if (!client) {
    redirect('/admin/upload?error=not-configured');
  }

  try {
    const file = formData.get('image');
    if (!(file instanceof File) || file.size === 0) {
      redirect('/admin/upload?error=no-file');
    }
    const asset = await client!.assets.upload('image', file as File, {
      filename: (file as File).name
    });

    await client!.create({
      _type: 'photo',
      title: str(formData, 'title'),
      brand: str(formData, 'brand') || 'aqualogic',
      category: str(formData, 'category') || undefined,
      caption: str(formData, 'caption') || undefined,
      image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
      uploadedAt: new Date().toISOString()
    });

    revalidatePath('/aqualogic/visuals/imagery');
    revalidatePath('/sustec/visuals/imagery');
  } catch (err) {
    console.error('Photo upload failed', err);
    redirect('/admin/upload?error=save-failed');
  }

  redirect('/admin/upload?status=ok');
}

function str(form: FormData, key: string): string {
  const v = form.get(key);
  return typeof v === 'string' ? v : '';
}
