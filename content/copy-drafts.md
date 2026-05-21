# TRASH Website Copy Drafts

All copy below is draft-ready but not final. Any unverified statement is marked `TODO: confirm official source`.

## Home Copy

### Hero Eyebrow

Official Archive / Taipei, Taiwan

### Hero Headline

TRASH

### Hero Body

Founded in Taipei in December 2009, TRASH turns Taiwanese rock, Mandopop rock, Alternative Rock, Britpop, and Grunge into songs built for impact, memory, and live-stage release.

TODO: confirm official source for final English genre list and wording.

### Hero CTAs

- Latest Release
- Watch Videos
- Press Kit

### Latest Release

`幸福的末班車 / The Last Train of Happiness`

Draft:
TRASH enters a defining chapter with `幸福的末班車`, a 15th-anniversary album era that connects the band’s long road from independent stages to arena milestones and Golden Melody recognition.

TODO: confirm official source for English album title, release date, tracklist, credits, and official album synopsis.

### Homepage Milestones Intro

From early independent stages to `歸零`, `11:11`, `Holy Trip!`, `幸福的末班車`, arena concerts, and the Golden Melody Awards, this archive traces TRASH as a band that kept turning pressure into momentum.

## About Copy

### Short Bio

TRASH is a Taiwanese rock band founded in Taipei in December 2009. Current members are 阿夜 / Marz23 on vocal and guitar, 頤原 / Euan on guitar, 博文 / TTeng on bass, and 魁剛 / Kuei gun on drums. Signed with Warner Music Taiwan, the band’s sound moves across Taiwanese rock, Mandopop rock, Alternative Rock, Britpop, and Grunge.

TODO: confirm official source for exact member English stylization and genre order.

### Long Bio

TRASH formed in Taipei in December 2009 and grew from Taiwan’s independent rock scene into one of the country’s most visible contemporary rock bands. Their early years were built through live stages, a self-titled first album in 2012, and recognition at Gongliao Ocean Music Festival.

The band’s later releases expanded that foundation: `歸零 / Reset` brought Golden Melody Awards attention, `11:11` marked a wider recording and creative phase, and the Warner Music Taiwan era opened a larger platform for the band’s sound. With `Never Die`, `Holy Trip!`, and `幸福的末班車 / The Last Train of Happiness`, TRASH sharpened its balance of melody, distortion, emotional directness, and large-scale live energy.

In 2024 and 2025, TRASH carried its 15th-anniversary chapter into arena-scale concerts, including Taipei Arena and Kaohsiung Arena milestones. In 2025, the band won Best Band at the Golden Melody Awards, marking a major recognition point in its long-running story.

TODO: confirm official source for exact dates, event titles, album credits, and official English album translations.

### Press-Ready Description

TRASH is a Taiwanese rock band founded in Taipei in December 2009 and signed with Warner Music Taiwan. The current lineup features 阿夜 / Marz23, 頤原 / Euan, 博文 / TTeng, and 魁剛 / Kuei gun. Blending Taiwanese rock, Mandopop rock, Alternative Rock, Britpop, and Grunge, TRASH has developed from independent-stage momentum into an arena-scale band archive, with major milestones including `歸零`, `11:11`, `Holy Trip!`, `幸福的末班車`, and a 2025 Golden Melody Awards Best Band win.

TODO: confirm official source before using in media kits.

## Member Page Copy Placeholders

### 阿夜 / Marz23

Role: Vocal / Guitar

Draft:
阿夜 / Marz23 stands at the center of TRASH as vocalist, guitarist, and a key creative voice. His performance connects the band’s emotional directness with the force of its live shows.

TODO: confirm official source for full member bio, preferred role text, personal credits, and social links.

### 頤原 / Euan

Role: Guitar

Draft:
頤原 / Euan shapes the guitar architecture of TRASH, giving the band its melodic edge, atmospheric lift, and live-stage pressure.

TODO: confirm official source for full member bio, preferred role text, personal credits, and social links.

### 博文 / TTeng

Role: Bass

Draft:
博文 / TTeng anchors TRASH with bass lines that hold the band’s weight, movement, and rhythm-section impact.

TODO: confirm official source for full member bio, preferred role text, personal credits, and social links.

### 魁剛 / Kuei gun

Role: Drums

Draft:
魁剛 / Kuei gun drives TRASH from the drums, giving the songs their physical push, live momentum, and dynamic escalation.

TODO: confirm official source for full member bio, preferred role text, personal credits, and social links.

## History Timeline Copy

### 2009 Formation

TRASH forms in Taipei in December 2009.

TODO: confirm official source for exact formation date and original lineup details.

### 2012 First Album / Gongliao Ocean Music Festival

TRASH releases its self-titled first album and receives recognition at Gongliao Ocean Music Festival.

TODO: confirm official source for award wording, album release date, and album credits.

### 2014 / 2015 Reset and Golden Melody Awards Nomination

