import type { DataSource } from './types';

export const CHECKED_AT = '2026-07-19';
export const OFFICIAL_CHECKED_AT = '2026-07-19';

export const officialGameFacts = {
  name: '[7DS🐲] Anime RNG Defense',
  shortName: 'Anime RNG Defense',
  commonName: 'Anime RNG Defense',
  siteName: 'Anime RNG Defense Wiki',
  domain: 'https://www.animerngdefense.site',
  canonicalHost: 'www.animerngdefense.site',
  robloxPlaceId: '104693964860826',
  robloxUniverseId: '9940812243',
  creatorName: 'Mera.',
  creatorType: 'Roblox Group',
  genre: 'Roblox strategy tower defense',
  genreL1: 'Strategy',
  genreL2: 'Tower Defense',
  status: 'Live Roblox experience',
  createdAt: '2026-03-26T01:57:38.197Z',
  updatedAt: '2026-07-14T03:34:31.8169194Z',
  maxPlayers: 4,
  activePlayersAtCheck: 9744,
  visitsAtCheck: 2692680,
  favoritesAtCheck: 72476,
  upVotesAtCheck: 3489,
  downVotesAtCheck: 92,
  officialRobloxUrl:
    'https://www.roblox.com/games/104693964860826/Anime-RNG-Defense',
  officialDescriptionSummary:
    'A Roblox RNG tower defense game where players roll anime-style units, enter maps, clear enemy waves, place defenders, upgrade teams, boost luck, and protect the base. The Roblox page currently displays a 7DS update tag and explicitly lists code FairyForest.',
};

export const siteDescription =
  'Anime RNG Defense Wiki helps Roblox players redeem codes, roll units, build teams, manage traits and luck, clear maps, and follow current Update 3 / 7DS notes.';

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'Anime RNG Defense on Roblox',
    url: officialGameFacts.officialRobloxUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for current 7DS title tag, creator group, official code FairyForest, gameplay loop, supported platforms, and official play link.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox universe API snapshot',
    url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirmed universe ID, root place ID, creation date, update timestamp, Strategy/Tower Defense genre labels, playing count, visits, favorites, max players, and creator.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox thumbnail API snapshot',
    url: `https://thumbnails.roblox.com/v1/games/icons?universeIds=${officialGameFacts.robloxUniverseId}&size=512x512&format=Png&isCircular=false`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Used for the local site icon, logo, and compact wiki visual identity.',
  },
  {
    type: 'competitor',
    label: 'Anime RNG Defense Wiki competitor',
    url: 'https://www.animerngdefense.wiki/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Competitor hub exposes demand for codes, units, tier list, traits, maps, best team, AFK units, rewards, and update pages. Used for coverage planning, not copied prose.',
  },
  {
    type: 'competitor',
    label: 'Anime RNG Defense Roblox Wiki competitor',
    url: 'https://animerngdefenseroblox.wiki/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Competitor route map confirms code redemption, beginner guide, units, luck, team building, maps/waves, and Update 2 coverage.',
  },
  {
    type: 'competitor',
    label: 'Destructoid Anime RNG Defense codes',
    url: 'https://www.destructoid.com/anime-rng-defense-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Cross-check source for active codes and redemption steps. Kept as secondary evidence behind official Roblox text.',
  },
  {
    type: 'competitor',
    label: 'Pro Game Guides Anime RNG Defense codes',
    url: 'https://progameguides.com/roblox/anime-rng-defense-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Second cross-check source for active codes, 10k roll requirement on TYFORSUPPORT1, and Crystals/traits explanation.',
  },
  {
    type: 'competitor',
    label: 'Roblox Den Anime RNG Defense codes',
    url: 'https://robloxden.com/game-codes/anime-rng-defense',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Third code cross-check source with case-sensitivity and rewards. Useful for code confidence, not an official source.',
  },
  {
    type: 'youtube',
    label: 'Recent Anime RNG Defense YouTube guide result',
    url: 'https://www.youtube.com/watch?v=OlhoZtnWDN8',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Selected current video reference because the title explicitly names Anime RNG Defense and the result is recent.',
  },
  {
    type: 'manual_review',
    label: 'Wrong-game confusion check',
    url: 'https://animedefenserng.fandom.com/wiki/Codes',
    checkedAt: CHECKED_AT,
    confidence: 'watch',
    note: 'Anime Defense RNG is a different Roblox game with older Fandom data and different code strings. Its data should not be imported into Anime RNG Defense pages.',
  },
];

export const officialQuickLinks = [
  {
    label: 'Roblox',
    href: officialGameFacts.officialRobloxUrl,
  },
];
