import { CHECKED_AT } from './sources';

export type DatabaseConfidence = 'high' | 'medium' | 'watch';

export type DatabaseKind = 'units' | 'rewards' | 'teams' | 'maps';

export interface WikiDatabaseBase {
  id: string;
  name: string;
  aliases?: string[];
  category: string;
  stage: 'Starter' | 'Early' | 'Midgame' | 'Advanced' | 'Update';
  summary: string;
  prerequisites: string[];
  routeHint: string;
  relatedRoutes: string[];
  relatedEntities: string[];
  sourcePages: string[];
  confidence: DatabaseConfidence;
}

export interface UnitEntry extends WikiDatabaseBase {
  kind: 'unit';
  unlockMethod: string;
  abilityFocus: string;
  trackerTasks: string[];
}

export interface RewardEntry extends WikiDatabaseBase {
  kind: 'reward';
  role: string;
  unlockPath: string[];
  usefulFor: string[];
}

export interface TeamEntry extends WikiDatabaseBase {
  kind: 'team';
  location: string;
  recommendedPrep: string[];
  rewards: string[];
}

export interface MapEntry extends WikiDatabaseBase {
  kind: 'map';
  purpose: string;
  keyObjectives: string[];
}

export type WikiDatabaseEntry = UnitEntry | RewardEntry | TeamEntry | MapEntry;

export interface DatabaseTableRecord {
  id: string;
  name: string;
  aliases: string[];
  category: string;
  stage: string;
  summary: string;
  details: string[];
  prerequisites: string[];
  routeHint: string;
  relatedRoutes: string[];
  relatedEntities: string[];
  sourcePages: string[];
  confidence: DatabaseConfidence;
}

export const databaseUpdatedAt = CHECKED_AT;

export const databaseSourceNote =
  'Structured from the official Roblox page, Roblox API facts, current code trackers, competitor route surfaces, and current YouTube results. Exact unit names, drop rates, and map values should be rechecked after updates.';

