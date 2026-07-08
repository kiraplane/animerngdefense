import { RollTrackerTool } from '@/components/animerngdefense/tools/roll-tracker-tool';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { databaseUpdatedAt, units } from '@/data/animerngdefense/database';
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
    title: 'Anime RNG Defense Roll Tracker - Unit Roles and Reroll Focus',
    description:
      'Track Anime RNG Defense unit roles so you know when to stop rolling, improve teams, use luck boosts, and clear maps.',
    locale,
    pathname: '/tools/roll-tracker',
    image: '/animerngdefense/og-image.png',
  });
}

export default function RollTrackerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Anime RNG Defense Roll Progress Tracker',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    url: `${officialGameFacts.domain}/tools/roll-tracker`,
  };

  return (
    <div className="bg-[#09060F] py-12 text-white">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#FFB703] text-[#241007]">Roll Tracker</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime RNG Defense Roll Progress Tracker
          </h1>
          <p className="text-[#E6D7EC] text-lg leading-8">
            Check off unit roles your account has solved so every reroll has a
            clear target instead of becoming an endless resource sink.
          </p>
          <p className="text-[#B99BC3] text-sm">
            {units.length} unit-role entries · checked {databaseUpdatedAt}
          </p>
        </header>

        <RollTrackerTool />

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#FFB703] text-[#241007] hover:bg-[#FFD166]"
          >
            <LocaleLink href="/database/units">
              Units database
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
