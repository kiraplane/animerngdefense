import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-07-05';

export const activeCodes: GameCode[] = [];

export const watchCodes: GameCode[] = [
  {
    code: 'REBIRTH',
    reward: 'Reported 2x cash boost on original Ice Tycoon code lists',
    status: 'watch',
    firstSeen: '2026-07-04',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel:
      'Original Ice Tycoon code trackers and Ice Tycoon 2 code-status pages',
    confidence: 'watch',
    notes:
      'This code circulates around Ice Tycoon search results, but current evidence ties it to the original Ice Tycoon more than Ice Tycoon 2. Try only in-game and do not treat it as confirmed sequel content.',
  },
  {
    code: '10KLIKES',
    reward: 'Reported 2x cash boost on original Ice Tycoon code lists',
    status: 'watch',
    firstSeen: '2026-07-04',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel:
      'Original Ice Tycoon code trackers and Ice Tycoon 2 code-status pages',
    confidence: 'watch',
    notes:
      'This is a cross-game watch item, not an active Ice Tycoon 2 code. It may fail, belong to the original game, or expire before a reliable sequel-specific source appears.',
  },
];

export const expiredCodes: GameCode[] = [];

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status:
    'No active Ice Tycoon 2 codes are verified for the sequel as of this check. Circulating franchise codes are kept on watch because the original Ice Tycoon and Ice Tycoon 2 share a developer.',
  sourcesChecked: [
    {
      label: 'Roblox game page',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Slized Games group',
      url: officialGameFacts.officialGroupUrl,
    },
    {
      label: 'Ice Tycoon original Roblox page',
      url: 'https://www.roblox.com/games/18606626051/Ice-Tycoon',
    },
    {
      label: 'Pocket Tactics original Ice Tycoon codes',
      url: 'https://www.pockettactics.com/ice-tycoon/codes',
    },
    {
      label: 'Earnaldo Ice Tycoon 2 codes status',
      url: 'https://earnaldo.com/blog/ice-tycoon-2-codes',
    },
  ],
};
