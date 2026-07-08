import { DatabaseTable } from '@/components/animerngdefense/database/database-table';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  databaseSourceNote,
  databaseUpdatedAt,
  rewardItems,
  toDatabaseTableRecords,
} from '@/data/animerngdefense/database';
import { officialGameFacts } from '@/data/animerngdefense/sources';
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
    title: 'Anime RNG Defense Rewards Database - Crystals, Boxes and Codes',
    description:
      'Filter Anime RNG Defense rewards including Crystals, Common Boxes, Rare Boxes, Epic Boxes, Cursed Fingers, luck boosts, and traits.',
    locale,
    pathname: '/database/rewards',
    image: '/animerngdefense/og-image.png',
  });
}

export default function RewardsDatabasePage() {
  const records = toDatabaseTableRecords(rewardItems);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Anime RNG Defense Rewards Database',
    itemListElement: records.map((record, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: record.name,
      url: `${officialGameFacts.domain}/database/rewards#${record.id}`,
    })),
  };

  return (
    <div className="bg-[#09060F] py-12 text-white">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#FFB703] text-[#241007]">
            Rewards Database
          </Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime RNG Defense Rewards Database
          </h1>
          <p className="text-[#E6D7EC] text-lg leading-8">
            Browse code rewards and spending decisions for Crystals, boxes,
            Cursed Fingers, luck boosts, and trait investment.
          </p>
          <p className="text-[#B99BC3] text-sm">
            Checked {databaseUpdatedAt}. {databaseSourceNote}
          </p>
        </header>
        <DatabaseTable records={records} label="rewards" />
      </Container>
    </div>
  );
}
