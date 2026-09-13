# COMPR website

`website-live/` is the canonical COMPR marketing website. Older website folders are snapshots and must not receive launch changes.

## Before publishing

1. Confirm the legal/operator details listed in `PAID_LAUNCH_DECISIONS.md` before paid launch.
2. Obtain human/legal approval for Privacy and Terms.
3. Verify the Chrome Web Store listing immediately before publication.
4. Follow `HOSTNL_DEPLOYMENT_RUNBOOK.md` and its exact inventory for a separately approved upload.
5. Update the Supabase callback allowlist only in a separate approved production package after the domain is live.

## Local preview

```powershell
python -m http.server 8000
```

Run that command inside `website-live/`, then open `http://localhost:8000`. Do not publish until the deployment and legal checks are complete.
