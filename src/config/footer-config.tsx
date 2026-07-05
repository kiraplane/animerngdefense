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
          title: t('wiki.items.secrets'),
          href: Routes.Secrets,
          external: false,
        },
        {
          title: t('wiki.items.rebirths'),
          href: Routes.Rebirths,
          external: false,
        },
        {
          title: t('wiki.items.items'),
          href: Routes.Items,
          external: false,
        },
        {
          title: t('wiki.items.badges'),
          href: Routes.Badges,
          external: false,
        },
        {
          title: t('wiki.items.codes'),
          href: Routes.Codes,
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
          title: t('guides.items.gems'),
          href: Routes.GemsGuide,
          external: false,
        },
        {
          title: t('guides.items.trophies'),
          href: Routes.TrophiesGuide,
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
