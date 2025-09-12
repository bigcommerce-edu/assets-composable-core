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
