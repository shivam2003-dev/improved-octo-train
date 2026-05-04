#!/usr/bin/env bash
# setup.sh — one-time setup script for RBI Bulletin
# Run: bash setup.sh
# Requires: gh CLI logged in as shivam2003-dev

set -euo pipefail

REPO="shivam2003-dev/improved-octo-train"

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║   RBI Bulletin — one-time setup via gh CLI              ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# ── 1. Verify gh auth ─────────────────────────────────────────
echo "▸ Checking gh auth..."
gh auth status --hostname github.com 2>&1 | grep "Active account: true" -A1 || {
  echo "ERROR: not logged in. Run: gh auth login"
  exit 1
}
echo "  ✓ gh auth OK"
echo ""

# ── 2. Open classic PAT creation page in browser ──────────────
echo "▸ Opening GitHub classic token creation page..."
echo "  On the page:"
echo "    • Note name  : RBI Bulletin daily fetch"
echo "    • Expiration : 1 year (or No expiration)"
echo "    • Scopes     : ✅ repo  ✅ workflow"
echo "    • Click 'Generate token', copy the ghp_... value"
echo ""
open "https://github.com/settings/tokens/new?scopes=repo,workflow&description=RBI+Bulletin+daily+fetch" 2>/dev/null \
  || xdg-open "https://github.com/settings/tokens/new?scopes=repo,workflow&description=RBI+Bulletin+daily+fetch" 2>/dev/null \
  || echo "  (open manually: https://github.com/settings/tokens/new)"
echo ""

# ── 3. Prompt for the token ───────────────────────────────────
read -rsp "▸ Paste your new classic PAT (input hidden): " PAT
echo ""
if [[ -z "$PAT" || ! "$PAT" =~ ^ghp_ ]]; then
  echo "ERROR: token must start with ghp_"
  exit 1
fi
echo "  ✓ Token received (${#PAT} chars)"
echo ""

# ── 4. Store as repo SECRET (used by Actions) ─────────────────
echo "▸ Storing BULLETIN_PAT as repo secret..."
echo "$PAT" | gh secret set BULLETIN_PAT --repo "$REPO"
echo "  ✓ Secret BULLETIN_PAT set"

# ── 5. Store as repo VARIABLE (non-sensitive — just the username) ─
echo "▸ Storing BULLETIN_REPO as repo variable..."
gh variable set BULLETIN_REPO --body "$REPO" --repo "$REPO"
echo "  ✓ Variable BULLETIN_REPO = $REPO"
echo ""

# ── 6. Verify secrets & variables ─────────────────────────────
echo "▸ Verifying repo secrets:"
gh secret list --repo "$REPO"
echo ""
echo "▸ Verifying repo variables:"
gh variable list --repo "$REPO"
echo ""

# ── 7. Trigger a test workflow run ────────────────────────────
echo "▸ Triggering test workflow run (daily-deploy.yml)..."
RUN_URL=$(gh workflow run daily-deploy.yml \
  --repo "$REPO" \
  --json 2>/dev/null || true)

# get the latest run ID
sleep 3
RUN_ID=$(gh run list --repo "$REPO" \
  --workflow daily-deploy.yml \
  --limit 1 \
  --json databaseId \
  --jq '.[0].databaseId')

echo "  Run ID: $RUN_ID"
echo "  Watching run (Ctrl-C to stop watching, run continues in background)..."
gh run watch "$RUN_ID" --repo "$REPO" --exit-status && \
  echo "  ✅ Workflow completed successfully!" || \
  echo "  ⚠️  Workflow finished with errors — check: gh run view $RUN_ID --repo $REPO --log"
echo ""

# ── 8. Print live site URL ────────────────────────────────────
PAGES_URL=$(gh api "repos/$REPO/pages" --jq '.html_url' 2>/dev/null || echo "not yet available")
echo "╔══════════════════════════════════════════════════════════╗"
echo "║  ✅ Setup complete!                                      ║"
echo "╠══════════════════════════════════════════════════════════╣"
echo "║  Live site : $PAGES_URL"
echo "║  Repo      : https://github.com/$REPO"
echo "║  Actions   : https://github.com/$REPO/actions"
echo "╚══════════════════════════════════════════════════════════╝"
