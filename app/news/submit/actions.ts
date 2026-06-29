'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getWriteClient } from '@/lib/sanity-client';

export async function submitNewsArticle(formData: FormData) {
  const client = getWriteClient();
  if (!client) {
    redirect('/news/submit?error=not-configured');
  }

  try {
    const heroFile = formData.get('heroImage');
    let heroImage: { _type: 'image'; asset: { _type: 'reference'; _ref: string } } | undefined;

    if (heroFile instanceof File && heroFile.size > 0) {
      const asset = await client!.assets.upload('image', heroFile, { filename: heroFile.name });
      heroImage = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
    }

    await client!.create({
      _type: 'newsArticle',
      title: str(formData, 'title'),
      kind: str(formData, 'kind') || 'internal',
      category: str(formData, 'category'),
      source: str(formData, 'source') || undefined,
      sourceUrl: str(formData, 'sourceUrl') || undefined,
      publicationDate: str(formData, 'publicationDate') || undefined,
      summary: str(formData, 'summary') || undefined,
      body: str(formData, 'body') || undefined,
      heroImage,
      submittedByName: str(formData, 'submittedByName'),
      submittedByEmail: str(formData, 'submittedByEmail'),
      submittedAt: new Date().toISOString(),
      status: 'pending-review'
    });

    revalidatePath('/news');
  } catch (err) {
    console.error('News article submission failed', err);
    redirect('/news/submit?error=save-failed');
  }

  redirect('/news/submit/thanks');
}

function str(form: FormData, key: string): string {
  const v = form.get(key);
  return typeof v === 'string' ? v : '';
}
