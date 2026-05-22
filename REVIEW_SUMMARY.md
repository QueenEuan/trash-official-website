# TRASH Website Review Summary

Generated after public-facing TODO visibility cleanup. No visual redesign was performed in this step.

## Public TODO Visibility Status

- Public-facing pages no longer render `TODO`, `confirm official source`, `placeholder`, `internal review`, or `needs confirmation` copy.
- Unconfirmed fields are hidden from the frontend or replaced with safe public fallback copy.
- Internal TODO notes remain in `/data`, `/content`, and this review summary for source-tracking and launch preparation.
- Requested aliases were added so `/members/marz` redirects to `/members/marz23`, and `/press` redirects to `/press-kit`.

## Canonical Route Status

- Canonical member route is `/members/marz23`.
- Canonical press route is `/press-kit`.
- Internal navigation, CTA buttons, cards, footer/header links, and primary review references use canonical routes for public-facing destinations.
- Alias routes are documented only as backward-compatible redirects.
- Backward-compatible redirects remain active:
  - `/members/marz` redirects to `/members/marz23`
  - `/press` redirects to `/press-kit`

## External Link Audit Status

- `LINK_AUDIT.md` created with News, Live, Music, Media, and Press Kit external links.
- Pre-launch link freeze is complete: source, streaming, press, and media actions render only when an href exists.
- News listing buttons use primary `sourceUrl` only.
- News detail pages show `Original Source`, plus `Additional Source` only when already present in data.
- Live milestone cards use `sourceUrl`, plus `Additional Source` only when already present in data.
- Music streaming buttons render only when Spotify or Apple Music URLs exist.
- Media category cards link to the official YouTube channel until playlist URLs are confirmed.
- External public links use `target="_blank"` and `rel="noopener noreferrer"`.

## Pre-Launch Freeze Status

- Ready for Vercel deployment as v1 Public Beta: yes.
- `npm run lint` passes.
- `npm run build` passes and generated all public pages, album detail pages, news detail pages, and redirect aliases.
- Public HTML scan found no public-facing `TODO`, `placeholder`, `internal review`, `coming soon`, `needs confirmation`, or `confirm official source` text.
- Public HTML scan found no empty `href=""` values.
- External anchor audit found all external anchors use `target="_blank"` and `rel="noopener noreferrer"`.
- Metadata resolves to `https://trashband.tw`, including canonical URL, `og:url`, and absolute OG image.

## v1.1 Content and Mobile Polish Status

- Mobile homepage hero crop adjusted with mobile-specific object positioning while keeping tablet and desktop crop behavior intact.
- Contact page expanded into an official inquiry hub for press/media, booking/live, partnership/brand collaboration, label/music business, and general official inquiries.
- Contact page now uses confirmed public routing: 經紀/依凡, 華納音樂, and `passion0728@gmail.com` where appropriate.
- Contact page does not include a fake form.
- About, History, Music, Live, and Press Kit copy received safe official-style enrichment without adding new unverified facts.
- Contact secondary links use confirmed official links and are documented in `LINK_AUDIT.md`.

## v1.2 i18n Architecture Status

- Traditional Chinese is now canonical on clean unprefixed routes; `/zh` routes redirect to the equivalent clean Traditional Chinese URL.
- Locale route roots are implemented for `/en`, `/ja`, and `/ko`.
- Major public pages support locale prefixes for English, Japanese, and Korean, including members, album detail pages, and news detail pages.
- Traditional Chinese canonical routes now have a dedicated localization pass across navigation, shared UI, page copy, metadata, member roles, album labels, news categories, live labels, media copy, Press Kit copy, and Contact copy.
- First-pass translations are wired through localized content helpers. Traditional Chinese remains the source language, English currently mirrors approved official copy, and Japanese/Korean include safe first-pass translations for core page copy, About, member bios, live/media descriptions, and key album notes.
- Existing unprefixed deep routes remain the canonical Traditional Chinese public routes.
- `/` remains the Traditional Chinese homepage and no longer redirects to `/zh`.
- `/zh` and `/zh/...` redirect to equivalent unprefixed Traditional Chinese routes through `proxy.ts`.
- Legacy redirects remain active:
  - `/press` redirects to `/press-kit`
  - `/members/marz` redirects to `/members/marz23`
- Locale aliases are also available:
  - `/[locale]/press` redirects to `/[locale]/press-kit`
  - `/[locale]/members/marz` redirects to `/[locale]/members/marz23`
