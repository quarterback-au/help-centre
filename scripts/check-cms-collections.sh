#!/usr/bin/env bash
#
# Checks that every docs/ subdirectory containing markdown files
# has a matching folder collection in the Decap CMS config.
#
# Usage: npm run check-cms
#

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CMS_CONFIG="$REPO_ROOT/static/admin/config.yml"
DOCS_DIR="$REPO_ROOT/docs"

if [ ! -f "$CMS_CONFIG" ]; then
  echo "ERROR: CMS config not found at $CMS_CONFIG"
  exit 1
fi

missing=()

for dir in "$DOCS_DIR"/*/; do
  # Skip if not a directory
  [ -d "$dir" ] || continue

  # Skip directories with no markdown files
  md_count=$(find "$dir" -maxdepth 1 -name '*.md' -o -name '*.mdx' | wc -l)
  [ "$md_count" -gt 0 ] || continue

  # Get the directory name (e.g. "features" from "docs/features/")
  dirname=$(basename "$dir")
  relative="docs/$dirname"

  # Check if this folder path appears as a collection folder in the CMS config
  if ! grep -q "folder: \"$relative\"" "$CMS_CONFIG" && \
     ! grep -q "folder: '$relative'" "$CMS_CONFIG"; then
    missing+=("$relative")
  fi
done

if [ ${#missing[@]} -gt 0 ]; then
  echo "ERROR: The following content directories are missing from the CMS config"
  echo "       ($CMS_CONFIG):"
  echo ""
  for dir in "${missing[@]}"; do
    echo "  - $dir"
  done
  echo ""
  echo "Add a collection entry for each directory so articles appear in /admin."
  exit 1
fi

echo "OK: All docs/ content directories have matching CMS collections."
