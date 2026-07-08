'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';

export function useFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: t('wiki.title'),
      items: [
        {
          title: t('wiki.items.codes'),
          href: Routes.Codes,
          external: false,
        },
        {
          title: t('wiki.items.units'),
          href: Routes.Units,
          external: false,
        },
        {
          title: t('wiki.items.traits'),
          href: Routes.Traits,
          external: false,
        },
        {
          title: t('wiki.items.teams'),
          href: Routes.Teams,
          external: false,
        },
        {
          title: t('wiki.items.maps'),
          href: Routes.Maps,
          external: false,
        },
      ],
    },
    {
      title: t('guides.title'),
      items: [
        {
          title: t('guides.items.all'),
          href: Routes.Guides,
          external: false,
        },
        {
          title: t('guides.items.beginner'),
          href: Routes.BeginnerGuide,
          external: false,
        },
        {
          title: t('guides.items.codes'),
          href: Routes.CodesRedeemGuide,
          external: false,
        },
        {
          title: t('guides.items.tierList'),
          href: Routes.UnitTierListGuide,
          external: false,
        },
      ],
    },
    {
      title: 'Tools',
      items: [
        {
          title: 'Team Builder',
          href: Routes.TeamBuilder,
          external: false,
        },
        {
          title: 'Luck Planner',
          href: Routes.LuckPlanner,
          external: false,
        },
        {
          title: 'Roll Tracker',
          href: Routes.RollTracker,
          external: false,
        },
        {
          title: 'Wiki Database',
          href: Routes.Database,
          external: false,
        },
      ],
    },
    {
      title: t('legal.title'),
      items: [
        {
          title: t('legal.items.privacyPolicy'),
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('legal.items.termsOfService'),
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: t('legal.items.cookiePolicy'),
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: t('legal.items.disclaimer'),
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
  ];
}
