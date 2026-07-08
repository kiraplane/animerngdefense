import { DatabaseTable } from '@/components/animerngdefense/database/database-table';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  databaseSourceNote,
  databaseUpdatedAt,
  mapRoutes,
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
    title: 'Anime RNG Defense Maps Database - Waves and Placement',
    description:
      'Filter Anime RNG Defense maps by starter maps, multi-lane pressure, harder wave walls, update maps, objectives, and route hints.',
    locale,
    pathname: '/database/maps',
    image: '/animerngdefense/og-image.png',
  });
}

export default function MapsDatabasePage() {
  const records = toDatabaseTableRecords(mapRoutes);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Anime RNG Defense Maps Database',
    itemListElement: records.map((record, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: record.name,
      url: `${officialGameFacts.domain}/database/maps#${record.id}`,
    })),
  };

  return (
    <div className="bg-[#09060F] py-12 text-white">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#FFB703] text-[#241007]">Maps Database</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime RNG Defense Maps Database
          </h1>
          <p className="text-[#E6D7EC] text-lg leading-8">
            Browse map and wave planning data for starter maps, multi-lane
            pressure, harder wave checks, and update-map watch notes.
          </p>
          <p className="text-[#B99BC3] text-sm">
            Checked {databaseUpdatedAt}. {databaseSourceNote}
          </p>
        </header>
        <DatabaseTable records={records} label="maps" />
      </Container>
    </div>
  );
}
