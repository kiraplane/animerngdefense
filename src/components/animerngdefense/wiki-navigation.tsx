'use client';

import { Badge } from '@/components/ui/badge';
import {
  activeCodes,
  codeCheckSummary,
  watchCodes,
} from '@/data/animerngdefense/codes';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  type BookOpen,
  Boxes,
  ChevronDown,
  CircleHelp,
  Compass,
  Database,
  Download,
  Gamepad2,
  Layers3,
  ListChecks,
  Map,
  RadioTower,
  ShieldQuestion,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: WikiNavLink[];
  activePrefixes?: string[];
}

const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Home' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      { href: '/download', label: 'Official Roblox' },
      { href: '/discord', label: 'Discord Status' },
      { href: '/updates', label: 'Update 3 / 7DS' },
    ],
  },
  {
    title: 'Codes',
    icon: RadioTower,
    links: [
      { href: '/codes', label: 'Codes Status' },
      { href: '/guides/codes-redeem-guide', label: 'Redeem Guide' },
      { href: '/guides/jjk-update-guide', label: 'JJK Update Archive' },
    ],
  },
  {
    title: 'Units',
    icon: Star,
    links: [
      { href: '/units', label: 'Units Hub' },
      { href: '/tier-list', label: 'Tier List' },
      { href: '/guides/unit-tier-list-guide', label: 'Unit Role Guide' },
      { href: '/summons', label: 'Summons and Rolls' },
    ],
  },
  {
    title: 'Teams',
    icon: Users,
    links: [
      { href: '/teams', label: 'Best Teams' },
      { href: '/guides/team-building-guide', label: 'Team Building' },
      { href: '/traits', label: 'Traits Hub' },
      { href: '/guides/traits-reroll-guide', label: 'Traits Reroll' },
    ],
  },
  {
    title: 'Maps',
    icon: Map,
    links: [
      { href: '/maps', label: 'Maps and Waves' },
      { href: '/guides/maps-waves-guide', label: 'Map Clear Guide' },
      { href: '/guides/afk-units-guide', label: 'AFK Setup' },
    ],
  },
  {
    title: 'Tools',
    icon: ListChecks,
    links: [
      { href: '/tools', label: 'Tools Hub' },
      { href: '/tools/team-builder', label: 'Team Checklist' },
      { href: '/tools/luck-planner', label: 'Luck Planner' },
      { href: '/tools/roll-tracker', label: 'Roll Tracker' },
    ],
    activePrefixes: ['/tools'],
  },
  {
    title: 'Database',
    icon: Database,
    links: [
      { href: '/database', label: 'Database Hub' },
      { href: '/database/units', label: 'Units Data' },
      { href: '/database/rewards', label: 'Rewards Data' },
      { href: '/database/teams', label: 'Teams Data' },
      { href: '/database/maps', label: 'Maps Data' },
    ],
    activePrefixes: ['/database'],
  },
  {
    title: 'Safety',
    icon: ShieldQuestion,
    links: [
      { href: '/guides/name-confusion-guide', label: 'Wrong-Game Guide' },
      { href: '/guides/luck-boosts-guide', label: 'Luck Boosts' },
      { href: '/gems', label: 'Gems and Currency' },
      { href: '/guides', label: 'All Guides' },
    ],
    activePrefixes: ['/guides'],
  },
] as const;

function isCurrentPath(currentPath: string | undefined, href: string) {
  return Boolean(currentPath && currentPath === href);
}

function isGroupCurrentPath(
  currentPath: string | undefined,
  group: WikiNavGroup
) {
  if (!currentPath) {
    return false;
  }

  return (
    group.links.some((link) => isCurrentPath(currentPath, link.href)) ||
    Boolean(
      group.activePrefixes?.some(
        (prefix) =>
          currentPath === prefix || currentPath.startsWith(`${prefix}/`)
      )
    )
  );
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm leading-6 transition',
        isActive
          ? 'border-[#FFB703] bg-[#FFB703] font-semibold text-[#241007]'
          : 'border-[#4A254F] bg-[#120915] text-[#E6D7EC] hover:border-[#FFB703] hover:bg-[#2A1230] hover:text-white'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#241007]' : 'text-[#6EE7B7]'
        )}
      />
    </LocaleLink>
  );
}

