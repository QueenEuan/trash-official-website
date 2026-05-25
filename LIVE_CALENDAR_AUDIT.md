# TRASH Live Calendar Audit

Date: 2026-05-25

## Routes

| Locale | Route | Status |
|---|---|---|
| Traditional Chinese | `/live/calendar` | Active canonical route |
| English | `/en/live/calendar` | Active localized route |
| Japanese | `/ja/live/calendar` | Active localized route |
| Korean | `/ko/live/calendar` | Active localized route |

## Event Data Model

- Public performance dates are maintained in `data/events.ts`.
- `data/shows.ts` derives the existing Live milestone cards from `data/events.ts`, so confirmed performance dates are not maintained in two separate source lists.
- Event fields include:
  - `id`
  - `slug`
  - localized `title`
  - `date`
  - optional `time`
  - localized `venue`
  - localized `city`
  - `status`
  - `type`
  - optional `ticketUrl`
  - optional `sourceUrl`
  - optional `alternateSourceUrl`
  - optional `image`

## Current Events

| Date | Event | Status | Type |
|---|---|---|---|
| 2024-12-14 | TRASH《幸福的末班車》15 週年演唱會 | past | milestone |
| 2025-05-03 | TRASH《幸福的末班車》15 週年演唱會 高雄場 | past | milestone |

No upcoming shows have been added because no confirmed public upcoming TRASH performance date was provided.

## How To Add A New Performance Date

1. Open `data/events.ts`.
2. Add a new object to `liveEvents`.
3. Fill in confirmed public details only.
4. Use localized text fields for `title`, `venue`, and `city`.
5. Add `ticketUrl` only when a real public ticket URL is confirmed.
6. Add `sourceUrl` only when a real official or public source URL is confirmed.
7. Keep missing optional fields omitted instead of rendering empty buttons.

## Localization Support

- Calendar UI copy is localized through `lib/i18n/content.ts`.
- Calendar routes preserve the existing locale strategy:
  - Chinese uses clean unprefixed canonical URLs.
  - English, Japanese, and Korean use `/en`, `/ja`, and `/ko`.
- Language switching preserves `/live/calendar` across locales.

## Remaining Future Improvements

- Add upcoming events once public dates are confirmed.
- Add official live images when approved assets are available.
- Add structured event schema after final SEO strategy is approved.
- Add month deep links only if there is a product need.
- Add a CMS migration path later if event updates become frequent.

## Verification

- `npm run lint`: pass
- `npm run build`: pass
- Production build generated `/live/calendar`, `/en/live/calendar`, `/ja/live/calendar`, and `/ko/live/calendar`.
- Public-output scans found no public TODO / placeholder / internal review / coming soon copy.
- Empty href scan found no fake ticket links or empty public anchors.
