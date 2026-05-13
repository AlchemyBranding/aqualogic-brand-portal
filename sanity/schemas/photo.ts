import { defineField, defineType } from 'sanity';

export const photo = defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (r) => r.required()
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      options: {
        list: [
          { title: 'Aqualogic', value: 'aqualogic' },
          { title: 'Sustec', value: 'sustec' }
        ],
        layout: 'radio'
      },
      initialValue: 'aqualogic',
      validation: (r) => r.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Office', value: 'office' },
          { title: 'Team', value: 'team' },
          { title: 'Sites', value: 'sites' },
          { title: 'Equipment', value: 'equipment' },
          { title: 'Events', value: 'events' }
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required()
    }),
    defineField({ name: 'caption', title: 'Caption', type: 'text', rows: 2 }),
    defineField({ name: 'uploadedAt', title: 'Uploaded at', type: 'datetime' })
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' }
  }
});
