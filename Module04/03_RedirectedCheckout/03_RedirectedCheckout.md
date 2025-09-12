# The Redirect Process

### Example Request

```graphql
mutation CartRedirectMutation($cartId: String!) {
  cart {
    createCartRedirectUrls(
      input: { 
        cartEntityId: $cartId 
      }
    ) {
      redirectUrls {
        redirectedCheckoutUrl
      }
    }
  }
}
```

[Next](../05_ProductOptions/05_ProductOptions.md)