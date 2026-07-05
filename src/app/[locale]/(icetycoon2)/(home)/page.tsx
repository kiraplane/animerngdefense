import { IceTycoon2HomePage } from '@/components/icetycoon2/home-page';
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
    title: 'Ice Tycoon 2 Wiki - Codes, Gems, Secrets and Roblox Guide',
    description:
      'Ice Tycoon 2 Wiki covers Roblox codes status, gems, secrets, trophies, rebirths, items, badges, upgrades, and safe official access.',
    locale,
    pathname: '',
    image: '/icetycoon2/og-image.png',
  });
}

export default function HomePage() {
  return <IceTycoon2HomePage />;
}
