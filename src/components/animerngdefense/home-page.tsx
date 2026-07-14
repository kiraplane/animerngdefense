import {
  AnimeRngDefenseMobileMenu,
  AnimeRngDefenseRouteSidebar,
} from '@/components/animerngdefense/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { activeCodes } from '@/data/animerngdefense/codes';
import {
  databaseHubCards,
  mapRoutes,
  rewardItems,
  teamChecks,
  toolCards,
  units,
} from '@/data/animerngdefense/database';
import { guides, siteDescription } from '@/data/animerngdefense/guides';
import { officialGameFacts } from '@/data/animerngdefense/sources';
import { topicPageList } from '@/data/animerngdefense/topics';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  Boxes,
  Code2,
  Database,
  Download,
  ExternalLink,
  Gamepad2,
  Layers3,
  ListChecks,
  Map,
  Play,
  RadioTower,
  ShieldAlert,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'Codes',
    body: 'Redeem RELEASE, UPDATE2, CURSEDHIGHSCHOOL, INNOVATIONCITY, and other source-checked rewards.',
    href: '/codes',
    icon: Code2,
  },
  {
    title: 'Units',
    body: 'Judge pulls by wave clear, single-target DPS, support value, and update role.',
    href: '/units',
    icon: Star,
  },
  {
    title: 'Tier List',
    body: 'Use role-first rankings without pretending exact unit data is complete.',
    href: '/tier-list',
    icon: Layers3,
  },
  {
    title: 'Traits',
    body: 'Spend Crystals and rerolls only after you know the carry is worth keeping.',
    href: '/traits',
    icon: Sparkles,
  },
  {
    title: 'Teams',
    body: 'Build around AoE, finisher damage, support, placement, and upgrade order.',
    href: '/teams',
    icon: Users,
  },
  {
    title: 'Maps',
    body: 'Read lanes, wave pressure, and leak points before rerolling blindly.',
    href: '/maps',
    icon: Map,
  },
  {
    title: 'Tools',
    body: 'Plan teams, reward spending, and roll progress with compact checklists.',
    href: '/tools',
    icon: ListChecks,
  },
  {
    title: 'Official Roblox',
    body: 'Open place ID 104693964860826 by Mera. and avoid wrong-game links.',
    href: '/download',
    icon: Download,
  },
];

const keywordLinks = [
  { keyword: 'anime rng defense', href: '/' },
  { keyword: 'anime rng defense wiki', href: '/' },
  { keyword: 'codes', href: '/codes' },
  { keyword: 'units', href: '/units' },
  { keyword: 'tier list', href: '/tier-list' },
  { keyword: 'traits', href: '/traits' },
  { keyword: 'best team', href: '/teams' },
  { keyword: 'maps', href: '/maps' },
  { keyword: 'luck boosts', href: '/guides/luck-boosts-guide' },
  { keyword: '7DS update', href: '/updates' },
  { keyword: 'AFK units', href: '/guides/afk-units-guide' },
  { keyword: 'official Roblox', href: '/download' },
];

const startSteps = [
  {
    title: 'Verify the game',
    href: '/download',
    body: 'Use the Mera. Roblox experience at place ID 104693964860826 before trusting code or Discord claims.',
  },
  {
    title: 'Redeem current codes',
    href: '/codes',
    body: 'Claim FairyForest, UPDATE3, Crystals, boxes, and potions before your first serious rolling session.',
  },
  {
    title: 'Pick a first carry',
    href: '/guides/unit-tier-list-guide',
    body: 'Keep the unit that actually clears waves instead of chasing rarity color alone.',
  },
  {
    title: 'Clear maps with a plan',
    href: '/guides/maps-waves-guide',
    body: 'Read lanes, upgrade the unit that changes the leak, then reroll only when a role is missing.',
  },
];

