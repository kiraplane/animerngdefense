'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BadgeCheck,
  BookOpen,
  Download,
  Gem,
  RadioTower,
  Repeat2,
  Snowflake,
  Sparkles,
  Trophy,
  Wrench,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'All Guides',
          description:
            'Beginner, gems, secrets, trophies, rebirths, and codes.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner Guide',
          description:
            'First route for cash flow, upgrades, secrets, and reset planning.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Snowflake className="size-4" />,
        },
        {
          title: 'Money Upgrades',
          description: 'Fix bottlenecks before waiting for codes.',
          href: Routes.MoneyGuide,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
      ],
    },
    {
      title: t('secrets.title'),
      href: Routes.Secrets,
      external: false,
      icon: <Gem className="size-4" />,
      items: [
        {
          title: 'Secrets Hub',
          description:
            'Permanent boosts, hidden interactions, and route checks.',
          href: Routes.Secrets,
          external: false,
          icon: <Gem className="size-4" />,
        },
        {
          title: 'All Gems',
          description: 'Five hidden gems and the gem upgrader route.',
          href: Routes.GemsGuide,
          external: false,
          icon: <Gem className="size-4" />,
        },
        {
          title: 'All Secrets',
          description: 'Secret Finder progress and non-gem hidden triggers.',
          href: Routes.SecretsGuide,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
      ],
    },
    {
      title: t('rebirths.title'),
      href: Routes.Rebirths,
      external: false,
      icon: <Repeat2 className="size-4" />,
      items: [
        {
          title: 'Rebirths',
          description: 'Requirements, reset value, and permanent upgrades.',
          href: Routes.Rebirths,
          external: false,
          icon: <Repeat2 className="size-4" />,
        },
        {
          title: 'Trophies',
          description: 'Collect trophy requirements before reset attempts.',
          href: Routes.TrophiesGuide,
          external: false,
          icon: <Trophy className="size-4" />,
        },
        {
          title: 'Items',
          description: 'Water capacity, heat crystals, and Frozen Magma.',
          href: Routes.Items,
          external: false,
          icon: <Wrench className="size-4" />,
        },
      ],
    },
    {
      title: t('badges.title'),
      href: Routes.Badges,
      external: false,
      icon: <BadgeCheck className="size-4" />,
      items: [
        {
          title: 'Badges',
          description: 'Endings, Collector, Drought, and Secret Finder.',
          href: Routes.Badges,
          external: false,
          icon: <BadgeCheck className="size-4" />,
        },
        {
          title: 'Endings Guide',
          description:
            'Choose item and rebirth behavior for completion routes.',
          href: Routes.BadgesGuide,
          external: false,
          icon: <Trophy className="size-4" />,
        },
      ],
    },
    {
      title: t('codes.title'),
      href: Routes.Codes,
      external: false,
      icon: <RadioTower className="size-4" />,
      items: [
        {
          title: 'Codes Status',
          description:
            'No verified active sequel codes; watch old-game strings carefully.',
          href: Routes.Codes,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
        {
          title: 'Wrong-Game Safety',
          description:
            'Keep original Ice Tycoon and unrelated Roblox links separate.',
          href: Routes.WrongGameGuide,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
        {
          title: 'Official Roblox',
          description: 'Open the correct Slized Games place.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
  ];
}
