import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    title: 'Anime RNG Defense Wiki Disclaimer',
    description:
      'Anime RNG Defense Wiki disclaimer covering independent guide status, Roblox source handling, codes, scripts, updates, and safety boundaries.',
    locale,
    pathname: '/disclaimer',
    image: '/animerngdefense/og-image.png',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#080611] py-12 text-[#F8F1FF]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F6C453] text-[#120C05]">Disclaimer</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime RNG Defense Wiki Disclaimer
          </h1>
          <p className="text-[#C6BCD8] text-lg leading-8">
            Anime RNG Defense Wiki is an independent guide site for Roblox
            players. It is not created, endorsed, sponsored, or operated by
            Roblox, {officialGameFacts.creatorName}, or the official game
            creator.
          </p>
        </header>

        <section className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-6 text-[#C6BCD8] leading-8">
          <h2 className="font-display text-2xl font-bold text-[#F8F1FF]">
            Source handling
          </h2>
          <p className="mt-3">
            Official facts come from the Roblox game page and Roblox API
            snapshots. Route facts are cross-checked from public community wiki
            pages, current YouTube guide results, and manual review. Community
            details can change after updates, especially around new units,
            traits, maps, events, and reward requirements.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#F8F1FF]">
            Codes and updates
          </h2>
          <p className="mt-3">
            Anime RNG Defense can change without notice. Codes can appear,
            expire, or gain requirements after updates. This wiki does not list
            a code as active unless it is tied to this exact Roblox experience
            and backed by reliable current evidence.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#F8F1FF]">
            Safety boundary
          </h2>
          <p className="mt-3">
            This site does not provide scripts, executors, auto farm snippets,
            modified clients, APK mirrors, password forms, private-server abuse,
            or account-risk shortcuts. Unsafe search demand is answered with
            safety guidance and official gameplay routes.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#F6C453] text-[#120C05] hover:bg-[#FFE08A]"
          >
            <LocaleLink href="/guides/beginner-guide">Start Guide</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/download">Official Links</LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
