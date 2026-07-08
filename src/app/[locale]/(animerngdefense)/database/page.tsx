import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  databaseHubCards,
  databaseSourceNote,
  databaseUpdatedAt,
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
    title: 'Anime RNG Defense Database - Units, Rewards, Teams and Maps',
    description:
      'Browse Anime RNG Defense data for unit roles, code rewards, team checks, maps, wave pressure, prerequisites, and route hints.',
    locale,
    pathname: '/database',
    image: '/animerngdefense/og-image.png',
  });
}

export default function DatabasePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Anime RNG Defense Database',
    itemListElement: databaseHubCards.map((card, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: card.title,
      url: `${officialGameFacts.domain}${card.href}`,
    })),
  };

  return (
    <div className="bg-[#09060F] py-12 text-white">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#FFB703] text-[#241007]">Wiki Database</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime RNG Defense Database
          </h1>
          <p className="text-[#E6D7EC] text-lg leading-8">
            Structured, filterable decision data for units, rewards, teams, and
            maps. This launch database favors safe planning over unverified
            extracted stats.
          </p>
          <p className="text-[#B99BC3] text-sm">
            Checked {databaseUpdatedAt}. {databaseSourceNote}
          </p>
          <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-4 text-[#E6D7EC] text-sm leading-6">
            The rows below are intentionally role-based. Rewards such as
            Crystals, boxes, and Cursed Fingers come from current code sources;
            unit, team, and map rows are planning categories inferred from the
            official game loop until verifiable in-game tables are available.
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {databaseHubCards.map((card) => (
            <LocaleLink
              key={card.href}
              href={card.href}
              className="group rounded-lg border border-[#4A254F] bg-[#120915] p-6 transition hover:border-[#FFB703]"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-2xl font-bold text-[#FFE7A8]">
                  {card.title}
                </h2>
                <Badge
                  variant="outline"
                  className="border-[#4A254F] text-[#E6D7EC]"
                >
                  {card.count} entries
                </Badge>
              </div>
              <p className="mt-3 text-[#E6D7EC] leading-7">{card.body}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[#6EE7B7] text-sm">
                Browse table
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </span>
            </LocaleLink>
          ))}
        </section>
      </Container>
    </div>
  );
}
