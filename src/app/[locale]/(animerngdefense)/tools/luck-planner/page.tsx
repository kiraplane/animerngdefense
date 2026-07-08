import { LuckPlannerTool } from '@/components/animerngdefense/tools/luck-planner-tool';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  databaseUpdatedAt,
  rewardItems,
} from '@/data/animerngdefense/database';
import { officialGameFacts } from '@/data/animerngdefense/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime RNG Defense Luck Planner - Codes, Boxes and Traits',
    description:
      'Plan Anime RNG Defense luck spending with Crystals, boxes, Cursed Fingers, luck boosts, traits, and focused reroll sessions.',
    locale,
    pathname: '/tools/luck-planner',
    image: '/animerngdefense/og-image.png',
  });
}

export default function LuckPlannerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Anime RNG Defense Luck Spend Planner',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    url: `${officialGameFacts.domain}/tools/luck-planner`,
  };

  return (
    <div className="bg-[#09060F] py-12 text-white">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#FFB703] text-[#241007]">Luck Planner</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime RNG Defense Luck Spend Planner
          </h1>
          <p className="text-[#E6D7EC] text-lg leading-8">
            Choose a reward or upgrade target and plan when to spend crystals,
            boxes, boosts, and trait resources.
          </p>
          <p className="text-[#B99BC3] text-sm">
            {rewardItems.length} reward entries · checked {databaseUpdatedAt}
          </p>
        </header>

        <LuckPlannerTool />

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#FFB703] text-[#241007] hover:bg-[#FFD166]"
          >
            <LocaleLink href="/database/rewards">
              Rewards database
              <ArrowRight className="size-4" />
            </LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/tools">All tools</LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
