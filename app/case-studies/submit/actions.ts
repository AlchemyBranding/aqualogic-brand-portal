'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getWriteClient } from '@/lib/sanity-client';
import { notifySubmission } from '@/lib/notify';

type SanityImageRef = { _type: 'image'; asset: { _type: 'reference'; _ref: string } };

export async function submitCaseStudy(formData: FormData) {
  const client = getWriteClient();
  if (!client) {
    redirect('/case-studies/submit?error=not-configured');
  }

  try {
    const uploadOne = async (field: string): Promise<SanityImageRef | undefined> => {
      const file = formData.get(field);
      if (!(file instanceof File) || file.size === 0) return undefined;
      const asset = await client!.assets.upload('image', file, { filename: file.name });
      return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
    };

    const clientLogo = await uploadOne('clientLogo');
    const heroImage = await uploadOne('heroImage');
    const programmeImage = await uploadOne('programmeImage');

    const galleryFiles = formData
      .getAll('gallery')
      .filter((f): f is File => f instanceof File && f.size > 0);
    const gallery: SanityImageRef[] = [];
    for (const file of galleryFiles) {
      const asset = await client!.assets.upload('image', file, { filename: file.name });
      gallery.push({ _type: 'image', asset: { _type: 'reference', _ref: asset._id } });
    }

    const results = [1, 2, 3, 4]
      .map((n) => ({
        _type: 'resultItem' as const,
        figure: str(formData, `result${n}Figure`),
        subtitle: str(formData, `result${n}Subtitle`)
      }))
      .filter((r) => r.figure || r.subtitle);

    const programmeRows = [1, 2, 3, 4, 5, 6]
      .map((n) => ({
        _type: 'programmeRow' as const,
        rowTitle: str(formData, `row${n}Title`),
        rowCopy: str(formData, `row${n}Copy`)
      }))
      .filter((r) => r.rowTitle || r.rowCopy);

    await client!.create({
      _type: 'caseStudy',
      title: str(formData, 'title'),
      client: str(formData, 'client'),

      introText: str(formData, 'introText') || undefined,
      clientLogo,
      heroImage,

      results: results.length ? results : undefined,

      contextTitle: str(formData, 'contextTitle') || undefined,
      contextCopy: str(formData, 'contextCopy') || undefined,

      challengeTitle: str(formData, 'challengeTitle') || undefined,
      challengeCopy: str(formData, 'challengeCopy') || undefined,

      approachTitle: str(formData, 'approachTitle') || undefined,
      approachCopy: str(formData, 'approachCopy') || undefined,

      programmeTitle: str(formData, 'programmeTitle') || undefined,
      programmeRows: programmeRows.length ? programmeRows : undefined,
      programmeImage,

      endorsementQuote: str(formData, 'endorsementQuote') || undefined,
      endorsementClientName: str(formData, 'endorsementClientName') || undefined,
      endorsementClientPosition: str(formData, 'endorsementClientPosition') || undefined,

      proofHeadline: str(formData, 'proofHeadline') || undefined,
      proofCopy: str(formData, 'proofCopy') || undefined,

      serviceCategory: str(formData, 'serviceCategory') || undefined,
      region: str(formData, 'region') || undefined,
      dateCompleted: str(formData, 'dateCompleted') || undefined,
      gallery: gallery.length ? gallery : undefined,

      submittedByName: str(formData, 'submittedByName'),
      submittedByEmail: str(formData, 'submittedByEmail'),
      submittedAt: new Date().toISOString(),
      status: 'submitted'
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
        'Date completed': str(formData, 'dateCompleted')
      }
    });
  } catch (err) {
    console.error('Case study notification failed', err);
  }

  redirect('/case-studies/submit/thanks');
}

function str(form: FormData, key: string): string {
  const v = form.get(key);
  return typeof v === 'string' ? v.trim() : '';
}
