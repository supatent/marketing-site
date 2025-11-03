#!/bin/bash
# Run the script to remove h1 titles from documentation content

cd "$(dirname "$0")/.."
npx tsx scripts/remove-doc-titles.ts
