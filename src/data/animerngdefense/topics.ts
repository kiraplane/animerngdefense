import { CHECKED_AT, OFFICIAL_CHECKED_AT, officialGameFacts } from './sources';
import type { TopicPage } from './types';

const commonImage = '/animerngdefense/hero.png';

export const topicPages: Record<string, TopicPage> = {
  units: {
    route: '/units',
    label: 'Units',
    eyebrow: 'Roster Planning',
    title: 'Anime RNG Defense Units',
    seoTitle: 'Anime RNG Defense Units - Roles, Carries and Roster Planning',
    seoDescription:
      'Plan Anime RNG Defense units by starter carry, AoE wave clear, single-target DPS, support value, and JJK update watch roles.',
    summary:
      'Anime RNG Defense is built around rolling anime-style units, but the best unit for your account is the one that solves your current map role.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/unit-tier-list-guide',
      '/guides/team-building-guide',
      '/database/units',
    ],
    sections: [
      {
        heading: 'Roles beat rarity color',
        paragraphs: [
          'The official Roblox page says players roll anime-style units, place them, protect the base, and upgrade the team. That makes unit value contextual. A lower-rarity wave-clear unit can be more useful than a rare unit that does not solve the map you are stuck on.',
          'Start by classifying each useful pull as wave clear, single-target damage, support, or update-watch value. Then decide whether it deserves upgrades, traits, or a spot in your best team.',
        ],
      },
      {
        heading: 'Use the database as a decision layer',
        paragraphs: [
          'This launch version does not pretend to have a complete extracted unit encyclopedia. It gives role entries that help players make better decisions until stronger public unit data exists.',
        ],
        bullets: [
          'Keep a starter carry that clears early waves.',
          'Prioritize AoE when many enemies leak.',
          'Prioritize single-target damage when durable enemies survive.',
          'Treat new Update 3 / 7DS units as watch items until tested.',
        ],
      },
    ],
    faq: [
      {
        question: 'What unit should I keep first?',
        answer:
          'Keep the unit that clears early waves reliably, then replace it only when a new pull clearly solves the same map better.',
      },
      {
        question: 'Does this hub list every unit?',
        answer:
          'No. Exact unit data is still thin, so the launch hub focuses on source-safe roles and route decisions.',
      },
    ],
  },
  traits: {
    route: '/traits',
    label: 'Traits',
    eyebrow: 'Reroll Decisions',
    title: 'Anime RNG Defense Traits',
    seoTitle: 'Anime RNG Defense Traits - Reroll Guide and Crystal Spending',
    seoDescription:
      'Use Anime RNG Defense traits wisely with Crystals, carry selection, reroll stop rules, role-based priorities, and source-safe guidance.',
    summary:
      'Traits are a midgame optimization layer. Spend trait resources on units that already prove they can carry maps.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/traits-reroll-guide',
      '/guides/unit-tier-list-guide',
      '/tools/luck-planner',
    ],
    sections: [
      {
        heading: 'Traits need a keeper unit',
        paragraphs: [
          'Code sources describe Crystals as useful for unit potential, and search demand around traits is already visible. The right answer is still conservative: do not reroll traits on temporary units.',
          'A keeper unit is one that solves an actual map problem. Once you know that, trait spending has a purpose.',
        ],
      },
      {
        heading: 'Stop rules protect your resources',
        paragraphs: [
          'Before rerolling, decide what counts as good enough: better damage, better range, better uptime, or a trait that lets your carry clear the next wave. Stop once the goal is met and test maps again.',
        ],
      },
    ],
    faq: [
      {
        question: 'When should I reroll traits?',
        answer:
          'After you know which unit is staying in your team and which stat problem the trait needs to solve.',
      },
      {
        question: 'Are exact trait odds listed here?',
        answer:
          'No. Exact odds need stronger in-game or official data before they should be published.',
      },
    ],
  },
  teams: {
    route: '/teams',
    label: 'Teams',
    eyebrow: 'Best Team Logic',
    title: 'Anime RNG Defense Best Teams',
    seoTitle: 'Anime RNG Defense Best Teams - Roles, Placement and Upgrades',
    seoDescription:
      'Build Anime RNG Defense best teams with wave clear, single-target DPS, support utility, placement, upgrades, and current code rewards.',
    summary:
      'A strong Anime RNG Defense team balances what the map asks for instead of simply equipping the rarest pulls.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/team-building-guide',
      '/tools/team-builder',
      '/database/teams',
    ],
    sections: [
      {
        heading: 'The best team answers the current map',
        paragraphs: [
          'Use one reliable wave-clear unit, one finisher for durable enemies, and support only when it changes the outcome. Upgrade the unit that affects the failed wave first.',
          'This role-first logic is safer than copying exact meta claims from thin competitor pages.',
        ],
      },
      {
        heading: 'Use tools after each new pull',
        paragraphs: [
          'After codes, boxes, or a luck session, revisit your team checklist. If the new pull solves a missing role, test the map. If not, keep it in reserve instead of burning resources.',
        ],
      },
    ],
    faq: [
      {
        question: 'What makes the best Anime RNG Defense team?',
        answer:
          'A mix of wave clear, single-target damage, role support, good placement, and upgrade focus for the map you are clearing.',
      },
      {
        question: 'Should I copy a tier list exactly?',
        answer:
          'No. Use tier lists as filters, then test whether a unit solves your own map problem.',
      },
    ],
  },
  maps: {
    route: '/maps',
    label: 'Maps',
    eyebrow: 'Wave Routing',
    title: 'Anime RNG Defense Maps and Waves',
    seoTitle: 'Anime RNG Defense Maps - Waves, Placement and Clear Routes',
    seoDescription:
      'Clear Anime RNG Defense maps with lane reading, wave classification, unit placement, upgrade timing, and team role checks.',
    summary:
      'Maps are not only stat checks. They reveal whether your team has the right coverage, placement, upgrade order, and role balance.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/maps-waves-guide',
      '/guides/team-building-guide',
      '/database/maps',
    ],
    sections: [
      {
        heading: 'Read the lane before rerolling',
        paragraphs: [
          'The official page says players enter different maps and clear enemy waves. That means every map should be read as a lane problem first. Where do enemies stay in range? Which wave leaks? Which role is missing?',
          'Only after that should you decide whether to roll more, upgrade a unit, reroll a trait, or change placement.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why do I fail the same wave repeatedly?',
        answer:
          'The team is probably missing a role or your strongest unit is not placed where it affects that wave.',
      },
      {
        question: 'Do I need a new unit for every map?',
        answer:
          'Not always. Placement and upgrade order can solve many early map failures before rolling more units.',
      },
    ],
  },
  summons: {
    route: '/summons',
    label: 'Summons',
    eyebrow: 'Rolls and Luck',
    title: 'Anime RNG Defense Summons and Rolls',
    seoTitle: 'Anime RNG Defense Summons - Rolls, Luck Boosts and Boxes',
    seoDescription:
      'Plan Anime RNG Defense summons with codes, boxes, luck boosts, Crystals, role targets, and safe stop rules for better unit pulls.',
    summary:
      'Rolling is the core RNG loop. The best summon session starts with a target role and ends when the team can clear the next map.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/luck-boosts-guide',
      '/codes',
      '/tools/roll-tracker',
    ],
    sections: [
      {
        heading: 'Roll for a job, not for noise',
        paragraphs: [
          'If you roll without a goal, every result feels almost good enough. Decide whether you need wave clear, single-target damage, support, or update units before using boosts and boxes.',
          'Use current codes first so your summon window has enough resources to matter.',
        ],
      },
    ],
    faq: [
      {
        question: 'When should I use luck boosts?',
        answer:
          'Use boosts when you have enough rolls or boxes ready and know what unit role you are trying to improve.',
      },
      {
        question: 'Should I keep rolling after a useful pull?',
        answer:
          'Usually stop and test maps. Roll again only if the team still lacks a role.',
      },
    ],
  },
  gems: {
    route: '/gems',
    label: 'Gems and Currency',
    eyebrow: 'Spending Priorities',
    title: 'Anime RNG Defense Gems and Currency Guide',
    seoTitle:
      'Anime RNG Defense Gems - Crystals, Cursed Fingers and Divine Rolls',
    seoDescription:
      'Use Anime RNG Defense Gems, Crystals, Cursed Fingers and Divine Rolls efficiently with a role-first spending order and safe stop rules.',
    summary:
      'Treat every currency as a progression tool: claim free rewards first, solve the roster bottleneck, then spend rare materials only on units you intend to keep.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/codes', '/summons', '/traits', '/tools/luck-planner'],
    sections: [
      {
        heading: 'What each currency is for',
        paragraphs: [
          'Gems support the summon loop, while Crystals and update materials belong to narrower upgrade or potential systems. Cursed Fingers now belong to the older JJK cycle, and Divine Rolls should be treated as scarce until a current source confirms the exact reward table.',
          'Names and costs can move between updates. Check the in-game shop or upgrade panel before committing a large stack, especially after joining an older server.',
        ],
        bullets: [
          'Gems: reserve them for summons that target a missing team role.',
          'Crystals: spend on a proven keeper unit rather than a temporary pull.',
          'Cursed Fingers: keep them only if the live 7DS build still exposes a use.',
          'Divine Rolls: use only when the displayed pool and pity state match your goal.',
        ],
      },
      {
        heading: 'A safe daily spending order',
        paragraphs: [
          'Redeem current codes and claim free rewards before buying anything. Next, identify whether your team lacks wave clear, boss damage, or support. Spend only enough to test that role, then return to maps before rolling again.',
          'Do not convert every currency immediately. A saved stack protects you when an update changes the unit pool, introduces a limited banner, or reveals that an upgrade material has a better use later.',
        ],
      },
      {
        heading: 'Stop rules prevent wasted rolls',
        paragraphs: [
          'Set a session cap before using boosts or Divine Rolls. Stop after obtaining the target role, reaching the planned pity checkpoint, or spending the amount you can rebuild through normal play.',
          'If a result is unclear, test it on the map that blocked you. Progress is better evidence than rarity color alone.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I spend Gems on first?',
        answer:
          'Use Gems to target the role your current team lacks, after claiming codes and free rewards. Stop when the team can clear the next map.',
      },
      {
        question: 'Should I spend Crystals on every new unit?',
        answer:
          'No. Save Crystals for a unit that has already proved it will remain in your main team.',
      },
      {
        question: 'Are Divine Roll odds listed here?',
        answer:
          'No. Use the current in-game pool and pity display because exact odds can change between updates.',
      },
    ],
  },
  download: {
    route: '/download',
    label: 'Roblox',
    eyebrow: 'Official Access',
    title: 'Anime RNG Defense Roblox Page and Safe Links',
    seoTitle: 'Anime RNG Defense Roblox - Official Game Page and Place ID',
    seoDescription:
      'Open the official Anime RNG Defense Roblox page, verify place ID 104693964860826, Mera. group, code RELEASE, platforms, and safe access.',
    summary:
      'Use the official Roblox page as source of truth before trusting code lists, Discord claims, or similarly named games.',
    image: commonImage,
    updatedAt: OFFICIAL_CHECKED_AT,
    featuredRoutes: [
      '/guides/beginner-guide',
      '/codes',
      '/guides/name-confusion-guide',
    ],
    sections: [
      {
        heading: 'Verify the correct Roblox experience',
        paragraphs: [
          `The verified target is ${officialGameFacts.officialRobloxUrl}. Roblox API data checked on ${OFFICIAL_CHECKED_AT} reports universe ID ${officialGameFacts.robloxUniverseId}, creator group ${officialGameFacts.creatorName}, Strategy/Tower Defense genre labels, max players ${officialGameFacts.maxPlayers}, and root place ID ${officialGameFacts.robloxPlaceId}.`,
          'The game is available on Desktop, Mobile, Tablet, and Console according to the public Roblox description.',
        ],
      },
      {
        heading: 'Avoid fake download shortcuts',
        paragraphs: [
          'Anime RNG Defense is a Roblox experience. You do not need APK mirrors, executors, private servers, password forms, or third-party login pages to play.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who made Anime RNG Defense?',
        answer: 'Roblox lists the creator as the Mera. group.',
      },
      {
        question: 'Is this site official?',
        answer:
          'No. It is an independent guide hub and does not represent Roblox or Mera.',
      },
    ],
  },
  discord: {
    route: '/discord',
    label: 'Discord',
    eyebrow: 'Community Status',
    title: 'Anime RNG Defense Discord Status',
    seoTitle: 'Anime RNG Defense Discord - Invite and Mera Server Check',
    seoDescription:
      'Check Anime RNG Defense Discord invite candidates, verify Mera branding and universe ID 9940812243, and avoid wrong-game servers or unsafe DMs.',
    summary:
      'Current public sources disagree between two vanity invites. Preview the destination and verify Mera branding, the correct Roblox universe, and current game channels before joining.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/download', '/codes', '/updates'],
    sections: [
      {
        heading: 'Two current invite identifiers need destination checks',
        paragraphs: [
          'Current exact-game sources publish discord.gg/animerngdefense and discord.gg/adrng. Because the public Roblox page exposes the community link only to eligible signed-in users, this page does not silently choose one vanity code and label it official.',
          'Enter an invite manually in Discord, stop at the preview screen, and check that the destination identifies Anime RNG Defense by Mera. A vanity code can be changed or reassigned, so the destination matters more than the text.',
        ],
        bullets: [
          'Candidate 1: discord.gg/animerngdefense',
          'Candidate 2: discord.gg/adrng',
          `Correct game universe: ${officialGameFacts.robloxUniverseId}`,
          `Correct Roblox creator: ${officialGameFacts.creatorName}`,
        ],
      },
      {
        heading: 'Match the server to the live game',
        paragraphs: [
          'A correct server should discuss the current Anime RNG Defense worlds, Update 4, current codes, maps, rolls, and Mera announcements. Leave if the server is actually about Anime Defense RNG, Anime RNG TD, or another similarly named game.',
          'Use the official Roblox page as the final identity check. The correct root place is 104693964860826 and the universe is 9940812243.',
        ],
      },
      {
        heading: 'Use Discord for fast signals, not account access',
        paragraphs: [
          'Discord is useful for code drops, shutdown notices, raid coordination, and early unit testing. Those are time-sensitive community signals, so compare them with the live game before spending Crystals or rare rolls.',
          'Staff and experienced players do not need your Roblox password, browser cookie, one-time code, recovery email, or remote-control access. Ignore direct messages that offer private executors, free Robux, account recovery, or guaranteed rolls.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Anime RNG Defense Discord invite?',
        answer:
          'Current exact-game sources disagree between animerngdefense and adrng vanity invites. Preview the destination and verify Mera branding before joining.',
      },
      {
        question: 'How do I know it is the right game server?',
        answer:
          'Match the server to Anime RNG Defense by Mera, Roblox universe 9940812243, root place 104693964860826, and current Update 4 discussion.',
      },
      {
        question: 'Does Anime RNG Defense have an official Trello?',
        answer:
          'No creator-controlled public Trello was confirmed in this check. Treat boards using the logo as community resources unless Mera links them.',
      },
    ],
  },
  updates: {
    route: '/updates',
    label: 'Updates',
    eyebrow: 'Freshness',
    title: 'Anime RNG Defense Updates and Code Watch',
    seoTitle: 'Anime RNG Defense Updates - JJK Tag, Codes and Source Checks',
    seoDescription:
      'Track Anime RNG Defense update signals, the JJK title tag, current codes, Roblox update timestamp, Cursed Fingers, and source-check notes.',
    summary:
      'The official Roblox description now publishes UPDATE4. Use this page to track the current code, older source-checked rewards, and update facts that still need rechecking.',
    image: commonImage,
    updatedAt: OFFICIAL_CHECKED_AT,
    featuredRoutes: [
      '/guides/jjk-update-guide',
      '/codes',
      '/guides/name-confusion-guide',
    ],
    sections: [
      {
        heading: 'Current official update signal',
        paragraphs: [
          `Roblox API data checked on ${OFFICIAL_CHECKED_AT} reports the game was last updated on ${officialGameFacts.updatedAt}. The public description explicitly lists code UPDATE4.`,
          'Current third-party code trackers also list FairyForest, UPDATE3, TYFOR10KCCU, SorryForShutdown3, and several older codes. Those are kept as source-checked, not official-only, until the Roblox page or official community confirms them publicly.',
        ],
      },
      {
        heading: 'Watch areas',
        paragraphs: [
          'Exact unit rankings, trait odds, update item usage, and map-specific routes need stronger evidence before becoming database pages. The launch site covers the decision logic now and can expand when data stabilizes.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the latest checked update?',
        answer:
          'The site checked Roblox API and the public Roblox page on July 14, 2026. The API updatedAt timestamp was July 14, 2026.',
      },
      {
        question: 'What changed in Update 3?',
        answer:
          'The official description now publishes UPDATE4, while current trackers retain FairyForest and UPDATE3. Exact new unit, map, and reward values still need live verification.',
      },
    ],
  },
};

export const topicPageList = Object.values(topicPages);

export function getTopicPage(slug: keyof typeof topicPages) {
  return topicPages[slug];
}