const latestUpdateItems = [
  {
    title: 'Roblox API snapshot',
    date: officialGameFacts.updatedAt.slice(0, 10),
    body: `${officialGameFacts.shortName} is verified at place ${officialGameFacts.robloxPlaceId}, universe ${officialGameFacts.robloxUniverseId}, by ${officialGameFacts.creatorName}.`,
  },
  {
    title: 'Update 3 / 7DS watch',
    date: '2026-07-14',
    body: 'The public title carries a 7DS tag; FairyForest is published in the official Roblox description and UPDATE3 is source-checked.',
  },
  {
    title: 'Codes cross-checked',
    date: '2026-07-14',
    body: `${activeCodes.length} active codes are tracked, with FairyForest visible on the Roblox page and the rest cross-checked across current code sources.`,
  },
];

const coreDataModules = [
  {
    title: 'Unit Role Data',
    count: units.length,
    body: 'Starter carry, AoE wave clear, single-target DPS, support, and Update 3 / 7DS watch roles.',
    href: '/database/units',
    toolHref: '/tools/roll-tracker',
    toolLabel: 'Track roles',
    guideHref: '/guides/unit-tier-list-guide',
    samples: ['Starter Defender', 'AoE Carry', 'Update 3 / 7DS Unit'],
    icon: Star,
  },
  {
    title: 'Reward Data',
    count: rewardItems.length,
    body: 'Crystals, boxes, Cursed Fingers, luck boosts, and trait investment decisions.',
    href: '/database/rewards',
    toolHref: '/tools/luck-planner',
    toolLabel: 'Plan spend',
    guideHref: '/guides/codes-redeem-guide',
    samples: ['Crystals', 'Cursed Fingers', 'Luck Boosts'],
    icon: Boxes,
  },
  {
    title: 'Team Checks',
    count: teamChecks.length,
    body: 'Starter code team, balanced wave team, trait-focused team, and Update 3 / 7DS checks.',
    href: '/database/teams',
    toolHref: '/tools/team-builder',
    toolLabel: 'Build team',
    guideHref: '/guides/team-building-guide',
    samples: ['Starter Code Team', 'Balanced Wave Team', 'Update 3 / 7DS Team'],
    icon: Users,
  },
  {
    title: 'Map and Wave Data',
    count: mapRoutes.length,
    body: 'Starter maps, multi-lane pressure, harder wave walls, and update-map watch notes.',
    href: '/database/maps',
    toolHref: '/maps',
    toolLabel: 'Open maps',
    guideHref: '/guides/maps-waves-guide',
    samples: ['Starter Maps', 'Multi-Lane Maps', 'Harder Waves'],
    icon: Map,
  },
];

