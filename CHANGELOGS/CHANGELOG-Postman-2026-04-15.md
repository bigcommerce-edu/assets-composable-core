# Changelog: Composable Core Labs

**Date:** 2026-04-15  
**Comparison:** Changes from main branch  
**Collection file:** `Composable Core Labs.postman_collection.json`

> **Structure note:** Requests live in the collection’s top-level `item` array (no Postman subfolders). The automated `diff_collections.py` folder model does not apply here; this changelog is derived from a direct JSON comparison of `main` vs the current file.

## Global Changes

### Collection metadata (`info`)

- **Modified:** `_postman_id` — collection identity updated after export/re-save in Postman.
- **Modified:** `_collection_link` — share/workspace link now points at the current Postman collection URL.

### Collection Variables

_No changes — `checkout_base_url` unchanged._

### Collection Auth

_No changes._

### Collection-Level Event Scripts

_No meaningful changes — prerequest and test scripts remain empty placeholder `exec` arrays (whitespace/formatting only)._

## Requests (root-level)

### Added Requests

_None._

### Removed Requests

_None._

### Modified Requests

#### `Create Storefront Token`

- **URL changed** — Storefront token endpoint updated from `.../v3/storefront/api-token` to `.../v3/storefront/api-token-private` (path segment `api-token` → `api-token-private`).
- **Raw body changed** — Request body still sends `channel_id` and `expires_at`; added `scopes` array with `Unauthenticated` and `Customer`.
- **Test scripts updated (test)** — On success, the saved environment variable is now `private_storefront_token` (previously `storefront_token`). Exporter also adds an empty `requests` object on the test script block.

#### `Get Channel Site`

- **Headers changed** — `Accept`, `Content-Type`, and `X-Auth-Token` header objects now include explicit `"type": "text"` fields (Postman metadata alignment with other requests).

#### `Get Channels` / `Create Headless Channel`

_No substantive API or script changes detected beyond JSON reformatting (indentation) and equivalent script metadata already present on comparable requests._
