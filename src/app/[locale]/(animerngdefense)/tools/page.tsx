import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { databaseHubCards, toolCards } from '@/data/animerngdefense/database';
import { officialGameFacts } from '@/data/animerngdefense/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  ArrowRight,
  Database,
  ListChecks,
  Sparkles,
  Wrench,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title:
      'Anime RNG Defense Tools - Team Builder, Luck Planner and Roll Tracker',
    description:
      'Use Anime RNG Defense tools for team checks, luck spending, roll role tracking, rewards, units, maps, and source-safe wiki database pages.',
    locale,
    pathname: '/tools',
    image: '/animerngdefense/og-image.png',
  });
}

export default function ToolsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Anime RNG Defense Tools',
    itemListElement: toolCards.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: tool.title,
      url: `${officialGameFacts.domain}${tool.href}`,
    })),
  };

  return (
    <div className="bg-[#09060F] py-12 text-white">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#FFB703] text-[#241007]">Route Tools</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime RNG Defense Tools
          </h1>
          <p className="text-[#E6D7EC] text-lg leading-8">
            Lightweight helpers built from the same source-checked data:
            team-building checks, reward spending, and roll-role progress.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {toolCards.map((tool, index) => (
            <LocaleLink
              key={tool.href}
              href={tool.href}
              className="group rounded-lg border border-[#4A254F] bg-[#120915] p-5 transition hover:border-[#FFB703]"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#FFB703] text-[#241007]">
                  {index === 0 ? (
                    <ListChecks className="size-5" />
                  ) : index === 1 ? (
                    <Sparkles className="size-5" />
                  ) : (
                    <Database className="size-5" />
                  )}
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-xl font-bold text-[#FFE7A8]">
                    {tool.title}
                  </h2>
                  <p className="mt-2 text-[#E6D7EC] text-sm leading-6">
                    {tool.body}
                  </p>
                </div>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-[#6EE7B7] text-sm">
                Open tool
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </span>
            </LocaleLink>
          ))}
        </section>

        <section className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#6EE7B7] text-xs uppercase tracking-[0.18em]">
                Structured Wiki Data
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                Database pages behind the tools
              </h2>
            </div>
            <Button
              asChild
              className="bg-[#FFB703] text-[#241007] hover:bg-[#FFD166]"
            >
              <LocaleLink href="/database">
                Open database
                <ArrowRight className="size-4" />
              </LocaleLink>
            </Button>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {databaseHubCards.map((card) => (
              <LocaleLink
                key={card.href}
                href={card.href}
                className="rounded-lg border border-[#4A254F] bg-[#09060F] p-4 transition hover:border-[#FFB703]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display font-bold text-[#FFE7A8]">
                    {card.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="border-[#4A254F] text-[#E6D7EC]"
                  >
                    {card.count}
                  </Badge>
                </div>
                <p className="mt-3 text-[#E6D7EC] text-sm leading-6">
                  {card.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
