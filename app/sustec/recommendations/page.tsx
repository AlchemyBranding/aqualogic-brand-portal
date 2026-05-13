import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { Recommendations } from '@/components/Recommendations';

export const metadata = { title: 'Recommendations — Sustec' };

const items = [
  {
    title: 'Define a written brand layer',
    detail:
      'The Sustec guideline doc is visual only. There is no brand story, voice, tone or messaging language. The architecture wording on /sustec/architecture is the only verbatim statement from the strategy doc. Recommend building a Sustec-specific written brand layer once the group has another operating company to balance against.'
  },
  {
    title: 'Logo: publish mono, reverse and single-colour variants',
    detail:
      'Lockup, mark and clearspace concepts are present but no formal mono, reverse or single-colour variants are published. Define these, with minimum-size rules.'
  },
  {
    title: 'Clearspace X-factor',
    detail:
      'Clearspace is described conceptually. Recommend defining the X-factor explicitly (e.g. the height of the lowercase ‘s’ from the wordmark) so designers and partners apply it consistently.'
  },
  {
    title: 'Colour: add RGB, CMYK, Pantone and accessibility',
    detail:
      'Hex values only. Add full colour systems for digital and print. Verify Sustec Blue and Sustec Green on Paper for WCAG 2.1 AA contrast.'
  },
  {
    title: 'Typography hierarchy',
    detail:
      'Manrope is named but heading scale, line-height, letter spacing and a secondary editorial typeface are not specified. Recommend defining a hierarchy table that mirrors Aqualogic, so the group reads as one system.'
  },
  {
    title: 'Photography style',
    detail:
      'No photography direction published. As the group brand sits behind operating businesses, recommend a Sustec photography section that is deliberately quieter and more architectural than the operating brand imagery it endorses.'
  },
  {
    title: 'Co-branding rules',
    detail:
      'No formal rules exist for how Sustec and Aqualogic appear together (e.g. operating brand + Sustec endorsement, joint headers in shared documents). Recommend a co-branding section with lockup rules, hierarchy rules and worked examples.'
  },
  {
    title: 'Acquisition onboarding playbook',
    detail:
      'Sustec is built to scale. Recommend a short onboarding playbook for new operating brands joining the portfolio: how the new brand inherits Sustec architecture, what stays distinct, what shared infrastructure looks like, and how the new business gets added to the portal.'
  }
];

export default function SustecRecommendations() {
  return (
    <BrandFrame brand="sustec">
      <PageHeader
        eyebrow="Sustec / Recommendations"
        title="Recommendations."
        lede="A structural read of where the existing Sustec guidelines are thin. None of these are invented rules. They are missing pieces in the guideline document that should be added before the next operating brand joins the group."
      />
      <Recommendations brand="Sustec" items={items} />
    </BrandFrame>
  );
}
