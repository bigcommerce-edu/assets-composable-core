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
        embeddedCheckoutUrl
      }
    }
  }
}
```

### Example Response

```json
{
  "data": {
    "cart": {
      "createCartRedirectUrls": {
        "redirectUrls": {
          "redirectedCheckoutUrl": "https://{checkout domain}/cart.php?action=loadInCheckout&id={cart ID}&token={token}",
          "embeddedCheckoutUrl": "https://{checkout domain}/cart.php?embedded=1&action=loadInCheckout&id={cart ID}&token={token}"
        }
      }
    }
  }
}
```

# A Simple Example

### Create Cart URL API Endpoint

[View](./CreateCartUrlAPIRoute.js)

### Proceed to Checkout Component

[View](./ProceedToCheckoutComponent.jsx)

[Next](../../Module05/01_CustomerAccountCreation/01_CustomerAccountCreation.md)
