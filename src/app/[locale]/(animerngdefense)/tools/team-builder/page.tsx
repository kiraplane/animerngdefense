import { TeamBuilderTool } from '@/components/animerngdefense/tools/team-builder-tool';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { databaseUpdatedAt, teamChecks } from '@/data/animerngdefense/database';
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
    title: 'Anime RNG Defense Team Builder Checklist',
    description:
      'Pick an Anime RNG Defense team goal and check codes, units, placement, traits, JJK update rewards, and related guide routes.',
    locale,
    pathname: '/tools/team-builder',
    image: '/animerngdefense/og-image.png',
  });
}

export default function TeamBuilderPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Anime RNG Defense Team Builder Checklist',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    url: `${officialGameFacts.domain}/tools/team-builder`,
  };

  return (
    <div className="bg-[#09060F] py-12 text-white">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#FFB703] text-[#241007]">Team Checklist</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime RNG Defense Team Builder Checklist
          </h1>
          <p className="text-[#E6D7EC] text-lg leading-8">
            Pick a team goal and check the code, unit, placement, trait, and
            update steps before grinding more maps.
          </p>
          <p className="text-[#B99BC3] text-sm">
            {teamChecks.length} team entries · checked {databaseUpdatedAt}
          </p>
        </header>

        <TeamBuilderTool />

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#FFB703] text-[#241007] hover:bg-[#FFD166]"
          >
            <LocaleLink href="/database/teams">
              Teams database
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
