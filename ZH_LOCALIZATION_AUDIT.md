# TRASH Traditional Chinese Localization Audit

Date: 2026-05-22

## Scope

Traditional Chinese is the primary canonical locale and remains on clean unprefixed routes. English remains under `/en`, Japanese under `/ja`, Korean under `/ko`, and `/zh` routes remain redirect-only.

## Chinese Canonical Routes Checked

| Route | Status |
|---|---|
| `/` | Chinese hero, CTAs, latest release, news, media, milestones, members, live, compact header labels, and CTA copy active |
| `/about` | Chinese official bio, long bio, press-ready description, and profile labels active |
| `/members` | Chinese page heading, role labels, member intros, and shared card copy active |
| `/members/marz23` | Chinese role, bio, instruments, and highlights active |
| `/members/euan` | Chinese role, bio, instruments, and highlights active |
| `/members/tteng` | Chinese role, bio, instruments, and highlights active |
| `/members/kuei-gun` | Chinese role, bio, instruments, and highlights active |
| `/history` | Chinese timeline headings, tags, and milestone descriptions active |
| `/music` | Chinese discography heading, album summaries, album type labels, and card buttons active |
| `/music/the-last-train-of-happiness` | Chinese album UI, streaming labels, release info, and notes active |
| `/music/holy-trip` | Chinese album UI and summary active |
| `/music/never-die` | Chinese album UI and summary active |
| `/music/11-11` | Chinese album UI and summary active |
| `/music/reset` | Chinese album UI and summary active |
| `/music/trash-2012` | Chinese album UI and summary active |
| `/live` | Chinese live archive heading, milestone labels, descriptions, status, and source labels active |
| `/news` | Chinese news heading, categories, excerpts, and source labels active |
| `/news/golden-melody-best-band` | Chinese detail copy and source buttons active |
| `/news/kaohsiung-arena-15th-anniversary` | Chinese detail copy and source buttons active |
| `/news/taipei-arena-15th-anniversary` | Chinese detail copy and source buttons active |
| `/news/the-last-train-of-happiness-album-era` | Chinese detail copy and source buttons active |
| `/media` | Chinese official YouTube hub copy, category cards, and channel CTA active |
| `/press-kit` | Chinese press kit copy, labels, request states, awards, contact, and usage notes active |
| `/contact` | Chinese contact hub copy, inquiry routing, labels, and CTA active |

## English Strings Intentionally Retained

- Proper names: `TRASH`, `Marz23`, `Euan`, `TTeng`, `Kuei gun`.
- Platform names: `Spotify`, `Apple Music`, `YouTube`, `Instagram`, `Facebook`.
- Contact and label references where approved: `passion0728@gmail.com`, `華納音樂 / Warner Music Taiwan`.
- Official album titles or secondary subtitles where intentionally shown: `Holy Trip!`, `Never Die`, `Reset`, `The Last Train of Happiness`.
- `EP` remains unchanged as a common release format label.
- Framework-provided embedded 404 fallback strings appear inside generated route payloads, but are not page-specific Chinese copy.

## English Strings Translated

- Navigation: About, Members, History, Music, Live, News, Media, Press Kit, Contact. Header labels are intentionally shortened to 關於、成員、歷史、作品、演出、消息、影音、媒體、聯絡 for layout integrity.
- Shared UI: Latest Release, View Album, Watch Videos, Read Source, Additional Source, Original Source, Official Links, Open Channel, Past, Album, Tracks, Release Date, Awards, Milestones, Available upon request, Contact.
- Home page narrative, CTAs, latest release copy, timeline copy, member copy, live copy, and footer description.
- Homepage current-chapter metadata card labels and values are Chinese and now use a vertical editorial layout.
- About and History official narrative copy.
- Member roles and instrument labels.
- Album type labels, streaming button labels, release info labels, and album summaries.
- News categories and source buttons.
- Media hub title, category descriptions, and channel CTA.
- Press Kit headings, download/request states, awards section, usage notes, and press contact language.
- Contact inquiry categories, descriptions, contact labels, and CTA.
- Traditional Chinese metadata title and description.

## Remaining Human Language Review Items

- Final Traditional Chinese editorial approval for About, History, member bios, album summaries, Press Kit copy, and Contact copy.
- Confirm final official style for genre terms: 台灣搖滾、華語搖滾、另類搖滾、英式搖滾、油漬搖滾.
- Confirm whether `Warner Music Taiwan` should always appear beside `華納音樂` or only in Press Kit metadata.
- Confirm final official usage language for photo credits and logo restrictions.

## Verification

- `npm run lint`: pass
- `npm run build`: pass
- Chinese public-output scan found no targeted English UI labels after excluding approved proper nouns/platform names and framework 404 payload text.
- Public-output scan found no public `TODO`, `placeholder`, `internal review`, `coming soon`, `needs confirmation`, or `confirm official source` strings.
- Metadata scan confirmed Chinese title/description on unprefixed routes and English metadata under `/en`.
