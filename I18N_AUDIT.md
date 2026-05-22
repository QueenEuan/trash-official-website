# TRASH Website i18n Launch Audit

Date: 2026-05-22

## Supported Locales

| Locale | Language | Public route strategy | Status |
|---|---|---|---|
| `zh` | Traditional Chinese | Clean unprefixed canonical routes | Primary source language |
| `en` | English | `/en` prefixed routes | First-pass localized content active |
| `ja` | Japanese | `/ja` prefixed routes | First-pass localized content active |
| `ko` | Korean | `/ko` prefixed routes | First-pass localized content active |

## Canonical Locale Strategy

- Traditional Chinese remains canonical on clean unprefixed routes:
  - `/`
  - `/about`
  - `/members`
  - `/members/marz23`
  - `/history`
  - `/music`
  - `/live`
  - `/news`
  - `/media`
  - `/press-kit`
  - `/contact`
- English, Japanese, and Korean use locale prefixes:
  - `/en/...`
  - `/ja/...`
  - `/ko/...`
- `/zh` and `/zh/...` are redirect-only paths and should not be treated as public canonical URLs.

## Redirect Behavior

| Request | Redirect target | Status |
|---|---|---|
| `/zh` | `/` | Active via `proxy.ts` |
| `/zh/about` | `/about` | Active via `proxy.ts` |
| `/zh/members/marz23` | `/members/marz23` | Active via `proxy.ts` |
| `/zh/music/the-last-train-of-happiness` | `/music/the-last-train-of-happiness` | Active via `proxy.ts` |
| `/press` | `/press-kit` | Active legacy redirect |
| `/members/marz` | `/members/marz23` | Active legacy redirect |
| `/en/press` | `/en/press-kit` | Active localized alias redirect |
| `/ja/press` | `/ja/press-kit` | Active localized alias redirect |
| `/ko/press` | `/ko/press-kit` | Active localized alias redirect |
| `/en/members/marz` | `/en/members/marz23` | Active localized alias redirect |
| `/ja/members/marz` | `/ja/members/marz23` | Active localized alias redirect |
| `/ko/members/marz` | `/ko/members/marz23` | Active localized alias redirect |

## Route Coverage

- Locale home routes are generated for `/en`, `/ja`, and `/ko`.
- Locale index routes are generated for About, Members, History, Music, Live, News, Media, Press Kit, and Contact.
- Locale detail routes are generated for member detail pages, album detail pages, and news detail pages.
- Traditional Chinese unprefixed routes remain generated for all current public pages and detail pages.

## Language Switcher Behavior

- Desktop header now uses a compact active-locale dropdown instead of an inline four-language list.
- The trigger displays the active locale only: `中文`, `EN`, `日本語`, or `한국어`.
- The dropdown menu contains `中文`, `English`, `日本語`, and `한국어`.
- Mobile navigation uses the same compact selector to avoid crowding.
- Switching language preserves the current clean path where an equivalent route exists.
- Examples:
  - `/music/the-last-train-of-happiness` → `/en/music/the-last-train-of-happiness`
  - `/en/contact` → `/ja/contact`
  - `/ko/news/golden-melody-best-band` → `/news/golden-melody-best-band`
- Chinese switcher targets clean unprefixed routes, not `/zh`.
- The selector uses a button trigger with `aria-haspopup="menu"` and `aria-expanded`, closes after selection, and closes on Escape/outside click.
- Homepage, member, album, news, Press Kit, Contact, and hero CTA links now pass explicit locale context where needed so static output keeps localized hrefs before hydration.

## Metadata / hreflang Status

- `metadataBase` remains `https://trashband.tw`.
- Canonical URLs follow the locale strategy:
  - Traditional Chinese: `https://trashband.tw/...`
  - English: `https://trashband.tw/en/...`
  - Japanese: `https://trashband.tw/ja/...`
  - Korean: `https://trashband.tw/ko/...`
- Alternates are emitted for:
  - `zh-TW`
  - `en`
  - `ja`
  - `ko`
  - `x-default`
- `x-default` points to the Traditional Chinese clean canonical route.
- Open Graph URL follows the canonical URL for the current locale.
- Open Graph image is absolute across locales:
  - `https://trashband.tw/images/og/trash-og.jpg`
- Open Graph title and description are localized where first-pass SEO copy exists. Traditional Chinese canonical routes now use `TRASH 官方網站`.

## Content Safety Status

- Proper names are preserved across localized content:
  - TRASH
  - Marz23
  - Euan
  - TTeng
  - Kuei gun
  - 經紀/依凡
  - 華納音樂 / Warner Music Taiwan
- Public contact email remains unchanged:
  - `passion0728@gmail.com`
- External official links, source links, streaming links, YouTube links, and `mailto:` links are reused across locales.
- No new facts, dates, credits, contacts, awards, setlists, or private information were introduced for localization.
- Japanese and Korean shared UI now includes localized navigation, hero labels, CTA buttons, section labels, footer labels, media cards, live labels, album/release labels, and contact/press labels.
- Archive-level facts remain source-safe; proper nouns, platform names, and official release titles are preserved where appropriate.

## Header / Hero Layout Status

- Desktop navigation width was tightened with shorter Traditional Chinese labels and no-wrap navigation items.
- The Press Kit CTA remains separate from the language selector and is protected from wrapping.
- The homepage current-chapter metadata card now uses a vertical editorial layout instead of a cramped three-column grid.
- Locale-specific chapter metadata is active for Traditional Chinese, English, Japanese, and Korean.

## Verification Status

- `npm run lint`: pass
- `npm run build`: pass
- Production build generated 106 public/static routes after removing `/zh` from generated static paths.
- Built public route output was scanned for:
  - `TODO`
  - `placeholder`
  - `internal review`
  - `coming soon`
  - `needs confirmation`
  - `confirm official source`
- Built public route output was scanned for empty internal hrefs such as `href=""` and `href="#"`.
- Built metadata output was checked for canonical URLs, hreflang alternates, `og:url`, and absolute OG image URLs.

## Remaining Native-Language Review Items

- Traditional Chinese received a full visible-copy localization pass across canonical routes. See `ZH_LOCALIZATION_AUDIT.md`.
- Japanese and Korean should still receive native-speaker editorial review before a full international launch.
- Current Japanese/Korean visible UI has been expanded beyond first-pass fallback and avoids unconfirmed details.
- Some long-form archive details may still use official title/proper-noun conventions rather than fully localized title translations.
- Future page-level SEO titles can be expanded beyond the current site-level title strategy once final localized SEO strategy is approved.
