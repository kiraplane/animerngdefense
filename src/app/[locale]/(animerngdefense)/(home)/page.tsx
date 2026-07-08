import { AnimeRngDefenseHomePage } from '@/components/animerngdefense/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Anime RNG Defense Wiki - Codes, Units, Tier List and Guide',
    description:
      'Anime RNG Defense Wiki covers codes, units, tier lists, traits, maps, team building, JJK update notes, and official Roblox links.',
    locale,
    pathname: '',
    image: '/animerngdefense/og-image.png',
  });
}

export default function HomePage() {
  return <AnimeRngDefenseHomePage />;
}
