import { defineField, defineType } from 'sanity';

export const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News article',
  type: 'document',
  groups: [
    { name: 'core', title: 'Core' },
    { name: 'body', title: 'Body (raw submission)' },
    { name: 'rewrite', title: 'Rewritten copy (brand-aligned)' },
    { name: 'media', title: 'Media' },
    { name: 'meta', title: 'Submission metadata' }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'core',
      validation: (r) => r.required().min(5).max(160)
    }),
    defineField({
      name: 'kind',
      title: 'Kind',
      type: 'string',
      group: 'core',
      options: {
        list: [
          { title: 'Internal article (we wrote it)', value: 'internal' },
          { title: 'External coverage (someone wrote about us)', value: 'external' }
        ],
        layout: 'radio'
      },
      initialValue: 'internal',
      validation: (r) => r.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'core',
      options: {
        list: [
          { title: 'Company news', value: 'company-news' },
          { title: 'Sector news / commentary', value: 'sector' },
          { title: 'Awards', value: 'awards' },
          { title: 'Partnerships', value: 'partnerships' },
          { title: 'Leadership update', value: 'leadership' },
          { title: 'Press release', value: 'press-release' },
          { title: 'Thought leadership', value: 'thought-leadership' },
          { title: 'Other', value: 'other' }
        ],
        layout: 'radio'
      },
      validation: (r) => r.required()
    }),
    defineField({
      name: 'source',
      title: 'Source / publication',
      type: 'string',
      group: 'core',
      description: 'Where this was (or will be) published. For external coverage, the name of the publication. For internal, the channel.'
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
      group: 'core',
      description: 'Link to the published article, if there is one.'
    }),
    defineField({
      name: 'publicationDate',
      title: 'Publication date',
      type: 'date',
      group: 'core'
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
      group: 'core',
      description: 'A short summary used on the library tile.',
      validation: (r) => r.max(400)
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 12,
      group: 'body',
      description: 'Full article copy. Leave empty for external coverage; link via Source URL instead.'
    }),
    defineField({
      name: 'rewrittenSummary',
      title: 'Rewritten summary',
      type: 'text',
      rows: 4,
      group: 'rewrite',
      description: 'The brand-aligned summary that will appear on the WordPress tile. Leave the original submission Summary as a reference.',
      validation: (r) => r.max(400)
    }),
    defineField({
      name: 'rewrittenBody',
      title: 'Rewritten body',
      type: 'text',
      rows: 16,
      group: 'rewrite',
      description: 'The brand-aligned full article that will be uploaded to WordPress. The original submission stays in the Body tab for reference.'
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: { hotspot: true },
      group: 'media'
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
      description: 'Link to the published article on the Aqualogic website. Fill in once status is set to Live.'
    })
  ],
  preview: {
    select: { title: 'title', source: 'source', status: 'status', media: 'heroImage' },
    prepare({ title, source, status, media }) {
      return {
        title: title ?? 'Untitled article',
        subtitle: `${source ?? '—'} • ${status ?? 'submitted'}`,
        media
      };
    }
  }
});
