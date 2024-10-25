# The Product Detail Page

### site.product Query

```graphql
getProduct($productId: Int!) {
  site {
    product(entityId: $productId) {
      id
      entityId
      name
      sku
      description
    }
  }
}
```

### Product Detail Page Component

[View](./ProductDetailPage.jsx)

# The Product Object

### Detailed Query

```graphql
site {
  product(...) {
    brand {
      name
    }
    categories(first: 5) {
       edges {
         node {
           entityId
           name
         }
       }
     }
     plainTextDescription
     availabilityV2 {
       status
       description
     }
     inventory {
       isInStock
       hasVariantInventory
       aggregated {
         availableToSell
       }
     }
     minPurchaseQuantity
     maxPurchaseQuantity
  }
}
```

# Variants and Options

### Options Query

```graphql
query VariantsAndOptionsExample($productId: Int!) {
  site {
    product(entityId: $productId) {
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
```

### Multiple Choice Option

```graphql
query VariantsAndOptionsExample($productId: Int!) {
  site {
    product(entityId: $productId) {
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
```

### Product Options Form

[View](./ProductOptionsForm.jsx)

### Variants Query

```graphql
site {
  product(...) {
    variants {
      edges {
        node {
          entityId
          sku
          weight {
            value
          }
          options {
            edges {
              node {
                entityId
                displayName
                values {
                  edges {
                    node {
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
```

### Filtering by Variant ID

```graphql
query GetProduct(
  $entityId: Int!,
  $variantEntityId: Int
) {
  site {
    product (entityId: $entityId, variantEntityId: $variantEntityId) {
      weight {
        value
      }
      prices {
        price {
          value
        }
      }
      defaultImage {
        url(width: 500)
      }
    }
  }
}
```

### Filtering by Options

```graphql
query GetProduct(
  $entityId: Int!,
  $optionEntityId: Int!,
  $valueEntityId: Int!
) {
  site {
    product (
      entityId: $entityId, 
      optionValueIds: [
        { optionEntityId: $optionEntityId, valueEntityId: $valueEntityId }
      ]
    ) {
      weight {
        value
      }
      prices {
        price {
          value
        }
      }
      defaultImage {
        url(width: 500)
      }
    }
  }
}
```

# Pricing Information

### Prices Query

```graphql
query PricingInformation($productId: Int!) {
  site {
    product(entityId: $productId) {
      prices {
        basePrice {
          value
          currencyCode
        }
        price {
          value
          currencyCode
        }
        salePrice {
          value
          currencyCode
        }
        retailPrice {
          value
          currencyCode
        }
        saved {
          value
          currencyCode
        }
      }
    }
  }
}
```

### Price Range Query

```graphql
query PricingInformation($productId: Int!) {
  site {
    product(entityId: $productId) {
      prices {
        priceRange {
          min {
            value
            currencyCode
          }
          max {
            value
            currencyCode
          }
        }
      }
    }
  }
}
```

### Bulk Pricing Query

```graphql
query PricingInformation($productId: Int!) {
  site {
    product(entityId: $productId) {
      prices {
        bulkPricing {
          minimumQuantity
          maximumQuantity
          ... on BulkPricingFixedPriceDiscount {
            price
          }
        }
      }
    }
  }
}
```

### Product Detail Page with Pricing

[View](./ProductDetailPageWithPricing.jsx)

# Handling Product Images

### Images Query

```graphql
query ProductImages($productId: Int!) {
  site {
    product(entityId: $productId) {
      defaultImage {
        url(width: 800)
        urlOriginal
        altText
      }
      images {
        edges {
          node {
            url(width: 300)
            urlOriginal
            altText
          }
        }
      }
    }
  }
}
```

### Example Response

```json
{
    "data": {
        "site": {
            "product": {
                "defaultImage": {
                    "url": "https://cdn11.bigcommerce.com/s-rgg.../images/stencil/800w/products/116/392/image.jpg",
                    "urlOriginal": "https://cdn11.bigcommerce.com/s-rgg.../images/stencil/original/products/116/392/image.jpg",
                    "altText": "An image"
                },
                "images": {
                    "edges": [
                        {
                            "node": {
                                "url": "https://cdn11.bigcommerce.com/s-rgg.../images/stencil/300w/products/116/392/image.jpg",
                                "urlOriginal": "https://cdn11.bigcommerce.com/s-rgg.../images/stencil/original/products/116/392/image.jpg",
                                "altText": "An image"
                            }
                        },
                        ...
                    ]
                }
            }
        }
    }
}
```

### Images Query with urlTemplate

```graphql
query ProductImages($productId: Int!) {
  site {
    product(entityId: $productId) {
      defaultImage {
        urlTemplate
      }
      images {
        edges {
          node {
            urlTemplate
          }
        }
      }
    }
  }
}
```

### Example Response with urlTemplate

```json
{
    "data": {
        "site": {
            "product": {
                "defaultImage": {
                    "urlTemplate": "https://cdn11.bigcommerce.com/s-rgg.../images/stencil/{:size}/products/116/392/image.jpg"
                },
                "images": {
                    "edges": [
                        {
                            "node": {
                                "urlTemplate": "https://cdn11.bigcommerce.com/s-rgg.../images/stencil/{:size}/products/116/392/image.jpg"
                            }
                        },
                        ...
                    ]
                }
            }
        }
    }
}
```

### Image Gallery Component

[View](./ImageGallery.jsx)

# Dynamic Fields

### Custom Fields Query

```graphql
query DynamicFields($productId:Int!){
  site {
    product(entityId: $productId) {
      customFields {
        edges {
          node {
            entityId
            name
            value
          }
        }
      }
    }
  }
}
```

### Metafields Query

```graphql
query DynamicFields($productId: Int!, $namespaceString: String!) {
  site {
    product(entityId: $productId) {
      metafields(namespace: $namespaceString) {
        edges {
          node {
            id
            entityId
            key
            value
          }
        }
      }
    }
  }
}
```

[Next](../02_WorkingWithProductLists/02_WorkingWithProductLists.md)