`歸零 / Reset` becomes an important early release and leads to Golden Melody Awards Best Band nomination recognition.

TODO: confirm official source for release date, official English title, nomination year, and category text.

### 2017 11:11 / Japan Recording Period

`11:11` marks another major creative phase, connected in the project brief to a Japan recording period.

TODO: confirm official source for Japan recording details, studio, dates, and release credits.

### 2019 Warner Music Phase

TRASH enters its Warner Music Taiwan phase in 2019.

TODO: confirm official source for exact signing announcement date and approved wording.

### 2020 Never Die

`Never Die` represents the next album phase in the band’s discography.

TODO: confirm official source for release date, tracklist, credits, and award context.

### 2021 Holy Trip!

`Holy Trip!` expands TRASH’s album narrative and later award recognition context.

TODO: confirm official source for release date, tracklist, credits, and award context.

### 2024 The Last Train of Happiness

`幸福的末班車 / The Last Train of Happiness` becomes the core 15th-anniversary album era.

TODO: confirm official source for final English title, release date, credits, and tracklist.

### 2024 Taipei Arena

TRASH brings its 15th-anniversary concert era to Taipei Arena.

TODO: confirm official source for exact date, event title, promoter, ticket link, and imagery.

### 2025 Kaohsiung Arena

TRASH brings its 15th-anniversary concert era to Kaohsiung Arena.

TODO: confirm official source for exact date, event title, promoter, ticket link, and imagery.

### 2025 Golden Melody Awards Best Band

TRASH wins Best Band at the 2025 Golden Melody Awards.

TODO: confirm official source for final category wording and award citation link.

## Discography Placeholders

Recommended data shape:

```ts
type ReleaseDraft = {
  slug: string;
  title: string;
  titleEn?: string;
  type: "Album" | "EP" | "Single" | "Live";
  releaseDate: string;
  releaseDateStatus: "verified" | "todo";
  cover: string;
  summary: string;
  tracklist: string[];
  creditsTodo: string[];
};
```

Draft releases:

- `trash-2012`
  - Title: `TRASH`
  - Type: Album
  - Date: TODO: confirm official source
  - Cover: `/images/albums/trash-2012.jpg`
- `reset`
  - Title: `歸零`
  - English title: `Reset`
  - Date: TODO: confirm official source
  - Cover: `/images/albums/reset.jpg`
- `11-11`
  - Title: `11:11`
  - Date: TODO: confirm official source
  - Cover: `/images/albums/11-11.jpg`
- `never-die`
  - Title: `Never Die`
  - Date: TODO: confirm official source
  - Cover: `/images/albums/never-die.jpg`
- `holy-trip`
  - Title: `Holy Trip!`
  - Date: TODO: confirm official source
  - Cover: `/images/albums/holy-trip.jpg`
- `the-last-train-of-happiness`
  - Title: `幸福的末班車`
  - English title: `The Last Train of Happiness`
  - Date: TODO: confirm official source
  - Cover: `/images/albums/the-last-train-of-happiness.jpg`

## Live Archive Placeholders

- 2024 Taipei Arena 15th Anniversary Concert
  - Date: TODO: confirm official source
  - Venue: Taipei Arena
  - Asset: `/images/live/taipei-arena-2024-hero.jpg`
- 2025 Kaohsiung Arena 15th Anniversary Concert
  - Date: TODO: confirm official source
  - Venue: Kaohsiung Arena
  - Asset: `/images/live/kaohsiung-arena-2025-hero.jpg`

## News Post Candidates

1. `TRASH Wins Golden Melody Awards Best Band`
   - Category: Awards
   - Date: TODO: confirm official source
   - Asset: `/images/news/golden-melody-2025.jpg`
2. `The Last Train of Happiness Album Era`
   - Category: Release
   - Date: TODO: confirm official source
   - Asset: `/images/news/last-train-album.jpg`
3. `15th Anniversary Concert at Taipei Arena`
   - Category: Live
   - Date: TODO: confirm official source
   - Asset: `/images/news/taipei-arena-2024.jpg`
4. `15th Anniversary Concert at Kaohsiung Arena`
   - Category: Live
   - Date: TODO: confirm official source
   - Asset: `/images/news/kaohsiung-arena-2025.jpg`

## SEO Metadata Draft

### Default Title

TRASH Official

### Title Template

`%s | TRASH Official`

### Default Description

Official website and archive for Taiwanese rock band TRASH, featuring music, members, history, live milestones, news, videos, and press materials.

TODO: confirm official source for approved English description.

### Keywords

TRASH, TRASH band, Taiwanese rock, Mandopop rock, Marz23, Warner Music Taiwan, 幸福的末班車, Holy Trip, 歸零, 11:11

TODO: confirm SEO keyword list with final launch strategy.

### Open Graph

- Image: `/images/brand/og-default.jpg`
- Type: `website`
- Locale: `zh_TW`
- Alternate locale: `en_US`
- URL: `https://trashband.tw`