export const units: UnitEntry[] = [
  {
    kind: 'unit',
    id: 'starter-defender',
    name: 'Starter Defender',
    aliases: ['first unit', 'starter unit'],
    category: 'Starter unit role',
    stage: 'Starter',
    summary:
      'Your first useful defender should hold early waves while you learn placement, upgrade timing, and the rolling loop.',
    unlockMethod:
      'Roll early units, then keep the strongest available basic defender.',
    abilityFocus: 'Stable early-wave damage before rare pulls appear.',
    prerequisites: [
      'Open the official Roblox experience',
      'Redeem starter codes',
    ],
    routeHint:
      'Do not reroll forever before playing maps. Use codes, keep the best early defender, clear waves, and roll again after you earn more resources.',
    trackerTasks: [
      'Redeem active codes before serious rolling.',
      'Keep one unit that can clear early waves.',
      'Upgrade the carry before spreading currency thin.',
      'Replace it only when a rarer unit clearly outperforms it.',
    ],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/codes',
      '/guides/unit-tier-list-guide',
    ],
    relatedEntities: ['Crystals', 'Common Boxes', 'early maps'],
    sourcePages: ['Roblox official description', 'Beginner video'],
    confidence: 'high',
  },
  {
    kind: 'unit',
    id: 'aoe-carry',
    name: 'AoE Carry',
    aliases: ['wave clear unit', 'area damage unit'],
    category: 'Team role',
    stage: 'Early',
    summary:
      'Area damage is the safest early team priority because Anime RNG Defense asks players to clear enemy waves across different maps.',
    unlockMethod:
      'Roll units and test whether their attack pattern covers lanes or clustered enemies.',
    abilityFocus: 'Wave clear, map stability, and lower leak risk.',
    prerequisites: [
      'Starter resources',
      'Enough map attempts to compare units',
    ],
    routeHint:
      'A rare single-target unit can look exciting, but early teams usually feel better once one defender handles groups reliably.',
    trackerTasks: [
      'Place the unit where enemies stay in range longest.',
      'Upgrade it first if it clears multiple enemies.',
      'Pair it with a single-target finisher.',
      'Recheck performance on a harder map before calling it your main carry.',
    ],
    relatedRoutes: ['/units', '/teams', '/guides/team-building-guide', '/maps'],
    relatedEntities: ['team building', 'maps', 'waves'],
    sourcePages: ['Roblox official description', 'Competitor team pages'],
    confidence: 'medium',
  },
  {
    kind: 'unit',
    id: 'single-target-boss-dps',
    name: 'Single-Target DPS',
    aliases: ['boss killer', 'elite damage unit'],
    category: 'Team role',
    stage: 'Midgame',
    summary:
      'A single-target unit becomes important once waves include tougher enemies that survive your area clear.',
    unlockMethod:
      'Roll higher-rarity units and compare boss or elite damage, not only rarity color.',
    abilityFocus:
      'Finishing durable enemies before they leak through the base.',
    prerequisites: ['Stable early clear', 'A basic AoE carry'],
    routeHint:
      'Treat high rarity as a lead, not a final answer. If a unit only looks strong but fails to finish key enemies, keep testing.',
    trackerTasks: [
      'Test against the enemy that usually leaks.',
      'Upgrade after your AoE carry is stable.',
      'Place near long path coverage or boss choke points.',
      'Do not replace team balance with four single-target units.',
    ],
    relatedRoutes: ['/units', '/tier-list', '/guides/unit-tier-list-guide'],
    relatedEntities: ['tier list', 'boss waves', 'team roles'],
    sourcePages: ['Competitor tier surfaces', 'YouTube guide result'],
    confidence: 'medium',
  },
  {
    kind: 'unit',
    id: 'support-or-buffer',
    name: 'Support or Buffer',
    aliases: ['support unit', 'utility unit'],
    category: 'Team role',
    stage: 'Midgame',
    summary:
      'Support value depends on whether the unit improves your real carry, slows enemies, or helps the lane where leaks happen.',
    unlockMethod:
      'Roll and test utility effects after your damage core already works.',
    abilityFocus:
      'Amplifying the main carry instead of replacing the damage plan.',
    prerequisites: ['Known carry unit', 'Map where extra utility matters'],
    routeHint:
      'Support is powerful only when it supports a plan. Do not keep a utility unit just because the label sounds rare.',
    trackerTasks: [
      'Identify your main damage unit first.',
      'Test whether support changes the leak point.',
      'Upgrade support after damage thresholds are solved.',
      'Move it between maps when enemy paths change.',
    ],
    relatedRoutes: ['/teams', '/traits', '/guides/team-building-guide'],
    relatedEntities: ['team building', 'traits', 'map lanes'],
    sourcePages: ['Roblox official description', 'Manual review'],
    confidence: 'watch',
  },
  {
    kind: 'unit',
    id: 'event-or-jjk-unit',
    name: 'JJK Update Unit',
    aliases: ['event unit', 'limited unit'],
    category: 'Update unit role',
    stage: 'Update',
    summary:
      'The Roblox title currently carries a JJK update tag, so event-themed units and rewards deserve watch coverage without inventing a full unit table.',
    unlockMethod:
      'Use current update resources and official game links before relying on old unit lists.',
    abilityFocus:
      'Update-limited progress, event materials, and fresh team tests.',
    prerequisites: ['Current update check', 'Active code redemption'],
    routeHint:
      'If a unit appears only in a new update, wait for more source confirmation before treating it as permanent tier-list truth.',
    trackerTasks: [
      'Check the Roblox title and description.',
      'Redeem current JJK/update codes.',
      'Test the unit on the map that blocks you.',
      'Avoid copying tier claims from unrelated anime TD games.',
    ],
    relatedRoutes: ['/updates', '/guides/jjk-update-guide', '/tier-list'],
    relatedEntities: ['JJK update', 'Cursed Fingers', 'Update 2'],
    sourcePages: ['Roblox official title', 'Current code trackers'],
    confidence: 'medium',
  },
];

