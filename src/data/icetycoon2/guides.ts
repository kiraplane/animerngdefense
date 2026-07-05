import { CHECKED_AT, officialGameFacts, siteDescription } from './sources';
import type { Guide, GuideCategory, GuideVideo } from './types';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  completion: {
    id: 'T1rkdI1pXow',
    title: '100% Completing Roblox ICE TYCOON 2...',
    channel: 'OTTER ON ROBLOX',
    url: 'https://www.youtube.com/watch?v=T1rkdI1pXow',
    thumbnailUrl: youtubeThumbnail('T1rkdI1pXow'),
    publishedAt: '2026-07',
    viewCountLabel: '70K+ views at discovery',
    checkedAt: CHECKED_AT,
  },
  trophiesGems: {
    id: 'rOmkartcNro',
    title: 'How to get ALL TROPHIES and GEMS in Ice Tycoon 2 | Roblox',
    channel: 'Testy',
    url: 'https://www.youtube.com/watch?v=rOmkartcNro',
    thumbnailUrl: youtubeThumbnail('rOmkartcNro'),
    publishedAt: '2026-06',
    viewCountLabel: '10K+ views at discovery',
    checkedAt: CHECKED_AT,
  },
  secrets: {
    id: 'Rd8HLK3qK1E',
    title: 'All Secrets in Ice Tycoon 2',
    channel: 'Esvorion',
    url: 'https://www.youtube.com/watch?v=Rd8HLK3qK1E',
    thumbnailUrl: youtubeThumbnail('Rd8HLK3qK1E'),
    publishedAt: '2026-07',
    viewCountLabel: '4K+ views at discovery',
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

const localCover = '/icetycoon2/hero.png';
const videoCover = (video: GuideVideo) => video.thumbnailUrl;

export { siteDescription };

export const guideCategoryIntro: Record<GuideCategory, string> = {
  Beginner:
    'Start with the freeze, mine, melt, reinvest loop before chasing every map secret.',
  Codes:
    'Track verified Ice Tycoon 2 codes separately from original Ice Tycoon code lists.',
  Secrets:
    'Route permanent boosts, hidden rooms, Secret Finder progress, and gem prerequisites.',
  Gems: 'Collect the five gems in an order that does not waste travel or reset progress.',
  Trophies:
    'Treat trophies as rebirth requirements and lab progress, not optional decoration.',
  Rebirths:
    'Plan the reset, permanent multiplier, preserved progress, and rebirth upgrades.',
  Items:
    'Use water tools, heat crystals, and Frozen Magma only when they unlock a real route.',
  Badges:
    'Plan endings, Collector, Up and Running, Drought, and Secret Finder without mixing goals.',
  Economy:
    'Turn active ice production, droppers, machines, and permanent boosts into faster cash.',
  Safety:
    'Avoid fake downloads, scripts, and original Ice Tycoon facts presented as sequel data.',
  Updates:
    'Track source confidence, update signals, and watch areas for this new Roblox tycoon.',
};

export const relatedRouteLabels: Record<string, string> = {
  '/': 'Ice Tycoon 2 Wiki',
  '/codes': 'Ice Tycoon 2 Codes',
  '/guides': 'All Ice Tycoon 2 Guides',
  '/secrets': 'Secrets and Gems Hub',
  '/rebirths': 'Rebirths Hub',
  '/items': 'Items and Tools Hub',
  '/badges': 'Badges and Trophies Hub',
  '/download': 'Official Roblox Page',
  '/updates': 'Update Tracker',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/codes-status-guide': 'Codes Status Guide',
  '/guides/all-gems-locations-guide': 'All Gems Locations',
  '/guides/all-trophies-guide': 'All Trophies Guide',
  '/guides/all-secrets-guide': 'All Secrets Guide',
  '/guides/rebirth-requirements-guide': 'Rebirth Requirements',
  '/guides/items-and-water-capacity-guide': 'Items and Water Capacity',
  '/guides/badges-and-endings-guide': 'Badges and Endings',
  '/guides/best-upgrades-money-guide': 'Best Upgrades for Money',
  '/guides/original-vs-ice-tycoon-2-codes-guide':
    'Original vs Ice Tycoon 2 Codes',
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Ice Tycoon 2 Beginner Guide',
    seoTitle: 'Ice Tycoon 2 Beginner Guide - Freeze, Mine, Melt and Upgrade',
    seoDescription:
      'Start Ice Tycoon 2 with the right freeze, mine, melt, upgrade, secrets, gems, trophies, and rebirth route for Roblox beginners.',
    summary:
      'A first-session route for Ice Tycoon 2 players: keep the conveyor fed, reinvest into the base, route permanent boosts, and avoid chasing codes or endings too early.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.completion),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Built from the official Roblox description, Roblox API facts, community topic data, and a current 100 percent completion video result.',
    video: videos.completion,
    videoSearchQueries: [
      'Ice Tycoon 2 beginner guide',
      'Ice Tycoon 2 how to play',
      '100% completing Ice Tycoon 2',
    ],
    tags: ['Roblox', 'Beginner', 'Tycoon'],
    relatedRoutes: [
      '/codes',
      '/secrets',
      '/guides/best-upgrades-money-guide',
      '/guides/all-gems-locations-guide',
      '/guides/rebirth-requirements-guide',
    ],
    body: [
      {
        heading: 'Start by making the base pay for itself',
        paragraphs: [
          'Ice Tycoon 2 is a one-player Roblox tycoon built around a clear production loop: make ice, move it through your base, melt it for cash, and spend the cash on tools and machines. The official page keeps the description short, but the important player decision is not short at all: every early purchase should either increase the amount of ice you process, reduce the time you spend babysitting the loop, or unlock a route that gives permanent value.',
          'In the first session, do not treat the map like a collectathon immediately. Keep your tycoon moving, learn where water enters the loop, and buy upgrades that make the next few minutes faster. If you stop production every time you see a new rumor about a gem or badge, your account will crawl because the base is not generating enough cash to recover from travel time.',
        ],
        bullets: [
          'Keep ice production active before exploring.',
          'Buy machine and tool upgrades that raise cash flow first.',
          'Leave codes as a watch item until sequel-specific codes are confirmed.',
          'Route secrets and gems when the reward is permanent or unlocks an upgrader.',
        ],
      },
      {
        heading: 'Use active time for upgrades and route checks',
        paragraphs: [
          'The early loop rewards attention. If a machine is waiting for input or your water capacity forces constant tiny trips, solve that bottleneck before saving for a flashy purchase. A simple upgrade that keeps the conveyor fed can beat a more exciting item that does nothing for the next ten minutes of income.',
          'Once your base is stable, start pairing production runs with one objective outside the base. For example, do a gem route after you can afford the next recovery cycle, or check the hotel and mine routes when a guide points to a specific permanent reward. One clear errand is stronger than wandering until you forget which upgrade you were saving for.',
        ],
      },
      {
        heading: 'Secrets and gems are worth it because they persist',
        paragraphs: [
          'Community pages and current videos point to secrets, gems, trophies, and rebirths as the real depth of Ice Tycoon 2. Secrets are especially important because they can grant permanent income boosts. The five-gem route is also high value because it unlocks a sale-side upgrader after you place the hidden gems.',
          'The mistake is doing these routes with no plan. If you are hunting gems, use the all-gems guide and check prerequisites such as Frozen Magma, the hotel route, the mine rock, the abandoned factory, the roof key, and the castle well. If you are hunting secrets, use the secrets guide and accept that some steps may look strange because the game hides badge triggers in odd interactions.',
        ],
      },
      {
        heading: 'Rebirth only after the checklist is actually ready',
        paragraphs: [
          'Rebirth is the long-run goal, but it is not an early panic button. Community data ties rebirth to complete tycoon progress and trophy requirements, then gives permanent income value after the reset. That means a rushed reset attempt can waste time if you still need trophies, secrets, or basic route knowledge.',
          'Think of rebirth as the end of a planned run: finish the base, grab required trophies, confirm whether the secrets you care about are done, then step into the reset path. After the first rebirth, the game becomes more about reducing repeat friction with permanent upgrades and smarter routing.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the main loop in Ice Tycoon 2?',
        answer:
          'Freeze or generate water into ice, move it through the tycoon, melt it for cash, and reinvest in tools and machines.',
      },
      {
        question: 'Should I hunt gems before upgrading my base?',
        answer:
          'Usually no. Build enough income first, then route gems when the travel time will not stall your whole run.',
      },
      {
        question: 'Does Ice Tycoon 2 have confirmed active codes?',
        answer:
          'No sequel-specific active codes are verified as of the current check. Original Ice Tycoon codes are tracked separately as watch items.',
      },
    ],
  },
  {
    slug: 'codes-status-guide',
    title: 'Ice Tycoon 2 Codes Status Guide',
    seoTitle: 'Ice Tycoon 2 Codes - Active Status and Redeem Safety',
    seoDescription:
      'Check Ice Tycoon 2 codes safely, why no sequel-specific active codes are verified, and how to avoid original Ice Tycoon code-list contamination.',
    summary:
      'An honest codes guide for Ice Tycoon 2: no confirmed active sequel codes yet, watch REBIRTH and 10KLIKES carefully, and redeem only inside Roblox.',
    category: 'Codes',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Cross-checked official Roblox, Slized Games, original Ice Tycoon code demand, and current Ice Tycoon 2 status pages.',
    videoSearchQueries: [
      'Ice Tycoon 2 codes',
      'Ice Tycoon 2 redeem codes',
      'Ice Tycoon 2 REBIRTH code',
    ],
    tags: ['Codes', 'Safety', 'Roblox'],
    relatedRoutes: [
      '/codes',
      '/guides/original-vs-ice-tycoon-2-codes-guide',
      '/guides/best-upgrades-money-guide',
      '/download',
    ],
    body: [
      {
        heading: 'The honest status is no confirmed sequel codes',
        paragraphs: [
          'As of this update, this site does not list any active Ice Tycoon 2 code as verified. That is intentional. The search results around Ice Tycoon 2 codes are noisy because the original Ice Tycoon already has code pages, and both games are connected to Slized Games. A code can appear near the sequel name without being proven in the sequel.',
          'The two most common strings to watch are REBIRTH and 10KLIKES. They are useful to track because players will search them, but they should not be presented as guaranteed Ice Tycoon 2 rewards. If you try them, do it inside the official game and treat any result as a live check, not proof that every reposted list is reliable.',
        ],
      },
      {
        heading: 'Only redeem inside the official Roblox experience',
        paragraphs: [
          'A real Roblox code should be redeemed inside Roblox, not through a random browser form. If a future Ice Tycoon 2 code is confirmed, the safest path is to launch the official place, load into your base, open the in-game settings or code panel if available, enter the exact string, and read the reward message before spending the boost.',
          'Never give a third-party site your Roblox password for codes. Also avoid scripts, executors, and modified clients that claim to farm cash. Codes are at most a small boost; account safety is worth much more than a short multiplier.',
        ],
      },
      {
        heading: 'Spend any future boost when your base is ready',
        paragraphs: [
          'If Ice Tycoon 2 receives a cash or speed code later, do not redeem it at the weakest point of a run. A multiplier on a barely built base is weaker than the same multiplier after you have droppers, machines, water capacity, and a clear next upgrade. Let the base become worth multiplying first.',
          'The best code window is a focused session where you know the next purchase. Redeem, buy the upgrades that raise output, then keep the loop active until the reward window is gone. If the code gives cash, spend it on the bottleneck that changes future income instead of a random cosmetic or route item.',
        ],
      },
      {
        heading: 'Codes are not the main progression plan',
        paragraphs: [
          'Even if future codes arrive, Ice Tycoon 2 is built around production, secrets, gems, trophies, and rebirths. Those systems compound. A code can help you reach the next upgrade, but it will not replace the permanent value of secrets or the long-run value of rebirth multipliers.',
          'That is why this wiki puts the codes page near the top while still steering players toward upgrade order, gems, trophies, and rebirth planning. Use codes when real, ignore them when unconfirmed, and keep building the base.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are there active Ice Tycoon 2 codes right now?',
        answer:
          'No active codes are verified specifically for Ice Tycoon 2 as of the current check.',
      },
      {
        question: 'Do REBIRTH and 10KLIKES work in Ice Tycoon 2?',
        answer:
          'They are watch items because they circulate around Ice Tycoon search results, but they are not confirmed sequel-specific active codes here.',
      },
      {
        question: 'Where should I redeem future codes?',
        answer:
          'Redeem only inside the official Ice Tycoon 2 Roblox experience.',
      },
    ],
  },
  {
    slug: 'all-gems-locations-guide',
    title: 'Ice Tycoon 2 All Gems Locations Guide',
    seoTitle: 'Ice Tycoon 2 Gems - All 5 Locations and Gem Upgrader Route',
    seoDescription:
      'Find all five Ice Tycoon 2 gems with a clean route through Frozen Magma, lava pit, mine rock, abandoned factory, hotel key, and castle well maze.',
    summary:
      'A direct all-gems checklist for Ice Tycoon 2 players who want the gem upgrader without wandering through every secret route.',
    category: 'Gems',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.trophiesGems),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Built from current all-trophies-and-gems YouTube demand plus the community Secrets page. Location details are paraphrased and should be rechecked after updates.',
    video: videos.trophiesGems,
    videoSearchQueries: [
      'Ice Tycoon 2 all gems',
      'Ice Tycoon 2 gem locations',
      'How to get all trophies and gems in Ice Tycoon 2',
    ],
    tags: ['Gems', 'Secrets', 'Upgrader'],
    relatedRoutes: [
      '/secrets',
      '/guides/all-secrets-guide',
      '/items',
      '/guides/all-trophies-guide',
    ],
    body: [
      {
        heading: 'Collect gems when the route unlocks permanent value',
        paragraphs: [
          'The five gems matter because they feed a special upgrader route. They are not just collectibles for a badge screen. Once placed, the gem route supports your sale-side income, so it is worth planning carefully instead of picking up one gem and forgetting where the rest are.',
          'Before starting, make sure your base can recover from travel time. You will move through the hotel, mine, abandoned factory area, opposite-building basement, and castle mountain well. If you have not stabilized your income, the route will feel longer than it needs to be.',
        ],
        bullets: [
          'Bring enough base progress to travel without stalling income.',
          'Expect some route items or mini-objectives before individual gems.',
          'Use Frozen Magma for the lava-pit gem route.',
          'Return to the gem upgrader after all five gems are collected.',
        ],
      },
      {
        heading: 'Gem 1 uses Frozen Magma and the base lava pit',
        paragraphs: [
          'The first gem route starts with Frozen Magma, a special item found in the hotel route. Current community data places it on the fourth floor in a left-side room. After collecting it, use the item so normal lava becomes safe for a short window, then enter the lava pit at your main tycoon where the ice is sold.',
          'The important detail is timing. Do not activate Frozen Magma far away from the pit and then waste the protection window. Pick it up, understand the route back, activate it, and go straight to the lava-pit entry.',
        ],
      },
      {
        heading: 'Gem 2 is behind the mine rock',
        paragraphs: [
          'The second gem is tied to the mine inside your tycoon. Community data points to a rock in the far back-left corner. Break the rock, drop into the hidden space it opens, and collect the gem in the secret room below.',
          'This is a good example of why you should not treat every wall as scenery. Ice Tycoon 2 hides progression behind small environmental checks, and a permanent route can begin with one suspicious rock.',
        ],
      },
      {
        heading: 'Gem 3 and Gem 4 need side-area route checks',
        paragraphs: [
          'The third gem is linked to the rainy secret location and abandoned factory area. After entering that area, turn left and look for the wall parkour route that leads into the gem room. Go slowly here because missing the first turn can make the area feel much more confusing than it is.',
          'The fourth gem has more prerequisites. Current community data points to reaching level 3 in the hotel minigame, collecting a roof key, opening the building across from the hotel, then going to the basement for another short parkour challenge. Because this route has several dependencies, save it for a focused pass rather than trying it in the middle of a money run.',
        ],
      },
      {
        heading: 'Gem 5 is the castle well maze',
        paragraphs: [
          'The final gem is reached through the well on castle mountain. Drop into the well, work through the hidden maze, and finish the parkour section at the end. This is the gem most likely to punish rushing, so slow down and keep mental notes of turns.',
          'After all five gems are collected, return to the special slot or gem upgrader route and finish the unlock. Then resume the normal tycoon cycle so the new value can compound through future upgrades and rebirth planning.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many gems do I need for the upgrader?',
        answer: 'Current community data points to five hidden gems.',
      },
      {
        question: 'Which gem needs Frozen Magma?',
        answer:
          'The first lava-pit gem route uses Frozen Magma from the hotel.',
      },
      {
        question: 'Should I do all gems in one run?',
        answer:
          'If your base can support the travel, yes. Otherwise split the route into clear sessions so you do not stall income.',
      },
    ],
  },
  {
    slug: 'all-trophies-guide',
    title: 'Ice Tycoon 2 All Trophies Guide',
    seoTitle: 'Ice Tycoon 2 Trophies - All Trophy Requirements and Rebirth Use',
    seoDescription:
      'Plan Ice Tycoon 2 trophies for rebirth requirements, lab upgrades, trophy reset rules, and the best time to collect trophies before a reset.',
    summary:
      'Trophies are tied to serious progression. Use this guide to route them before rebirth instead of treating them like optional collectibles.',
    category: 'Trophies',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.trophiesGems),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Built from current all-trophies-and-gems YouTube demand and community Trophies/Rebirths pages.',
    video: videos.trophiesGems,
    videoSearchQueries: [
      'Ice Tycoon 2 all trophies',
      'Ice Tycoon 2 trophies guide',
      'How to get all trophies in Ice Tycoon 2',
    ],
    tags: ['Trophies', 'Rebirth', 'Lab'],
    relatedRoutes: [
      '/badges',
      '/rebirths',
      '/guides/rebirth-requirements-guide',
      '/guides/all-gems-locations-guide',
    ],
    body: [
      {
        heading: 'Trophies are part of the rebirth checklist',
        paragraphs: [
          'The community Trophies page describes trophies as special collectible items tied to challenges, lab upgrades, and progression. More importantly, the Rebirths page ties rebirth to complete tycoon progress and collecting three trophies. That means trophies are not optional if your goal is long-run multipliers.',
          'Plan trophy collection before you reach the end of a run. If you finish every base purchase and then discover you are missing a trophy, the last stretch becomes backtracking. A cleaner route is to collect trophies during the same phase where you are already doing secrets, gems, and map errands.',
        ],
      },
      {
        heading: 'Use trophies to pace your reset decision',
        paragraphs: [
          'A good rebirth run has three parts: money growth, map checklist, and reset execution. Trophies sit in the middle. You need enough economy to reach the trophy challenges comfortably, but you should not delay them until every other task is done.',
          'If a trophy route overlaps a gem or secret route, combine them. If it requires a different challenge path, do it after a strong upgrade purchase so the base can recover quickly when you return.',
        ],
      },
      {
        heading: 'Expect trophies to reset unless preserved',
        paragraphs: [
          'Community data says trophies reset on rebirth, with later rebirth upgrades able to preserve specific trophies. This changes how you should value trophies after your first reset. Early on, trophies unlock progress. Later, trophy-preservation upgrades reduce repeated work.',
          'When a preservation upgrade becomes available, ask whether it removes a route you dislike or speeds every future reset. If yes, it may be more valuable than a small convenience feature because it removes a repeated checklist step.',
        ],
      },
      {
        heading: 'Do not confuse trophy routes with badge completion',
        paragraphs: [
          'Trophies and badges overlap but are not the same job. Trophies support rebirth and lab progress. Badges include endings, Collector, Secret Finder, Drought, and other goals. If you are trophy routing, focus on the rebirth requirement first, then branch into badge completion after the reset plan is secure.',
          'This keeps your run clean. A player chasing every badge while still missing trophy requirements may spend an hour feeling busy without actually unlocking the reset that makes future attempts faster.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many trophies are required for rebirth?',
        answer:
          'Current community data says a rebirth requires three trophies along with full tycoon progress.',
      },
      {
        question: 'Do trophies reset after rebirth?',
        answer:
          'Yes, community data says trophies reset unless later upgrades preserve specific trophies.',
      },
      {
        question: 'Should I collect trophies before gems?',
        answer:
          'Collect whichever overlaps your current route, but do not attempt rebirth until trophy requirements are done.',
      },
    ],
  },
  {
    slug: 'all-secrets-guide',
    title: 'Ice Tycoon 2 All Secrets Guide',
    seoTitle: 'Ice Tycoon 2 Secrets - All Hidden Boosts and Secret Finder',
    seoDescription:
      'Find Ice Tycoon 2 secrets, Secret Finder progress, hidden gem routes, water-tank and wall interactions, statue button, and permanent boost planning.',
    summary:
      'A broad secrets route for players who want more than the five gems: permanent boosts, odd interactions, Secret Finder progress, and badge cleanup.',
    category: 'Secrets',
    difficulty: 'Advanced',
    coverImageUrl: videoCover(videos.secrets),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Built from recent all-secrets YouTube results and community Secrets/Badges pages. Secret details should be rechecked after map updates.',
    video: videos.secrets,
    videoSearchQueries: [
      'Ice Tycoon 2 all secrets',
      'Ice Tycoon 2 secret finder badge',
      'every secret in Ice Tycoon 2',
    ],
    tags: ['Secrets', 'Secret Finder', 'Permanent Boosts'],
    relatedRoutes: [
      '/secrets',
      '/badges',
      '/guides/all-gems-locations-guide',
      '/guides/badges-and-endings-guide',
    ],
    body: [
      {
        heading: 'Separate gem secrets from odd interaction secrets',
        paragraphs: [
          'Ice Tycoon 2 uses the word secrets for more than one thing. Some secrets are structured routes, such as the five-gem path that unlocks a special upgrader. Others are odd map interactions, such as entering a water tank at the right moment, triggering a hidden wall, or stepping on a statue button.',
          'This distinction matters because gem routes need prerequisites and travel planning, while odd interactions are quick once you know what to test. If you mix them together mentally, the secrets route feels random. Split the job into gem checklist, hidden-interaction checklist, and badge confirmation.',
        ],
      },
      {
        heading: 'Start with secrets that permanently improve income',
        paragraphs: [
          'Community data describes discovered secrets as permanent income boosts, which makes them stronger than most one-time cash rewards. The sooner you collect a real permanent boost, the more future upgrades and rebirth attempts benefit from it.',
          'Do not stop the base for every rumor, though. If a secret route takes you across the map or into a parkour section, buy enough income first so the time away from your tycoon does not erase the benefit. Permanent value is best when paired with a base that can use it.',
        ],
      },
      {
        heading: 'Use the water, wall, and statue checks as cleanup',
        paragraphs: [
          'Current community notes include several non-gem secret triggers. One involves the water tank during refilling. Another involves pushing past an invisible boundary near a dirt wall and log route. Another uses a button on a statue arm. These are the kind of secrets that are easy to miss because they do not look like normal tycoon upgrades.',
          'Treat these as cleanup after your economy and gem route are stable. They are valuable for Secret Finder progress, but you should not spend the first ten minutes of a new account trying to trigger every strange death or wall interaction.',
        ],
      },
      {
        heading: 'Confirm Secret Finder after each route batch',
        paragraphs: [
          'The Secret Finder badge is the natural endpoint for the secrets route. Because the community data is still being edited, keep your own checklist as you go: gem route complete, water interaction checked, wall interaction checked, statue button checked, and any newly discovered community routes reviewed.',
          'After a patch, recheck the updates page or current videos before assuming the exact route still works. Ice Tycoon 2 is new, and hidden content is exactly the kind of system that can change quietly.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is Secret Finder in Ice Tycoon 2?',
        answer:
          'Current community data describes Secret Finder as the badge for finding every hidden secret.',
      },
      {
        question: 'Are all secrets gems?',
        answer:
          'No. Gems are one major secret route, but there are also hidden interactions and badge triggers.',
      },
      {
        question: 'Should I use spoilers for secrets?',
        answer:
          'Use direct spoilers if you care about speed. If you prefer discovery, use the hub only to understand which systems matter.',
      },
    ],
  },
  {
    slug: 'rebirth-requirements-guide',
    title: 'Ice Tycoon 2 Rebirth Requirements Guide',
    seoTitle:
      'Ice Tycoon 2 Rebirth Requirements - Trophies, Portal and Upgrades',
    seoDescription:
      'Understand Ice Tycoon 2 rebirth requirements, 100 percent tycoon progress, three trophies, permanent income boosts, portal choices, and upgrade order.',
    summary:
      'A reset-planning guide for Ice Tycoon 2 players who are close to rebirth and want to avoid missing trophies, secrets, or upgrade priorities.',
    category: 'Rebirths',
    difficulty: 'Intermediate',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on community Rebirths data and official tycoon progression context.',
    videoSearchQueries: [
      'Ice Tycoon 2 rebirth',
      'Ice Tycoon 2 rebirth requirements',
      'Ice Tycoon 2 rebirth upgrades',
    ],
    tags: ['Rebirth', 'Trophies', 'Permanent Boosts'],
    relatedRoutes: [
      '/rebirths',
      '/guides/all-trophies-guide',
      '/guides/all-secrets-guide',
      '/guides/best-upgrades-money-guide',
    ],
    body: [
      {
        heading: 'Finish the run before entering the reset path',
        paragraphs: [
          'Community data currently describes rebirth as requiring full tycoon progress and three trophies. That is the first thing to check. If the base is not complete or trophies are missing, the rebirth portal is not your next task yet.',
          'Before you reset, also decide whether any easy permanent secrets remain. Since secret bonuses can carry forward, leaving an easy permanent boost behind before resetting is usually inefficient. You do not need every badge before your first rebirth, but you should not ignore obvious permanent value.',
        ],
      },
      {
        heading: 'Understand what resets and what carries',
        paragraphs: [
          'Rebirth wipes normal purchased tycoon progress and many inventory or route items. Community notes say permanent secret bonuses remain, and later upgrades can preserve pieces of progress such as specific trophies or route convenience. This is why the reset is powerful but also risky if rushed.',
          'The clean mental model is simple: anything bought as normal base progress is temporary, anything earned as a permanent secret or rebirth upgrade may shape future runs. When in doubt, assume a normal item resets and verify before depending on it.',
        ],
      },
      {
        heading: 'Prioritize upgrades that speed every future run',
        paragraphs: [
          'Early rebirth upgrades should reduce repeated friction or raise the value of every production cycle. Water storage and dropper upgrades help the base run smoother. A lava upgrader raises sale value. Teleporter routes reduce travel time. Trophy preservation saves repeated challenge work. Auto-buy and fast rebirth become more valuable after you are repeating runs quickly.',
          'The best upgrade is not always the most dramatic one. If you hate a repeated route or it costs several minutes every run, preserving or skipping that friction can beat a small money convenience.',
        ],
      },
      {
        heading: 'Use the portal intentionally',
        paragraphs: [
          'Community notes describe the rebirth portal as sending players to a lava-themed dimension with a safe exit direction and a forward path toward gates and upgrade buttons. Do not sprint blindly through the reset area if you are unsure. Confirm requirements, enter, read the route, and only commit after you understand whether you are finishing the reset or backing out.',
          'That caution matters because rebirth is a planned conversion of temporary progress into permanent speed. The game becomes much smoother when each reset is a deliberate end of a run, not an accidental button press.',
        ],
      },
    ],
    faq: [
      {
        question: 'What do I need for rebirth?',
        answer:
          'Current community data says 100 percent tycoon progress and three trophies are required.',
      },
      {
        question: 'What is the rebirth reward?',
        answer:
          'Community data describes a permanent income boost per rebirth, plus rebirth upgrades that improve future runs.',
      },
      {
        question: 'Can I leave the rebirth dimension?',
        answer:
          'Community notes describe a safe exit direction, but verify in-game before committing to a reset.',
      },
    ],
  },
  {
    slug: 'items-and-water-capacity-guide',
    title: 'Ice Tycoon 2 Items and Water Capacity Guide',
    seoTitle: 'Ice Tycoon 2 Items Guide - Water Capacity and Heat Crystals',
    seoDescription:
      'Use Ice Tycoon 2 items efficiently: Spoon, Cup, Canteen, Bucket, heat crystals, Frozen Magma, shopkeeper purchases, and route timing.',
    summary:
      'A practical item guide for deciding when water capacity, cold-zone survival, and Frozen Magma are worth buying or routing.',
    category: 'Items',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on community Items page data for capacity tools, heat crystals, and Frozen Magma.',
    videoSearchQueries: [
      'Ice Tycoon 2 items',
      'Ice Tycoon 2 water capacity',
      'Ice Tycoon 2 Frozen Magma',
    ],
    tags: ['Items', 'Water', 'Exploration'],
    relatedRoutes: [
      '/items',
      '/guides/all-gems-locations-guide',
      '/guides/best-upgrades-money-guide',
      '/guides/badges-and-endings-guide',
    ],
    body: [
      {
        heading: 'Capacity tools are comfort upgrades with real timing',
        paragraphs: [
          'The current item ladder starts with Spoon, then moves through Cup, Canteen, and Bucket. These items increase how much water you can carry or handle, which makes active play smoother. The trap is buying capacity at the wrong time.',
          'If your base income is weak, a bigger container can make you feel busier without increasing cash enough. If your base is already bottlenecked by tiny water trips, capacity becomes a strong purchase because it lets the rest of your upgrades work with less interruption.',
        ],
      },
      {
        heading: 'Buy heat crystals when a route needs them',
        paragraphs: [
          'Heat Crystal items are passive survival tools for cold zones. Community data lists multiple levels with stronger cold protection. These are route unlocks more than raw economy upgrades, so buy them when the next secret, badge, or exploration path actually needs colder-zone access.',
          'A heat crystal bought too early can delay machines. A heat crystal bought too late can make you walk to a route and fail the temperature check. The right timing is just before the route becomes part of your plan.',
        ],
      },
      {
        heading: 'Frozen Magma is a gem-route item',
        paragraphs: [
          'Frozen Magma is currently the most important special item because it supports the first gem route. Community data places it in the hotel and describes a short normal-lava immunity window. That makes it a timing item, not a permanent pass.',
          'Use Frozen Magma only when you know how to reach the base lava pit quickly. If you activate it too far away or get distracted by another objective, the item can expire before it delivers value.',
        ],
      },
      {
        heading: 'Items can affect ending routes',
        paragraphs: [
          'Badge data suggests at least one ending path cares about whether you buy merchant items during a run. This makes item purchasing more strategic after you are close to endings. Early players can buy useful route items freely, but completion players should check the badges guide before starting an ending-specific attempt.',
          'That is the pattern across Ice Tycoon 2: the same item can be good in a normal economy run and wrong in a badge route. Decide what kind of run you are doing before spending.',
        ],
      },
    ],
    faq: [
      {
        question: 'What water item should I buy first?',
        answer:
          'Buy the next capacity upgrade when small water trips are slowing your production more than a machine upgrade would.',
      },
      {
        question: 'Are heat crystals worth it?',
        answer:
          'Yes when a cold-zone route needs them. They are weaker if bought before you have a route that uses them.',
      },
      {
        question: 'Is Frozen Magma permanent?',
        answer:
          'Community data describes it as a short lava-immunity item used for a gem route.',
      },
    ],
  },
  {
    slug: 'badges-and-endings-guide',
    title: 'Ice Tycoon 2 Badges and Endings Guide',
    seoTitle:
      'Ice Tycoon 2 Badges Guide - Endings, Collector and Secret Finder',
    seoDescription:
      'Plan Ice Tycoon 2 badges including End 1, End 2, Collector, Up and Running, Drought, Secret Finder, trophies, gems, and rebirth-related routes.',
    summary:
      'A completion route for Ice Tycoon 2 players who want badges and endings without mixing incompatible item, rebirth, and secret goals.',
    category: 'Badges',
    difficulty: 'Advanced',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on community Badges page data and cross-links to Secrets, Items, and Rebirths.',
    videoSearchQueries: [
      'Ice Tycoon 2 badges',
      'Ice Tycoon 2 endings',
      'Ice Tycoon 2 Secret Finder badge',
    ],
    tags: ['Badges', 'Endings', 'Completion'],
    relatedRoutes: [
      '/badges',
      '/guides/all-secrets-guide',
      '/guides/all-trophies-guide',
      '/guides/rebirth-requirements-guide',
    ],
    body: [
      {
        heading: 'Pick one badge branch at a time',
        paragraphs: [
          'Ice Tycoon 2 badge data points to several different kinds of goals: ending badges, Collector, Up and Running, Drought, and Secret Finder. These do not all ask the same thing from the player. Some care about rebirth count, some care about items, some care about repairing or draining parts of the map, and some care about every secret.',
          'The right completion route starts by choosing the branch. If you are going for Secret Finder, focus on hidden interactions and gems. If you are going for ending progress, read item restrictions and rebirth requirements first. If you are going for Drought, prepare for water-source cleanup rather than a money sprint.',
        ],
      },
      {
        heading: 'End 1 and End 2 ask for different run behavior',
        paragraphs: [
          'Community badge data describes End 1 as tied to multiple rebirths and buying at least one merchant item at a specific point in the broader route. End 2 is different because it asks for a rebirth run without buying merchant items, with troops treated separately in the community note.',
          'That contrast is why completion players should not buy items on autopilot. A normal run may benefit from the shopkeeper, but an ending-specific run can punish the same habit. Decide which ending you are attempting before the run begins.',
        ],
      },
      {
        heading: 'Collector and Secret Finder overlap but are not identical',
        paragraphs: [
          'Collector is tied to the gem quest in community data. Secret Finder is tied to finding every hidden secret. A player can make progress toward both in the same session, but completing the gems route alone may not clear every hidden interaction needed for Secret Finder.',
          'Use the all-gems guide for the upgrader and Collector-style progress. Use the all-secrets guide for the broader hidden interaction checklist, including odd map triggers that are easy to miss.',
        ],
      },
      {
        heading: 'Completion gets easier after rebirth upgrades',
        paragraphs: [
          'Some badge routes become less frustrating once rebirth upgrades reduce repeated work. Trophy preservation, teleporters, auto-buy, and fast rebirth tools all change how expensive a failed attempt feels. If you are not enjoying a badge route, it may be smarter to improve your permanent run tools first.',
          'Completion is a marathon in a new Roblox tycoon. Record what you finished, avoid repeating routes without a reason, and recheck current sources after updates because badges and endings are exactly where small changes can break old advice.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Collector badge tied to?',
        answer:
          'Current community data links Collector to completing the gem quest.',
      },
      {
        question: 'What is the Secret Finder badge?',
        answer:
          'It is currently described as the badge for discovering every secret.',
      },
      {
        question: 'Should I buy items during ending runs?',
        answer:
          'Check the ending target first. Some ending routes may require buying or avoiding merchant items.',
      },
    ],
  },
  {
    slug: 'best-upgrades-money-guide',
    title: 'Ice Tycoon 2 Best Upgrades for Money',
    seoTitle: 'Ice Tycoon 2 Best Upgrades - Make Money Faster Without Codes',
    seoDescription:
      'Make money faster in Ice Tycoon 2 by prioritizing droppers, machines, water capacity, sale-side upgraders, secrets, gems, and rebirth multipliers.',
    summary:
      'A money route for players who hit a wall: fix production bottlenecks, collect permanent boosts, and use rebirth upgrades instead of waiting for codes.',
    category: 'Economy',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on official gameplay wording, Roblox tycoon structure, and community data for secrets, gem upgrader, items, and rebirth upgrades.',
    videoSearchQueries: [
      'Ice Tycoon 2 best upgrades',
      'Ice Tycoon 2 make money fast',
      'Ice Tycoon 2 tips and tricks',
    ],
    tags: ['Money', 'Upgrades', 'Strategy'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/secrets',
      '/rebirths',
      '/items',
      '/codes',
    ],
    body: [
      {
        heading: 'Fix the bottleneck you can see',
        paragraphs: [
          'Ice Tycoon 2 makes money through a production chain. When progress slows, ask where the chain is actually stuck. Is water capacity forcing tiny trips? Are machines waiting for input? Is sale value too low? Are you spending time walking because you skipped a route unlock? The best upgrade is the one that fixes the current bottleneck.',
          'This is why generic "buy everything" advice is weak. The cheapest upgrade can be right if it keeps production moving. An expensive upgrade can be right if it multiplies every cube. A route item can be right if it unlocks a permanent boost. The context decides.',
        ],
      },
      {
        heading: 'Use secrets as income upgrades',
        paragraphs: [
          'Secrets are not only for completion players. Community data describes discovered secrets as permanent income boosts, which makes them part of the money plan. If a secret is easy to grab and you already know the route, it can be stronger than another short grind for a temporary base upgrade.',
          'The five-gem route deserves special attention because it unlocks an upgrader path. Sale-side improvements are valuable because they touch the cash conversion point. Once the base produces a steady flow of ice, improving what each cube is worth can change the whole run.',
        ],
      },
      {
        heading: 'Do not overbuy comfort before output',
        paragraphs: [
          'Water capacity tools and route items feel good because they reduce annoyance. They are still not always the best first purchase. If the base barely produces anything, comfort upgrades can make low income feel smoother rather than fixing low income.',
          'Buy comfort when it lets your real output upgrades work. For example, a bigger water item is good when small trips keep interrupting production. A teleporter is good when repeated travel is eating route time. A heat crystal is good when the next secret route needs cold-zone access.',
        ],
      },
      {
        heading: 'Rebirth turns a wall into a faster next run',
        paragraphs: [
          'When normal upgrades become slow and requirements are complete, rebirth converts a finished run into permanent value. The permanent boost and rebirth upgrades are how Ice Tycoon 2 keeps money growth from becoming only a longer grind.',
          'Do not use rebirth to escape a messy run before trophies and progress are ready. Use it when the checklist is complete and your next run will clearly be faster because of the permanent multiplier or unlocked upgrades.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best upgrade in Ice Tycoon 2?',
        answer:
          'The best upgrade is the one fixing your current bottleneck: production, water handling, sale value, travel, or permanent boost progress.',
      },
      {
        question: 'Can I make money fast without codes?',
        answer:
          'Yes. Codes are unverified for the sequel; production upgrades, secrets, gems, and rebirths are the real progression systems.',
      },
      {
        question: 'Are secrets good for money?',
        answer:
          'Yes when they grant permanent value or unlock the gem upgrader route.',
      },
    ],
  },
  {
    slug: 'original-vs-ice-tycoon-2-codes-guide',
    title: 'Original Ice Tycoon vs Ice Tycoon 2 Codes',
    seoTitle: 'Ice Tycoon 2 vs Ice Tycoon Codes - Avoid Wrong Code Lists',
    seoDescription:
      'Keep original Ice Tycoon and Ice Tycoon 2 code lists separate, verify Slized Games place IDs, and avoid fake active code claims for the sequel.',
    summary:
      'A safety guide for the most common search confusion: old Ice Tycoon code lists appearing near Ice Tycoon 2 searches.',
    category: 'Safety',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Created because current search results mix original Ice Tycoon codes with Ice Tycoon 2 demand, and the demand packet included an unrelated Anime Card Farm URL.',
    videoSearchQueries: [
      'Ice Tycoon codes',
      'Ice Tycoon 2 codes',
      'Ice Tycoon 2 Roblox Slized Games',
    ],
    tags: ['Safety', 'Codes', 'Wrong Game'],
    relatedRoutes: [
      '/codes',
      '/download',
      '/updates',
      '/guides/codes-status-guide',
    ],
    body: [
      {
        heading: 'Use the place ID before trusting a guide',
        paragraphs: [
          'Ice Tycoon 2 is the Roblox place ID 124757309017950, with universe ID 10337069275 in the current API data. The original Ice Tycoon uses a different Roblox page. Both are tied to Slized Games, which is exactly why code and guide pages can get mixed together.',
          'Before trusting a code list, check whether the page clearly says Ice Tycoon 2 and points to the sequel page. If it only says Ice Tycoon, shows the original game icon, or lists old code strings without sequel testing, treat it as original-game data.',
        ],
      },
      {
        heading: 'Shared developer does not mean shared codes',
        paragraphs: [
          'A developer can reuse a style, a brand, or even a code system across games, but that does not prove the same code is live in both experiences. REBIRTH and 10KLIKES are useful watch terms because players search them, but this site does not publish them as confirmed Ice Tycoon 2 active codes.',
          'If a future official Slized Games post confirms sequel codes, this page should change quickly. Until then, the conservative approach is the player-friendly one.',
        ],
      },
      {
        heading: 'The demand packet had a second wrong-game risk',
        paragraphs: [
          'The project demand document named Ice Tycoon 2 but included a Roblox URL for Anime Card Farm. That is a separate game with cards, packs, mutations, and offline money. None of those systems should be imported into Ice Tycoon 2 pages.',
          'This site deliberately removed Anime Card Farm routes such as packs, cards, mutations, and trait gems. Ice Tycoon 2 needs secrets, gems, trophies, items, badges, and rebirth planning instead.',
        ],
      },
      {
        heading: 'Ignore scripts and fake shortcut pages',
        paragraphs: [
          'Wrong-game content is not the only risk. Roblox games attract script and auto-farm pages, especially when players search for money or codes. This wiki does not provide scripts, executors, APK mirrors, or account-risk shortcuts.',
          'The safe path is boring and reliable: open the official Roblox page, build your base, use real game mechanics, check sources, and treat every unverified code as a watch item until it works in the sequel.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can original Ice Tycoon codes work in Ice Tycoon 2?',
        answer:
          'They might only if the developer makes them work, but this site does not treat original-game codes as verified sequel codes.',
      },
      {
        question: 'Why does the site mention Anime Card Farm?',
        answer:
          'The project requirements included an unrelated Anime Card Farm URL, so the site records that as a wrong-game source to avoid data contamination.',
      },
      {
        question: 'What should I do if a watch code works?',
        answer:
          'Confirm the exact sequel place, reward, and date, then treat it as a new source-check item before sharing it as active.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const allCoreRoutes = [
  '/',
  '/codes',
  '/guides',
  '/secrets',
  '/rebirths',
  '/items',
  '/badges',
  '/download',
  '/updates',
  '/disclaimer',
  ...guides.map((guide) => `/guides/${guide.slug}`),
];