function CodesSidebarCard() {
  return (
    <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display font-bold text-lg text-white">
          Codes Status
        </h2>
        <Badge className="bg-[#FFB703] text-[#241007]">
          {activeCodes.length} active
        </Badge>
      </div>
      <p className="text-[#E6D7EC] text-xs leading-5">
        {codeCheckSummary.status}
      </p>
      <div className="mt-4 space-y-3">
        {activeCodes.slice(0, 2).map((item) => (
          <div key={item.code} className="rounded-md bg-[#25102B] p-3">
            <p className="break-words font-semibold text-sm text-white">
              {item.code}
            </p>
            <p className="mt-1 line-clamp-2 text-[#E6D7EC] text-xs leading-5">
              {item.reward}
            </p>
          </div>
        ))}
        {watchCodes.slice(0, 1).map((item) => (
          <div key={item.code} className="rounded-md bg-[#25102B] p-3">
            <p className="break-words font-semibold text-[#FFB703] text-sm">
              {item.code}
            </p>
            <p className="mt-1 line-clamp-2 text-[#E6D7EC] text-xs leading-5">
              watch term, not imported
            </p>
          </div>
        ))}
      </div>
      <LocaleLink
        href="/codes"
        className="mt-4 flex items-center justify-center gap-2 border-[#4A254F] border-t pt-3 font-medium text-[#E6D7EC] text-sm transition hover:text-[#FFB703]"
      >
        View codes
        <ArrowRight className="size-4" />
      </LocaleLink>
    </div>
  );
}

export function AnimeRngDefenseMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mb-6 rounded-lg border border-[#4A254F] bg-[#25102B] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-white [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <ListChecks className="size-4 text-[#FFB703]" />
          Wiki Menu
        </span>
        <ChevronDown className="size-4 text-[#6EE7B7]" />
      </summary>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {wikiNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 flex items-center gap-2 font-semibold text-[#6EE7B7] text-xs uppercase">
              <group.icon className="size-4" />
              {group.title}
            </p>
            <div className="grid gap-2">
              {group.links.map((link) => (
                <WikiNavLinkItem
                  key={link.href}
                  currentPath={currentPath}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

export function AnimeRngDefenseRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside
      aria-label="Anime RNG Defense wiki navigation"
      className="sticky top-24 hidden w-[264px] shrink-0 self-start space-y-4 lg:block"
    >
      <div className="space-y-4">
        <div className="rounded-lg border border-[#4A254F] bg-[#25102B] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#6EE7B7] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-xl font-bold text-white">
                Route map
              </h2>
            </div>
            <Map className="size-5 shrink-0 text-[#FFB703]" />
          </div>

          <div className="mt-4 space-y-4">
            {wikiNavGroups.map((group) => {
              const isGroupActive = isGroupCurrentPath(currentPath, group);

              return (
                <details
                  key={group.title}
                  open={isGroupActive}
                  className={cn(
                    'group rounded-md border p-3',
                    isGroupActive
                      ? 'border-[#FFB703]/70 bg-[#472000]/45'
                      : 'border-[#4A254F] bg-[#120915]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-sm text-white [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#6EE7B7]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#4A254F] bg-[#25102B] px-1.5 py-0.5 text-[#E6D7EC] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#FFB703] transition group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 grid gap-2">
                    {group.links.map((link) => (
                      <WikiNavLinkItem
                        key={link.href}
                        currentPath={currentPath}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
        <CodesSidebarCard />
        <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-4 text-[#E6D7EC] text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold text-white">
            <ShieldQuestion className="size-4 text-[#FFB703]" />
            Roblox reminder
          </div>
          Verify place ID 104693964860826 before trusting codes, downloads,
          Discord links, or unit data. This site does not provide scripts or
          executors.
        </div>
      </div>
    </aside>
  );
}

export function AnimeRngDefensePageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#09060F] px-4">
      <div className="mx-auto max-w-7xl">
        <AnimeRngDefenseMobileMenu currentPath={currentPath} />
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <AnimeRngDefenseRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}

export const navigationIcons = {
  codes: RadioTower,
  units: Star,
  traits: Sparkles,
  teams: Users,
  maps: Map,
  summons: Gamepad2,
  tools: ListChecks,
  database: Database,
  download: Download,
  safety: CircleHelp,
  rewards: Boxes,
  tiers: Layers3,
};