- Header includes a language switcher for `中文`, `EN`, `日本語`, and `한국어`; mobile navigation includes the same switcher.
- Language switching preserves the current page path where a localized equivalent exists; Chinese targets clean unprefixed routes.
- Shared dictionaries and localized content helpers are in `lib/i18n/`; untranslated sections safely fall back to the current Traditional Chinese / existing official copy.
- Locale metadata includes locale-specific canonical URLs plus `zh-TW`, `en`, `ja`, `ko`, and `x-default` alternate links.
- `I18N_AUDIT.md` documents route coverage, redirect behavior, hreflang status, and remaining native-language review items.
- `ZH_LOCALIZATION_AUDIT.md` documents the Traditional Chinese localization pass and remaining Chinese editorial review items.

## v1.3 Header and Hero Polish Status

- Desktop main navigation now uses slightly larger, stronger typography with more deliberate spacing.
- The language switcher is visually separated from the primary navigation and styled as a secondary grouped control with a clearer active language state.
- The Press Kit CTA remains in the header with reduced visual weight and improved spacing from the language control.
- Homepage hero spacing was refined between the eyebrow, title, paragraph, and CTA buttons without changing the hero crop, overlays, or routing behavior.
- The current chapter metadata card has improved spacing and typography, with key values protected from awkward wrapping.
- Chinese homepage hero copy was refined for a more natural official tone while preserving the same factual meaning.

## 1. Pages Completed

- Home (`/`)
- About (`/about`)
- Members index (`/members`)
- Member detail pages (`/members/marz23`, `/members/euan`, `/members/tteng`, `/members/kuei-gun`)
- History (`/history`)
- Music index (`/music`)
- Album detail pages (`/music/the-last-train-of-happiness`, `/music/holy-trip`, `/music/never-die`, `/music/11-11`, `/music/reset`, `/music/trash-2012`)
- Live (`/live`)
- News index (`/news`)
- News detail pages (`/news/golden-melody-best-band`, `/news/the-last-train-of-happiness-album-era`, `/news/taipei-arena-15th-anniversary`, `/news/kaohsiung-arena-15th-anniversary`)
- Media (`/media`)
- Press Kit (`/press-kit`)
- Contact (`/contact`)

## 2. Pages Still Using Placeholder Content

These pages are now safe as official-draft archive pages because uncertain content is hidden from public display. They still need final source approval before a fully public launch.

- Home: official-draft hero and latest-release copy; genre wording and release metadata remain tracked internally.
- About: draft short bio, long bio, and press-ready description pending approval.
- Members and member detail pages: member bios are safe drafts; unapproved bios, credits, and social links are hidden.
- History: timeline entries are present; source-confirmation notes remain internal only.
- Music and album detail pages: unconfirmed dates, credits, tracklists, links, and official cover references are hidden.
- Live: arena milestone events show date, time, venue, city, and source links in text-first milestone cards.
- News: official announcements render as text-only editorial entries with source links; no fake thumbnails are shown.
- Media: official YouTube hub uses category cards only; no fake video thumbnails or invented video URLs are shown.
- Press Kit: structure is complete; downloads are simplified to request-based press photos, logo package, and technical rider.
- Footer uses neutral `Official Links` labeling with no public "coming soon" language.
- Contact: expanded official inquiry hub uses safe public fallback copy, confirmed official links, and no fake form.

## 3. Pages Still Using Placeholder Images

Every missing official image now has fallback handling or a neutral public presentation. Public-facing TODO/placeholder labels have been removed.

- Home hero: official first-batch image integrated from normalized path `public/images/hero/trash-main.jpg`; fallback remains `public/images/hero.svg`.
- Site logo: official first-batch white logo integrated from normalized path `public/images/logo/trash-logo-white.png`; primary logo path normalized to `public/images/logo/trash-logo.png`.
- Open Graph image: official first-batch image integrated from `public/images/og/trash-og.jpg`.
- Member cards/details: official first-batch member portraits integrated:
  - `public/images/members/marz.jpg`
  - `public/images/members/euan.jpg`
  - `public/images/members/tteng.jpg`
  - `public/images/members/kuei-gun.jpg`
- Album cards/details: SVG fallback artwork under `public/images/albums/`
- News pages are text-first until approved news imagery is provided.
- Media page is text-first YouTube hub category cards until curated playlist/video assets are approved.
- Press kit: official logo/hero assets are integrated; press-download assets remain available upon request.

## 4. Content That Requires Official Confirmation

