import type { DataSource } from './types';

export const CHECKED_AT = '2026-07-05';
export const OFFICIAL_CHECKED_AT = '2026-07-05';

export const officialGameFacts = {
  name: 'Ice Tycoon 2',
  siteName: 'Ice Tycoon 2 Wiki',
  domain: 'https://www.icetycoon-2.wiki',
  canonicalHost: 'www.icetycoon-2.wiki',
  robloxPlaceId: '124757309017950',
  robloxUniverseId: '10337069275',
  creatorName: 'Slized Games',
  creatorType: 'Roblox Group',
  creatorId: '34664124',
  genre: 'Roblox simulation tycoon',
  status: 'Live Roblox experience',
  createdAt: '2026-06-16T07:30:38.862Z',
  updatedAt: '2026-07-04T16:10:40.2224367Z',
  maxPlayers: 1,
  activePlayersAtCheck: 3130,
  visitsAtCheck: 285049,
  favoritesAtCheck: 5121,
  officialRobloxUrl:
    'https://www.roblox.com/games/124757309017950/Ice-Tycoon-2',
  officialGroupUrl: 'https://www.roblox.com/communities/34664124/slized-games',
  requestedButWrongStoreUrl:
    'https://www.roblox.com/games/125039473548047/Anime-Card-Farm',
};

export const siteDescription =
  'Ice Tycoon 2 Wiki helps Roblox players route upgrades, find gems and secrets, plan rebirths, check codes safely, and avoid old Ice Tycoon mix-ups.';

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'Ice Tycoon 2 on Roblox',
    url: officialGameFacts.officialRobloxUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for the current game name, creator, place ID, and official gameplay description: freeze water, melt it for profit, and upgrade tools and machines.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox universe API snapshot',
    url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirmed universe ID, creation date, update timestamp, Simulation/Tycoon genre, active players, visits, favorites, max players, and Slized Games group ownership.',
  },
  {
    type: 'official',
    label: 'Slized Games Roblox community',
    url: officialGameFacts.officialGroupUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Official Roblox group result that links the new Ice Tycoon 2 release and helps avoid confusion with unrelated Anime Card Farm links.',
  },
  {
    type: 'community',
    label: 'Ice Tycoon 2 Fandom API',
    url: 'https://ice-tycoon-2.fandom.com/api.php?action=query&list=allpages&aplimit=50&format=json',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for topic breadth: Secrets, Rebirths, Trophies, Badges, Items, NPC, and related pages. Details are paraphrased and treated as community data.',
  },
  {
    type: 'competitor',
    label: 'Ice Tycoon 2 Fandom',
    url: 'https://ice-tycoon-2.fandom.com/wiki/Ice_tycoon_2_Wiki',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Community competitor with database-style pages for tools, machines, upgrades, secrets, badges, and rebirths.',
  },
  {
    type: 'competitor',
    label: 'Ice Tycoon 2 Hub',
    url: 'https://ice-tycoon-2.pages.dev/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Thin competitor homepage focused on codes, guide, and FAQ; useful as a keyword signal but not as a factual data source.',
  },
  {
    type: 'youtube',
    label: 'Ice Tycoon 2 YouTube guide results',
    url: 'https://www.youtube.com/results?search_query=Ice+Tycoon+2+guide',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for guide selection and cross-checking all-gems, trophies, secrets, and completion routes without transcript copying.',
  },
  {
    type: 'manual_review',
    label: 'Demand packet URL conflict',
    url: officialGameFacts.requestedButWrongStoreUrl,
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'The user-provided store URL points to Anime Card Farm, not Ice Tycoon 2. The site follows the requested game name/domain and the verified Ice Tycoon 2 Roblox page.',
  },
];

export const officialQuickLinks = [
  {
    label: 'Roblox',
    href: officialGameFacts.officialRobloxUrl,
  },
  {
    label: 'Slized Games',
    href: officialGameFacts.officialGroupUrl,
  },
];
