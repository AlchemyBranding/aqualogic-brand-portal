import { defineField, defineType } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case study',
  type: 'document',
  groups: [
    { name: 'core', title: 'Core' },
    { name: 'intro', title: 'Intro' },
    { name: 'results', title: 'Results' },
    { name: 'story', title: 'Context / Challenge / Approach' },
    { name: 'programme', title: 'Programme at a Glance' },
    { name: 'endorsement', title: 'Endorsement' },
    { name: 'proof', title: 'What this proves' },
    { name: 'extras', title: 'Extras (internal)' },
    { name: 'rewrite', title: 'Rewritten copy (brand-aligned)' },
    { name: 'meta', title: 'Submission metadata' }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Project title (internal reference)',
      description:
        'Short internal name for this case study, e.g. "SWW smart meter rollout". Shown in the Sanity list; not published to the website.',
      type: 'string',
      group: 'core',
      validation: (r) => r.required().min(3).max(140)
    }),
    defineField({
      name: 'client',
      title: 'Client name',
      description: 'The client name that will appear on the case study, e.g. "South West Water".',
      type: 'string',
      group: 'core',
      validation: (r) => r.required()
    }),

    defineField({
      name: 'introText',
      title: 'Introduction text',
      description: 'A short paragraph giving a brief overview of the entire project.',
      type: 'text',
      rows: 4,
      group: 'intro'
    }),
    defineField({
      name: 'clientLogo',
      title: 'Client logo',
      description: 'Client logo — where possible use a transparent PNG.',
      type: 'image',
      options: { hotspot: true },
      group: 'intro'
    }),
    defineField({
      name: 'heroImage',
      title: 'Intro picture',
      description: 'A headline image to appear alongside the introduction.',
      type: 'image',
      options: { hotspot: true },
      group: 'intro'
    }),

    defineField({
      name: 'results',
      title: 'Results',
      description:
        'Up to four headline figures. Aim for at least three or four where possible.',
      type: 'array',
      group: 'results',
      of: [
        {
          type: 'object',
          name: 'resultItem',
          title: 'Result',
          fields: [
            defineField({
              name: 'figure',
              title: 'Figure',
              description: 'A figure or direct result, e.g. "175,000".',
              type: 'string'
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              description: 'Suffix to the figure, e.g. "Smart meters installed".',
              type: 'string'
            })
          ],
          preview: {
            select: { figure: 'figure', subtitle: 'subtitle' },
            prepare: ({ figure, subtitle }) => ({
              title: figure || '—',
              subtitle: subtitle || ''
            })
          }
        }
      ],
      validation: (r) => r.max(4)
    }),

    defineField({
      name: 'contextTitle',
      title: 'Context — title',
      description: 'A short headline introducing the context of the project.',
      type: 'string',
      group: 'story'
    }),
    defineField({
      name: 'contextCopy',
      title: 'Context — copy',
      type: 'text',
      rows: 5,
      group: 'story'
    }),

    defineField({
      name: 'challengeTitle',
      title: 'Challenge — title',
      description: 'A short headline introducing the challenge.',
      type: 'string',
      group: 'story'
    }),
    defineField({
      name: 'challengeCopy',
      title: 'Challenge — copy',
      type: 'text',
      rows: 5,
      group: 'story'
    }),

    defineField({
      name: 'approachTitle',
      title: 'Approach — title',
      description: 'A short headline introducing the approach taken.',
      type: 'string',
      group: 'story'
    }),
    defineField({
      name: 'approachCopy',
      title: 'Approach — copy',
      type: 'text',
      rows: 5,
      group: 'story'
    }),

    defineField({
      name: 'programmeTitle',
      title: 'Programme title',
      description: 'Short title for the "Programme at a Glance" area.',
      type: 'string',
      group: 'programme'
    }),
    defineField({
      name: 'programmeRows',
      title: 'Programme rows',
      description:
        'Up to six rows. Keep each entry short. Aim for at least four rows if you use this section.',
      type: 'array',
      group: 'programme',
      of: [
        {
          type: 'object',
          name: 'programmeRow',
          title: 'Row',
          fields: [
            defineField({
              name: 'rowTitle',
              title: 'Row title',
              description: 'e.g. "Client", "Location", "Scope".',
              type: 'string'
            }),
            defineField({
              name: 'rowCopy',
              title: 'Row copy',
              description: 'e.g. "South West Water".',
              type: 'string'
            })
          ],
          preview: {
            select: { rowTitle: 'rowTitle', rowCopy: 'rowCopy' },
            prepare: ({ rowTitle, rowCopy }) => ({
              title: rowTitle || '—',
              subtitle: rowCopy || ''
            })
          }
        }
      ],
      validation: (r) => r.max(6)
    }),
    defineField({
      name: 'programmeImage',
      title: 'Programme image',
      description: 'Optional additional image for the Programme at a Glance section.',
      type: 'image',
      options: { hotspot: true },
      group: 'programme'
    }),

    defineField({
      name: 'endorsementQuote',
      title: 'Quote from client',
      description: 'Client feedback. Keep this reasonably short.',
      type: 'text',
      rows: 4,
      group: 'endorsement'
    }),
    defineField({
      name: 'endorsementClientName',
      title: 'Client name (for quote)',
      description: 'Name of the person providing the feedback, e.g. "John Smith".',
      type: 'string',
      group: 'endorsement'
    }),
    defineField({
      name: 'endorsementClientPosition',
      title: 'Client position',
      description: 'Role or company of the person providing feedback, e.g. "South West Water".',
      type: 'string',
      group: 'endorsement'
    }),

    defineField({
      name: 'proofHeadline',
      title: 'Proof — headline',
      description: 'A short headline stating what the project proves.',
      type: 'string',
      group: 'proof'
    }),
    defineField({
      name: 'proofCopy',
      title: 'Proof — copy',
      type: 'text',
      rows: 5,
      group: 'proof'
    }),

    defineField({
      name: 'serviceCategory',
      title: 'Service category (optional)',
      description: 'Kept for internal filtering. Not shown on the new website layout.',
      type: 'string',
      group: 'extras',
      options: {
        list: [
          { title: 'Leakage detection', value: 'leakage-detection' },
          { title: 'Demand management', value: 'demand-management' },
          { title: 'Customer-side delivery', value: 'customer-side-delivery' },
          { title: 'Network support', value: 'network-support' },
          { title: 'Data / technology', value: 'data-technology' },
          { title: 'Other', value: 'other' }
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'region',
      title: 'Region or location (optional)',
      type: 'string',
      group: 'extras'
    }),
    defineField({
      name: 'dateCompleted',
      title: 'Date completed (optional)',
      type: 'date',
      group: 'extras'
    }),
    defineField({
      name: 'gallery',
      title: 'Additional images (optional)',
      description: 'Any extra images that don’t belong to a specific section above.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'extras'
    }),

    defineField({
      name: 'rewrittenCopy',
      title: 'Rewritten copy',
      type: 'text',
      rows: 16,
      group: 'rewrite',
      description:
        'The brand-aligned rewrite that will be uploaded to WordPress. Write or paste the full case study here as flowing prose. The raw submission stays in the other tabs for reference.'
    }),

    defineField({
      name: 'submittedByName',
      title: 'Submitted by — name',
      type: 'string',
      group: 'meta'
    }),
    defineField({
      name: 'submittedByEmail',
      title: 'Submitted by — email',
      type: 'string',
      group: 'meta'
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted at',
      type: 'datetime',
      group: 'meta'
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          { title: 'Submitted', value: 'submitted' },
          { title: 'Rewriting', value: 'rewriting' },
          { title: 'In WordPress draft', value: 'in-wordpress' },
          { title: 'Live on website', value: 'live' }
        ],
        layout: 'radio'
      },
      initialValue: 'submitted'
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      group: 'meta',
      description: 'Link to the published case study on the Aqualogic website. Fill in once status is set to Live.'
    })
  ],
  preview: {
    select: { title: 'title', client: 'client', status: 'status', media: 'heroImage' },
    prepare({ title, client, status, media }) {
      return {
        title: title ?? 'Untitled case study',
        subtitle: `${client ?? '—'} • ${status ?? 'submitted'}`,
        media
      };
    }
  }
});