- Official genre order and approved English wording.
- Member English spellings, display order, roles, full bios, credits, and social links.
- Exact formation details, including whether a day in December 2009 should be shown.
- 2012 first album release date, credits, tracklist, and exact Gongliao Ocean Music Festival award wording.
- `歸零 / Reset`: release date, official English title, credits, tracklist, nomination year, and category.
- `11:11`: release date, credits, tracklist, Japan recording period details, studio, and dates.
- 2019 Warner Music phase: exact signing announcement date and approved wording.
- `Never Die`: release date, credits, tracklist, and award context.
- `Holy Trip!`: release date, credits, tracklist, and award context.
- `幸福的末班車 / The Last Train of Happiness`: final English title, release date, credits, tracklist, and official synopsis.
- 2024 Taipei Arena event: exact date, event title, promoter, ticket link, and imagery.
- 2025 Kaohsiung Arena event: exact date, event title, promoter, ticket link, and imagery.
- 2025 Golden Melody Awards Best Band: final category wording and citation link.
- Press kit usage/legal wording.

## 5. Links That Require Official Confirmation

Primary public source and streaming links are documented in `LINK_AUDIT.md`. Unsafe `#` links have been removed from user-facing actions where practical. Missing links are disabled, hidden from public display, or shown as request-based non-link states.

- Curated playlist URLs and individual video URLs still require official confirmation before adding.
- Press download URLs/files remain request-based until official files are provided.
- Management, booking, press, and label contact links or emails still require official confirmation before publishing.

## 6. Missing Assets

- Official vector TRASH wordmark and symbol. First-batch logo files are normalized raster PNGs; final vector logo variants are still needed.
- Light/dark vector logo variants.
- Favicon.
- Current group portrait.
- Official album covers integrated:
  - `trash-2012.jpg`
  - `reset-2014.jpg`
  - `1111-2017.jpg`
  - `never-die-2019.jpg`
  - `holy-trip-2021.jpg`
  - `the-last-train-of-happiness-2024.jpg`
- Live archive images for Taipei Arena and Kaohsiung Arena.
- Approved news images for Golden Melody, album era, Taipei Arena, and Kaohsiung Arena.
- Curated video/playlist URLs and MV credits for the official YouTube hub.
- Press downloads:
  - official bio PDF
  - press photos ZIP
  - logo package ZIP
  - tech rider PDF
  - stage plot PDF

## 7. SEO Metadata Status

- Default title is configured: `TRASH Official`.
- Title template is configured: `%s | TRASH Official`.
- Default description is configured from the content package.
- Keywords are configured from the content package.
- Open Graph title, description, type, and locale are configured.
- Open Graph image is configured with `public/images/og/trash-og.jpg`.
- `metadataBase` is configured to the official domain: `https://trashband.tw`.
- Canonical URL is configured through Next metadata alternates.
- Open Graph URL is configured and resolves against `https://trashband.tw`.
- Open Graph image resolves as an absolute URL: `https://trashband.tw/images/og/trash-og.jpg`.
- Recommended before public launch: add favicon and final social metadata.

## 8. Recommended Next 10 Fixes Before Public Launch

1. Add official favicon and final vector logo assets.
2. Confirm member image usage credits and crop approvals.
3. Add full album credits after approval.
4. Add confirmed tracklists for every album entry.
5. Add approved press downloads and final usage/legal language.
6. Add MV credits and curated individual video links.
7. Add additional official news links.
8. Expand the full live archive beyond the arena milestone entries.
9. Add final social metadata.
10. Confirm album cover usage credits.

## Remaining Content Before Public Launch

- Album cover images are integrated at the requested local paths. Remaining album-cover work is usage-credit and crop approval.
- Missing final press downloads:
  - official bio PDF
  - press photos ZIP
  - logo package ZIP
  - tech rider PDF
  - stage plot PDF
- Missing full album credits.
- Missing MV credits and curated individual video URLs.
- Missing additional official news links.
- Missing full live archive.

## Route-by-Route Review

