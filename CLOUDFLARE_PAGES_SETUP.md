# Cloudflare Pages Free – Deployment instructions

Project: S. VIPA RECYCLING CO., LTD.

## Repository
https://github.com/sstdevelopaminno/S.-VIPA-RECYCLING-Website-Project

## Recommended Cloudflare configuration
- Workers & Pages > Create application > Pages > Connect to Git
- GitHub repository: `sstdevelopaminno/S.-VIPA-RECYCLING-Website-Project`
- Project name: `s-vipa-recycling` (subject to availability)
- Production branch: `main`
- Framework preset: `None`
- Root directory: repository root `/`
- Build command: `exit 0` (static site, no build needed)
- Build output directory: `.` (repository root containing `index.html`)
- Environment variables: none required for prototype
- Deploy; verify the generated `*.pages.dev` URL and production branch.

## Important before public launch
- This is a prototype: phone, LINE, office hours, service coverage, materials list, and contact details require company confirmation.
- The quote form currently prepares text; it does not transmit or store submissions.
- The `_headers` file deliberately sends `X-Robots-Tag: noindex, nofollow` until business details are verified and the owner approves public indexing. Remove `noindex` only after approval and a full QA check.
- Do not configure a custom domain or buy a domain without the owner's instructions.
- Do not connect the CpiPOS production database or credentials. If a backend is needed later, use a distinct Supabase project and carefully scoped APIs.
- Do not add API tokens to GitHub source code. If integration needs secrets, store them securely in the appropriate Cloudflare project environment.
- `vercel.json` is a legacy preparation file and is not used by Cloudflare Pages.

## After first deploy
- Confirm live URL and HTTP status on HTTPS.
- Verify desktop and mobile layouts and navigation.
- Confirm X-Robots-Tag header for the prototype.
- Confirm subsequent pushes to main deploy automatically.
- Before launch: replace placeholder business information, add legal/privacy pages as appropriate, accessibility and contact testing.
