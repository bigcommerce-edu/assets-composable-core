# Changelog: Composable Core Labs

**Date:** 2026-05-04
**Comparison:** Changes from main branch
**Collection file:** `Composable Core Labs.postman_collection.json`

## Top-Level Requests

### Removed Requests

- `Create Storefront Token` — removed

### Added Requests

- `Create Private Token` — added

### Notes

`Create Private Token` replaces `Create Storefront Token`. The new request targets the customer impersonation endpoint (`v3/storefront/api-token-customer-impersonation`) instead of the standard storefront token endpoint (`v3/storefront/api-token`), and stores its result in the `private_storefront_token` environment variable instead of `storefront_token`.
