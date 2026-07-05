# Ice Tycoon 2 Wiki PRD 与实现计划

目标站点：Ice Tycoon 2 Wiki  
目标域名：www.icetycoon-2.wiki  
当前构建日期：2026-07-05

## 1. 需求摘要

将现有 Roblox wiki 模板改造成只服务 `Ice Tycoon 2` 的英文攻略站。站点重点覆盖玩家已经在搜索、且能用可靠来源支撑的高意图问题：

- `ice tycoon 2`
- `ice tycoon 2 wiki`
- `ice tycoon 2 codes`
- `ice tycoon 2 gems`
- `ice tycoon 2 secrets`
- `ice tycoon 2 trophies`
- `ice tycoon 2 rebirth`
- `ice tycoon 2 badges`
- `ice tycoon 2 items`

需求文档给出的 Roblox 链接指向一个无关游戏，因此首版采用“游戏名 + 目标域名 + Roblox 官方/API 校验 + Fandom 结构事实 + YouTube-supported 手写指南”的安全架构，避免把原版 Ice Tycoon 或其他 Roblox 游戏的数据导入本站。

## 2. 官方事实

| 项目 | 结果 |
| --- | --- |
| 官方页面 | `https://www.roblox.com/games/124757309017950/Ice-Tycoon-2` |
| Roblox place ID | `124757309017950` |
| Roblox universe ID | `10337069275` |
| 游戏名 | `Ice Tycoon 2` |
| 创建者 | Roblox group `Slized Games` |
| 类型 | Simulation / Tycoon |
| 创建时间 | 2026-06-16 |
| 最新 Roblox API 更新时间 | 2026-07-04 |
| 查询时在线人数 | 3,130 |
| 查询时访问量 | 285,049 |
| 查询时收藏量 | 5,121 |
| 核心玩法 | freeze water, melt ice for profit, upgrade machines, find secrets/gems, collect trophies, rebirth |

视觉方向采用官方 Roblox 缩略图和图标：冰蓝、深海蓝、白色雪光、少量暖橙作为 CTA，不沿用旧站的卡牌/抽包语义。

## 3. Keyword Matrix

| Keyword | Intent | Route | Priority | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Ice Tycoon 2 | head term | `/` | P0 | keep | 需求、Roblox 官方页 | 首页 H1 使用 Ice Tycoon 2 Wiki |
| Ice Tycoon 2 Wiki | wiki hub | `/` + `/guides` | P0 | keep | 需求、Fandom 存在 | 首页与 guide index 承接 |
| Ice Tycoon 2 codes | codes/status | `/codes` + `/guides/codes-status-guide` | P0 | keep | 搜索结果混入原版 codes | 明确无 verified sequel code，watch 原版字符串 |
| Ice Tycoon 2 gems | collectible route | `/guides/all-gems-locations-guide` + `/secrets` | P0 | keep | Fandom Secrets、YouTube | 5 gems + gem upgrader |
| Ice Tycoon 2 secrets | hidden boosts | `/secrets` + `/guides/all-secrets-guide` | P0 | keep | Fandom Secrets、YouTube | permanent +5% income boost |
| Ice Tycoon 2 trophies | rebirth prep | `/guides/all-trophies-guide` | P0 | keep | Fandom Trophies/Rebirths、YouTube | rebirth and lab progression |
| Ice Tycoon 2 rebirth | reset planning | `/rebirths` + `/guides/rebirth-requirements-guide` | P0 | keep | Fandom Rebirths | +20% permanent income per rebirth |
| Ice Tycoon 2 badges | endings/completion | `/badges` + `/guides/badges-and-endings-guide` | P1 | keep | Fandom Badges | End 1, End 2, Collector, Up and Running, Drought, Secret Finder |
| Ice Tycoon 2 items | tool/capacity | `/items` + `/guides/items-and-water-capacity-guide` | P1 | keep | Fandom Items | Spoon, Cup, Canteen, Bucket, Heat Crystal, Frozen Magma |
| Ice Tycoon 2 Roblox | official access | `/download` | P0 | keep | Roblox official page/API | place ID and creator verification |
| Ice Tycoon 2 update | freshness | `/updates` | P1 | keep | Roblox API updatedAt | compact update signal page |
| Ice Tycoon 2 hack/script | unsafe shortcut | none | P0 | ignore | search risk | 不提供外挂、脚本、APK、账号服务 |

## 4. 竞品与来源

