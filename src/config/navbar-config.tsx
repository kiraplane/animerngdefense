'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Code2,
  Database,
  Download,
  Gamepad2,
  Layers3,
  ListChecks,
  Map,
  RadioTower,
  ShieldAlert,
  Sparkles,
  Star,
  Users,
  Zap,
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
            'Codes, beginner routes, units, tier list, traits, teams, maps, and update notes.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner Guide',
          description:
            'Start with official access, codes, first rolls, maps, and a stable first team.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Zap className="size-4" />,
        },
        {
          title: 'Name Safety',
          description:
            'Separate Anime RNG Defense from Anime Defense RNG, Anime RNG TD, and old template data.',
          href: Routes.NameConfusionGuide,
          external: false,
          icon: <ShieldAlert className="size-4" />,
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
            'Active rewards, requirements, expired codes, and wrong-game warnings.',
          href: Routes.Codes,
          external: false,
          icon: <Code2 className="size-4" />,
        },
        {
          title: 'Redeem Guide',
          description: 'Use code rewards before a focused rolling session.',
          href: Routes.CodesRedeemGuide,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
        {
          title: 'JJK Update',
          description:
            'Track Cursed Fingers, JJK title tag, and current update checks.',
          href: Routes.JjkUpdateGuide,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
      ],
    },
    {
      title: t('units.title'),
      href: Routes.Units,
      external: false,
      icon: <Star className="size-4" />,
      items: [
        {
          title: 'Units Hub',
          description:
            'Plan starter carries, AoE roles, single-target damage, and update units.',
          href: Routes.Units,
          external: false,
          icon: <Star className="size-4" />,
        },
        {
          title: 'Tier List',
          description:
            'Role-first unit ranking framework without fake exact data.',
          href: Routes.TierList,
          external: false,
          icon: <Layers3 className="size-4" />,
        },
        {
          title: 'Summons',
          description: 'Roll with a target role, luck window, and stop rule.',
          href: Routes.Summons,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
      ],
    },
    {
      title: t('teams.title'),
      href: Routes.Teams,
      external: false,
      icon: <Users className="size-4" />,
      items: [
        {
          title: 'Best Teams',
          description:
            'Build around wave clear, finisher damage, support, and placement.',
          href: Routes.Teams,
          external: false,
          icon: <Users className="size-4" />,
        },
        {
          title: 'Traits',
          description:
            'Spend Crystals and rerolls only on units worth keeping.',
          href: Routes.Traits,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Maps',
          description: 'Read lanes and wave pressure before rerolling.',
          href: Routes.Maps,
          external: false,
          icon: <Map className="size-4" />,
        },
      ],
    },
    {
      title: 'Tools',
      href: Routes.Tools,
      external: false,
      icon: <ListChecks className="size-4" />,
      items: [
        {
          title: 'Team Builder',
          description: 'Checklist for team goals, codes, units, and placement.',
          href: Routes.TeamBuilder,
          external: false,
          icon: <ListChecks className="size-4" />,
        },
        {
          title: 'Luck Planner',
          description: 'Plan Crystals, boxes, boosts, and trait resources.',
          href: Routes.LuckPlanner,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Wiki Database',
          description: 'Filter units, rewards, teams, and maps.',
          href: Routes.Database,
          external: false,
          icon: <Database className="size-4" />,
        },
      ],
    },
    {
      title: 'Roblox',
      href: Routes.Download,
      external: false,
      icon: <Download className="size-4" />,
      items: [
        {
          title: 'Official Roblox',
          description: 'Open place ID 104693964860826 by Mera.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
        {
          title: 'Updates',
          description: 'Roblox API timestamp, JJK tag, and source checks.',
          href: Routes.Updates,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
  ];
}
