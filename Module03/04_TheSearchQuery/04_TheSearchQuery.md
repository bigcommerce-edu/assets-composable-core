# The Search Query

## Category Page

### Category-Filtered Query

```graphql
query MyQuery($categoryId: Int!) {
  site {
    search {
      searchProducts(filters: {categoryEntityId: $categoryId}) {
        products {
          edges {
            node {
              entityId
              name
            }
          }
        }
      }
    }
  }
}
```

### Sorted Category-Filtered Query

```graphql
query MyQuery($categoryId: Int!) {
  site {
    search {
      searchProducts(filters: {categoryEntityId: $categoryId}, sort: LOWEST_PRICE) {
        products {
          edges {
            node {
              entityId
              name
            }
          }
        }
      }
    }
  }
}
```

### Query for Filters

```graphql
query MyQuery($categoryId: Int!) {
  site {
    search {
      searchProducts(filters: {categoryEntityId: $categoryId}, sort: LOWEST_PRICE) {
        products {
          edges {
            node {
              entityId
              sku
            }
          }
        }
        filters {
          edges {
            node {
              __typename
              }
            }
          }
        }
      }
    }
  }
}
```

### Example Filters Response

```json
{
  "data": {
    "site": {
      "search": {
        "searchProducts": {
          "products": {
            "edges": [
              {
                "node": {
                  "entityId": 126,
                  "sku": "Shirt-1"
                }
              },
              {
                "node": {
                  "entityId": 129,
                  "sku": "Shirt-2"
                }
              },
              {
                "node": {
                  "entityId": 127,
                  "sku": "Shirt-3"
                }
              }
            ]
          },
          "filters": {
            "edges": [
              {
                "node": {
                  "__typename": "ProductAttributeSearchFilter"
                }
              },
              {
                "node": {
                  "__typename": "ProductAttributeSearchFilter"
                }
              },
              {
                "node": {
                  "__typename": "PriceSearchFilter"
                }
              },
              {
                "node": {
                  "__typename": "OtherSearchFilter"
                }
              }
            ]
          }
        }
      }
    }
  }
}
```

### Query for Typed Filters

```graphql
query MyQuery($entityId: Int!) {
  site {
    search {
      searchProducts(filters: {categoryEntityId: $entityId}, sort: LOWEST_PRICE) {
        products {
          edges {
            node {
              entityId
              name
            }
          }
        }
        filters {
          edges {
            node {
              __typename
              ... on ProductAttributeSearchFilter {
                attributes {
                  edges {
                    node {
                      value
                      isSelected
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

### Example Filters Response

```json
{
  "data": {
    "site": {
      "search": {
        "searchProducts": {
          "products": {
            "edges": [
              {
                "node": {
                  "entityId": Int,
                  "name": "String"
                }
              },
              {
                "node": {
                  "entityId": Int,
                  "name": "String",
                }
              }
            ]
          },
          "filters": {
            "edges": [
              {
                "node": {
                  "__typename": "PriceSearchFilter"
                }
              },
              {
                "node": {
                  "__typename": "OtherSearchFilter"
                }
              },
              {
                "node": {
                  "__typename": "ProductAttributeSearchFilter",
                  "name": "Size",
                  "attributes": {
                    "edges": [
                      {
                        "node": {
                          "value": "4oz",
                          "isSelected": false
                        }
                      },
                      {
                        "node": {
                          "value": "8oz",
                          "isSelected": false
                        }
                      },
                      {
                        "node": {
                          "value": "Large",
                          "isSelected": false
                        }
                      },
                      {
                        "node": {
                          "value": "Medium",
                          "isSelected": false
                        }
                      },
                      {
                        "node": {
                          "value": "Small",
                          "isSelected": false
                        }
                      }
                    ]
                  }
                }
              },
              {
                "node": {}
              },
              {
                "node": {
                  "__typename": "ProductAttributeSearchFilter",
                  "name": "Color",
                  "attributes": {
                    "edges": [
                      {
                        "node": {
                          "value": "Blue",
                          "isSelected": false
                        }
                      },
                      {
                        "node": {
                          "value": "Red",
                          "isSelected": false
                        }
                      },
                      {
                        "node": {
                          "value": "Grey",
                          "isSelected": false
                        }
                      },
                    ]
                  }
                }
              }
            ]
          }
        }
      }
    }
  }
}
```

### Narrowed Filter Query

```graphql
query Search($categoryId: Int!) {
  site {
    search {
      searchProducts(
        filters: {
          categoryEntityId: $categoryId, 
          productAttributes: {attribute: "Color", values: ["Red", "Blue", "Grey"]}
        }
      ) {
        ...
      }
    }
  ...
```

## Brand Page Use Case

### Brand-Filtered Query

```graphql
query MyQuery($brandEntityIds: [brandId!] {
  site {
    search {
      searchProducts(filters: {brandEntityIds: brandId}) {
        filters {
          edges {
            node {
              __typename
              ... on CategorySearchFilter {
                categories {
                  edges {
                    node {
                      entityId
                      name
                      productCount
                      subCategories {
                        edges {
                          node {
                            entityId
                            name
                            productCount
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
        products {
          edges {
            node {
              entityId
              name
              sku
            }
          }
        }
      }
    }
  }
}
```

## Use Case - Search Page

### Search Term Filtered Query

```graphql
query Search($term: String!) {
  site {
    search {
      searchProducts(filters: {searchTerm: $term}) {
        filters {
          edges {
            node {
              ... on CategorySearchFilter {
                __typename
                categories {
                  edges {
                    node {
                      entityId
                      name
                    }
                  }
                }
              }
              ... on ProductAttributeSearchFilter {
                __typename
                attributes {
                  edges {
                    node {
                      value
                      isSelected
                    }
                  }
                }
              }
            }
          }
        }
        products {
          edges {
            node {
              entityId
              name
              prices {
                basePrice {
                  currencyCode
                  value
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

# Putting It Together

### Search Results Component

[View](./SearchResultsComponent.jsx)

[Next](../05_Routes/05_Routes.md)
