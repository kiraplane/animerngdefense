import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { CodeCopyButton } from '@/components/icetycoon2/code-copy-button';
import { FaqSection } from '@/components/icetycoon2/faq-section';
import { LastUpdated } from '@/components/icetycoon2/last-updated';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  activeCodes,
  codeCheckSummary,
  expiredCodes,
  watchCodes,
} from '@/data/icetycoon2/codes';
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
    title: 'Ice Tycoon 2 Codes - Active Status and Watchlist',
    description:
      'Ice Tycoon 2 codes status for Roblox: no verified active sequel codes, REBIRTH and 10KLIKES watch notes, redeem safety, and original Ice Tycoon confusion.',
    locale,
    pathname: '/codes',
    image: '/icetycoon2/og-image.png',
  });
}

export default function CodesPage() {
  const faqs = [
    {
      question: 'Are there active Ice Tycoon 2 codes?',
      answer:
        'No active codes are verified specifically for Ice Tycoon 2 as of the current check.',
    },
    {
      question: 'Why are REBIRTH and 10KLIKES on watch?',
      answer:
        'They circulate around Ice Tycoon search results, but current evidence does not prove they are active sequel-specific codes.',
    },
    {
      question: 'Where should future codes be redeemed?',
      answer:
        'Redeem future codes only inside the official Ice Tycoon 2 Roblox experience.',
    },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-[#07111F] py-12 text-[#F4FBFF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#8BE9FD] text-[#07111F]">Roblox Codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Ice Tycoon 2 Codes
          </h1>
          <p className="text-[#B8CEDB] text-lg leading-8">
            {codeCheckSummary.status} This page separates sequel-specific
            evidence from original Ice Tycoon code lists so players do not waste
            time on copied strings.
          </p>
          <LastUpdated date={codeCheckSummary.checkedAt} />
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#263B4D] bg-[#0D1A2B] py-4"
          label
        />

        <section className="rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-6">
          <h2 className="font-display text-2xl font-bold">
            Current active codes
          </h2>
          <p className="mt-3 max-w-3xl text-[#B8CEDB] text-sm leading-7">
            Active verified Ice Tycoon 2 codes: {activeCodes.length}. When a
            sequel-specific code is confirmed through the official game, Slized
            Games, or reliable in-game testing, it belongs here.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#8BE9FD] text-[#07111F] hover:bg-[#B7F5FF]"
            >
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Roblox
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/codes-status-guide">
                Codes Guide
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/original-vs-ice-tycoon-2-codes-guide">
                Wrong-Game Safety
              </LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#263B4D] bg-[#0D1A2B] shadow-sm">
          <div className="border-[#263B4D] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              Watchlist codes ({watchCodes.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[840px] text-left text-sm">
              <thead className="bg-[#07111F] text-[#8BE9FD]">
                <tr>
                  <th className="px-5 py-3">Code</th>
                  <th className="px-5 py-3">Reported reward</th>
                  <th className="px-5 py-3">Confidence</th>
                  <th className="px-5 py-3">Notes</th>
                  <th className="px-5 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {watchCodes.map((item) => (
                  <tr key={item.code} className="border-[#263B4D] border-t">
                    <td className="px-5 py-4 font-mono font-bold">
                      {item.code}
                    </td>
                    <td className="px-5 py-4 text-[#B8CEDB]">{item.reward}</td>
                    <td className="px-5 py-4 text-[#B8CEDB]">
                      {item.confidence}
                    </td>
                    <td className="px-5 py-4 text-[#B8CEDB]">{item.notes}</td>
                    <td className="px-5 py-4">
                      <CodeCopyButton code={item.code} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-6">
            <h2 className="font-display text-2xl font-bold">Expired codes</h2>
            <p className="mt-3 text-[#B8CEDB] text-sm leading-7">
              {expiredCodes.length === 0
                ? 'No expired Ice Tycoon 2 sequel-specific codes are listed yet.'
                : `${expiredCodes.length} expired codes are tracked.`}
            </p>
          </div>
          <div className="rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-6">
            <h2 className="font-display text-2xl font-bold">Sources checked</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {codeCheckSummary.sourcesChecked.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[#263B4D] bg-[#07111F] px-3 py-2 font-medium text-[#B8CEDB] text-sm transition hover:border-[#8BE9FD] hover:text-[#8BE9FD]"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
