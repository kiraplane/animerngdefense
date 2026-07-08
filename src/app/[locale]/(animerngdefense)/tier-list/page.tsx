import { FaqSection } from '@/components/animerngdefense/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { units } from '@/data/animerngdefense/database';
import { officialGameFacts } from '@/data/animerngdefense/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime RNG Defense Tier List - Best Unit Roles and Team Value',
    description:
      'Use the Anime RNG Defense tier list framework to rank unit roles, wave clear, single-target DPS, support value, JJK units, and team fit.',
    locale,
    pathname: '/tier-list',
    image: '/animerngdefense/og-image.png',
  });
}

const tierRows = [
  {
    tier: 'S',
    label: 'Map-solving carries',
    body: 'Units that clear the wave or enemy type currently stopping your map progress.',
  },
  {
    tier: 'A',
    label: 'Strong role fillers',
    body: 'Units that perform well after placement, upgrades, or a matching support piece.',
  },
  {
    tier: 'B',
    label: 'Early progression units',
    body: 'Useful starters and fillers that should not consume your rarest resources forever.',
  },
  {
    tier: 'Watch',
    label: 'New update units',
    body: 'JJK or update-linked units that need more current testing before permanent ranking.',
  },
];

export default function TierListPage() {
  const faqs = [
    {
      question: 'Why does this tier list rank roles instead of every unit?',
      answer:
        'Current public unit data is thin, so a role-first framework is more accurate than inventing exact rankings.',
    },
    {
      question: 'What is S-tier in Anime RNG Defense?',
      answer:
        'A unit is S-tier for your account when it solves the wave or enemy type that currently blocks map progress.',
    },
    {
      question: 'When should I reroll for tier-list units?',
      answer:
        'Reroll when you can name the role you are missing, such as wave clear, single-target damage, support, or update utility.',
    },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Anime RNG Defense tier list framework',
    itemListElement: tierRows.map((row, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${row.tier} - ${row.label}`,
    })),
  };

  return (
    <div className="bg-[#09060F] py-12 text-white">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#FFB703] text-[#241007]">Tier List</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime RNG Defense Tier List
          </h1>
          <p className="text-[#E6D7EC] text-lg leading-8">
            Rank unit value by what the unit does for your maps: wave clear,
            durable-enemy damage, support utility, trait value, and update
            relevance. Exact unit-by-unit rankings should wait for stronger
            source data.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {tierRows.map((row) => (
            <article
              key={row.tier}
              className="rounded-lg border border-[#4A254F] bg-[#120915] p-5"
            >
              <Badge className="bg-[#6EE7B7] text-[#042013]">{row.tier}</Badge>
              <h2 className="mt-4 font-display text-xl font-bold">
                {row.label}
              </h2>
              <p className="mt-2 text-[#E6D7EC] text-sm leading-6">
                {row.body}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
          <h2 className="font-display text-2xl font-bold">
            Role entries to test first
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {units.map((unit) => (
              <article
                key={unit.id}
                className="rounded-md border border-[#4A254F] bg-[#09060F] p-4"
              >
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#4A254F] text-[#E6D7EC]"
                  >
                    {unit.stage}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#4A254F] text-[#E6D7EC]"
                  >
                    {unit.category}
                  </Badge>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-[#FFE7A8]">
                  {unit.name}
                </h3>
                <p className="mt-2 text-[#E6D7EC] text-sm leading-6">
                  {unit.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
          <h2 className="font-display text-2xl font-bold">
            How to use this safely
          </h2>
          <p className="mt-3 text-[#E6D7EC] leading-7">
            The official Roblox page confirms the game loop, but it does not
            publish a complete public unit stat table. Treat this tier list as a
            decision framework for {officialGameFacts.shortName}, then test
            units on the same map before spending Crystals, traits, or boosts.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#FFB703] text-[#241007] hover:bg-[#FFD166]"
            >
              <LocaleLink href="/guides/unit-tier-list-guide">
                Read Unit Guide
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/tools/roll-tracker">Track Roles</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/traits">Traits Hub</LocaleLink>
            </Button>
          </div>
        </section>

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
