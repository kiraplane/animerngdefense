# Anime RNG Defense Wiki PRD 与实现计划

目标站点：Anime RNG Defense Wiki  
目标域名：www.animerngdefense.site  
官方 Roblox：`https://www.roblox.com/games/104693964860826/Anime-RNG-Defense`  
检查日期：2026-07-08

## 1. 产品定位

将当前 Roblox wiki 模板改造成只服务 `Anime RNG Defense` 的英文攻略站。站点首屏、metadata、导航、sitemap 和文章体系都围绕 `Anime RNG Defense` 与 `Anime RNG Defense Wiki` 展开，避免继续承载旧项目的 Thanos Simulator 内容。

用户核心需求：

- 找到官方 Roblox 入口并确认正确游戏。
- 查看可用 codes、兑换要求、过期 codes 和错误游戏警告。
- 理解新手如何 roll units、组队、推 waves/maps、升级队伍。
- 判断 units、traits、team composition、luck boosts、JJK update rewards。
- 识别 `Anime Defense RNG`、`Anime RNG TD`、旧模板 `Thanos Simulator` 等搜索混淆结果。

## 2. 官方事实基线

| 字段 | 当前采用值 |
| --- | --- |
| 官方标题 | `[JJK] Anime RNG Defense` |
| 站点名称 | `Anime RNG Defense Wiki` |
| Roblox place ID | `104693964860826` |
| Roblox universe ID | `9940812243` |
| Creator | `Mera.` |
| 类型 | Strategy / Tower Defense |
| 支持设备 | Desktop, Mobile, Tablet, Console |
| 最大人数 | 4 |
| 官方描述重点 | roll anime-style units, protect base, upgrade team, boost luck |
| Roblox API 更新检查 | 2026-07-06T03:47:28.352Z |

## 3. SEO 页面矩阵

| 关键词 / 意图 | 页面 | 优先级 | 内容策略 |
| --- | --- | --- | --- |
| anime rng defense | `/` | P0 | 首页品牌、官方事实、快速入口 |
| anime rng defense wiki | `/`, `/guides` | P0 | wiki hub + guide hub |
| anime rng defense codes | `/codes`, `/guides/codes-redeem-guide` | P0 | active/expired/requirements + redeem steps |
| anime rng defense tier list | `/tier-list`, `/guides/unit-tier-list-guide` | P0 | role-first tier framework, avoid fake exact stats |
| anime rng defense units | `/units`, `/database/units` | P0 | starter/AoE/single-target/support/update unit roles |
| anime rng defense traits | `/traits`, `/guides/traits-reroll-guide` | P0 | reroll budget, Crystal usage, keep/switch logic |
| anime rng defense best team | `/teams`, `/tools/team-builder` | P0 | wave clear, finisher, support, placement checklist |
| anime rng defense maps | `/maps`, `/guides/maps-waves-guide` | P1 | lane pressure and placement planning |
| anime rng defense luck | `/guides/luck-boosts-guide`, `/tools/luck-planner` | P1 | boosts, boxes, Crystals, roll stop rule |
| anime rng defense jjk update | `/updates`, `/guides/jjk-update-guide` | P1 | JJK tag, Cursed Fingers, updated codes |
| anime rng defense roblox | `/download` | P1 | official Roblox link and device support |
| anime defense rng / anime rng td confusion | `/guides/name-confusion-guide` | P1 | wrong-game separation |

说明：尝试按 skill 要求寻找 Serper/DataForSEO 长尾接口 key，但当前环境未暴露可用 key；本轮用普通搜索、Roblox 官方/API、竞品页面和 YouTube 结果补齐长尾判断。

## 4. 内容与工具方案

已实现页面：

- `/`：数据密集首页，包含官方入口、代码状态、视频、工具和 source boundary。
- `/codes`：active codes、过期 code、错误游戏 code 警告、兑换 FAQ。
- `/guides` + 10 篇 guide：beginner、codes、tier list、traits、team、maps、luck、JJK update、AFK、name confusion。
- `/units`、`/traits`、`/tier-list`、`/teams`、`/maps`、`/summons`、`/download`、`/updates`。
- `/database`、`/database/units`、`/database/rewards`、`/database/teams`、`/database/maps`。
- `/tools/team-builder`、`/tools/luck-planner`、`/tools/roll-tracker`。

已实现工具：

- Team Builder：把 code readiness、unit roles、placement、trait budget 组合成通关检查。
- Luck Planner：围绕 Crystals、boxes、Cursed Fingers、luck boosts 和 trait spend 做资源优先级。
- Roll Tracker：记录 roll session 的目标、结果、stop rule 和下一步。

## 5. 竞品与资料来源

采用资料边界：

- 官方事实优先来自 Roblox 页面与 Roblox API。
- Codes 采用多个当前攻略源交叉确认，只保留 `Anime RNG Defense` 的代码，不导入旧游戏代码。
- YouTube 只作为 guide angle / workflow 信号，不搬运逐字稿。
- 未证实的 unit exact stats、drop rate、banner odds 不伪造，使用 role-first 解释。

Database 数据来源说明：

- `rewards` 中的 Crystals、Common Boxes、Rare/Epic Boxes、Cursed Fingers、10k rolls requirement 等来自 Destructoid、Pro Game Guides 等当前 codes 页面交叉验证。
- `units`、`teams`、`maps` 当前不是官方精确表，而是根据官方 Roblox 描述中的 roll units、place units、clear waves、protect base、upgrade team、boost luck 等玩法结构整理成的 role-based planning entries。
- `sourcePages` 字段表示 evidence signal 类型，例如 Roblox official description、current code trackers、competitor route surfaces、YouTube guide result；它不是逐条官方数据库引用。
- 后续若拿到可靠 in-game screenshots、官方 Discord patch notes、或社区完整 unit/map 表，再把 `watch/medium` entries 升级为具体 unit/map 数据。

选用视频：

| YouTube ID | 用途 |
| --- | --- |
| `OlhoZtnWDN8` | beginner noob-to-pro route |
| `34T3mF2uvnU` | codes redemption intent |
| `fBaGzzveiHQ` | JJK update / July codes demand |

## 6. 配色与视觉

官方图标和缩略图以 anime/tower-defense、暗背景、亮色单位能量为主。站点采用：

- base `#09060F`
- panel `#120915`
- border `#4A254F`
- code/luck gold `#FFB703`
- reward green `#6EE7B7`
- update danger rose `#F43F5E`

避免单一紫色主题，使用金色、绿色、玫红作为功能信号色。

## 7. 发布待办

- GitHub 仓库：目标 `animerngdefense`。
- Cloudflare Worker：目标 `animerngdefense`，route `animerngdefense.site` 与 `www.animerngdefense.site`。
- GA：已用 ga-gtm OAuth 授权创建 GA4 property `544649777` 和 web data stream，Measurement ID `G-BF0YR8CHYT` 已写入项目配置。
