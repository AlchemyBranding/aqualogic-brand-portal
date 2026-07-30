// Email notifications for portal submissions. Sends one email per
// successful submit to whoever is set as NOTIFY_EMAIL. Stays dormant
// (logs + returns) until both RESEND_API_KEY and NOTIFY_EMAIL are set
// on the environment, so it's safe to ship before the env is wired up.

import { Resend } from 'resend';

type SubmissionType = 'caseStudy' | 'newsArticle';

interface NotifyParams {
  type: SubmissionType;
  title: string;
  submittedByName: string;
  submittedByEmail: string;
  context?: Record<string, string | undefined>;
}

export async function notifySubmission(params: NotifyParams): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;

  if (!apiKey || !to) {
    console.log(
      `notifySubmission skipped (type=${params.type}): RESEND_API_KEY or NOTIFY_EMAIL not set`
    );
    return;
  }

  const from = process.env.NOTIFY_FROM ?? 'Aqualogic Portal <onboarding@resend.dev>';
  const typeLabel = params.type === 'caseStudy' ? 'case study' : 'news article';

  const contextLines = Object.entries(params.context ?? {})
    .filter(([, v]) => Boolean(v && v.trim()))
    .map(([k, v]) => `${k}: ${v}`);

  const text = [
    `A new ${typeLabel} has been submitted to the Aqualogic portal for review.`,
    '',
    `Title: ${params.title}`,
    `Submitted by: ${params.submittedByName} <${params.submittedByEmail}>`,
    ...contextLines,
    '',
    'Review and edit it in Sanity Studio:',
    'https://www.sustecgroupportal.com/studio',
  ].join('\n');

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: params.submittedByEmail || undefined,
      subject: `New ${typeLabel} submitted: ${params.title}`,
      text,
    });
    if (error) {
      console.error('notifySubmission: Resend returned an error', error);
    }
  } catch (err) {
    console.error('notifySubmission: unexpected error', err);
  }
}
