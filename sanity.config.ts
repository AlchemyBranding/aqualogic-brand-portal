import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';
import {
  copyCaseStudyForRewriting,
  copyNewsArticleForRewriting
} from './sanity/actions/copyForRewriting';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export default defineConfig({
  name: 'aqualogic-brand-portal',
  title: 'Aqualogic / Sustec — Studio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  document: {
    actions: (prev, context) => {
      if (context.schemaType === 'caseStudy') return [...prev, copyCaseStudyForRewriting];
      if (context.schemaType === 'newsArticle') return [...prev, copyNewsArticleForRewriting];
      return prev;
    }
  }
});
