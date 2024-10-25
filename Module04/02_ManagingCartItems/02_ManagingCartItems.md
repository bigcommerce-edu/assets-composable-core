# Adding Products to an Existing Cart

### Add to Cart Mutation

```graphql
mutation AddToCart(
  $cartId: String!
  $productId: Int!,
  $qty: Int!
) {
  cart {
    addCartLineItems(
      input {
        cartEntityId: $cartId,
        data: {
          lineItems: [
            {productEntityId: $productId, quantity: $qty}
          ]
        }
      }
    ) {
      cart {
        entityId
      }
    }
  }
}
```

### Add to Cart API Endpoint

[View](./AddToCartAPIRoute.js)

# Dealing with Product Options

### Variant ID Mutation

```graphql
mutation AddToCart(
  $cartId: String!
  $productId: Int!,
  $variantId: Int,
  $qty: Int!
) {
  cart {
    addCartLineItems(
      input {
        cartEntityId: $cartId,
        data: {
          lineItems: [
            {
              quantity: $qty,
              productEntityId: $productId,
              variantEntityId: $variantId
            }
          ]
        }
      }
    ) {
      cart {
        ...
      }
    }
  }
}
```

### Option Mutation

```graphql
mutation AddToCart(
  $cartId: String!
  $productId: Int!,
  $optionId: Int!,
  $valueId: Int!
  $qty: Int!
) {
  cart {
    addCartLineItems(
      input {
        cartEntityId: $cartId,
        data: {
          lineItems: [
            {
              quantity: $qty,
              productEntityId: $productId,
              selectedOptions: {
                multipleChoices: [
                  {
                    optionEntityId: $optionId,
                    optionValueEntityId: $valueId
                  }
                ]
              }
            }
          ]
        }
      }
    ) {
      cart {
        ...
      }
    }
  }
}
```

### Get Cart Query with Options

```graphql
query GetCart(
  $cartId: String!
) {
  site {
    cart(entityId: $cartId) {
      lineItems {
        physicalItems {
          productEntityId
          variantEntityId
          selectedOptions {
            entityId
            name
            ... on CartSelectedMultipleChoiceOption {
              valueEntityId
              value
            }
          }
        }
      }
    }
  }
}
```

## Example Options Implementation

### Product Form Component

[View](./ProductFormComponent.jsx)

### Example Payload

```json
{
  "productId": 1,
  "multipleChoiceOptions": [
    {"optionEntityId": 2, "optionValueEntityId": 5}
  ]
}
```

### Add to Cart API Endpoint with Options

[View](./AddToCartAPIRouteWithOptions.js)

# Updating and Deleting Cart Items

### Update Mutation

```graphql
mutation UpdateCartItem(
  $cartId: String!,
  $lineItemId: String!,
  $newQty: Int!,
  $newVariantId: Int
) {
  cart {
    updateCartLineItem(
      input: {
        cartEntityId: $cartId,
        lineItemEntityId: $lineItemId,
        data: {
          lineItem: {
            quantity: $newQty,
            variantEntityId: $newVariantId
          }
        }
      }
    ) {
      cart {
        ...
      }
    }
  }
}
```

### Delete Mutation

```graphql
mutation DeleteCartItem(
  $cartId: String!,
  $lineItemId: String!
) {
  cart {
    deleteCartLineItem(
      input: {
        cartEntityId: $cartId,
        lineItemEntityId: $lineItemId
      }
    ) {
      cart {
        ...
      }
    }
  }
}
```

[Next](../03_RedirectedCheckout/03_RedirectedCheckout.md)