| Route | Current content status | Visual status | Asset status | Launch readiness | Notes |
|---|---|---|---|---|---|
| `/` | Draft home copy integrated; internal source notes hidden from public display. | Polished cinematic hero and release section. | Official hero integrated; release cover uses fallback artwork. | Launch-safe draft. | Public-final launch still needs release data, official album art, and genre approval. |
| `/about` | Draft bio package integrated; approval notes hidden from public display. | Strong editorial layout. | No major image dependency. | Launch-safe draft. | Confirm member spellings, genre order, dates, event titles, and album translations. |
| `/members` | Current lineup and draft summaries integrated with public-safe copy. | Iconic card treatment. | Official member portraits integrated with fallback handling. | Launch-safe draft. | Confirm roles, social links, usage credits, and crop approval. |
| `/members/marz` | Backward-compatible redirect only; not used by internal navigation. | No visual surface. | No asset dependency. | Launch-safe redirect. | Canonical route is `/members/marz23`. |
| `/members/marz23` | Draft bio present; internal notes hidden. | Detail layout complete. | Official portrait integrated with fallback. | Launch-safe draft. | Confirm full bio, credits, role text, social links, and image credit. |
| `/members/euan` | Draft bio present; internal notes hidden. | Detail layout complete. | Official portrait integrated with fallback. | Launch-safe draft. | Confirm full bio, credits, role text, social links, and image credit. |
| `/members/tteng` | Draft bio present; internal notes hidden. | Detail layout complete. | Official portrait integrated with fallback. | Launch-safe draft. | Confirm full bio, credits, role text, social links, and image credit. |
| `/members/kuei-gun` | Draft bio present; internal notes hidden. | Detail layout complete. | Official portrait integrated with fallback. | Launch-safe draft. | Confirm preferred English spelling, full bio, and image credit. |
| `/history` | Full timeline present; source-confirmation notes hidden. | Cinematic timeline treatment. | No major image dependency. | Launch-safe draft. | Confirm dates, awards, event names, and recording-period details. |
| `/music` | Discography updated with release years, track counts, and official streaming links. | Album card system polished. | Official album covers integrated with fallback artwork retained. | Launch-safe draft. | Needs full credits and tracklists. |
| `/music/the-last-train-of-happiness` | Album page includes release date, track count, Spotify, and Apple Music. | Strong album detail layout. | Official cover integrated with fallback retained. | Launch-safe draft. | Add full credits and tracklist. |
| `/music/holy-trip` | Album page includes year, track count, and Spotify. | Strong album detail layout. | Official cover integrated with fallback retained. | Launch-safe draft. | Add full credits and tracklist. |
| `/music/never-die` | EP page includes year, track count, and Spotify. | Strong album detail layout. | Official cover integrated with fallback retained. | Launch-safe draft. | Add full credits and tracklist. |
| `/music/11-11` | Album page includes year, track count, and Spotify. | Strong album detail layout. | Official cover integrated with fallback retained. | Launch-safe draft. | Add full credits and tracklist. |
| `/music/reset` | Album page includes year, track count, Spotify, and Apple Music. | Strong album detail layout. | Official cover integrated with fallback retained. | Launch-safe draft. | Add full credits and tracklist. |
| `/music/trash-2012` | First album page includes year, track count, and Spotify. | Strong album detail layout. | Official cover integrated with fallback retained. | Launch-safe draft. | Add full credits and tracklist. |
| `/live` | Arena milestone shows include labels, descriptions, dates, times, venues, and source links. | Text-first milestone cards with stronger hierarchy. | No fake live imagery used. | Launch-safe draft. | Add approved live images and expand full archive. |
| `/news` | First batch of official/public-source news posts added with dates and source links. | Text-only official announcement archive. | No fake news thumbnails used. | Launch-safe draft. | Add approved news images only when available. |
| `/news/golden-melody-best-band` | Public-source announcement present with source link. | Text-only detail layout. | No fake news imagery used. | Launch-safe draft. | Add approved image only when available. |
| `/news/the-last-train-of-happiness-album-era` | Public-source release announcement present with source links. | Text-only detail layout. | No fake news imagery used. | Launch-safe draft. | Add approved image only when available. |
| `/news/taipei-arena-15th-anniversary` | Public-source live announcement present with source link. | Text-only detail layout. | No fake news imagery used. | Launch-safe draft. | Add approved image only when available. |
| `/news/kaohsiung-arena-15th-anniversary` | Public-source live announcement present with source links. | Text-only detail layout. | No fake news imagery used. | Launch-safe draft. | Add approved image only when available. |
| `/media` | Official video hub links to the TRASH YouTube channel by category with specific category copy. | Text-first category cards. | No fake video thumbnails used. | Launch-safe draft. | Add curated individual video URLs, playlist URLs, and MV credits. |
| `/press` | Backward-compatible redirect only; not used by internal navigation. | No visual surface. | No asset dependency. | Launch-safe redirect. | Canonical route is `/press-kit`. |
| `/press-kit` | Press kit structure complete; downloads simplified to request-based assets. | Suitable media/brand structure. | First-batch logo/hero assets integrated; press downloads remain request-based. | Launch-safe draft. | Add final files and confirm official contact channels. |
| `/contact` | Expanded official inquiry hub covers press, booking, partnership, label/music business, and general inquiries with confirmed public routing. | Clean contact layout with official CTA. | No major image dependency. | Launch-ready. | Uses 經紀/依凡, 華納音樂, and `passion0728@gmail.com` where appropriate. |
