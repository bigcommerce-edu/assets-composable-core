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