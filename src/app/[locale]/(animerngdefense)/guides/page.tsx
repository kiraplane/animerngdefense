import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animerngdefense/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guideCategoryIntro, guides } from '@/data/animerngdefense/guides';
import { officialGameFacts } from '@/data/animerngdefense/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime RNG Defense Guides - Codes, Units, Traits and Maps',
    description:
      'Read Anime RNG Defense guides for active codes, beginner routes, units, tier list, traits, teams, maps, luck boosts, JJK update notes, and safety.',
    locale,
    pathname: '/guides',
    image: '/animerngdefense/og-image.png',
  });
}

export default function GuidesPage() {
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Anime RNG Defense Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${officialGameFacts.domain}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <div className="bg-[#09060F] py-12 text-white">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#FFB703] text-[#241007]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime RNG Defense Guides
          </h1>
          <p className="text-[#E6D7EC] text-lg leading-8">
            Decision-first Roblox guides for codes, units, traits, best teams,
            maps, rolling, Update 3 rewards, AFK-safe setup, and wrong-game
            source confusion.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#4A254F] bg-[#120915] py-4"
          label
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-[#4A254F] bg-[#120915] p-5"
            >
              <h2 className="font-display text-xl font-bold">{category}</h2>
              <p className="mt-2 text-[#E6D7EC] text-sm leading-6">
                {guideCategoryIntro[category]}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#4A254F] bg-[#120915]"
            >
              <div className="relative aspect-video border-[#4A254F] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09060F]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#FFB703] text-[#241007]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#4A254F] text-[#E6D7EC]"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#4A254F] text-[#E6D7EC]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-[#E6D7EC] text-sm leading-6">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#FFB703] text-[#241007] hover:bg-[#FFD166]"
                >
                  <LocaleLink href={`/guides/${guide.slug}`}>
                    Read guide
                  </LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FaqSection
          items={[
            {
              question: 'Which Anime RNG Defense guide should I read first?',
              answer:
                'Start with the beginner guide, then read the codes redeem guide and unit tier-list guide before spending large amounts of luck or trait resources.',
            },
            {
              question: 'Why are exact unit rankings conservative?',
              answer:
                'Current public data supports role-based guidance more strongly than a complete extracted unit table, so the launch guide avoids fake exact rankings.',
            },
            {
              question: 'Are guide facts official?',
              answer:
                'Official facts come from Roblox and Roblox API data. Code and route advice is cross-checked from current public sources and marked conservatively.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
