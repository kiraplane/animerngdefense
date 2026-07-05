import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/icetycoon2/sources';
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
    title: 'Ice Tycoon 2 Wiki Disclaimer',
    description:
      'Ice Tycoon 2 Wiki disclaimer covering independent guide status, Roblox source handling, codes, secrets, rebirths, and wrong-game safety.',
    locale,
    pathname: '/disclaimer',
    image: '/icetycoon2/og-image.png',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#07111F] py-12 text-[#F4FBFF]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#8BE9FD] text-[#07111F]">Disclaimer</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Ice Tycoon 2 Wiki Disclaimer
          </h1>
          <p className="text-[#B8CEDB] text-lg leading-8">
            Ice Tycoon 2 Wiki is an independent guide site for Roblox players.
            It is not created, endorsed, sponsored, or operated by Roblox,
            {` ${officialGameFacts.creatorName}`}, or the Ice Tycoon 2 developer
            team.
          </p>
        </header>

        <section className="rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-6 text-[#B8CEDB] leading-8">
          <h2 className="font-display text-2xl font-bold text-[#F4FBFF]">
            Source handling
          </h2>
          <p className="mt-3">
            Official facts come from the Roblox game page, the Slized Games
            Roblox community, and Roblox API snapshots. Secrets, gems, badges,
            items, and rebirth details are cross-checked from current community
            and video sources when available, but they can change after updates.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#F4FBFF]">
            Codes and game changes
          </h2>
          <p className="mt-3">
            Ice Tycoon 2 can change without notice. Codes can expire, UI labels
            can move, and community route notes can become outdated. The codes
            page does not list original Ice Tycoon strings as active
            sequel-specific codes unless they are verified for Ice Tycoon 2.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#F4FBFF]">
            Safety boundary
          </h2>
          <p className="mt-3">
            This site does not provide scripts, exploits, modified clients, APK
            mirrors, private-server instructions, or account-risk shortcuts. It
            also avoids importing Anime Card Farm or original Ice Tycoon facts
            into Ice Tycoon 2 pages unless sources clearly match this exact
            sequel.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#8BE9FD] text-[#07111F] hover:bg-[#B7F5FF]"
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
