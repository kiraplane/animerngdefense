'use client';

import { Badge } from '@/components/ui/badge';
import { codeCheckSummary, watchCodes } from '@/data/icetycoon2/codes';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BadgeCheck,
  type BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  Copy,
  Download,
  Gem,
  ListChecks,
  RadioTower,
  Repeat2,
  ShieldQuestion,
  Snowflake,
  Sparkles,
  Trophy,
  Wrench,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';

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
      { href: '/guides/best-upgrades-money-guide', label: 'Money Upgrades' },
      { href: '/download', label: 'Official Roblox' },
    ],
  },
  {
    title: 'Secrets',
    icon: Gem,
    links: [
      { href: '/secrets', label: 'Secrets Hub' },
      { href: '/guides/all-gems-locations-guide', label: 'All Gems' },
      { href: '/guides/all-secrets-guide', label: 'All Secrets' },
      { href: '/items', label: 'Items' },
    ],
  },
  {
    title: 'Progression',
    icon: Repeat2,
    links: [
      { href: '/rebirths', label: 'Rebirths' },
      {
        href: '/guides/rebirth-requirements-guide',
        label: 'Rebirth Requirements',
      },
      { href: '/guides/all-trophies-guide', label: 'All Trophies' },
      {
        href: '/guides/items-and-water-capacity-guide',
        label: 'Water Capacity',
      },
    ],
  },
  {
    title: 'Completion',
    icon: Trophy,
    links: [
      { href: '/badges', label: 'Badges Hub' },
      { href: '/guides/badges-and-endings-guide', label: 'Badges and Endings' },
      { href: '/guides/all-trophies-guide', label: 'Trophies' },
      { href: '/guides/all-secrets-guide', label: 'Secret Finder' },
    ],
  },
  {
    title: 'Status',
    icon: RadioTower,
    links: [
      { href: '/codes', label: 'Codes Status' },
      { href: '/guides/codes-status-guide', label: 'Codes Guide' },
      {
        href: '/guides/original-vs-ice-tycoon-2-codes-guide',
        label: 'Wrong-Game Codes',
      },
      { href: '/updates', label: 'Updates' },
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
          ? 'border-[#8BE9FD] bg-[#8BE9FD] font-semibold text-[#07111F]'
          : 'border-[#263B4D] bg-[#07111F] text-[#B8CEDB] hover:border-[#8BE9FD] hover:bg-[#122237] hover:text-[#F4FBFF]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#07111F]' : 'text-[#FFB347]'
        )}
      />
    </LocaleLink>
  );
}

function SidebarCodeCopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label={`Copy ${code}`}
      className="rounded-sm p-1 text-[#B8CEDB] transition hover:bg-[#122237] hover:text-[#8BE9FD]"
      onClick={async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1200);
      }}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </button>
  );
}

function CodesSidebarCard() {
  return (
    <div className="rounded-lg border border-[#263B4D] bg-[#07111F] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display font-bold text-[#F4FBFF] text-lg">
          Codes Status
        </h2>
        <Badge className="bg-[#FFB347] text-[#07111F]">0 active</Badge>
      </div>
      <p className="text-[#B8CEDB] text-xs leading-5">
        {codeCheckSummary.status}
      </p>
      <div className="mt-4 space-y-3">
        {watchCodes.slice(0, 2).map((item) => (
          <div
            key={item.code}
            className="flex items-start justify-between gap-3"
          >
            <div className="min-w-0">
              <p className="break-all font-mono font-semibold text-[#F4FBFF] text-sm">
                {item.code}
              </p>
              <p className="mt-1 line-clamp-2 text-[#B8CEDB] text-xs leading-5">
                watch only
              </p>
            </div>
            <SidebarCodeCopyButton code={item.code} />
          </div>
        ))}
      </div>
      <LocaleLink
        href="/codes"
        className="mt-4 flex items-center justify-center gap-2 border-[#263B4D] border-t pt-3 font-medium text-[#D6E8F2] text-sm transition hover:text-[#8BE9FD]"
      >
        View codes status
        <ArrowRight className="size-4" />
      </LocaleLink>
    </div>
  );
}

export function IceTycoon2MobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mx-4 mb-6 rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-4 xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[#F4FBFF] [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <ListChecks className="size-4 text-[#8BE9FD]" />
          Wiki Menu
        </span>
        <ChevronDown className="size-4 text-[#FFB347]" />
      </summary>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {wikiNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 flex items-center gap-2 font-semibold text-[#FFB347] text-xs uppercase">
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

export function IceTycoon2RouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="hidden w-[264px] shrink-0 space-y-4 xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-4 overflow-y-auto pb-6">
        <div className="rounded-lg border border-[#263B4D] bg-[#0D1A2B] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#8BE9FD] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-[#F4FBFF] text-xl font-bold">
                Ice routes
              </h2>
            </div>
            <Snowflake className="size-5 shrink-0 text-[#FFB347]" />
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
                      ? 'border-[#8BE9FD]/70 bg-[#123846]/45'
                      : 'border-[#263B4D] bg-[#07111F]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-[#F4FBFF] text-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#FFB347]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#263B4D] bg-[#0D1A2B] px-1.5 py-0.5 text-[#B8CEDB] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#8BE9FD] transition group-open:rotate-180" />
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
        <div className="rounded-lg border border-[#263B4D] bg-[#07111F] p-4 text-[#B8CEDB] text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#F4FBFF]">
            <ShieldQuestion className="size-4 text-[#8BE9FD]" />
            Roblox reminder
          </div>
          Verify the place ID before trusting codes or location data. Ice
          Tycoon, Ice Tycoon 2, and unrelated Roblox pages can appear in mixed
          search results.
        </div>
      </div>
    </aside>
  );
}

export function IceTycoon2PageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#07111F]">
      <IceTycoon2MobileMenu currentPath={currentPath} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <IceTycoon2RouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}

export const navigationIcons = {
  codes: RadioTower,
  secrets: Sparkles,
  gems: Gem,
  rebirths: Repeat2,
  items: Wrench,
  badges: BadgeCheck,
  download: Download,
  safety: CircleHelp,
};
