# TRASH Official Website Pre-Launch Freeze Audit

Audit target: v1 Public Beta deployment on Vercel.

## Deployment Readiness

- Ready for deployment: yes
- Official domain: `https://trashband.tw`
- Exact deployment command:

```bash
npx vercel --prod
```

Run after the Vercel project is linked, environment settings are confirmed, and DNS is ready.

## Build Coverage

Fresh production build completed successfully and generated the public route set:

| Route | Status |
|---|---|
| `/` | Builds |
| `/about` | Builds |
| `/members` | Builds |
| `/members/marz23` | Builds |
| `/members/euan` | Builds |
| `/members/tteng` | Builds |
| `/members/kuei-gun` | Builds |
| `/history` | Builds |
| `/music` | Builds |
| `/music/the-last-train-of-happiness` | Builds |
| `/music/holy-trip` | Builds |
| `/music/never-die` | Builds |
| `/music/11-11` | Builds |
| `/music/reset` | Builds |
| `/music/trash-2012` | Builds |
| `/live` | Builds |
| `/news` | Builds |
| `/news/golden-melody-best-band` | Builds |
| `/news/kaohsiung-arena-15th-anniversary` | Builds |
| `/news/taipei-arena-15th-anniversary` | Builds |
| `/news/the-last-train-of-happiness-album-era` | Builds |
| `/media` | Builds |
| `/press-kit` | Builds |
| `/contact` | Builds |

## Redirects

| Source | Destination | Status |
|---|---|---|
| `/members/marz` | `/members/marz23` | Active via Next redirect page |
| `/press` | `/press-kit` | Active via Next redirect page |

## Freeze Checks

| Check | Status | Notes |
|---|---|---|
| Public-facing internal text | Pass | Built HTML scan found no public `TODO`, `placeholder`, `internal review`, `coming soon`, `needs confirmation`, or `confirm official source` text. |
| Empty hrefs | Pass | Built HTML scan found no `href=""` values. |
| Button href safety | Pass | Source, streaming, press, and media actions render only when links exist or are request-state cards. |
| External link attributes | Pass | 55 built external anchors checked; all use `target="_blank"` and `rel="noopener noreferrer"`. |
| Metadata domain | Pass | `metadataBase`, canonical URL, `og:url`, and OG image resolve against `https://trashband.tw`. |
| OG image | Pass | Resolves to `https://trashband.tw/images/og/trash-og.jpg`. |
| Logo filenames | Pass | Normalized files are `trash-logo.png` and `trash-logo-white.png`; no `.svg.png` reference remains. |
| Album covers | Pass | All six official album cover files exist in `public/images/albums/`. |
| Link audit docs | Pass | `LINK_AUDIT.md`, `REVIEW_SUMMARY.md`, and `DEPLOYMENT_CHECKLIST.md` are updated for freeze status. |
| Lint | Pass | `npm run lint` completed successfully. |
| Build | Pass | `npm run build` completed successfully. |

## Blocking Issues

None for v1 Public Beta deployment.

## Remaining Non-Blocking Improvements

- Add final favicon and vector logo package.
- Confirm image usage credits for hero, member portraits, album covers, and future live/news imagery.
- Add final press downloads: press photos, logo package, technical rider, stage plot, and approved bio PDF.
- Add full album credits and tracklists after official confirmation.
- Add curated YouTube playlist URLs, individual video URLs, and MV credits after official confirmation.
- Expand the live archive beyond the two arena milestone entries.
- Add more official/public news links as the archive grows.
- Confirm final management, booking, press, and label contact channels.

## Verification Commands

```bash
npm run lint
npm run build
```