export function AnimeRngDefenseHomePage() {
  const latestGuides = guides.slice(0, 6);
  const featuredVideo =
    guides.find((guide) => guide.slug === 'beginner-guide')?.video ??
    guides.find((guide) => guide.video)?.video;
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
        logo: `${officialGameFacts.domain}/animerngdefense/icon.png`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.shortName,
        alternateName: officialGameFacts.name,
        gamePlatform: ['Roblox', 'Desktop', 'Mobile', 'Tablet', 'Console'],
        applicationCategory: 'Game',
        genre: officialGameFacts.genre,
        url: officialGameFacts.officialRobloxUrl,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.creatorName,
        },
      },
      featuredVideo
        ? {
            '@type': 'VideoObject',
            name: featuredVideo.title,
            thumbnailUrl: featuredVideo.thumbnailUrl,
            embedUrl: `https://www.youtube.com/embed/${featuredVideo.id}`,
            uploadDate: featuredVideo.publishedAt,
          }
        : undefined,
    ].filter(Boolean),
  };

  return (
    <div className="bg-[#09060F] text-white">
      <JsonLd data={jsonLd} />

      <section className="border-[#4A254F] border-b">
        <Container className="px-4 py-8 lg:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.76fr)]">
            <div className="min-w-0">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#FFB703] text-[#241007]">
                  Roblox Tower Defense
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#F43F5E] bg-[#09060F]/80 text-[#FFE4EA]"
                >
                  RNG Units
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#6EE7B7] bg-[#09060F]/80 text-[#D7FFF0]"
                >
                  Update 3 / 7DS
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Anime RNG Defense Wiki
              </h1>
              <p className="mt-4 max-w-3xl text-[#F2D8EA] text-base leading-8 md:text-lg">
                Redeem codes, roll stronger units, plan traits and luck boosts,
                build teams for harder maps, and keep Anime RNG Defense facts
                tied to the official Roblox game.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto bg-[#FFB703] px-4 py-3 text-[#241007] hover:bg-[#FFD166]"
                >
                  <LocaleLink href="/codes">
                    Check Codes
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-[#6EE7B7] bg-transparent px-4 py-3 text-white hover:bg-[#6EE7B7] hover:text-[#042013]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    Start Guide
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-[#F43F5E] bg-transparent px-4 py-3 text-[#FFE4EA] hover:bg-[#F43F5E] hover:text-white"
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
              <div className="mt-5 flex flex-wrap gap-2">
                {keywordLinks.map((item) => (
                  <LocaleLink
                    key={item.keyword}
                    href={item.href}
                    className="rounded-md border border-[#4A254F] bg-[#120915] px-3 py-2 font-medium text-[#E6D7EC] text-sm transition hover:border-[#FFB703] hover:text-[#FFB703]"
                  >
                    {item.keyword}
                  </LocaleLink>
                ))}
              </div>
            </div>

            <div
              aria-label="Anime RNG Defense guide video"
              className="min-w-0 overflow-hidden rounded-lg border border-[#4A254F] bg-[#120915] shadow-2xl shadow-black/30"
            >
              {featuredVideo ? (
                <div className="bg-black">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                    title={featuredVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-video bg-black">
                  <Image
                    src="/animerngdefense/og-image.png"
                    alt="Anime RNG Defense cover"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="grid grid-cols-3 gap-3 border-[#4A254F] border-t p-4 text-center">
                <div className="rounded-md bg-[#25102B] p-3">
                  <p className="font-display text-2xl font-black text-[#FFB703]">
                    {activeCodes.length}
                  </p>
                  <p className="text-[#E6D7EC] text-xs">active codes</p>
                </div>
                <div className="rounded-md bg-[#25102B] p-3">
                  <p className="font-display text-2xl font-black text-[#6EE7B7]">
                    {officialGameFacts.maxPlayers}
                  </p>
                  <p className="text-[#E6D7EC] text-xs">players/server</p>
                </div>
                <div className="rounded-md bg-[#25102B] p-3">
                  <p className="font-display text-2xl font-black text-[#FF6B9A]">
                    7DS
                  </p>
                  <p className="text-[#E6D7EC] text-xs">update tag</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8 lg:py-10">
        <AnimeRngDefenseMobileMenu currentPath="/" />
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-10">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {primaryLinks.map((item) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className="group rounded-lg border border-[#4A254F] bg-[#120915] p-5 transition hover:border-[#FFB703] hover:bg-[#25102B]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex size-10 items-center justify-center rounded-md bg-[#FFB703] text-[#241007]">
                      <item.icon className="size-5" />
                    </span>
                    <ArrowRight className="size-5 text-[#6EE7B7] transition group-hover:translate-x-1" />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[#E6D7EC] text-sm leading-6">
                    {item.body}
                  </p>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
                <div className="flex items-center gap-3">
                  <Play className="size-5 text-[#FFB703]" />
                  <h2 className="font-display text-2xl font-bold">
                    Start Here
                  </h2>
                </div>
                <div className="mt-5 grid gap-3">
                  {startSteps.map((step, index) => (
                    <LocaleLink
                      key={step.href}
                      href={step.href}
                      className="flex min-w-0 gap-4 rounded-md border border-[#4A254F] bg-[#09060F] p-4 transition hover:border-[#FFB703]"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#25102B] font-display font-bold text-[#FFB703]">
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-white">
                          {step.title}
                        </span>
                        <span className="mt-1 block text-[#E6D7EC] text-sm leading-6">
                          {step.body}
                        </span>
                      </span>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
                <div className="flex items-center gap-3">
                  <RadioTower className="size-5 text-[#6EE7B7]" />
                  <h2 className="font-display text-2xl font-bold">
                    Latest Checks
                  </h2>
                </div>
                <div className="mt-5 grid gap-3">
                  {latestUpdateItems.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-md border border-[#4A254F] bg-[#09060F] p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="border-[#4A254F] text-[#E6D7EC]"
                        >
                          {item.date}
                        </Badge>
                      </div>
                      <p className="mt-2 text-[#E6D7EC] text-sm leading-6">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-3xl font-black">
                    Core Data
                  </h2>
                  <p className="mt-2 text-[#E6D7EC]">
                    Compact decision data for the parts players search first.
                  </p>
                </div>
                <Button asChild variant="outline">
                  <LocaleLink href="/database">
                    Open database
                    <Database className="size-4" />
                  </LocaleLink>
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {coreDataModules.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-lg border border-[#4A254F] bg-[#120915] p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex size-10 items-center justify-center rounded-md bg-[#25102B] text-[#FFB703]">
                        <item.icon className="size-5" />
                      </span>
                      <Badge className="bg-[#6EE7B7] text-[#042013]">
                        {item.count}
                      </Badge>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[#E6D7EC] text-sm leading-6">
                      {item.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.samples.map((sample) => (
                        <Badge
                          key={sample}
                          variant="outline"
                          className="border-[#4A254F] text-[#E6D7EC]"
                        >
                          {sample}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-2">
                      <LocaleLink
                        href={item.href}
                        className="text-[#FFB703] text-sm hover:underline"
                      >
                        Browse data
                      </LocaleLink>
                      <LocaleLink
                        href={item.toolHref}
                        className="text-[#6EE7B7] text-sm hover:underline"
                      >
                        {item.toolLabel}
                      </LocaleLink>
                      <LocaleLink
                        href={item.guideHref}
                        className="text-[#E6D7EC] text-sm hover:underline"
                      >
                        Read guide
                      </LocaleLink>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
              <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
                <h2 className="font-display text-3xl font-black">
                  Latest Guides
                </h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {latestGuides.map((guide) => (
                    <LocaleLink
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="group rounded-md border border-[#4A254F] bg-[#09060F] p-4 transition hover:border-[#FFB703]"
                    >
                      <Badge
                        variant="outline"
                        className="border-[#4A254F] text-[#E6D7EC]"
                      >
                        {guide.category}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold group-hover:text-[#FFB703]">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-[#E6D7EC] text-sm leading-6">
                        {guide.summary}
                      </p>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
                <h2 className="font-display text-3xl font-black">
                  Player Questions
                </h2>
                <div className="mt-5 grid gap-3">
                  {topicPageList.map((topic) => (
                    <LocaleLink
                      key={topic.route}
                      href={topic.route}
                      className="rounded-md border border-[#4A254F] bg-[#09060F] p-4 transition hover:border-[#FFB703]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold text-white">
                          {topic.label}
                        </h3>
                        <ArrowRight className="size-4 text-[#6EE7B7]" />
                      </div>
                      <p className="mt-2 line-clamp-2 text-[#E6D7EC] text-sm leading-6">
                        {topic.summary}
                      </p>
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              {toolCards.map((tool) => (
                <LocaleLink
                  key={tool.href}
                  href={tool.href}
                  className="rounded-lg border border-[#4A254F] bg-[#120915] p-5 transition hover:border-[#FFB703]"
                >
                  <ListChecks className="size-5 text-[#FFB703]" />
                  <h2 className="mt-3 font-display text-xl font-bold">
                    {tool.title}
                  </h2>
                  <p className="mt-2 text-[#E6D7EC] text-sm leading-6">
                    {tool.body}
                  </p>
                </LocaleLink>
              ))}
            </section>

            <section className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
              <div className="flex items-start gap-3">
                <ShieldAlert className="mt-1 size-5 shrink-0 text-[#FFB703]" />
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    Source Boundary
                  </h2>
                  <p className="mt-2 text-[#E6D7EC] leading-7">
                    Anime Defense RNG and Anime RNG TD are not the same game.
                    This site uses Anime RNG Defense place ID 104693964860826 as
                    the public-source anchor.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {databaseHubCards.map((card) => (
                      <LocaleLink
                        key={card.href}
                        href={card.href}
                        className="rounded-md border border-[#4A254F] bg-[#09060F] px-3 py-2 text-[#E6D7EC] text-sm hover:border-[#FFB703]"
                      >
                        {card.title}
                      </LocaleLink>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>

          <AnimeRngDefenseRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
