
# Dealing with Product Options

## Supporting Options in Catalog Pages

### Querying Options

```graphql
query VariantsAndOptionsExample($path: String!) {
  site {
    route(path: $path) {
      node {
        ... on Product {
          productOptions {
            edges {
              node {
                entityId
                displayName
                isRequired
                isVariantOption
              }
            }
          }
        }
      }
    }
  }
}
```

### Type-specific Details

```graphql
query VariantsAndOptionsExample($path: String!) {
  site {
    route(path: $path) {
      node {
        ... on Product {
          productOptions {
            edges {
              node {
                __typename
                ... on MultipleChoiceOption{
                  values{
                    edges{
                      node{
                        entityId
                        label
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

### Example Options Form

[View](./05_ProductOptions/ProductFormComponent.jsx)

## Supporting Options in the Cart

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
