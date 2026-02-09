# Creating a Cart

### Basic Mutation

```graphql
mutation CreateCart(
  $productId: Int!,
  $qty: Int!
) {
  cart {
    createCart(
      input: {
        lineItems: [
          {productEntityId: $productId, quantity: $qty}
        ]
      }
    ) {
      cart {
        entityId
      }
    }
  }
}
```

### Multiple Line Items Mutation

```graphql
mutation CreateCart(
  $lineItems: [CartLineItemInput!]
) {
  cart {
    createCart(
      input: {
        lineItems: $lineItems
      }
    ) {
      cart {
        entityId
      }
    }
  }
}
```

# Anatomy of the Cart Object

### site.cart Query

```graphql
query CartObject {
  site {
    cart {
      baseAmount {
        value
      }
      lineItems {
        totalQuantity
        physicalItems {
          entityId
          sku
          quantity
          discountedAmount {
            value
          }
          couponAmount {
            value
          }
          listPrice {
            value
          }
        }
        digitalItems{
          ...
      }
    }
  }
}
```

## A Note on Coupons

### Add Coupon Mutation

```graphql
mutation AddCoupon(
  $cartId: String!,
  $couponCode: String!
) {
  checkout {
    applyCheckoutCoupon(
      input: {
        checkoutEntityId: $cartId,
        data: {
          couponCode: $couponCode
        }
      }
    ) {
      checkout {
        entityId
      }
    }
  }
}
```