export const rewardItems: RewardEntry[] = [
  {
    kind: 'reward',
    id: 'crystals',
    name: 'Crystals',
    category: 'Currency',
    stage: 'Starter',
    role: 'Core upgrade and trait currency',
    summary:
      'Crystals are the safest first reward to understand because active codes repeatedly grant them and Pro Game Guides describes them as useful for traits.',
    prerequisites: ['Redeem current codes', 'Know your main unit'],
    unlockPath: [
      'Redeem RELEASE, UPDATE1, UPDATE2, and other current codes.',
      'Use crystals after deciding which unit deserves investment.',
      'Avoid spending them randomly across every early pull.',
    ],
    usefulFor: ['Traits', 'early upgrades', 'faster progression'],
    routeHint:
      'Crystals should solve a bottleneck. If you do not know which unit matters, hold some until the team plan is clearer.',
    relatedRoutes: ['/codes', '/traits', '/guides/traits-reroll-guide'],
    relatedEntities: ['traits', 'codes', 'unit upgrades'],
    sourcePages: ['Roblox official description', 'Pro Game Guides'],
    confidence: 'medium',
  },
  {
    kind: 'reward',
    id: 'common-boxes',
    name: 'Common Boxes',
    category: 'Reward box',
    stage: 'Starter',
    role: 'Early roster filler',
    summary:
      'Common Boxes help a new account widen its roster before rare and event rewards matter.',
    prerequisites: ['Redeem RELEASE or INNOVATIONCITY'],
    unlockPath: [
      'Claim box codes before heavy rolling.',
      'Open boxes to create a baseline roster.',
      'Keep the best early role coverage rather than every duplicate.',
    ],
    usefulFor: ['new players', 'early unit depth', 'first maps'],
    routeHint:
      'Boxes are most valuable before your roster is stable. Use them early, then start judging team roles.',
    relatedRoutes: ['/codes', '/units', '/guides/beginner-guide'],
    relatedEntities: ['RELEASE', 'INNOVATIONCITY', 'starter roster'],
    sourcePages: ['Destructoid', 'Roblox Den'],
    confidence: 'medium',
  },
  {
    kind: 'reward',
    id: 'rare-and-epic-boxes',
    name: 'Rare and Epic Boxes',
    category: 'Reward box',
    stage: 'Early',
    role: 'Higher-quality roster depth',
    summary:
      'Rare and Epic Boxes are listed in the INNOVATIONCITY reward bundle and should be spent when you can compare roles, not just colors.',
    prerequisites: ['Redeem INNOVATIONCITY', 'Understand team role gaps'],
    unlockPath: [
      'Redeem INNOVATIONCITY while active.',
      'Open boxes after checking your current missing role.',
      'Test new pulls against the same map for fair comparison.',
    ],
    usefulFor: ['team upgrades', 'role coverage', 'map clears'],
    routeHint:
      'A higher-rarity pull is not automatically your best placement. Test whether it fixes the actual wave or lane problem.',
    relatedRoutes: ['/units', '/teams', '/guides/team-building-guide'],
    relatedEntities: ['INNOVATIONCITY', 'team roles', 'maps'],
    sourcePages: ['Destructoid', 'Pro Game Guides', 'Roblox Den'],
    confidence: 'medium',
  },
  {
    kind: 'reward',
    id: 'cursed-fingers',
    name: 'Cursed Fingers',
    category: 'JJK update item',
    stage: 'Update',
    role: 'Event/update reward',
    summary:
      'Cursed Fingers appear in current CURSEDHIGHSCHOOL code rewards and connect the site to the active JJK update tag.',
    prerequisites: ['Redeem CURSEDHIGHSCHOOL', 'Check update notes'],
    unlockPath: [
      'Redeem CURSEDHIGHSCHOOL exactly as written.',
      'Confirm whether the current update asks for the item.',
      'Spend it only when the in-game UI makes the use clear.',
    ],
    usefulFor: ['JJK update', 'event progression', 'watch coverage'],
    routeHint:
      'Do not assume old anime-game item rules apply. Treat Cursed Fingers as current Anime RNG Defense update material.',
    relatedRoutes: ['/updates', '/guides/jjk-update-guide', '/codes'],
    relatedEntities: ['CURSEDHIGHSCHOOL', 'JJK update'],
    sourcePages: ['Current code trackers', 'Roblox title tag'],
    confidence: 'medium',
  },
  {
    kind: 'reward',
    id: 'luck-boosts',
    name: 'Luck Boosts and Potions',
    category: 'Luck resource',
    stage: 'Early',
    role: 'Better rolling sessions',
    summary:
      'Luck resources should be stacked around planned rolling windows so they improve meaningful pulls instead of disappearing during idle menu time.',
    prerequisites: ['Enough rolls or boxes to use during the boost'],
    unlockPath: [
      'Prepare codes and boxes first.',
      'Start the boost only when you are ready to roll.',
      'Stop rolling when your target role is solved.',
    ],
    usefulFor: ['rare units', 'trait planning', 'team upgrades'],
    routeHint:
      'The best luck boost is not the longest boost. It is the one used during a focused rolling session with a clear stop rule.',
    relatedRoutes: ['/guides/luck-boosts-guide', '/summons', '/traits'],
    relatedEntities: ['rolling', 'luck', 'traits'],
    sourcePages: ['Roblox official description', 'Competitor luck pages'],
    confidence: 'medium',
  },
  {
    kind: 'reward',
    id: 'trait-investment',
    name: 'Trait Investment',
    category: 'Upgrade decision',
    stage: 'Midgame',
    role: 'Unit optimization',
    summary:
      'Traits are a good midgame sink once you know which units actually carry maps for your account.',
    prerequisites: ['Known carry unit', 'Crystals or reroll resources'],
    unlockPath: [
      'Pick the unit that solves your hardest map.',
      'Reroll traits only on units you expect to keep.',
      'Stop when the trait supports the unit role well enough.',
    ],
    usefulFor: ['carry units', 'map progression', 'team optimization'],
    routeHint:
      'Do not chase perfect traits on a temporary unit. A good-enough trait on a real carry beats a perfect trait on a unit you will bench tomorrow.',
    relatedRoutes: ['/traits', '/guides/traits-reroll-guide', '/tier-list'],
    relatedEntities: ['traits', 'crystals', 'tier list'],
    sourcePages: ['Pro Game Guides', 'Manual review'],
    confidence: 'watch',
  },
];

