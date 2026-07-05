import { CHECKED_AT, OFFICIAL_CHECKED_AT, officialGameFacts } from './sources';
import type { TopicPage } from './types';

const commonImage = '/icetycoon2/hero.png';

export const topicPages: Record<string, TopicPage> = {
  secrets: {
    route: '/secrets',
    label: 'Secrets',
    eyebrow: 'Permanent Boosts',
    title: 'Ice Tycoon 2 Secrets and Gems',
    seoTitle: 'Ice Tycoon 2 Secrets - Gems, Hidden Boosts and Secret Finder',
    seoDescription:
      'Find the right order for Ice Tycoon 2 secrets, gems, the gem upgrader, Secret Finder badge, and permanent income boosts without old-game confusion.',
    summary:
      'Secrets are the main reason Ice Tycoon 2 is more than a simple freeze-and-melt tycoon. Use this hub to route gems, hidden rooms, and permanent income boosts.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/all-gems-locations-guide',
      '/guides/all-secrets-guide',
      '/guides/badges-and-endings-guide',
    ],
    sections: [
      {
        heading: 'Secrets should be routed before long grinding',
        paragraphs: [
          'Ice Tycoon 2 search demand is already clustering around secrets, gems, and badges. That makes sense because the community wiki identifies secrets as permanent income boosts, while the five-gem route unlocks an upgrader that affects ice right before sale. A new account that ignores hidden boosts can still progress, but it will grind more than necessary.',
          'The practical rule is to keep your tycoon moving, then leave the base when a secret route clearly unlocks permanent value. Do not wander randomly after every upgrade. Build enough income to support the next map trip, collect the secret or gem, then return to reinvest.',
        ],
      },
      {
        heading: 'The five gems are the first deep route',
        paragraphs: [
          'Current community data and YouTube guides agree that five gems matter because they feed a gem-related upgrader. The locations involve the hotel, lava pit, mine, abandoned factory area, hotel roof key route, castle mountain, and a hidden well maze. That spread makes the gem route a real checklist, not a single pickup.',
          'Use the dedicated gems guide when you want the direct route. Use the secrets guide when you want the broader Secret Finder path that includes other hidden interactions and badge progress.',
        ],
      },
      {
        heading: 'Do not import original Ice Tycoon locations blindly',
        paragraphs: [
          'Ice Tycoon 2 is by Slized Games, the same creator group as the original Ice Tycoon, so search results can mix the two. Old Ice Tycoon code and location pages are useful as a warning, not as proof. The sequel has its own place ID, map routes, badges, and rebirth upgrade flow.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many gems are in Ice Tycoon 2?',
        answer:
          'Current community and YouTube sources focus on five hidden gems tied to a gem upgrader route.',
      },
      {
        question: 'Are secrets worth doing early?',
        answer:
          'Yes, once you can reach them efficiently. Permanent income boosts and the gem upgrader can save more time than one extra short grind.',
      },
    ],
  },
  rebirths: {
    route: '/rebirths',
    label: 'Rebirths',
    eyebrow: 'Reset Planning',
    title: 'Ice Tycoon 2 Rebirths and Permanent Upgrades',
    seoTitle: 'Ice Tycoon 2 Rebirths - Requirements, Boosts and Upgrades',
    seoDescription:
      'Plan Ice Tycoon 2 rebirths with 100% tycoon progress, trophy requirements, permanent income boosts, lava upgrades, teleporters, and fast rebirth unlocks.',
    summary:
      'Rebirth is the long-run reset system. Use this hub to understand when the reset is worth it, what carries over, and which upgrades change future runs.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/rebirth-requirements-guide',
      '/guides/all-trophies-guide',
      '/guides/best-upgrades-money-guide',
    ],
    sections: [
      {
        heading: 'Rebirth is not just a prestige button',
        paragraphs: [
          'Community data describes rebirth as a full progress reset that grants a permanent income multiplier. It also ties the first reset to complete tycoon progress and trophy collection, which means rebirth planning starts before you step into the portal.',
          'Treat your first rebirth like a checklist: finish the base, collect the required trophies, decide whether you still need secrets, then reset only when the permanent gain beats another short upgrade cycle.',
        ],
      },
      {
        heading: 'Permanent upgrades change the next run',
        paragraphs: [
          'The rebirth upgrade list includes practical quality-of-life and money systems such as stronger water storage, a water dropper, a lava upgrader, teleporters, trophy preservation, auto-buy, and a fast rebirth button after deeper ending progress. The value of these upgrades is not equal at every stage.',
          'For early runs, prioritize upgrades that reduce friction or raise the sale value of every cube. Later, route convenience and fast reset features matter more because you are repeating the same checklist faster.',
        ],
      },
    ],
    faq: [
      {
        question: 'When should I rebirth in Ice Tycoon 2?',
        answer:
          'Rebirth when you meet the progress and trophy requirements and the permanent multiplier will speed future runs more than another short grind.',
      },
      {
        question: 'Do secrets reset after rebirth?',
        answer:
          'Community data says secret bonuses remain permanent, while many purchased tycoon items and trophies reset unless an upgrade preserves them.',
      },
    ],
  },
  items: {
    route: '/items',
    label: 'Items',
    eyebrow: 'Tools and Heat',
    title: 'Ice Tycoon 2 Items and Water Capacity',
    seoTitle: 'Ice Tycoon 2 Items - Spoon, Cup, Bucket and Heat Crystals',
    seoDescription:
      'Use Ice Tycoon 2 items correctly, including water-capacity tools, heat crystals, Frozen Magma, shop timing, and item choices before ending routes.',
    summary:
      'Items shape how far you can explore and how efficiently you move water. This hub explains the current item ladder and when a purchase is worth the cash.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/items-and-water-capacity-guide',
      '/guides/all-gems-locations-guide',
      '/guides/badges-and-endings-guide',
    ],
    sections: [
      {
        heading: 'Capacity items reduce active friction',
        paragraphs: [
          'Current community item data lists a simple capacity ladder: Spoon at the start, then Cup, Canteen, and Bucket from the shopkeeper. These purchases do not replace droppers and machines, but they reduce the time spent ferrying small amounts of water during active play.',
          'Buy capacity when it removes a clear bottleneck. If your machines are underbuilt, spending all cash on a container can feel smoother while doing less for income than a base upgrade would.',
        ],
      },
      {
        heading: 'Heat crystals unlock colder exploration',
        paragraphs: [
          'Heat Crystal levels are passive survival items for colder zones. They matter most when your next secret, gem, or route sits behind temperature pressure. Buying a heat crystal before you need that zone can delay income; buying it too late can strand exploration.',
          'Frozen Magma is different because it supports a specific gem route by protecting you from normal lava for a short window. Use it as a route item, not as a general upgrade.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the starter item in Ice Tycoon 2?',
        answer:
          'The community item page lists Spoon as the automatic starter water item.',
      },
      {
        question: 'What does Frozen Magma do?',
        answer:
          'Community data describes Frozen Magma as a short lava-immunity item used for the first gem route, not for the rebirth dimension lava.',
      },
    ],
  },
  badges: {
    route: '/badges',
    label: 'Badges',
    eyebrow: 'Completion',
    title: 'Ice Tycoon 2 Badges, Trophies and Endings',
    seoTitle: 'Ice Tycoon 2 Badges - Trophies, Endings and Secret Finder',
    seoDescription:
      'Track Ice Tycoon 2 badges including End 1, End 2, Collector, Up and Running, Drought, Secret Finder, trophies, and rebirth-related requirements.',
    summary:
      'Badges are the completion layer. Use this hub to decide whether you are pushing money, trophies, secrets, endings, or a full badge route.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/all-trophies-guide',
      '/guides/badges-and-endings-guide',
      '/guides/all-secrets-guide',
    ],
    sections: [
      {
        heading: 'Badges reveal the real endgame checklist',
        paragraphs: [
          'The current badge cluster includes ending badges, Collector, Up and Running, Drought, and Secret Finder. Those names show the breadth of the game: complete the factory, repair routes, drain water sources, find secrets, collect gems, and handle multiple ending conditions.',
          'Do not chase every badge at once. Finish the base loop first, then choose a badge branch: trophies and rebirths, secrets and gems, factory repair, drought, or ending routes.',
        ],
      },
      {
        heading: 'Trophies matter before rebirth',
        paragraphs: [
          'Trophies are more than collectibles because the community rebirth page ties them to reset requirements and lab upgrades. A player who treats trophies as optional cosmetics can reach a late wall where the rebirth portal is ready but the checklist is incomplete.',
          'Use the trophies guide before attempting a serious rebirth run, especially if you want to avoid backtracking through map challenges after your economy is already finished.',
        ],
      },
    ],
    faq: [
      {
        question: 'What badge should I target first?',
        answer:
          'Most players should start with progression badges tied to the base loop and trophies, then move into secrets, gems, and ending-specific badges.',
      },
      {
        question: 'Does Secret Finder require every secret?',
        answer:
          'Current community data describes Secret Finder as the badge for discovering every hidden secret in the game.',
      },
    ],
  },
  download: {
    route: '/download',
    label: 'Roblox',
    eyebrow: 'Official Access',
    title: 'Ice Tycoon 2 Roblox Page and Safe Links',
    seoTitle: 'Ice Tycoon 2 Roblox - Official Game Page and Safe Links',
    seoDescription:
      'Open Ice Tycoon 2 through the official Roblox page, verify Slized Games, place ID 124757309017950, and avoid fake APKs or wrong-game pages.',
    summary:
      'Use the official Roblox page as the source of truth. Ice Tycoon 2 is the Slized Games sequel at place ID 124757309017950.',
    image: commonImage,
    updatedAt: OFFICIAL_CHECKED_AT,
    featuredRoutes: [
      '/guides/beginner-guide',
      '/codes',
      '/guides/original-vs-ice-tycoon-2-codes-guide',
    ],
    sections: [
      {
        heading: 'Verify the correct Roblox page first',
        paragraphs: [
          `The verified target is ${officialGameFacts.officialRobloxUrl}. Roblox API data reports the universe ID as ${officialGameFacts.robloxUniverseId}, the creator as ${officialGameFacts.creatorName}, and the genre as Simulation / Tycoon.`,
          'The demand document included an unrelated Roblox store URL, so this site uses the game name, domain, search results, and Roblox API facts to anchor the correct experience.',
        ],
      },
      {
        heading: 'Avoid unsafe download shortcuts',
        paragraphs: [
          'Ice Tycoon 2 is a Roblox experience. You should not need APK mirrors, script executors, modified clients, or third-party login pages to play it. If a page asks for your Roblox password outside Roblox or promises automated farming scripts, leave it.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who made Ice Tycoon 2?',
        answer: 'Roblox lists Ice Tycoon 2 as a Slized Games experience.',
      },
      {
        question: 'Is this site official?',
        answer:
          'No. It is an independent guide hub and does not represent Roblox or Slized Games.',
      },
    ],
  },
  updates: {
    route: '/updates',
    label: 'Updates',
    eyebrow: 'Live Status',
    title: 'Ice Tycoon 2 Updates and Source Check Log',
    seoTitle: 'Ice Tycoon 2 Updates - Roblox Version, Codes and Guide Checks',
    seoDescription:
      'Track Ice Tycoon 2 update signals, Roblox API timestamps, codes status, source confidence, and guide changes for secrets, gems, rebirths, and badges.',
    summary:
      'Ice Tycoon 2 is new and changing quickly. This page records what was checked, what is stable enough to publish, and what remains watch material.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/codes',
      '/secrets',
      '/guides/original-vs-ice-tycoon-2-codes-guide',
    ],
    sections: [
      {
        heading: 'Official Roblox update signal',
        paragraphs: [
          `Roblox API data checked on ${OFFICIAL_CHECKED_AT} reports Ice Tycoon 2 was created on ${officialGameFacts.createdAt} and last updated on ${officialGameFacts.updatedAt}. The public game page keeps the official description concise: freeze water, melt it for profit, and upgrade tools and machines.`,
          'Because detailed patch notes are not public in the checked data, this site treats mechanics as stable only after they appear in official data, current community pages, or recent guide videos for the exact sequel.',
        ],
      },
      {
        heading: 'Current watch areas',
        paragraphs: [
          'Codes are the biggest watch area because original Ice Tycoon code lists can be recycled into Ice Tycoon 2 search results. NPC details are also thin, and some community pages mark sections as work in progress. Those topics are tracked conservatively instead of filled with guesses.',
        ],
      },
    ],
    faq: [
      {
        question: 'How often should Ice Tycoon 2 codes be rechecked?',
        answer:
          'Codes should be rechecked whenever Slized Games posts an update or a reliable sequel-specific source confirms a new in-game code.',
      },
      {
        question: 'Why are some routes marked as watch material?',
        answer:
          'The game is new, and some public pages are incomplete. Watch status prevents thin or copied data from becoming player-facing fact.',
      },
    ],
  },
};

export const topicPageList = Object.values(topicPages);

export function getTopicPage(key: keyof typeof topicPages) {
  return topicPages[key];
}
