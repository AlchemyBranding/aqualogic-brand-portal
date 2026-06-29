'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getWriteClient } from '@/lib/sanity-client';
import { notifySubmission } from '@/lib/notify';

export async function submitCaseStudy(formData: FormData) {
  const client = getWriteClient();
  if (!client) {
    redirect('/case-studies/submit?error=not-configured');
  }

  try {
    const heroFile = formData.get('heroImage');
    let heroImage: { _type: 'image'; asset: { _type: 'reference'; _ref: string } } | undefined;

    if (heroFile instanceof File && heroFile.size > 0) {
      const asset = await client!.assets.upload('image', heroFile, { filename: heroFile.name });
      heroImage = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
    }

    const galleryFiles = formData.getAll('gallery').filter((f): f is File => f instanceof File && f.size > 0);
    const gallery: typeof heroImage[] = [];
    for (const file of galleryFiles) {
      const asset = await client!.assets.upload('image', file, { filename: file.name });
      gallery.push({ _type: 'image', asset: { _type: 'reference', _ref: asset._id } });
    }

    await client!.create({
      _type: 'caseStudy',
      title: str(formData, 'title'),
      client: str(formData, 'client'),
      serviceCategory: str(formData, 'serviceCategory'),
      region: str(formData, 'region') || undefined,
      dateCompleted: str(formData, 'dateCompleted') || undefined,
      challenge: str(formData, 'challenge') || undefined,
      approach: str(formData, 'approach') || undefined,
      solution: str(formData, 'solution') || undefined,
      results: str(formData, 'results') || undefined,
      quote: str(formData, 'quote') || undefined,
      quoteAttribution: str(formData, 'quoteAttribution') || undefined,
      heroImage,
      gallery,
      submittedByName: str(formData, 'submittedByName'),
      submittedByEmail: str(formData, 'submittedByEmail'),
      submittedAt: new Date().toISOString(),
      status: 'pending-review'
    });

    revalidatePath('/case-studies');
  } catch (err) {
    console.error('Case study submission failed', err);
    redirect('/case-studies/submit?error=save-failed');
  }

  try {
    await notifySubmission({
      type: 'caseStudy',
      title: str(formData, 'title'),
      submittedByName: str(formData, 'submittedByName'),
      submittedByEmail: str(formData, 'submittedByEmail'),
      context: {
        Client: str(formData, 'client'),
        'Service category': str(formData, 'serviceCategory'),
        Region: str(formData, 'region'),
        'Date completed': str(formData, 'dateCompleted'),
      },
    });
  } catch (err) {
    console.error('Case study notification failed', err);
  }

  redirect('/case-studies/submit/thanks');
}

function str(form: FormData, key: string): string {
  const v = form.get(key);
  return typeof v === 'string' ? v : '';
}