| Source | URL / signal | 观察 | 行动 |
| --- | --- | --- | --- |
| Roblox official page | `https://www.roblox.com/games/124757309017950/Ice-Tycoon-2` | 官方 place、creator、description、media | 首页、download、schema、source facts |
| Roblox API | games/universes endpoints | universe、created/updated、active/visits/favorites | status card、updates、sitemap freshness |
| Ice Tycoon 2 Fandom | `https://ice-tycoon-2.fandom.com/wiki/Ice_tycoon_2_Wiki` | Badges、Items、Rebirths、Secrets、Trophies 等结构页 | 作为事实框架，正文重新组织表达 |
| Existing thin hub | `https://ice-tycoon-2.pages.dev/` | 轻量主页/guide signal | 做更完整的信息架构与 guide cluster |
| Earnaldo Ice Tycoon 2 pages | search result | codes/status 与原版混淆风险 | 只作为竞品观察，不复制 |
| YouTube guides | OTTER ON ROBLOX / Testy / Esvorion | beginner/completion、gems/trophies、all secrets | 选视频嵌入并写独立 guide |

## 5. YouTube 选题表

| Video / source | Search intent | Action | Target page | Reason |
| --- | --- | --- | --- | --- |
| `T1rkdI1pXow` 100% Completing Roblox ICE TYCOON 2 | beginner / completion | embed + new_page | `/guides/beginner-guide` | 覆盖入门、升级、completion journey |
| `rOmkartcNro` How to get ALL TROPHIES and GEMS in Ice Tycoon 2 | gems / trophies | embed + new_page | `/guides/all-gems-locations-guide`, `/guides/all-trophies-guide` | 直接命中 gems/trophies intent |
| `Rd8HLK3qK1E` All Secrets in Ice Tycoon 2 | secrets | embed + new_page | `/guides/all-secrets-guide` | 支撑 Secret Finder 和 hidden routes |

## 6. 首版页面

| Route | Purpose |
| --- | --- |
| `/` | Ice Tycoon 2 Wiki homepage hub |
| `/codes` | Active/watch codes, no-fake-code status |
| `/guides` | Guide index and category hub |
| `/guides/beginner-guide` | First-session route and upgrade order |
| `/guides/codes-status-guide` | Why sequel codes are not verified yet |
| `/guides/all-gems-locations-guide` | Five-gem route |
| `/guides/all-trophies-guide` | Trophy collection before rebirth |
| `/guides/all-secrets-guide` | Hidden secrets and boosts |
| `/guides/rebirth-requirements-guide` | Rebirth reset planning |
| `/guides/items-and-water-capacity-guide` | Item and capacity decisions |
| `/guides/badges-and-endings-guide` | Endings and badge routes |
| `/guides/best-upgrades-money-guide` | Money bottleneck decisions |
| `/guides/original-vs-ice-tycoon-2-codes-guide` | Original Ice Tycoon vs sequel safety |
| `/secrets` | Gems/secrets hub |
| `/rebirths` | Rebirth requirements and permanent value |
| `/items` | Items, Heat Crystal, Frozen Magma |
| `/badges` | Badges and endings hub |
| `/download` | Official Roblox page and safe links |
| `/updates` | Roblox API freshness and codes watch |
| `/disclaimer` | Independent site and source disclaimer |

## 7. 暂不直接实现的功能

| Idea | Status | Reason |
| --- | --- | --- |
| Full interactive map | watch | 需要可验证坐标、截图或手动游戏测试 |
| Calculator for rebirth timing | watch | 需要精确收益公式和 late-game timings |
| Auto code crawler | needs_confirm | 需要稳定官方 Discord/Roblox 公告来源 |
| User-submitted secrets | needs_confirm | 需要审核流和反垃圾机制 |

## 8. 已实施清理

- 替换旧主题数据、组件、路由为 `icetycoon2`
- 删除旧 cards/packs/mutations/discord 路由语义，改成 secrets/rebirths/items/badges
- 下载并使用 Roblox 官方 icon、thumbnail、OG 图
- 更新 canonical、middleware、sitemap、manifest、navbar、footer、messages、法律页和邮件预览域名
- 新增 10 篇英文 guide 数据和首页/topic/codes/guides 页面
- 将 codes 设为保守状态：无 verified active sequel-specific code

## 9. Validation Plan

```bash
rg -n -i "anime card|animecardfarm|dream without|/packs|/cards|/mutations|/discord|icetycoon2\\.wiki|og-image\\.jpg" src messages public env.example README.md docs
pnpm lint
pnpm exec tsc --noEmit
pnpm build
pnpm dev
```

前端改动完成后检查首页、codes、guides、guide detail、secrets、rebirths、items、badges、download 是否 200，确认第一屏、sidebar、YouTube iframe、guide links、footer/legal pages 正常渲染。