export const teamChecks: TeamEntry[] = [
  {
    kind: 'team',
    id: 'starter-code-team',
    name: 'Starter Code Team',
    category: 'Beginner team',
    stage: 'Starter',
    location: 'First maps and early waves',
    summary:
      'A beginner setup built around redeeming codes, opening boxes, keeping one carry, and learning upgrade timing.',
    prerequisites: ['Official Roblox page', 'Active codes redeemed'],
    recommendedPrep: [
      'Redeem RELEASE and current update codes.',
      'Open starter boxes before heavy map attempts.',
      'Choose the best early AoE or carry unit.',
      'Upgrade one carry before spreading resources.',
    ],
    rewards: ['Early map clears', 'stable rolling loop'],
    routeHint:
      'Your first team does not need perfect rarity. It needs one reliable damage source, enough upgrades, and clean placement.',
    relatedRoutes: ['/guides/beginner-guide', '/codes', '/units'],
    relatedEntities: ['RELEASE', 'Common Boxes', 'starter units'],
    sourcePages: ['Roblox official description', 'Code trackers'],
    confidence: 'high',
  },
  {
    kind: 'team',
    id: 'balanced-wave-team',
    name: 'Balanced Wave Team',
    category: 'Map clear team',
    stage: 'Early',
    location: 'Maps with multiple enemy waves',
    summary:
      'A balanced wave team uses one area clear unit, one durable target finisher, and upgrades at the leak point.',
    prerequisites: ['One AoE role', 'One single-target role'],
    recommendedPrep: [
      'Place area damage where enemy paths overlap.',
      'Add single-target damage near the longest coverage section.',
      'Upgrade the unit that handles the current leak first.',
      'Move support only after damage thresholds are solved.',
    ],
    rewards: ['Better map consistency', 'less wasted rolling'],
    routeHint:
      'If a map fails at the same wave every time, adjust placement and upgrades before blaming the roll system.',
    relatedRoutes: ['/teams', '/maps', '/guides/team-building-guide'],
    relatedEntities: ['AoE Carry', 'Single-Target DPS', 'maps'],
    sourcePages: ['Roblox official description', 'Competitor team pages'],
    confidence: 'medium',
  },
  {
    kind: 'team',
    id: 'trait-focused-team',
    name: 'Trait-Focused Team',
    category: 'Optimization team',
    stage: 'Midgame',
    location: 'Maps where base stats are no longer enough',
    summary:
      'Trait investment starts making sense after your roster has a real carry and your map losses are caused by specific stat gaps.',
    prerequisites: ['Known carry unit', 'Crystals or reroll currency'],
    recommendedPrep: [
      'Identify whether damage, range, or cooldown is the problem.',
      'Reroll traits on the unit you will keep longest.',
      'Stop at a useful trait before burning every resource.',
      'Retest the same map after each major upgrade.',
    ],
    rewards: ['Higher carry ceiling', 'cleaner map clears'],
    routeHint:
      'Trait rerolling is a midgame decision. New players get more value from codes, boxes, and basic placement first.',
    relatedRoutes: ['/traits', '/guides/traits-reroll-guide', '/tier-list'],
    relatedEntities: ['traits', 'Crystals', 'unit roles'],
    sourcePages: ['Pro Game Guides', 'Competitor traits pages'],
    confidence: 'watch',
  },
  {
    kind: 'team',
    id: 'jjk-update-team',
    name: 'JJK Update Team',
    category: 'Update team',
    stage: 'Update',
    location: 'Current JJK-tagged update content',
    summary:
      'The current Roblox title uses a JJK update tag, so update teams should test Cursed Fingers and new reward units separately from old pages.',
    prerequisites: ['CURSEDHIGHSCHOOL redeemed', 'Update page checked'],
    recommendedPrep: [
      'Redeem current JJK/update codes.',
      'Check whether Cursed Fingers have an in-game use.',
      'Test new event units on current maps.',
      'Avoid importing Anime Defense RNG or Anime RNG TD claims.',
    ],
    rewards: ['Current update progress', 'event reward clarity'],
    routeHint:
      'Treat JJK update advice as a snapshot. Recheck after Roblox updates or Discord code drops.',
    relatedRoutes: ['/updates', '/guides/jjk-update-guide', '/codes'],
    relatedEntities: ['Cursed Fingers', 'JJK update', 'current codes'],
    sourcePages: ['Roblox official title', 'Current code trackers'],
    confidence: 'medium',
  },
];

