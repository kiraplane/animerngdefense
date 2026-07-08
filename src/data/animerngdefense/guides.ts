import { CHECKED_AT, officialGameFacts, siteDescription } from './sources';
import type { Guide, GuideCategory, GuideVideo } from './types';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  noobToPro: {
    id: 'OlhoZtnWDN8',
    title: 'I Went from NOOB to PRO in Roblox Anime RNG Defense!',
    channel: 'NagRoblox',
    url: 'https://www.youtube.com/watch?v=OlhoZtnWDN8',
    thumbnailUrl: youtubeThumbnail('OlhoZtnWDN8'),
    publishedAt: '2026-07',
    viewCountLabel: 'Recent Anime RNG Defense guide result',
    checkedAt: CHECKED_AT,
  },
  codes: {
    id: '34T3mF2uvnU',
    title: 'ANIME RNG DEFENSE CODES [ROBLOX] *NEW* ALL WORKING CODES',
    channel: 'POCKET-CODES',
    url: 'https://www.youtube.com/watch?v=34T3mF2uvnU',
    thumbnailUrl: youtubeThumbnail('34T3mF2uvnU'),
    publishedAt: '2026-07',
    viewCountLabel: 'Recent code video result',
    checkedAt: CHECKED_AT,
  },
  jjkCodes: {
    id: 'fBaGzzveiHQ',
    title:
      '*NEW* ALL WORKING *JJK UPDATE* CODES FOR ANIME RNG DEFENSE IN JULY 2026!',
    channel: 'EdgedSwordHD',
    url: 'https://www.youtube.com/watch?v=fBaGzzveiHQ',
    thumbnailUrl: youtubeThumbnail('fBaGzzveiHQ'),
    publishedAt: '2026-07',
    viewCountLabel: 'Recent JJK update code result',
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

const localCover = '/animerngdefense/hero.png';
const videoCover = (video: GuideVideo) => video.thumbnailUrl;

export { siteDescription };

export const guideCategoryIntro: Record<GuideCategory, string> = {
  Beginner:
    'Start with official access, codes, first rolls, placement habits, and a clean first-map loop.',
  Codes:
    'Redeem active codes safely, understand rewards, and avoid wrong-game code lists.',
  Units:
    'Judge units by role, map performance, upgrade value, and account stage rather than rarity color alone.',
  Traits:
    'Spend trait and crystal resources only after you know which unit is worth keeping.',
  Teams:
    'Build around wave clear, single-target damage, support utility, and map-specific placement.',
  Maps: 'Read maps as pathing and wave problems, not only as bigger stat checks.',
  Luck: 'Use boosts, boxes, crystals, and rerolls in focused windows with stop rules.',
  Updates:
    'Track current JJK/update signals and separate them from old Anime Defense RNG data.',
  Safety:
    'Stay on the official Roblox page and avoid scripts, executors, fake downloads, and copied wrong-game data.',
};

export const relatedRouteLabels: Record<string, string> = {
  '/': 'Anime RNG Defense Wiki',
  '/guides': 'All Anime RNG Defense Guides',
  '/codes': 'Codes and Rewards',
  '/units': 'Units Hub',
  '/traits': 'Traits Hub',
  '/tier-list': 'Unit Tier List',
  '/teams': 'Best Teams',
  '/maps': 'Maps and Waves',
  '/summons': 'Summons and Rolls',
  '/download': 'Official Roblox Page',
  '/updates': 'JJK Update Notes',
  '/tools': 'Tools Hub',
  '/tools/team-builder': 'Team Builder Checklist',
  '/tools/luck-planner': 'Luck Spend Planner',
  '/tools/roll-tracker': 'Roll Progress Tracker',
  '/database': 'Wiki Database',
  '/database/units': 'Units Database',
  '/database/rewards': 'Rewards Database',
  '/database/teams': 'Teams Database',
  '/database/maps': 'Maps Database',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/codes-redeem-guide': 'Codes Redeem Guide',
  '/guides/unit-tier-list-guide': 'Unit Tier List Guide',
  '/guides/traits-reroll-guide': 'Traits Reroll Guide',
  '/guides/team-building-guide': 'Team Building Guide',
  '/guides/maps-waves-guide': 'Maps and Waves Guide',
  '/guides/luck-boosts-guide': 'Luck Boosts Guide',
  '/guides/jjk-update-guide': 'JJK Update Guide',
  '/guides/afk-units-guide': 'AFK Units Guide',
  '/guides/name-confusion-guide': 'Wrong-Game Name Guide',
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Anime RNG Defense Beginner Guide',
    seoTitle:
      'Anime RNG Defense Beginner Guide - Codes, Units, Maps and First Team',
    seoDescription:
      'Start Anime RNG Defense with active codes, first rolls, unit placement, upgrades, luck boosts, maps, and safe official Roblox access.',
    summary:
      'A first-session route for Roblox players who need to redeem codes, roll useful units, place defenders, upgrade a team, and clear early maps without wasting resources.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.noobToPro),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Built from the official Roblox page/API snapshot, current July 2026 code sources, competitor route surfaces, and a recent Anime RNG Defense YouTube result.',
    video: videos.noobToPro,
    videoSearchQueries: [
      'Anime RNG Defense beginner guide',
      'Anime RNG Defense noob to pro',
      'Anime RNG Defense how to get op fast',
    ],
    tags: ['Roblox', 'Beginner', 'Units'],
    relatedRoutes: [
      '/codes',
      '/units',
      '/teams',
      '/maps',
      '/guides/codes-redeem-guide',
    ],
    body: [
      {
        heading: 'Begin with the verified Roblox page',
        paragraphs: [
          'Anime RNG Defense is currently listed on Roblox as a Mera. group experience at place ID 104693964860826. The public page describes the core loop clearly: roll anime-style units, enter maps, clear enemy waves, place defenders, upgrade your team, boost luck, and protect your base. That is the source of truth for this site.',
          'Search results are noisy because Anime Defense RNG, Anime RNG TD, and older similarly named Roblox games appear beside the real target. Before using any code list or guide, check that it names Anime RNG Defense and links to the correct Roblox place.',
        ],
        bullets: [
          'Open the official Roblox page before trusting Discord, Trello, or code claims.',
          'Redeem codes before a serious rolling session.',
          'Keep one reliable early carry and clear maps instead of rerolling forever.',
          'Upgrade the unit that solves your current wave problem first.',
        ],
      },
      {
        heading: 'Use codes before your first real roll plan',
        paragraphs: [
          'The official Roblox description explicitly lists RELEASE, and current code trackers cross-check UPDATE1, UPDATE2, CURSEDHIGHSCHOOL, INNOVATIONCITY, and TYFORSUPPORT1. Redeeming these early gives you Crystals, boxes, and update materials that make the first team much smoother.',
          'The mistake is spending rewards before you know the job. Common Boxes and Crystals are best used to create a usable roster, then improve the unit that actually carries waves. If a code has a requirement, such as the reported 10,000-roll gate on TYFORSUPPORT1, do not treat the error as a typo until you meet the requirement.',
        ],
      },
      {
        heading: 'Treat every map as a placement test',
        paragraphs: [
          'Anime RNG Defense is not only a luck game. Luck decides what you can roll, but strategy decides whether those units protect the base. On early maps, place defenders where enemies stay in range longest, upgrade the carry that handles the current leak, and avoid spreading currency across every new pull.',
          'When a map fails, write down the failure: too many small enemies, one durable enemy, range problem, cooldown problem, or wrong lane coverage. That note tells you whether to roll more units, reroll a trait, change placement, or simply upgrade the right defender.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I do first in Anime RNG Defense?',
        answer:
          'Open the official Roblox page, redeem active codes, roll enough units to form a basic team, then clear starter maps while upgrading one reliable carry.',
      },
      {
        question: 'Is Anime RNG Defense the same as Anime Defense RNG?',
        answer:
          'No. Anime Defense RNG is a different Roblox game with older Fandom data and different code strings. Use the official Anime RNG Defense place ID 104693964860826.',
      },
      {
        question: 'Should I chase tier-list units immediately?',
        answer:
          'No. Early progress is faster when you build a functional team from your best available rolls, then improve it with codes, upgrades, traits, and focused rolling.',
      },
    ],
  },
  {
    slug: 'codes-redeem-guide',
    title: 'Anime RNG Defense Codes and Redeem Guide',
    seoTitle:
      'Anime RNG Defense Codes - Active Rewards, Requirements and Redeem Steps',
    seoDescription:
      'Redeem Anime RNG Defense codes for Crystals, Boxes, Cursed Fingers, and free rewards with current July 2026 code checks and wrong-game warnings.',
    summary:
      'A source-checked code guide that separates official RELEASE evidence, cross-checked active codes, reported requirements, expired codes, and wrong-game code traps.',
    category: 'Codes',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.codes),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Codes were cross-checked from the official Roblox page, Destructoid, Pro Game Guides, Roblox Den, Beebom, and current YouTube code results.',
    video: videos.codes,
    videoSearchQueries: [
      'Anime RNG Defense codes',
      'Anime RNG Defense all working codes',
      'Anime RNG Defense redeem codes',
    ],
    tags: ['Codes', 'Crystals', 'Rewards'],
    relatedRoutes: ['/codes', '/guides/beginner-guide', '/summons', '/updates'],
    body: [
      {
        heading: 'Redeem active codes before spending resources',
        paragraphs: [
          'Current sources agree that Anime RNG Defense codes can grant Crystals, boxes, Cursed Fingers, and free rewards. The official Roblox page itself lists RELEASE, while multiple current code trackers list six active codes for July 2026.',
          'Use codes before a major rolling session. Crystals and boxes are strongest when they help you build a first roster or improve the carry that clears your current map. If you redeem after spending all your early resources, you lose the chance to make a cleaner first plan.',
        ],
        bullets: [
          'Open Anime RNG Defense from the official Roblox page.',
          'Use the Codes button on the right side of the game UI.',
          'Paste codes exactly as written because Roblox code strings can be case-sensitive.',
          'Check requirements before assuming a code is broken.',
        ],
      },
      {
        heading: 'Why TYFORSUPPORT1 can fail for new players',
        paragraphs: [
          'Current code trackers list TYFORSUPPORT1 as active but gated behind at least 10,000 rolls. That means a new player can type it perfectly and still fail if the account has not met the roll requirement.',
          'The clean troubleshooting order is simple: confirm the code is spelled correctly, check whether you have already redeemed it, verify the roll requirement, then recheck whether the code has expired. Do not use script or executor pages to bypass requirements.',
        ],
      },
      {
        heading: 'Do not import Anime Defense RNG codes',
        paragraphs: [
          'Search results show older pages for Anime Defense RNG and Anime RNG TD. Those games have separate Roblox place IDs, separate communities, and separate code strings. Codes like 25KFAVS or UPDATE0.5 belong to a different game and should not be mixed into Anime RNG Defense.',
          'When a code page does not link to place ID 104693964860826 or the Mera. group experience, treat it as a lead, not a source.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the official Anime RNG Defense code?',
        answer:
          'The Roblox description checked on July 8, 2026 explicitly lists RELEASE. Other active codes are cross-checked from current code trackers.',
      },
      {
        question: 'Why does TYFORSUPPORT1 not work?',
        answer:
          'Several current sources report that TYFORSUPPORT1 requires at least 10,000 rolls before redemption.',
      },
      {
        question: 'Where should I look for future codes?',
        answer:
          'Start with the Roblox page and official community links, then cross-check large current code trackers before adding a code to your route.',
      },
    ],
  },
  {
    slug: 'unit-tier-list-guide',
    title: 'Anime RNG Defense Unit Tier List Guide',
    seoTitle:
      'Anime RNG Defense Unit Tier List - Best Roles, Carries and Team Value',
    seoDescription:
      'Use the Anime RNG Defense unit tier list guide to judge AoE carries, single-target DPS, support units, update pulls, and starter roles safely.',
    summary:
      'A practical tier-list framework for deciding which Anime RNG Defense units are worth keeping when exact public unit data is still thin.',
    category: 'Units',
    difficulty: 'Intermediate',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Built from official gameplay description, competitor tier-list demand, and conservative tower-defense role logic. No fake exact unit rankings are published.',
    videoSearchQueries: [
      'Anime RNG Defense unit tier list',
      'Anime RNG Defense best units',
      'Anime RNG Defense best team',
    ],
    tags: ['Tier List', 'Units', 'Teams'],
    relatedRoutes: [
      '/tier-list',
      '/units',
      '/teams',
      '/guides/team-building-guide',
    ],
    body: [
      {
        heading: 'Use roles before rarity labels',
        paragraphs: [
          'Anime RNG Defense search demand clearly includes tier list and best units, but current public data is not strong enough for a precise unit-by-unit ranking table. A safer launch answer is to rank roles: wave clear, single-target damage, support utility, range coverage, and update-limited value.',
          'For most accounts, an AoE carry is S-tier if it clears the wave that used to break your base. A single-target unit rises when durable enemies survive your AoE. A support unit is valuable only when it makes your real carry solve the map faster.',
        ],
        bullets: [
          'S priority: units that clear waves or finish the exact enemy that leaks.',
          'A priority: strong units that need map placement or upgrades to shine.',
          'B priority: usable fillers that help early maps but should not eat premium resources.',
          'Watch priority: new JJK/update units until current data stabilizes.',
        ],
      },
      {
        heading: 'Judge units on the same map',
        paragraphs: [
          'A tier list becomes misleading when every unit is tested in a different situation. Pick the map or wave that currently blocks you, then compare units there. The better unit is the one that reduces leaks, shortens upgrade pressure, or handles a missing role.',
          'Do not bench a working lower-rarity carry the moment you roll a rarer unit. Rarity gives potential, but placement, attack pattern, cooldown, and upgrade scaling decide map results.',
        ],
      },
      {
        heading: 'Treat JJK and update units as role candidates first',
        paragraphs: [
          'Recent search and video demand is clustered around JJK update pulls, new codes, gems, and best units. That is useful as a watch signal, but it does not mean every new unit should jump to S tier on day one.',
          'Put a new update unit into a job first: wave clear, boss damage, support, lane control, or farming value. If the unit does not outperform your current holder of that job on the same map, keep it as a watch unit until more source-checked data stabilizes.',
        ],
        bullets: [
          'JJK/update carry: test against the wave that currently leaks.',
          'JJK/update support: test whether it makes your main carry clear faster.',
          'JJK/update finisher: test against durable enemies, not easy starter waves.',
        ],
      },
      {
        heading: 'When to reroll for better units',
        paragraphs: [
          'Reroll when you can name the role you are missing. Rolling because the tier list says a mythical unit exists is a fast way to burn rewards. Rolling because your team lacks area clear, range, or boss damage is a real plan.',
          'Use luck boosts during focused sessions. Stop once the missing role is solved well enough to progress, then return to maps and upgrades.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Anime RNG Defense have a real unit tier list?',
        answer:
          'Search demand exists, but public exact unit data is still thin. This site ranks roles and decision logic instead of inventing precise rankings.',
      },
      {
        question: 'What is the best unit type for beginners?',
        answer:
          'A reliable AoE or wave-clear carry is usually the best first priority because it protects the base across early maps.',
      },
      {
        question: 'Should I spend all Crystals on one rare unit?',
        answer:
          'Only if that unit is already your real map carry. Otherwise, save resources until you know which role deserves investment.',
      },
    ],
  },
  {
    slug: 'traits-reroll-guide',
    title: 'Anime RNG Defense Traits and Reroll Guide',
    seoTitle:
      'Anime RNG Defense Traits - Reroll Strategy, Crystals and Unit Priority',
    seoDescription:
      'Plan Anime RNG Defense trait rerolls with Crystals, carry selection, stop rules, and safe unit investment before wasting resources.',
    summary:
      'A conservative trait guide for deciding when a unit deserves rerolls, how to use Crystals, and when to stop chasing perfection.',
    category: 'Traits',
    difficulty: 'Intermediate',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Cross-checked from code reward sources mentioning Crystals and competitor trait demand. Exact trait names should be verified in-game before building a full trait table.',
    tags: ['Traits', 'Reroll', 'Crystals'],
    relatedRoutes: [
      '/traits',
      '/summons',
      '/guides/luck-boosts-guide',
      '/tier-list',
    ],
    body: [
      {
        heading: 'Reroll traits only on keepers',
        paragraphs: [
          'Traits are tempting because they promise a direct way to make a unit stronger, but they are not the first thing a new player should chase. Codes, boxes, and basic placement create more early value. Trait resources matter once you know which unit will stay in your lineup.',
          'A keeper is a unit that already solves a map role: it clears waves, finishes durable enemies, or supports your main carry. If the unit is only there because it is your newest pull, wait before spending Crystals.',
        ],
      },
      {
        heading: 'Match the trait goal to the unit role',
        paragraphs: [
          'The right trait depends on what the unit does. A wave-clear unit wants better uptime, range, or damage against groups. A single-target unit wants better finishing power. A support unit wants whatever improves its real utility window.',
          'That is why a generic "best trait" answer is weaker than a role answer. The best trait is the one that changes your failed map result.',
        ],
        bullets: [
          'Damage gaps point toward damage or attack-value traits.',
          'Lane coverage gaps point toward range or uptime value.',
          'Cooldown problems point toward faster attack cycles.',
          'Support units should not consume rerolls until your carry is stable.',
        ],
      },
      {
        heading: 'Set a stop rule before rerolling',
        paragraphs: [
          'RNG systems become expensive when you chase perfect rolls without a stop rule. Before spending, decide what counts as good enough: a trait that improves the current map, a trait that fits your main carry, or a trait that lets you clear one more wave threshold.',
          'Once you hit the rule, stop and test maps. More rerolls are only justified if the map result still fails for the same stat reason.',
        ],
      },
    ],
    faq: [
      {
        question: 'When should I start rerolling traits?',
        answer:
          'Start after you have a unit worth keeping and can explain which stat or role problem the trait needs to solve.',
      },
      {
        question: 'Are Crystals for traits?',
        answer:
          'Current Pro Game Guides coverage describes Crystals as important for unlocking traits, so this site treats them as a trait and upgrade planning resource.',
      },
      {
        question: 'Should beginners reroll traits immediately?',
        answer:
          'Usually no. Beginners get more value from redeeming codes, rolling a usable roster, learning placement, and upgrading one carry first.',
      },
    ],
  },
  {
    slug: 'team-building-guide',
    title: 'Anime RNG Defense Best Team Building Guide',
    seoTitle:
      'Anime RNG Defense Best Team - Unit Roles, Placement and Upgrade Order',
    seoDescription:
      'Build better Anime RNG Defense teams with AoE carries, single-target DPS, support units, code rewards, placement, and upgrade timing.',
    summary:
      'A role-first team guide for turning random pulls into a map-clearing lineup without copying fake exact meta claims.',
    category: 'Teams',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on official tower-defense gameplay description, competitor best-team demand, and source-safe role logic.',
    tags: ['Teams', 'Placement', 'Upgrades'],
    relatedRoutes: ['/teams', '/units', '/maps', '/tools/team-builder'],
    body: [
      {
        heading: 'Build one clear damage plan',
        paragraphs: [
          'The best Anime RNG Defense team is not just your rarest four units. It is the set of units that covers the map you are trying to clear. Start with one wave-clear carry, add a finisher for tougher enemies, then add support only if the support changes a real outcome.',
          'If you cannot name each unit role, your team is probably a pile of pulls instead of a lineup. That can work on early maps, but harder waves punish it.',
        ],
      },
      {
        heading: 'Upgrade the unit that changes the leak',
        paragraphs: [
          'When enemies reach the base, ask why. If many weak enemies leak, upgrade or replace the wave-clear unit. If one durable enemy survives, improve single-target damage. If enemies leave range too quickly, placement and range matter more than another random roll.',
          'This is also how you should use code rewards. Crystals and boxes are not generic "spend now" buttons. They should fix the part of your lineup that blocks the next map.',
        ],
        bullets: [
          'AoE first for grouped waves.',
          'Single-target second for durable enemies.',
          'Support third when it amplifies a real carry.',
          'Traits after the carry is worth keeping.',
        ],
      },
      {
        heading: 'Retest after every big change',
        paragraphs: [
          'After a new unit, trait, or upgrade, go back to the same map that caused trouble. If the same wave still fails, you learned the change did not solve the actual problem. If the wave clears but a later one fails, the team is improving.',
          'This sounds basic, but it is the difference between strategy and endless rolling. Anime RNG Defense rewards luck, but it still asks you to read results.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best Anime RNG Defense team?',
        answer:
          'The best team for most players combines wave clear, single-target damage, and support or range coverage based on the map they are clearing.',
      },
      {
        question: 'Should I use only the rarest units?',
        answer:
          'No. Use the rarest units that actually solve your map. A lower-rarity AoE carry can outperform a rare unit with the wrong role.',
      },
      {
        question: 'How do I know what to upgrade first?',
        answer:
          'Upgrade the unit that affects the wave or enemy type currently leaking into your base.',
      },
    ],
  },
  {
    slug: 'maps-waves-guide',
    title: 'Anime RNG Defense Maps and Waves Guide',
    seoTitle:
      'Anime RNG Defense Maps Guide - Waves, Placement and Base Defense',
    seoDescription:
      'Clear Anime RNG Defense maps by reading lanes, wave pressure, placement spots, upgrades, and team role gaps before rerolling blindly.',
    summary:
      'A maps and waves guide that turns failed clears into useful decisions about placement, team roles, upgrades, and luck spending.',
    category: 'Maps',
    difficulty: 'Intermediate',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on official map/wave description and competitor map guide demand. Exact map names should be expanded after stronger data appears.',
    tags: ['Maps', 'Waves', 'Placement'],
    relatedRoutes: ['/maps', '/teams', '/guides/team-building-guide'],
    body: [
      {
        heading: 'Read the path before spending resources',
        paragraphs: [
          'Every map asks the same first question: where do enemies stay in range the longest? That spot is where your best early defender usually belongs. If a path bends, overlaps, or slows enemies, it can multiply unit value without any extra rolling.',
          'Players often reroll after a failed map when the better answer is a placement change. Watch which enemies leak and where your strongest unit stops hitting them.',
        ],
      },
      {
        heading: 'Classify the failed wave',
        paragraphs: [
          'A failed wave is information. Many weak enemies mean your area damage or coverage is weak. One durable enemy means single-target damage is weak. Enemies leaking from a second lane mean placement or team spread is weak. Fast leaks mean range, cooldown, or upgrade timing may be the problem.',
          'Once you classify the wave, your next step becomes clear: upgrade a carry, change placement, add a finisher, reroll a trait, or use luck boosts to chase the missing role.',
        ],
      },
      {
        heading: 'Do not overbuild for the previous map',
        paragraphs: [
          'A team that clears one map can fail the next because the lane shape changes. Before spending heavily on a unit, test whether the unit still performs on the next map. This keeps you from over-investing in a solution that only worked for one layout.',
          'Use the maps hub as a habit: map first, role second, spending third.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I clear harder Anime RNG Defense maps?',
        answer:
          'Identify the failed wave, adjust placement, upgrade the unit that affects the leak, then roll or trait only if your current team lacks the needed role.',
      },
      {
        question: 'Are maps only stat checks?',
        answer:
          'No. Placement, lane coverage, upgrade timing, and team role balance can matter as much as raw rarity.',
      },
      {
        question: 'Should I reroll after every failed map?',
        answer:
          'No. First test whether the problem is placement or upgrade order. Reroll when the team truly lacks a role.',
      },
    ],
  },
  {
    slug: 'luck-boosts-guide',
    title: 'Anime RNG Defense Luck Boosts and Rolling Guide',
    seoTitle:
      'Anime RNG Defense Luck Boosts - Rolls, Boxes, Crystals and Stop Rules',
    seoDescription:
      'Use Anime RNG Defense luck boosts, boxes, Crystals, and rerolls with a focused plan for better units, traits, and progression.',
    summary:
      'A rolling guide for using luck boosts and reward boxes at the right time instead of burning them during unfocused sessions.',
    category: 'Luck',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Built from official luck-boost gameplay wording, current code reward lists, and guide demand around scrolls, boxes, and rerolls.',
    tags: ['Luck', 'Rolls', 'Boxes'],
    relatedRoutes: ['/summons', '/codes', '/tools/luck-planner', '/traits'],
    body: [
      {
        heading: 'Roll with a target role',
        paragraphs: [
          'Luck boosts are strongest when you know what you are missing. If your team lacks wave clear, roll for a better area unit. If durable enemies leak, roll for a finisher. If the team already clears maps, save resources for traits or update units.',
          'Rolling without a target feels fun, but it makes every result hard to evaluate. A target role gives you a stop point.',
        ],
      },
      {
        heading: 'Stack rewards into focused windows',
        paragraphs: [
          'Use boxes, Crystals, and luck boosts around a planned session. Redeem codes first, open relevant boxes, start boosts when you are ready to roll, and stop when your missing role is solved well enough to test maps.',
          'A boost ticking while you browse menus is wasted value. Prepare the plan before you activate time-limited luck.',
        ],
      },
      {
        heading: 'Use gems and boxes after the target is named',
        paragraphs: [
          'The safest gems route is not "spend because the balance increased." Decide whether gems are buying rolls, traits, or upgrade pressure for a unit that already has a job. If the account only needs a starter roster, boxes can be fine. If the account already has a carry, gems are better saved for the missing role or trait window.',
          'This is especially important after code drops. A new code can make the account feel rich for five minutes, but random spending can still leave the team with the same wave-clear or boss-damage problem.',
        ],
        bullets: [
          'Need roster depth: use boxes and rolls.',
          'Need a stronger keeper: save for traits or focused rerolls.',
          'Need map progress now: spend only if the pull or upgrade fixes that map.',
        ],
      },
      {
        heading: 'Stop before perfection drains the account',
        paragraphs: [
          'RNG games invite perfection chasing. Anime RNG Defense does not require that at every stage. A good-enough carry that clears the next map is more valuable than a theoretical perfect pull that consumes all rewards before you make progress.',
          'After every meaningful pull, test the map. Progress confirms the spend was useful; repeated failure tells you to solve a different role.',
        ],
      },
    ],
    faq: [
      {
        question: 'When should I use luck boosts?',
        answer:
          'Use luck boosts when you have enough resources for a focused rolling session and know which role or unit problem you want to solve.',
      },
      {
        question: 'Should I open boxes immediately?',
        answer:
          'Starter boxes are usually useful early. Higher-value boxes are better when you know your missing role and can compare new pulls clearly.',
      },
      {
        question: 'What is a good stop rule?',
        answer:
          'Stop when you pull a unit or trait that solves the current map problem well enough to test progression.',
      },
    ],
  },
  {
    slug: 'jjk-update-guide',
    title: 'Anime RNG Defense JJK Update Guide',
    seoTitle:
      'Anime RNG Defense JJK Update - Cursed Fingers, Update Codes and Notes',
    seoDescription:
      'Track the Anime RNG Defense JJK update tag, Cursed Fingers, current codes, update rewards, and what to verify before spending resources.',
    summary:
      'A current update snapshot for the JJK-tagged Roblox title, code rewards, Cursed Fingers, and update-safe progression decisions.',
    category: 'Updates',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.jjkCodes),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Built from the Roblox title/description and current code trackers. Exact update mechanics should be rechecked after each Roblox update timestamp.',
    video: videos.jjkCodes,
    videoSearchQueries: [
      'Anime RNG Defense JJK update codes',
      'Anime RNG Defense Cursed Fingers',
      'Anime RNG Defense Update 2',
    ],
    tags: ['JJK', 'Update', 'Cursed Fingers'],
    relatedRoutes: ['/updates', '/codes', '/guides/codes-redeem-guide'],
    body: [
      {
        heading: 'What is confirmed right now',
        paragraphs: [
          'The Roblox game title currently displays a JJK update tag, and current code trackers list CURSEDHIGHSCHOOL as a code that rewards Cursed Fingers. The official description also still presents the basic gameplay loop and the RELEASE code.',
          'That gives enough confidence for an update page, but not enough for a complete item database or exact unit ranking. Treat this page as a checked snapshot rather than permanent truth.',
        ],
      },
      {
        heading: 'Spend update items after the game explains them',
        paragraphs: [
          'Cursed Fingers look like the update-specific reward to watch. If you redeem CURSEDHIGHSCHOOL, check the in-game UI before spending them. Do not assume rules from other JJK-themed Roblox games apply here.',
          'The safest update routine is: redeem codes, identify the new reward, test whether it affects units, traits, or maps, then update your team plan.',
        ],
      },
      {
        heading: 'What to recheck after the next update',
        paragraphs: [
          'Recheck the Roblox title, description, update timestamp, active codes, and whether competitors have published new unit or trait evidence. If the title tag changes, JJK-specific advice should move from P0 current coverage to archived update notes.',
          'This is also where future pages can expand: exact event unit pages, map routes, and item usage guides should wait until sources are clearer.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is the JJK update official?',
        answer:
          'The current Roblox title carries a JJK update tag. Exact mechanics beyond current code rewards should be verified in-game or through official/community sources.',
      },
      {
        question: 'What code gives Cursed Fingers?',
        answer:
          'Current code trackers list CURSEDHIGHSCHOOL as rewarding 200 Crystals and 3 Cursed Fingers.',
      },
      {
        question: 'Should this update have a full unit database?',
        answer:
          'Not yet. Current source confidence supports an update guide and watch notes, not a complete exact unit table.',
      },
    ],
  },
  {
    slug: 'afk-units-guide',
    title: 'Anime RNG Defense AFK Units and Idle Setup Guide',
    seoTitle:
      'Anime RNG Defense AFK Units - Idle Setup, Placement and Safe Limits',
    seoDescription:
      'Plan Anime RNG Defense AFK units and idle-style setup safely with placement, upgrades, code rewards, and no scripts or executors.',
    summary:
      'A safe AFK-style guide focused on stable placement and account-safe play, not automation scripts or exploit shortcuts.',
    category: 'Safety',
    difficulty: 'Intermediate',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Created because competitor surfaces show AFK-unit demand. This page intentionally avoids scripts, executors, and automated exploit methods.',
    tags: ['AFK', 'Safety', 'Placement'],
    relatedRoutes: ['/teams', '/maps', '/guides/name-confusion-guide'],
    body: [
      {
        heading: 'AFK should mean stable, not unsafe',
        paragraphs: [
          'Players search for AFK units because tower defense games reward stable setups. For this site, AFK means a lineup and placement pattern that can handle routine waves with less attention. It does not mean executors, auto-farm scripts, private servers, or modified clients.',
          'If a page asks you to paste code into an executor, it is outside this wiki scope and can put your Roblox account at risk.',
        ],
      },
      {
        heading: 'Build an idle-friendly lineup',
        paragraphs: [
          'An idle-friendly lineup needs coverage and consistency. Use an AoE carry for groups, a single-target unit for durable enemies, and placement where enemies stay in range. Upgrade the unit that handles the earliest leak before trying to make the setup more hands-off.',
          'A unit that clears one manual attempt may still fail unattended if timing or placement is fragile. Test longer runs before trusting the setup.',
        ],
      },
      {
        heading: 'Know when to return to active play',
        paragraphs: [
          'If the game adds update rewards, new maps, or new code resources, return to active testing. AFK-style setups get stale when map pressure changes. Use updates and guide pages to decide whether your old team still works.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does this guide provide auto-farm scripts?',
        answer:
          'No. It covers account-safe placement and team planning only, not scripts, executors, private servers, or modified clients.',
      },
      {
        question: 'What makes a good AFK unit?',
        answer:
          'Reliable range, wave clear, and upgrade efficiency matter more than rarity alone.',
      },
      {
        question: 'Should I AFK during new updates?',
        answer:
          'Test actively after updates first, especially when new rewards, maps, or code items appear.',
      },
    ],
  },
  {
    slug: 'name-confusion-guide',
    title: 'Anime RNG Defense Name Confusion Guide',
    seoTitle:
      'Anime RNG Defense vs Anime Defense RNG, Anime RNG TD and Thanos Simulator',
    seoDescription:
      'Avoid wrong-game Anime RNG Defense guides by separating Anime Defense RNG, Anime RNG TD, and Infinity Gauntlet Thanos Simulator data.',
    summary:
      'A safety and source guide for players who see old or wrong-game search results beside Anime RNG Defense.',
    category: 'Safety',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Created because search results mix Anime RNG Defense with Anime Defense RNG, Anime RNG TD, and the old source template Thanos Simulator.',
    tags: ['Safety', 'Wrong Game', 'Roblox'],
    relatedRoutes: ['/download', '/codes', '/guides/codes-redeem-guide'],
    body: [
      {
        heading: 'The verified target is Anime RNG Defense',
        paragraphs: [
          'This site is for Anime RNG Defense at Roblox place ID 104693964860826, universe ID 9940812243, by the Mera. group. That is the game described by the official page as a luck-and-strategy tower defense where players roll anime-style units and clear maps.',
          'If a page points to a different Roblox place, talks about different code strings, or uses a different developer, do not treat it as source data for this site.',
        ],
      },
      {
        heading: 'Anime Defense RNG and Anime RNG TD are different games',
        paragraphs: [
          'Anime Defense RNG has older Fandom pages and different code names. Anime RNG TD is another similarly named tower defense game. Both can be useful as search-confusion examples, but their units, codes, maps, and Discord links should not be imported into Anime RNG Defense.',
          'This is especially important for codes. A wrong-game active code looks helpful but creates bad user experience when players paste it into the real game and it fails.',
        ],
      },
      {
        heading: 'Infinity Gauntlet Thanos Simulator is not this game',
        paragraphs: [
          'The previous project template was about Infinity Gauntlet | Thanos Simulator, a separate Roblox experience. Anime RNG Defense is not an alternate name for that game. Any remaining Thanos Simulator references should be treated as template residue, not player-facing guidance.',
          'The safe rule is simple: official Roblox URL first, current title second, code cross-check third.',
        ],
      },
    ],
    faq: [
      {
        question:
          'Is Anime RNG Defense also called Infinity Gauntlet Thanos Simulator?',
        answer:
          'No. The official URL in this project points to Anime RNG Defense by Mera.; Infinity Gauntlet | Thanos Simulator is a different Roblox game.',
      },
      {
        question: 'Can I use Anime Defense RNG codes here?',
        answer:
          'No. Anime Defense RNG code strings belong to a different game and should not be used as Anime RNG Defense evidence.',
      },
      {
        question: 'How do I verify a guide is for this game?',
        answer:
          'Look for the Anime RNG Defense name, Mera. creator group, and Roblox place ID 104693964860826.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const allCoreRoutes = [
  '/',
  '/guides',
  '/codes',
  '/units',
  '/traits',
  '/tier-list',
  '/teams',
  '/maps',
  '/summons',
  '/download',
  '/updates',
  '/tools',
  '/tools/team-builder',
  '/tools/luck-planner',
  '/tools/roll-tracker',
  '/database',
  '/database/units',
  '/database/rewards',
  '/database/teams',
  '/database/maps',
  ...guides.map((guide) => `/guides/${guide.slug}`),
  '/disclaimer',
  '/privacy',
  '/terms',
  '/cookie',
];
