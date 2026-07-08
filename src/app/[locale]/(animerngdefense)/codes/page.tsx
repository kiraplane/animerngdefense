import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animerngdefense/faq-section';
import { LastUpdated } from '@/components/animerngdefense/last-updated';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  activeCodes,
  codeCheckSummary,
  expiredCodes,
  watchCodes,
} from '@/data/animerngdefense/codes';
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
    title: 'Anime RNG Defense Codes - Active Rewards and Redeem Guide',
    description:
      'Check Anime RNG Defense codes for Crystals, Boxes, Cursed Fingers, UPDATE2, RELEASE, requirements, expired codes, and wrong-game warnings.',
    locale,
    pathname: '/codes',
    image: '/animerngdefense/og-image.png',
  });
}

export default function CodesPage() {
  const faqs = [
    {
      question: 'What Anime RNG Defense codes are active?',
      answer:
        'The July 8, 2026 check tracks RELEASE, UPDATE1, UPDATE2, CURSEDHIGHSCHOOL, INNOVATIONCITY, and TYFORSUPPORT1 as active or source-checked active codes.',
    },
    {
      question: 'Which code is visible on the official Roblox page?',
      answer:
        'The official Roblox description explicitly lists RELEASE during the July 8, 2026 check.',
    },
    {
      question: 'Why are Anime Defense RNG codes excluded?',
      answer:
        'Anime Defense RNG is a different Roblox game. Its code strings and Fandom data should not be imported into Anime RNG Defense.',
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
    <div className="bg-[#09060F] py-12 text-white">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#FFB703] text-[#241007]">Roblox Codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime RNG Defense Codes
          </h1>
          <p className="text-[#E6D7EC] text-lg leading-8">
            {codeCheckSummary.status} Official evidence and cross-checked code
            tracker evidence are separated so wrong-game code lists do not leak
            into this page.
          </p>
          <LastUpdated date={codeCheckSummary.checkedAt} />
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#4A254F] bg-[#120915] py-4"
          label
        />

        <section className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
          <h2 className="font-display text-2xl font-bold">
            Active codes ({activeCodes.length})
          </h2>
          <p className="mt-3 max-w-3xl text-[#E6D7EC] text-sm leading-7">
            Redeem codes before a major rolling session. Crystals and boxes help
            build your first roster, while Cursed Fingers are tracked as current
            JJK update rewards.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {activeCodes.map((code) => (
              <article
                key={code.code}
                className="rounded-md border border-[#4A254F] bg-[#09060F] p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <code className="rounded bg-[#25102B] px-2 py-1 font-bold text-[#FFB703]">
                    {code.code}
                  </code>
                  <Badge
                    variant="outline"
                    className="border-[#4A254F] text-[#6EE7B7]"
                  >
                    {code.confidence}
                  </Badge>
                </div>
                <p className="mt-3 text-white text-sm">{code.reward}</p>
                {code.requirement ? (
                  <p className="mt-2 text-[#FFB703] text-xs leading-5">
                    Requirement: {code.requirement}
                  </p>
                ) : null}
                <p className="mt-3 text-[#E6D7EC] text-xs leading-5">
                  {code.notes}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#FFB703] text-[#241007] hover:bg-[#FFD166]"
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
              <LocaleLink href="/guides/codes-redeem-guide">
                Redeem Guide
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/updates">Update Checks</LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#4A254F] bg-[#120915] shadow-sm">
          <div className="border-[#4A254F] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              Watch terms ({watchCodes.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[840px] text-left text-sm">
              <thead className="bg-[#09060F] text-[#FFB703]">
                <tr>
                  <th className="px-5 py-3">Search term</th>
                  <th className="px-5 py-3">Why it appears</th>
                  <th className="px-5 py-3">Confidence</th>
                  <th className="px-5 py-3">Player-safe note</th>
                </tr>
              </thead>
              <tbody>
                {watchCodes.map((item) => (
                  <tr key={item.code} className="border-[#4A254F] border-t">
                    <td className="px-5 py-4 font-semibold">{item.code}</td>
                    <td className="px-5 py-4 text-[#E6D7EC]">{item.reward}</td>
                    <td className="px-5 py-4 text-[#E6D7EC]">
                      {item.confidence}
                    </td>
                    <td className="px-5 py-4 text-[#E6D7EC]">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
            <h2 className="font-display text-2xl font-bold">Expired codes</h2>
            <div className="mt-4 grid gap-3">
              {expiredCodes.map((code) => (
                <div
                  key={code.code}
                  className="rounded-md border border-[#4A254F] bg-[#09060F] p-4"
                >
                  <code className="font-bold text-[#FFB703]">{code.code}</code>
                  <p className="mt-2 text-[#E6D7EC] text-sm">{code.notes}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
            <h2 className="font-display text-2xl font-bold">Sources checked</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {codeCheckSummary.sourcesChecked.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[#4A254F] bg-[#09060F] px-3 py-2 font-medium text-[#E6D7EC] text-sm transition hover:border-[#FFB703] hover:text-[#FFB703]"
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
