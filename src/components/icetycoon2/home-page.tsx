import {
  IceTycoon2MobileMenu,
  IceTycoon2RouteSidebar,
} from '@/components/icetycoon2/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guides, siteDescription } from '@/data/icetycoon2/guides';
import { officialGameFacts } from '@/data/icetycoon2/sources';
import { topicPageList } from '@/data/icetycoon2/topics';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Coins,
  Download,
  ExternalLink,
  Gem,
  Play,
  RadioTower,
  Repeat2,
  Snowflake,
  Sparkles,
  Trophy,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'Beginner Route',
    body: 'Build the freeze, mine, melt, and reinvest loop before chasing completion routes.',
    href: '/guides/beginner-guide',
    icon: Snowflake,
  },
  {
    title: 'Codes Status',
    body: 'No sequel-specific active codes are verified; original Ice Tycoon strings stay on watch.',
    href: '/codes',
    icon: RadioTower,
  },
  {
    title: 'All Gems',
    body: 'Route Frozen Magma, the mine rock, factory parkour, hotel key, and castle well.',
    href: '/guides/all-gems-locations-guide',
    icon: Gem,
  },
  {
    title: 'Secrets',
    body: 'Track permanent boosts, hidden interactions, and Secret Finder progress.',
    href: '/secrets',
    icon: Sparkles,
  },
  {
    title: 'Rebirths',
    body: 'Plan the reset, trophies, permanent multiplier, and rebirth upgrades.',
    href: '/rebirths',
    icon: Repeat2,
  },
  {
    title: 'Official Roblox',
    body: 'Open the verified Ice Tycoon 2 place by Slized Games.',
    href: '/download',
    icon: Download,
  },
];

const keywordLinks = [
  { keyword: 'ice tycoon 2 codes', href: '/codes' },
  { keyword: 'ice tycoon 2 Wiki', href: '/' },
  { keyword: 'ice tycoon 2 gems', href: '/guides/all-gems-locations-guide' },
  { keyword: 'ice tycoon 2 secrets', href: '/secrets' },
  { keyword: 'ice tycoon 2 trophies', href: '/guides/all-trophies-guide' },
  { keyword: 'ice tycoon 2 rebirth', href: '/rebirths' },
  { keyword: 'ice tycoon 2 badges', href: '/badges' },
  { keyword: 'ice tycoon 2 items', href: '/items' },
];

const startSteps = [
  {
    title: 'Stabilize cash flow',
    href: '/guides/best-upgrades-money-guide',
    body: 'Fix the visible bottleneck: water handling, machine output, sale value, or travel time.',
  },
  {
    title: 'Check codes honestly',
    href: '/codes',
    body: 'Treat REBIRTH and 10KLIKES as original-game watch strings until the sequel confirms them.',
  },
  {
    title: 'Route permanent value',
    href: '/guides/all-gems-locations-guide',
    body: 'Collect gems and secrets after your base can recover from travel.',
  },
  {
    title: 'Prepare rebirth',
    href: '/guides/rebirth-requirements-guide',
    body: 'Finish tycoon progress, trophies, and important secrets before committing to reset.',
  },
];

const latestUpdateItems = [
  {
    title: 'Roblox API snapshot',
    date: officialGameFacts.updatedAt.slice(0, 10),
    body: `${officialGameFacts.name} is verified at place ${officialGameFacts.robloxPlaceId}, universe ${officialGameFacts.robloxUniverseId}, by ${officialGameFacts.creatorName}.`,
  },
  {
    title: 'Codes watch is conservative',
    date: '2026-07-05',
    body: 'No active sequel-specific code is published as verified. Original Ice Tycoon codes are tracked as watch items only.',
  },
  {
    title: 'Wrong store URL filtered',
    date: '2026-07-05',
    body: 'The demand packet included an unrelated Roblox URL, so the wiki follows the verified Ice Tycoon 2 place and keeps wrong-game data out.',
  },
];

