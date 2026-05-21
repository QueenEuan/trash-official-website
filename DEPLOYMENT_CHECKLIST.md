# TRASH Official Website Deployment Checklist

## Production Status

- Official domain confirmed: `https://trashband.tw`
- `metadataBase` configured as `https://trashband.tw`
- Canonical URL configured through Next metadata alternates and resolves to `https://trashband.tw`
- Open Graph URL resolves to `https://trashband.tw`
- OG image resolves as an absolute URL: `https://trashband.tw/images/og/trash-og.jpg`
- No placeholder production domain remains in `app`, `components`, `data`, or review documentation.
- No public-facing TODO / placeholder / internal review text remains in `app` or `components`.
- Logo filenames are normalized:
  - `public/images/logo/trash-logo.png`
  - `public/images/logo/trash-logo-white.png`
- Internal routes use canonical destinations:
  - `/members/marz23`
  - `/press-kit`
- Backward-compatible redirects remain active:
  - `/members/marz` redirects to `/members/marz23`
  - `/press` redirects to `/press-kit`

## Vercel Deployment Steps

1. Push the latest project state to the production branch.
2. In Vercel, create or select the TRASH official website project.
3. Confirm framework preset is `Next.js`.
4. Confirm build command is `npm run build`.
5. Confirm install command is `npm install`, unless the project uses another package manager in deployment.
6. Confirm output settings are left as the default Next.js/Vercel configuration.
7. Add production domain `trashband.tw`.
8. Add `www.trashband.tw` as an additional domain.
9. Deploy to a Vercel preview first and complete QA.
10. Promote the verified deployment to production.

## GitHub Version Control Setup

1. Confirm `.gitignore` is present before the first commit.
2. Keep generated and local-only files out of Git:
   - `node_modules/`
   - `.next/`
   - `.npm-cache/`
   - `.eslintcache`
   - `.env*`
   - local logs
   - `.vercel/`
3. Initialize Git if needed:

```bash
git init
```

4. Review the working tree before staging:

```bash
git status --short
```

5. Stage the production-ready source files:

```bash
git add .
```

6. Commit the v1 Public Beta baseline:

```bash
git commit -m "Prepare TRASH official website v1 public beta"
```

7. Connect the GitHub remote and push:

```bash
git remote add origin <github-repository-url>
git branch -M main
git push -u origin main
```

8. Connect the GitHub repository to Vercel and deploy from the production branch.

## DNS Checklist

### `trashband.tw`

- Add the Vercel-provided apex record.
- If Vercel requests an `A` record, point `trashband.tw` to Vercel’s provided IP.
- If Vercel requests an `ALIAS` or `ANAME`, use the Vercel-provided target where supported by the DNS provider.
- Remove conflicting old `A`, `AAAA`, or forwarding records.
- Confirm SSL certificate is issued and active in Vercel.

### `www.trashband.tw`

- Add the Vercel-provided `CNAME` record for `www`.
- Point `www.trashband.tw` to Vercel’s provided target.
- Choose the preferred primary domain in Vercel.
- Confirm redirect behavior between `trashband.tw` and `www.trashband.tw`.
- Confirm SSL certificate is issued and active for `www.trashband.tw`.

## Post-Deployment QA Checklist

- Homepage loads at `https://trashband.tw`
- About page loads and has no public internal notes.
- Members index loads.
- Member detail pages load, especially `/members/marz23`.
- `/members/marz` redirects to `/members/marz23`.
- Music index and album detail pages load.
- Live page loads.
- News index and news detail pages load.
- News pages use text-only official announcement entries when approved images are unavailable.
- Media page loads.
- Media page uses official YouTube hub category cards only.
- Press Kit page loads at `/press-kit`.
- Press Kit downloads are simplified to request-based press photos, logo package, and technical rider.
- `/press` redirects to `/press-kit`.
- Contact page loads.
- Contact page shows the v1.1 official inquiry hub with confirmed public routing for 經紀人依凡, 華納音樂, and `passion0728@gmail.com`; no fake form is present.
- Mobile navigation works on small screens.
- Header and footer links use canonical routes.
- Footer uses `Official Links` text and does not show public "coming soon" language.
- Logo renders from normalized PNG filenames.
- Hero image loads and crops correctly on desktop and mobile.
- OG preview uses `https://trashband.tw/images/og/trash-og.jpg`.
- Page source includes canonical URL for `https://trashband.tw`.
- Page source includes `og:url` for `https://trashband.tw`.
- No visible public-facing TODO / placeholder / internal review text appears.
- External source and streaming links are documented in `LINK_AUDIT.md`.
- External public links open in a new tab with `rel="noopener noreferrer"`.
- No visible source or streaming button should render without an `href`.
- Final pre-launch freeze audit is documented in `PRE_LAUNCH_AUDIT.md`.
- v1.1 mobile hero crop and content polish pass should be verified with lint and production build in an environment with dependencies installed.

## Remaining Content Before Public Launch

- Album cover images are present and integrated:
  - `public/images/albums/trash-2012.jpg`
  - `public/images/albums/reset-2014.jpg`
  - `public/images/albums/1111-2017.jpg`
  - `public/images/albums/never-die-2019.jpg`
  - `public/images/albums/holy-trip-2021.jpg`
  - `public/images/albums/the-last-train-of-happiness-2024.jpg`
- Remaining album-cover work is final usage-credit and crop approval.
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

## Final Pre-Launch Commands

```bash
npm run lint
npm run build
npx vercel --prod
```

Lint and build should pass before production promotion. Run `npx vercel --prod` after the Vercel project is linked and DNS settings are ready.
