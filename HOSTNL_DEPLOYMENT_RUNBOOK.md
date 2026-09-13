# HOST.nl deployment runbook

This runbook prepares a manual deployment; it contains no credentials and performs no hosting change.

## Before upload

1. Resolve the active document root in the HOST.nl panel or with support. Do not guess it.
2. Download the current webroot through FTPS or SFTP into a dated, encrypted local backup folder.
3. Confirm the backup contains the current entry page and can be listed locally.
4. Re-run the website checks and confirm every file in `deployment-inventory.txt` exists.

## Upload

Connect with the FTPS/SFTP settings supplied directly by HOST.nl. Never put the hostname, username, password or recovery information in Git, prompts, screenshots or documentation. Upload only the files listed in `deployment-inventory.txt`; do not upload `.git`, this runbook, drafts, `beta-media/` or development files.

## Verify

- Confirm the HTTPS certificate is valid for `getcompr.nl` and `www.getcompr.nl`.
- Configure one permanent redirect from `www.getcompr.nl` to the canonical `https://getcompr.nl/` using HOST.nl's supported method.
- Check the homepage, mobile menu, Chrome link, `/404.html`, `/robots.txt`, `/sitemap.xml`, `/privacy.html`, `/support.html`, `/terms.html`, `/methodology.html`, `/auth-callback.html` and `/billing-return.html`.
- Confirm a nonexistent path returns HTTP 404 and that browser developer tools show no failed assets or console errors.
- Update Supabase callback URLs only in a separate approved production package after the new domain is live and verified.

## Rollback

If verification fails, restore only the backed-up webroot files to the same confirmed document root, then repeat the HTTPS and page checks. Keep the dated backup until the replacement has been accepted.