export function IceTycoon2HomePage() {
  const latestGuides = guides.slice(0, 6);
  const featuredVideo = guides.find((guide) => guide.video)?.video;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${officialGameFacts.domain}/#website`,
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'Organization',
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        logo: `${officialGameFacts.domain}/icetycoon2/icon.png`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        gamePlatform: ['Roblox'],
        applicationCategory: 'Game',
        genre: officialGameFacts.genre,
        url: officialGameFacts.officialRobloxUrl,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.creatorName,
        },
      },
    ],
  };

  return (
    <div className="bg-[#07111F] text-[#F4FBFF]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#263B4D] border-b">
        <Image
          src="/icetycoon2/hero.png"
          alt="Ice Tycoon 2 Roblox factory thumbnail"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.98)_0%,rgba(7,17,31,0.9)_42%,rgba(7,17,31,0.52)_72%,rgba(7,17,31,0.9)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#07111F] to-transparent" />

        <Container className="relative px-4 py-8 md:py-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#8BE9FD] text-[#07111F]">
                  Roblox Tycoon
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#FFB347] bg-[#07111F]/80 text-[#FFE7B8]"
                >
                  Secrets + Rebirths
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Ice Tycoon 2 Wiki
              </h1>
              <p className="max-w-2xl text-[#D6E8F2] text-lg leading-8 md:text-xl">
                Freeze water, melt ice for profit, upgrade your tycoon, find
                hidden gems and secrets, collect trophies, and plan rebirths
                without mixing in old Ice Tycoon code lists.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#8BE9FD] text-[#07111F] hover:bg-[#B7F5FF]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    Start Guide
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#9AE6B4] bg-[#07111F]/70 text-[#F4FBFF] hover:bg-[#9AE6B4] hover:text-[#07111F]"
                >
                  <LocaleLink href="/secrets">Secrets</LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#FFB347] bg-[#07111F]/70 text-[#FFE7B8] hover:bg-[#FFB347] hover:text-[#07111F]"
                >
                  <a
                    href={officialGameFacts.officialRobloxUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Roblox
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {keywordLinks.map((item) => (
                  <LocaleLink
                    key={item.keyword}
                    href={item.href}
                    className="rounded-md border border-[#263B4D] bg-[#07111F]/75 px-3 py-2 font-medium text-[#B8CEDB] text-sm transition hover:border-[#8BE9FD] hover:text-[#8BE9FD]"
                  >
                    {item.keyword.replace('ice tycoon 2 ', '')}
                  </LocaleLink>
                ))}
              </div>
            </div>

            <aside
              aria-label="Ice Tycoon 2 guide video"
              className="rounded-lg border border-[#263B4D] bg-[#07111F]/85 p-4 shadow-2xl"
            >
              {featuredVideo ? (
                <div className="overflow-hidden rounded-md border border-[#263B4D] bg-black">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                    title={featuredVideo.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <a
                    href={featuredVideo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 bg-[#0D1A2B] px-3 py-2 text-[#B8CEDB] text-xs transition hover:text-[#8BE9FD]"
                  >
                    <span className="inline-flex min-w-0 items-center gap-2">
                      <Play className="size-3 shrink-0 text-[#FFB347]" />
                      <span className="min-w-0 truncate">
                        Walkthrough reference
                      </span>
                    </span>
                    <ExternalLink className="size-3 shrink-0" />
                  </a>
                </div>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8">
        <IceTycoon2MobileMenu currentPath="/" />
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-10">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {primaryLinks.map((link) => (
                <LocaleLink
                  key={link.title}
                  href={link.href}
                  className="group rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-5 transition hover:border-[#8BE9FD]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#8BE9FD] text-[#07111F]">
                      <link.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-[#FFE7B8] text-xl font-bold">
                        {link.title}
                      </h2>
                      <p className="mt-2 text-[#B8CEDB] text-sm leading-6">
                        {link.body}
                      </p>
                    </div>
                  </div>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#8BE9FD] text-xs uppercase tracking-[0.18em]">
                      Latest Game Updates
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      Live wiki pulse
                    </h2>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-[#D6E8F2] hover:text-[#8BE9FD]"
                  >
                    <LocaleLink href="/updates">
                      All updates
                      <ArrowRight className="size-4" />
                    </LocaleLink>
                  </Button>
                </div>

                <div className="mt-6 space-y-5">
                  {latestUpdateItems.map((item) => (
                    <LocaleLink
                      key={item.title}
                      href="/updates"
                      className="group grid gap-3 rounded-md border border-transparent p-2 transition hover:border-[#263B4D] hover:bg-[#07111F]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-[#FFE7B8]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-[#B8CEDB] text-sm leading-6">
                            {item.body}
                          </p>
                        </div>
                        <time className="shrink-0 text-[#B8CEDB] text-xs">
                          {item.date}
                        </time>
                      </div>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#FFB347] text-xs uppercase tracking-[0.18em]">
                      Start Here
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      First run checklist
                    </h2>
                  </div>
                  <Coins className="size-8 text-[#FFB347]" />
                </div>
                <div className="mt-6 space-y-4">
                  {startSteps.map((step, index) => (
                    <LocaleLink
                      key={step.title}
                      href={step.href}
                      className="group flex gap-3 rounded-lg border border-transparent p-2 transition hover:border-[#263B4D] hover:bg-[#07111F]"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#9AE6B4] text-[#D6E8F2]">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-[#F4FBFF]">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[#B8CEDB] text-sm leading-6">
                          {step.body}
                        </p>
                      </div>
                      <ArrowRight className="ml-auto mt-2 size-4 shrink-0 text-[#8BE9FD] transition group-hover:translate-x-0.5" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#8BE9FD] text-xs uppercase tracking-[0.18em]">
                    Topic Hubs
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Core Ice Tycoon 2 routes
                  </h2>
                </div>
                <Button asChild variant="outline">
                  <LocaleLink href="/guides">All guides</LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {topicPageList.map((topic) => (
                  <LocaleLink
                    key={topic.route}
                    href={topic.route}
                    className="group rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-5 transition hover:border-[#FFB347]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-[#FFE7B8] text-xl font-bold">
                        {topic.label}
                      </h3>
                      <ArrowRight className="size-4 shrink-0 text-[#FFB347] transition group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-3 text-[#B8CEDB] text-sm leading-6">
                      {topic.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div>
                <p className="font-semibold text-[#8BE9FD] text-xs uppercase tracking-[0.18em]">
                  Latest Guides
                </p>
                <h2 className="mt-2 font-display text-3xl font-black">
                  Player decisions covered
                </h2>
              </div>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {latestGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-5 transition hover:border-[#8BE9FD]"
                  >
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#FFB347] text-[#07111F]">
                        {guide.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#263B4D] text-[#B8CEDB]"
                      >
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <h3 className="mt-4 font-display text-[#FFE7B8] text-2xl font-bold">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-[#B8CEDB] text-sm leading-6">
                      {guide.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>
          </main>

          <IceTycoon2RouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
