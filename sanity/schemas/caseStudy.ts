import { defineField, defineType } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case study',
  type: 'document',
  groups: [
    { name: 'core', title: 'Core' },
    { name: 'story', title: 'Story' },
    { name: 'media', title: 'Media' },
    { name: 'meta', title: 'Submission metadata' }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'core',
      validation: (r) => r.required().min(5).max(140)
    }),
    defineField({
      name: 'client',
      title: 'Client (water company)',
      type: 'string',
      group: 'core',
      validation: (r) => r.required()
    }),
    defineField({
      name: 'serviceCategory',
      title: 'Service category',
      type: 'string',
      group: 'core',
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
      },
      validation: (r) => r.required()
    }),
    defineField({
      name: 'region',
      title: 'Region or location',
      type: 'string',
      group: 'core'
    }),
    defineField({
      name: 'dateCompleted',
      title: 'Date completed',
      type: 'date',
      group: 'core'
    }),

    defineField({ name: 'challenge', title: 'Challenge', type: 'text', rows: 5, group: 'story' }),
    defineField({ name: 'approach', title: 'Approach', type: 'text', rows: 5, group: 'story' }),
    defineField({ name: 'solution', title: 'Solution', type: 'text', rows: 5, group: 'story' }),
    defineField({
      name: 'results',
      title: 'Results (include metrics where possible)',
      type: 'text',
      rows: 5,
      group: 'story'
    }),
    defineField({
      name: 'quote',
      title: 'Quote / testimonial',
      type: 'text',
      rows: 3,
      group: 'story'
    }),
    defineField({
      name: 'quoteAttribution',
      title: 'Quote attribution',
      type: 'string',
      group: 'story'
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: { hotspot: true },
      group: 'media'
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
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
          { title: 'Pending review', value: 'pending-review' },
          { title: 'Approved', value: 'approved' },
          { title: 'Published', value: 'published' }
        ],
        layout: 'radio'
      },
      initialValue: 'pending-review'
    })
  ],
  preview: {
    select: { title: 'title', client: 'client', status: 'status', media: 'heroImage' },
    prepare({ title, client, status, media }) {
      return {
        title: title ?? 'Untitled case study',
        subtitle: `${client ?? '—'} • ${status ?? 'pending-review'}`,
        media
      };
    }
  }
});
