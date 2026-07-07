import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqSection } from '@/components/thanos/faq-section';
import { LastUpdated } from '@/components/thanos/last-updated';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  activeCodes,
  codeCheckSummary,
  expiredCodes,
  watchCodes,
} from '@/data/thanos/codes';
import { officialGameFacts } from '@/data/thanos/sources';
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
    title: 'Thanos Simulator Codes - Active Status and Safe Watchlist',
    description:
      'Check Thanos Simulator codes safely: no verified active redeem codes, watch search terms, official Roblox checks, and no script or executor shortcuts.',
    locale,
    pathname: '/codes',
    image: '/thanos/og-image.png',
  });
}

export default function CodesPage() {
  const faqs = [
    {
      question: 'Are there active Thanos Simulator codes?',
      answer:
        'No active redeem codes are verified for Thanos Simulator as of the July 7, 2026 check.',
    },
    {
      question: 'Why are watch terms listed if they are not codes?',
      answer:
        'Players search those phrases, but current official and community checks do not prove they are redeemable codes.',
    },
    {
      question: 'Does this page include Thanos Simulator scripts?',
      answer:
        'No. This wiki does not provide executors, auto farm scripts, modified clients, or account-risk shortcuts.',
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
    <div className="bg-[#080611] py-12 text-[#F8F1FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F6C453] text-[#120C05]">Roblox Codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Thanos Simulator Codes
          </h1>
          <p className="text-[#C6BCD8] text-lg leading-8">
            {codeCheckSummary.status} This page separates real code evidence
            from search terms, low-confidence code pages, and unsafe script
            shortcuts.
          </p>
          <LastUpdated date={codeCheckSummary.checkedAt} />
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2D4E] bg-[#151024] py-4"
          label
        />

        <section className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-6">
          <h2 className="font-display text-2xl font-bold">
            Current active codes
          </h2>
          <p className="mt-3 max-w-3xl text-[#C6BCD8] text-sm leading-7">
            Active verified Thanos Simulator codes: {activeCodes.length}. A
            future code belongs here only after it is tied to this exact Roblox
            experience, visible in a real in-game flow, or confirmed by a
            reliable current source.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#F6C453] text-[#120C05] hover:bg-[#FFE08A]"
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
              <LocaleLink href="/guides/codes-and-scripts-safety-guide">
                Safety Guide
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/updates">Update Checks</LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#3A2D4E] bg-[#151024] shadow-sm">
          <div className="border-[#3A2D4E] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              Watch terms ({watchCodes.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[840px] text-left text-sm">
              <thead className="bg-[#080611] text-[#F6C453]">
                <tr>
                  <th className="px-5 py-3">Search term</th>
                  <th className="px-5 py-3">Why it appears</th>
                  <th className="px-5 py-3">Confidence</th>
                  <th className="px-5 py-3">Player-safe note</th>
                </tr>
              </thead>
              <tbody>
                {watchCodes.map((item) => (
                  <tr key={item.code} className="border-[#3A2D4E] border-t">
                    <td className="px-5 py-4 font-semibold">{item.code}</td>
                    <td className="px-5 py-4 text-[#C6BCD8]">{item.reward}</td>
                    <td className="px-5 py-4 text-[#C6BCD8]">
                      {item.confidence}
                    </td>
                    <td className="px-5 py-4 text-[#C6BCD8]">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-6">
            <h2 className="font-display text-2xl font-bold">Expired codes</h2>
            <p className="mt-3 text-[#C6BCD8] text-sm leading-7">
              {expiredCodes.length === 0
                ? 'No expired Thanos Simulator codes are listed yet because no active verified code list has been established.'
                : `${expiredCodes.length} expired codes are tracked.`}
            </p>
          </div>
          <div className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-6">
            <h2 className="font-display text-2xl font-bold">Sources checked</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {codeCheckSummary.sourcesChecked.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[#3A2D4E] bg-[#080611] px-3 py-2 font-medium text-[#C6BCD8] text-sm transition hover:border-[#F6C453] hover:text-[#F6C453]"
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
