import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-07-11';

export const activeCodes: GameCode[] = [
  {
    code: 'THANKSFORPLAYING',
    reward: '150 Crystals and 10 Epic Boxes',
    status: 'active',
    firstSeen: '2026-07-09',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics and current YouTube code results',
    confidence: 'medium',
    notes:
      'Newest July 2026 source-checked code. Use it before a major summon session so the box rewards feed directly into roster depth.',
  },
  {
    code: 'SORRYFORSHUTDOWN2',
    reward: '200 Crystals and 5 Cursed Fingers',
    status: 'active',
    firstSeen: '2026-07-09',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics and current YouTube code results',
    confidence: 'medium',
    notes:
      'Fresh shutdown-compensation code reported in current July 2026 trackers. It was not visible in the public Roblox description during this pass, so this site treats it as source-checked, not game-tested.',
  },
  {
    code: 'RELEASE',
    reward: '250 Crystals and 5 Common Boxes',
    status: 'active',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Official Roblox page plus three code-site cross-checks',
    confidence: 'high',
    notes:
      'This is the only code explicitly visible in the official Roblox description during the July 8, 2026 check.',
  },
  {
    code: 'UPDATE1',
    reward: '250 Crystals',
    status: 'active',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Destructoid, Pro Game Guides, Roblox Den, Beebom',
    confidence: 'medium',
    notes:
      'Multiple current code trackers list this code, but it was not visible in the public Roblox description during the check.',
  },
  {
    code: 'UPDATE2',
    reward: '250 Crystals',
    status: 'active',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Destructoid, Pro Game Guides, Roblox Den, Beebom',
    confidence: 'medium',
    notes:
      'Cross-checked across current July 2026 code pages. Recheck after the next Roblox description or Discord code update.',
  },
  {
    code: 'CURSEDHIGHSCHOOL',
    reward: '200 Crystals and 3 Cursed Fingers',
    status: 'active',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Destructoid, Pro Game Guides, Roblox Den, Beebom',
    confidence: 'medium',
    notes:
      'Current JJK-themed reward code reported by multiple third-party trackers.',
  },
  {
    code: 'INNOVATIONCITY',
    reward: '200 Crystals, 10 Common Boxes, 5 Rare Boxes, and 3 Epic Boxes',
    status: 'active',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Destructoid, Pro Game Guides, Roblox Den, Beebom',
    confidence: 'medium',
    notes:
      'Listed consistently across current code trackers. Use before a long rolling session because boxes and crystals help early roster depth.',
  },
  {
    code: 'TYFORSUPPORT1',
    reward: 'Free rewards',
    status: 'active',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Destructoid, Pro Game Guides, Roblox Den, Beebom',
    confidence: 'medium',
    requirement: 'Requires at least 10,000 rolls',
    notes:
      'Several sources list a 10,000-roll requirement. Keep it in the active list, but warn new players not to troubleshoot it before they meet the roll gate.',
  },
  {
    code: 'TYFOR100LIKES',
    reward: '200 Crystals and 10 Common Boxes',
    status: 'active',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Beebom and Official Code Zone July 2026 trackers',
    confidence: 'medium',
    notes:
      'Source-checked July 8 from two current code trackers. It was not visible in the official Roblox description during this pass, so keep it source-checked rather than game-tested.',
  },
];

export const watchCodes: GameCode[] = [
  {
    code: 'Anime Defense RNG codes',
    reward: 'Wrong-game code cluster',
    status: 'watch',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Old Fandom and YouTube results for Anime Defense RNG',
    confidence: 'watch',
    notes:
      'Anime Defense RNG is a different Roblox game. Codes such as 25KFAVS, UPDATE0.5, and 45KLIKES are not imported into Anime RNG Defense.',
  },
  {
    code: 'Anime RNG TD codes',
    reward: 'Similar-name Roblox TD game',
    status: 'watch',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Search results for Anime RNG TD',
    confidence: 'watch',
    notes:
      'Anime RNG TD has separate place IDs, code strings, and progression systems. Treat it as wrong-game demand unless a user intentionally searches that game.',
  },
  {
    code: 'script / auto farm',
    reward: 'Unsafe shortcut intent',
    status: 'watch',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Roblox search surface and common code-page spam patterns',
    confidence: 'watch',
    notes:
      'This site does not provide scripts, executors, private servers, or account-risk automation. Use official codes and normal progression instead.',
  },
];

export const expiredCodes: GameCode[] = [
  {
    code: 'SORRYFORSHUTDOWN',
    reward: 'Free rewards',
    status: 'expired',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Destructoid, Pro Game Guides, Beebom',
    confidence: 'medium',
    notes:
      'Listed as expired/inactive by current code trackers during the July 8, 2026 check.',
  },
];

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status:
    `${activeCodes.length} active Anime RNG Defense codes are source-checked across current July 2026 code trackers. RELEASE was visible in the public Roblox description during the July 8 pass; the rest remain source-checked rather than game-tested.`,
  sourcesChecked: [
    {
      label: 'Roblox game page',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Destructoid codes',
      url: 'https://www.destructoid.com/anime-rng-defense-codes/',
    },
    {
      label: 'Pro Game Guides codes',
      url: 'https://progameguides.com/roblox/anime-rng-defense-codes/',
    },
    {
      label: 'Roblox Den codes',
      url: 'https://robloxden.com/game-codes/anime-rng-defense',
    },
    {
      label: 'Pocket Tactics codes',
      url: 'https://www.pockettactics.com/anime-rng-defense-codes',
    },
    {
      label: 'PCGamesN codes',
      url: 'https://www.pcgamesn.com/anime-rng-defense-codes',
    },
    {
      label: 'Beebom codes',
      url: 'https://beebom.com/anime-defense-rng-codes/',
    },
  ],
};
