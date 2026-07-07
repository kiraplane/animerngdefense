import { CHECKED_AT, OFFICIAL_CHECKED_AT, officialGameFacts } from './sources';
import type { TopicPage } from './types';

const commonImage = '/thanos/hero.png';

export const topicPages: Record<string, TopicPage> = {
  stones: {
    route: '/stones',
    label: 'Stones',
    eyebrow: 'Core Progression',
    title: 'Infinity Stones in Thanos Simulator',
    seoTitle:
      'Thanos Simulator Infinity Stones - Locations, Drops and Abilities',
    seoDescription:
      'Use the Thanos Simulator Infinity Stones hub for all six stones, obby routes, NPC/drop stones, Soul Stone farming, and gauntlet ability unlocks.',
    summary:
      'The Infinity Stones are the backbone of the game. Use this hub to split location routes, NPC/drop progress, and the gauntlet abilities each stone unlocks.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/all-infinity-stones-guide',
      '/guides/gauntlet-controls-guide',
      '/guides/beginner-guide',
    ],
    sections: [
      {
        heading: 'The six stones are the first real arc',
        paragraphs: [
          'Thanos Simulator is searched by two names: the short player name "Thanos Simulator" and the official Roblox title "Infinity Gauntlet | Thanos Simulator." Both point back to the same stone-first progression loop. Before weapons, bosses, or Update 3.2 routes make sense, players need the six Infinity Stones and the controls they unlock.',
          'Public community data splits stone progress between route/obby stones and NPC/drop stones. That makes this hub a planning page, not a single coordinate list.',
        ],
      },
      {
        heading: 'Do routes and abilities together',
        paragraphs: [
          'Every stone changes what your Infinity Gauntlet can do. If you only follow locations, you may collect a stone and still miss the ability that makes the next route easier. Pair the all-stones guide with the controls guide whenever a new keybind or charged move appears.',
        ],
        bullets: [
          'Reality, Space, and Time are strong route/obby search intents.',
          'Power and Mind push players toward NPC and combat checks.',
          'Soul Stone is best treated as a drop-grind/patience page.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the most important Thanos Simulator guide?',
        answer:
          'For new players, the all Infinity Stones guide is the best first deep page because it unlocks the rest of the gauntlet.',
      },
      {
        question: 'Why does the site also mention controls on a stones page?',
        answer:
          'Stones unlock abilities, so finding a stone and learning its keybind are part of the same player job.',
      },
    ],
  },
  weapons: {
    route: '/weapons',
    label: 'Weapons',
    eyebrow: 'Unlock Routes',
    title: 'Thanos Simulator Weapons and Unlock Routes',
    seoTitle:
      'Thanos Simulator Weapons - Infinity Gauntlet, Stormbreaker, Gungnir and Mechanical Gloves',
    seoDescription:
      'Plan Thanos Simulator weapon progression for Infinity Gauntlet, Mjolnir, Stormbreaker, Surtur Sword, Heart of Ymir, Gungnir, and Mechanical Gloves.',
    summary:
      'Weapons are best understood by route stage and prerequisites. Use this hub to decide which unlock fits your current account instead of chasing a thin tier list.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/weapons-progression-guide',
      '/guides/stormbreaker-mjolnir-guide',
      '/guides/gungnir-fragments-guide',
      '/guides/mechanical-gloves-doom-guide',
    ],
    sections: [
      {
        heading: 'Progression beats fake tier certainty',
        paragraphs: [
          'Search demand includes weapon tier lists, but current sources support route planning better than a hard ranking. Weapons in Thanos Simulator are gated by stones, bosses, fragments, maps, or other weapons. The best weapon for a player is often the next one they can realistically unlock.',
          'This hub links the major launch routes: Stormbreaker/Mjolnir, Gungnir fragments, Surtur/Twilight Sword, Heart of Ymir support, and the newer Mechanical Gloves update path.',
        ],
      },
      {
        heading: 'Use prerequisites as your filter',
        paragraphs: [
          'If a route asks for Catacombs, World5, Doom, Surtur, Heart of Ymir, Hadron Enforcer, Mjolnir, or Forge progress, solve that prerequisite first. A weapon guide becomes much shorter once you know exactly which missing gate blocks you.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Thanos Simulator need a weapon tier list?',
        answer:
          'Maybe later. Launch coverage uses progression routes because source confidence for exact rankings is thin.',
      },
      {
        question: 'What new weapon should I check first?',
        answer:
          'Mechanical Gloves are tied to the current official Update 3.2 signal, but they are advanced and require route prep.',
      },
    ],
  },
  bosses: {
    route: '/bosses',
    label: 'Bosses',
    eyebrow: 'Fight Prep',
    title: 'Thanos Simulator Bosses and Prerequisites',
    seoTitle:
      'Thanos Simulator Bosses - Surtur, Doom, Eson, Lazarus and Route Prep',
    seoDescription:
      'Prepare for Thanos Simulator bosses including Surtur, Doom, Eson the Searcher, Lazarus, Astra, and special NPC fights with the right prerequisites.',
    summary:
      'Bosses are route checks. Use this hub to connect Surtur, Doom, Eson, Lazarus, and special NPCs to the gear and map access they require.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/surtur-twilight-sword-guide',
      '/guides/mechanical-gloves-doom-guide',
      '/guides/heart-of-ymir-guide',
      '/guides/weapons-progression-guide',
    ],
    sections: [
      {
        heading: 'Bosses expose missing preparation',
        paragraphs: [
          'Public boss data lists names such as Surtur, Eson the Searcher, Lazarus, Doom, Astra, and several special NPCs. The important pattern is that most meaningful boss routes are not just raw combat checks. They ask for a zone, weapon, relic, stone set, or setup puzzle.',
          'If you are repeatedly failing a boss, step back and ask whether the route is invalid for your current account. Missing prerequisites are more common than missing one perfect trick.',
        ],
      },
      {
        heading: 'Update 3.2 makes Doom a priority',
        paragraphs: [
          'The official Roblox description currently lists Update 3.2 and says Doom and Mechanical Glove were added. That is why Doom appears high in this hub even though the game has older boss routes that remain important.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which boss should I prepare for first?',
        answer:
          'Follow the weapon route you are pursuing. Surtur, Eson, Lazarus, and Doom answer different progression jobs.',
      },
      {
        question: 'Is Doom current content?',
        answer:
          'Yes. The official Roblox page checked on July 7, 2026 lists Update 3.2 with Doom and Mechanical Glove.',
      },
    ],
  },
  map: {
    route: '/map',
    label: 'Map',
    eyebrow: 'Route Planning',
    title: 'Thanos Simulator Map Routes',
    seoTitle:
      'Thanos Simulator Map - Main Map, Catacombs, World5, Forge and Trials',
    seoDescription:
      'Use the Thanos Simulator map hub to route the main map, Catacombs, World5, Lunar World, Forge, Power Temple, obbies, trials, and boss access.',
    summary:
      'Map knowledge connects stones, weapons, bosses, and update content. Use this hub when a guide says Catacombs, World5, Forge, Temple, or trials and you need the route context.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/all-infinity-stones-guide',
      '/guides/surtur-twilight-sword-guide',
      '/guides/gungnir-fragments-guide',
      '/guides/mechanical-gloves-doom-guide',
    ],
    sections: [
      {
        heading: 'The map is a prerequisite system',
        paragraphs: [
          'Fandom route breadth includes the main map, Catacombs, World5, Lunar World, Forge, Power Stone Temple, Time Stone Tower, Reality Stone obby, Space Stone obby, PVP, and trials. That is too much for a single static screenshot to solve. Treat the map as a set of route gates tied to player goals.',
          'When a guide mentions a zone, check why you are going there: a stone, a weapon, a boss, a forge step, or an update setup. That reason decides what to bring and when to leave.',
        ],
      },
      {
        heading: 'Route one job at a time',
        paragraphs: [
          'The fastest players do not wander randomly between all zones. They choose one objective, gather prerequisites, complete the route, and then return to the next hub. That keeps long sessions from turning into half-finished fragments of five different guides.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does this site include an interactive map?',
        answer:
          'Not at launch. Current sources support route guides first. An interactive map would need stronger maintained data.',
      },
      {
        question: 'What route should I learn first?',
        answer:
          'Start with the all-stones route, then learn Catacombs, World5, and Forge routes as weapon goals demand them.',
      },
    ],
  },
  controls: {
    route: '/controls',
    label: 'Controls',
    eyebrow: 'Keybinds',
    title: 'Thanos Simulator Controls and Abilities',
    seoTitle:
      'Thanos Simulator Controls - Infinity Gauntlet Keybinds and Combos',
    seoDescription:
      'Learn Roblox Thanos Simulator controls for Infinity Gauntlet punch, focus, teleport, time stop, shield, charge, super punch, dash, disintegrate, and snap.',
    summary:
      'Controls are a high-intent search because each stone changes the gauntlet. Use this hub to learn why a key works only after the right unlock.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/gauntlet-controls-guide',
      '/guides/all-infinity-stones-guide',
      '/stones',
      '/guides/beginner-guide',
    ],
    sections: [
      {
        heading: 'Keybinds follow your stone progress',
        paragraphs: [
          'The gauntlet does not start with every ability. Some moves require a stone, some require multiple stones, and some require a charged state. That is why a control can do nothing for one player and become essential for another.',
          'Read this hub whenever a guide asks for Focus, Teleport, Time Stop, Shield, Charge, Super Dash, Disintegrate, or Snap and your current button presses do not match the guide.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why does Q matter?',
        answer:
          'Community ability tables tie Q to charged actions and snap-style interactions once the required stones are unlocked.',
      },
      {
        question: 'Do controls change after updates?',
        answer:
          'They can. Use checked-date guide pages and test safely after major Roblox updates.',
      },
    ],
  },
  download: {
    route: '/download',
    label: 'Roblox',
    eyebrow: 'Official Access',
    title: 'Thanos Simulator Roblox Page and Safe Links',
    seoTitle: 'Thanos Simulator Roblox - Official Infinity Gauntlet Game Page',
    seoDescription:
      'Open the official Roblox Thanos Simulator page, verify place ID 3261957210, Blg42598, Update 3.2, and avoid fake APKs, scripts, and login pages.',
    summary:
      'Use the official Roblox page as source of truth. The experience is currently titled [ Update ] Infinity Gauntlet | Thanos Simulator by Blg42598.',
    image: commonImage,
    updatedAt: OFFICIAL_CHECKED_AT,
    featuredRoutes: [
      '/guides/beginner-guide',
      '/codes',
      '/guides/codes-and-scripts-safety-guide',
    ],
    sections: [
      {
        heading: 'Verify the correct Roblox experience',
        paragraphs: [
          `The verified target is ${officialGameFacts.officialRobloxUrl}. Roblox API data checked on ${OFFICIAL_CHECKED_AT} reports universe ID ${officialGameFacts.robloxUniverseId}, creator ${officialGameFacts.creatorName}, genre ${officialGameFacts.genre}, and max players ${officialGameFacts.maxPlayers}.`,
          'The title includes Infinity Gauntlet, but many players search the shorter Thanos Simulator name. This site uses both names in metadata and copy so players understand the connection.',
        ],
      },
      {
        heading: 'Avoid fake download shortcuts',
        paragraphs: [
          'This is a Roblox experience. You do not need an APK mirror, browser form, executor, or third-party login page to play. Pages that promise scripts, auto farm, or password-based rewards should be treated as account-risk shortcuts.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who made Thanos Simulator?',
        answer: 'Roblox lists the experience as created by Blg42598.',
      },
      {
        question: 'Is this site official?',
        answer:
          'No. It is an independent guide hub and does not represent Roblox, Marvel, or the creator.',
      },
    ],
  },
  updates: {
    route: '/updates',
    label: 'Updates',
    eyebrow: 'Freshness',
    title: 'Thanos Simulator Updates and Source Check Log',
    seoTitle:
      'Thanos Simulator Updates - Update 3.2, Doom and Mechanical Glove',
    seoDescription:
      'Track Thanos Simulator update signals, including Roblox updatedAt, Update 3.2, Doom, Mechanical Glove, codes status, and guide freshness.',
    summary:
      'The official Roblox page currently signals Update 3.2 with Doom and Mechanical Glove. Use this page to understand what is current and what remains watch material.',
    image: commonImage,
    updatedAt: OFFICIAL_CHECKED_AT,
    featuredRoutes: [
      '/guides/mechanical-gloves-doom-guide',
      '/bosses',
      '/weapons',
      '/codes',
    ],
    sections: [
      {
        heading: 'Official Update 3.2 signal',
        paragraphs: [
          `Roblox API data checked on ${OFFICIAL_CHECKED_AT} reports the game was last updated on ${officialGameFacts.updatedAt}. The public Roblox description says Update 3.2 added Doom and Mechanical Glove.`,
          'That does not mean every community route is perfect. It does mean Doom and Mechanical Gloves deserve a current guide entry, internal links, and source-check priority.',
        ],
      },
      {
        heading: 'Watch areas',
        paragraphs: [
          'Codes, scripts, exact weapon rankings, and route details for new update content are the main watch areas. Codes demand exists but no active redeem list is verified. Script demand exists but is unsafe and intentionally not served with exploit instructions.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the latest checked update?',
        answer:
          'The latest checked official signal is Update 3.2 with Doom and Mechanical Glove, based on the Roblox page checked July 7, 2026.',
      },
      {
        question: 'Will this page list patch notes?',
        answer:
          'Yes when official or high-confidence sources provide enough detail. Thin community claims stay as watch notes.',
      },
    ],
  },
};

export function getTopicPage(slug: string) {
  return topicPages[slug];
}

export const topicPageList = Object.values(topicPages);
