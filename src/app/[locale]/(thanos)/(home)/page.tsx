import { ThanosHomePage } from '@/components/thanos/home-page';
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
    title: 'Thanos Simulator Wiki - Infinity Stones, Weapons and Guide',
    description:
      'Thanos Simulator Wiki covers all Infinity Stones, controls, weapons, bosses, Update 3.2, codes safety, and the official Roblox page.',
    locale,
    pathname: '',
    image: '/thanos/og-image.png',
  });
}

export default function HomePage() {
  return <ThanosHomePage />;
}