export const mapRoutes: MapEntry[] = [
  {
    kind: 'map',
    id: 'starter-map',
    name: 'Starter Maps',
    category: 'Early maps',
    stage: 'Starter',
    purpose: 'Learn placement, upgrade rhythm, and how enemy paths behave.',
    summary:
      'Starter maps are where you should test first units, redeem-code rewards, and basic tower defense placement.',
    prerequisites: ['Official game access', 'Starter units'],
    keyObjectives: [
      'Learn where enemies stay in range longest.',
      'Upgrade one carry before spreading resources.',
      'Earn enough resources for more rolls.',
    ],
    routeHint:
      'Do not skip starter maps just because a code gave you resources. They teach the placement logic that later maps punish.',
    relatedRoutes: ['/maps', '/guides/beginner-guide', '/teams'],
    relatedEntities: ['placement', 'waves', 'starter team'],
    sourcePages: ['Roblox official description'],
    confidence: 'high',
  },
  {
    kind: 'map',
    id: 'multi-lane-map',
    name: 'Multi-Lane Maps',
    category: 'Wave routing',
    stage: 'Early',
    purpose: 'Force players to cover more than one enemy path.',
    summary:
      'Maps with multiple lanes expose teams that rely on one short-range unit or poor placement.',
    prerequisites: ['Stable starter carry', 'Basic upgrade timing'],
    keyObjectives: [
      'Cover lane overlap first.',
      'Move support to the leak lane.',
      'Do not chase rolls before testing placement.',
    ],
    routeHint:
      'If two lanes leak at once, add coverage before adding rarity. The map is telling you the team shape is wrong.',
    relatedRoutes: ['/maps', '/teams', '/guides/maps-waves-guide'],
    relatedEntities: ['AoE Carry', 'Support or Buffer', 'team building'],
    sourcePages: ['Competitor maps/waves pages', 'Manual review'],
    confidence: 'medium',
  },
  {
    kind: 'map',
    id: 'harder-wave-map',
    name: 'Harder Wave Maps',
    category: 'Progression wall',
    stage: 'Midgame',
    purpose:
      'Check whether your unit roles, upgrades, and traits solve tougher waves.',
    summary:
      'Harder maps are where luck management and trait choices begin to matter more than early code rewards.',
    prerequisites: ['Balanced team', 'Upgraded main carry'],
    keyObjectives: [
      'Identify the exact wave that fails.',
      'Upgrade or trait the unit that affects that wave.',
      'Use luck boosts before rebuilding the roster.',
    ],
    routeHint:
      'Treat the failed wave as data. If the same enemy type leaks, solve that role rather than rerolling blindly.',
    relatedRoutes: [
      '/guides/maps-waves-guide',
      '/guides/luck-boosts-guide',
      '/traits',
    ],
    relatedEntities: ['traits', 'luck boosts', 'balanced team'],
    sourcePages: ['Roblox official description', 'Competitor guides'],
    confidence: 'medium',
  },
  {
    kind: 'map',
    id: 'update-map',
    name: 'JJK Update Maps',
    category: 'Update maps',
    stage: 'Update',
    purpose:
      'Track current update content without mixing old-game data into this site.',
    summary:
      'The current update tag makes JJK-themed maps and rewards worth tracking, but exact map names should stay conservative until official or in-game data is clearer.',
    prerequisites: ['Update page checked', 'Current codes redeemed'],
    keyObjectives: [
      'Check Roblox title and description.',
      'Use JJK-related code rewards safely.',
      'Retest teams when the title or map list changes.',
    ],
    routeHint:
      'Update pages can go stale quickly. Use this as a snapshot and recheck before publishing exact map routes.',
    relatedRoutes: ['/updates', '/guides/jjk-update-guide', '/codes'],
    relatedEntities: ['JJK update', 'Cursed Fingers', 'current codes'],
    sourcePages: ['Roblox official title', 'Current code trackers'],
    confidence: 'watch',
  },
];

