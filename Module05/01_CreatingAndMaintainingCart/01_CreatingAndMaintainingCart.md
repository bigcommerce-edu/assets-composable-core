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

### Create Cart Component

[View](./CreateCartComponent.jsx)

### Create Cart API Endpoint

[View](./CreateCartAPIRoute.js)

# Anatomy of the Cart Object

### site.cart Query

```graphql
site {
  cart {
    entityId
    baseAmount {
      value
    }
    amount {
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
      digitalItems {
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

# Carts and the BigCommerce Storefront Session

### Get Cart Query

```graphql
query GetCart(
  $cartId: String
) {
  site {
    cart(entityId: $cartId) {
      ...
    }
  }
}
```

# Tracking the Cart In Your Own Storefront

### Create Cart API Endpoint

[View](./ModifiedCreateCartAPIRoute.js)

### Get Cart API Endpoint

[View](./GetCartAPIRoute.js)

### Cart Component

[View](./CartComponent.jsx)

[Next](../02_ManagingCartItems/02_ManagingCartItems.md)
