import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/icetycoon2/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guideCategoryIntro, guides } from '@/data/icetycoon2/guides';
import { officialGameFacts } from '@/data/icetycoon2/sources';
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
    title: 'Ice Tycoon 2 Guides - Gems, Secrets, Rebirths and Codes',
    description:
      'Read Ice Tycoon 2 guides for Roblox codes status, beginner routes, all gems, secrets, trophies, rebirths, items, badges, and upgrade planning.',
    locale,
    pathname: '/guides',
    image: '/icetycoon2/og-image.png',
  });
}

export default function GuidesPage() {
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ice Tycoon 2 Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${officialGameFacts.domain}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <div className="bg-[#07111F] py-12 text-[#F4FBFF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#8BE9FD] text-[#07111F]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Ice Tycoon 2 Guides
          </h1>
          <p className="text-[#B8CEDB] text-lg leading-8">
            Decision-first Roblox guides for codes status, the freeze-and-melt
            loop, gems, secrets, trophies, rebirths, items, badges, official
            links, and avoiding wrong-game advice.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#263B4D] bg-[#0D1A2B] py-4"
          label
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-5"
            >
              <h2 className="font-display text-xl font-bold">{category}</h2>
              <p className="mt-2 text-[#B8CEDB] text-sm leading-6">
                {guideCategoryIntro[category]}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#263B4D] bg-[#0D1A2B]"
            >
              <div className="relative aspect-video border-[#263B4D] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#FFB347] text-[#07111F]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#263B4D] text-[#B8CEDB]"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#263B4D] text-[#B8CEDB]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-[#B8CEDB] text-sm leading-6">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#8BE9FD] text-[#07111F] hover:bg-[#B7F5FF]"
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
              question: 'Which Ice Tycoon 2 guide should I read first?',
              answer:
                'Start with the beginner guide, then read money upgrades, codes status, all gems, secrets, trophies, and rebirth planning.',
            },
            {
              question: 'Why is there no tier list page?',
              answer:
                'Ice Tycoon 2 demand is about tycoon progress, secrets, gems, trophies, and rebirths. A tier list would be a fake fit for the current mechanics.',
            },
            {
              question: 'Are guide facts official?',
              answer:
                'Official facts come from Roblox and Roblox API data. Codes and strategies are cross-checked from current public sources and marked conservatively.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