export const databaseGroups = {
  units,
  rewards: rewardItems,
  teams: teamChecks,
  maps: mapRoutes,
} satisfies Record<DatabaseKind, WikiDatabaseEntry[]>;

export const databaseHubCards = [
  {
    title: 'Units Database',
    href: '/database/units',
    count: units.length,
    body: 'Unit roles for starter carries, AoE wave clear, single-target DPS, support, and current JJK update testing.',
  },
  {
    title: 'Rewards Database',
    href: '/database/rewards',
    count: rewardItems.length,
    body: 'Crystals, boxes, Cursed Fingers, luck boosts, and trait investment notes from current code rewards.',
  },
  {
    title: 'Teams Database',
    href: '/database/teams',
    count: teamChecks.length,
    body: 'Starter code teams, balanced wave teams, trait-focused teams, and JJK update team checks.',
  },
  {
    title: 'Maps Database',
    href: '/database/maps',
    count: mapRoutes.length,
    body: 'Starter maps, multi-lane pressure, harder wave walls, and update-map watch notes.',
  },
] as const;

export const toolCards = [
  {
    title: 'Team Builder Checklist',
    href: '/tools/team-builder',
    body: 'Pick a team goal and check the code, unit, placement, trait, and update steps before grinding more maps.',
  },
  {
    title: 'Luck Spend Planner',
    href: '/tools/luck-planner',
    body: 'Choose a reward or upgrade target and plan when to spend crystals, boxes, boosts, and trait resources.',
  },
  {
    title: 'Roll Progress Tracker',
    href: '/tools/roll-tracker',
    body: 'Track the unit roles your account has solved so you know when to stop rerolling and start clearing maps.',
  },
] as const;

export function getDatabaseEntries(kind: DatabaseKind) {
  return databaseGroups[kind];
}

export function toDatabaseTableRecords(
  entries: WikiDatabaseEntry[]
): DatabaseTableRecord[] {
  return entries.map((entry) => {
    const details =
      entry.kind === 'unit'
        ? [entry.unlockMethod, entry.abilityFocus]
        : entry.kind === 'reward'
          ? [entry.role, ...entry.usefulFor]
          : entry.kind === 'team'
            ? [entry.location, ...entry.rewards]
            : [entry.purpose, ...entry.keyObjectives];

    return {
      id: entry.id,
      name: entry.name,
      aliases: entry.aliases ?? [],
      category: entry.category,
      stage: entry.stage,
      summary: entry.summary,
      details,
      prerequisites: entry.prerequisites,
      routeHint: entry.routeHint,
      relatedRoutes: entry.relatedRoutes,
      relatedEntities: entry.relatedEntities,
      sourcePages: entry.sourcePages,
      confidence: entry.confidence,
    };
  });
}
