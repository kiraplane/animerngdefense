import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-10-12';

const currentSource = 'NerdsChalk and Pocket Tactics September 2026 checks';

function active(
  code: string,
  reward: string,
  firstSeen: string,
  requirement?: string,
  sourceLabel = currentSource
): GameCode {
  return {
    code,
    reward,
    status: 'active',
    firstSeen,
    lastChecked: CODE_CHECKED_AT,
    sourceLabel,
    confidence: sourceLabel.startsWith('Official') ? 'high' : 'medium',
    requirement,
    notes:
      'Copy the spelling exactly and use the live Roblox reward popup as the final status and reward check.',
  };
}

export const activeCodes: GameCode[] = [
  active('HALLOWEENSOON', 'Current Shinobi update rewards', '2026-10-11', undefined, 'Pro Game Guides October 11 check'),
  active('UPDATESHINOBI', 'Current Shinobi update rewards', '2026-10-11', undefined, 'Official Roblox description and Pro Game Guides'),
  active('HIDDENVILLAGE', 'Current Shinobi update rewards', '2026-10-11', undefined, 'Pro Game Guides October 11 check'),
  active('KAMUI', 'Current Shinobi update rewards', '2026-10-11', undefined, 'Pro Game Guides October 11 check'),
  active('TSUKUYOMI', 'Current Shinobi update rewards', '2026-10-11', undefined, 'Pro Game Guides October 11 check'),
  active('SHINOBITRIALS', 'Current Shinobi update rewards', '2026-10-11', undefined, 'Pro Game Guides October 11 check'),
  active(
    'UPDATEFIRE',
    'Current Fire update rewards; confirm the exact bundle in the live popup',
    '2026-09-15',
    undefined,
    'Official Roblox description'
  ),
  active(
    'SORRYFORSHUTDOWNGHOUL',
    '3 Divine Rolls',
    '2026-09-07',
    undefined,
    'NerdsChalk September 7 check'
  ),
  active(
    'UPDATEGHOUL',
    '1,000 Crystals and 1 Blessed Roll',
    '2026-09-06',
    undefined,
    'Official Roblox description and NerdsChalk'
  ),
  active('GHOULCITY', 'Free rewards', '2026-09-07', 'Requires 10,000 total rolls'),
  active('WHITEREAPER', 'Free rewards', '2026-09-07', 'Requires 25,000 total rolls'),
  active('ONEEYEDGHOUL', 'Free rewards', '2026-09-07', 'Requires 50,000 total rolls'),
  active('INFINITYCASTLE', 'Free rewards', '2026-09-07', 'Requires 100,000 total rolls'),
  active(
    '10MVISITS',
    '10,000 Crystals, 3 Divine Rolls, and 100 Legendary Boxes',
    '2026-09-04'
  ),
  active('AWAKENEDSLIME', 'Free rewards', '2026-09-04', 'Requires 100,000 total rolls'),
  active('PAUSEPOTIONS', 'Free rewards', '2026-09-04', 'Requires 50,000 total rolls'),
  active('DAILYCHALLENGE', 'Free rewards', '2026-09-04', 'Requires 25,000 total rolls'),
  active('SLIMEEVENT', 'Free rewards', '2026-09-04', 'Requires 10,000 total rolls'),
  active('UPDATE10', '1,000 Crystals and 1 Blessed Roll', '2026-09-04'),
  active(
    'SORRYFORSHUTDOWN10',
    '2,500 Crystals, 3 Divine Rolls, and 2 Limit Breakers',
    '2026-09-04'
  ),
  active('BATTLEPASS', 'Free rewards', '2026-09-04', 'Requires 100,000 total rolls'),
  active('PUBLICSAFETYHQ', 'Free rewards', '2026-09-04', 'Requires 10,000 total rolls'),
  active('UPDATE9', '1,000 Crystals and 1 Blessed Roll', '2026-08-23'),
  active('WISHEVENT', 'Free rewards', '2026-08-17', 'Requires 100,000 total rolls'),
  active('CAPSULECORP', 'Free rewards', '2026-08-17', 'Requires 10,000 total rolls'),
  active('UPDATE8', '1,000 Crystals and 1 Blessed Roll', '2026-08-16'),
  active('TY100K', 'Free rewards', '2026-07-21', 'Requires 100,000 total rolls'),
  active('TYFOR10KCCU', 'Free rewards', '2026-07-14', 'Requires 10,000 total rolls'),
  active('THANKSFORPLAYING', '150 Crystals and 10 Epic Boxes', '2026-07-09'),
  active('SORRYFORSHUTDOWN6', 'Cursed Fingers and Divine Rerolls', '2026-08'),
  active('SORRYFORSHUTDOWN5', 'Cursed Fingers and Divine Rerolls', '2026-07-21'),
];

export const watchCodes: GameCode[] = [
  {
    code: 'Anime Defense RNG / Anime RNG TD codes',
    reward: 'Wrong-game code cluster',
    status: 'watch',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Similar-name Roblox search results',
    confidence: 'watch',
    notes:
      'These are separate Roblox games. Do not import their code strings into Anime RNG Defense.',
  },
];

const expiredStrings = [
  'EXTREMERAID',
  'VAHRWELT',
  'UPDATE7',
  'THEPLAYER',
  'SOLOEVENT',
  'UPDATE6',
  'EISENBERNCASTLE',
  'WEATHERS',
  'UPDATE5',
  'UPDATE4',
  'BULLSHIDEOUT',
  'FairyForest',
  'UPDATE3',
  'CURSEDHIGHSCHOOL',
  'TYFORSUPPORT1',
  'UPDATE2',
  'SorryForShutdown3',
  'SORRYFORSHUTDOWN2',
  'INNOVATIONCITY',
  'UPDATE1',
  'TYFOR100LIKES',
  'RELEASE',
  'SORRYFORSHUTDOWN',
];

export const expiredCodes: GameCode[] = expiredStrings.map((code) => ({
  code,
  reward: 'Expired previous-cycle reward',
  status: 'expired',
  firstSeen: '2026-07',
  lastChecked: CODE_CHECKED_AT,
  sourceLabel: 'NerdsChalk September 7 expired list',
  confidence: 'medium',
  notes: 'Moved out of the active table during the September 7 source check.',
}));

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status: `${activeCodes.length} current codes are tracked after the October 12 Shinobi pass. The official description confirms UPDATESHINOBI; five additional Shinobi strings are current tracker-backed attempts, while older Fire and Ghoul strings remain in the retry set until the live client rejects them.`,
  sourcesChecked: [
    {
      label: 'Roblox game page',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Pro Game Guides October 11 codes',
      url: 'https://progameguides.com/roblox/anime-rng-defense-codes/',
    },
    {
      label: 'NerdsChalk September codes',
      url: 'https://nerdschalk.com/anime-rng-defense-codes/',
    },
    {
      label: 'Pocket Tactics September 4 codes',
      url: 'https://www.pockettactics.com/anime-rng-defense-codes',
    },
  ],
};
