# The Redirect Process

### Example Response

```json
{
  "data": {
    "cart_url": "https://{checkout domain}/cart.php?action=load&id={cart ID}&token={token},
    "checkout_url": "https://{checkout domain}/cart.php?action=loadInCheckout&id={cart ID}&token={token},
    "embedded_checkout_url": "https://{checkout domain}/cart.php?embedded=1&action=loadInCheckout&id={cart ID}&token={token}"
    },
  "meta": {}
}
```

# A Simple Example

### Create Cart URL API Endpoint

[View](./CreateCartUrlAPIRoute.js)

### Proceed to Checkout Component

[View](./ProceedToCheckoutComponent.jsx)

