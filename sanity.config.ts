import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export default defineConfig({
  name: 'aqualogic-brand-portal',
  title: 'Aqualogic / Sustec — Studio',
  projectId,
  dataset,
  basePath: '/studio',
  form: {
    components: {
      portableText: {
        // Sanity 5 turned "smart typography" on by default: it rewrites -- as a
        // dash, straight quotes as curly and ... as an ellipsis, and stores the
        // result. Off for every rich-text field so text is saved exactly as
        // typed. (No rich-text fields yet; this covers any added later.)
        plugins: (props) =>
          props.renderDefault({
            ...props,
            plugins: {
              ...props.plugins,
              typography: { ...props.plugins.typography, enabled: false }
            }
          })
      }
    }
  },
  plugins: [structureTool()],
  schema: { types: schemaTypes }
});
