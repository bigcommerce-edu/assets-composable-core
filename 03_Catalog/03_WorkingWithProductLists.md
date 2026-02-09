### Basic Query

```graphql
query CategoryProducts($path: String!) {
  site {
    route(path: $path) {
      node {
        ... on Category {
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
}
```

### Example Response

```json
{
  "data": {
    "site": {
      "route": {
        "node": {
          "products": {
            "edges": [
              {
                "node": {
                  "entityId": 112,
                  "name": "Product 1",
                  "prices": {
                    "basePrice": {
                      "currencyCode": "USD",
                      "value": 10.25
                    }
                  }
                }
              },
              {
                "node": {
                  "entityId": 115,
                  "name": "Product 2",
                  "prices": {
                    "basePrice": {
                      "currencyCode": "USD",
                      "value": 3
                    }
                  }
                }
              },
              {
                "node": {
                  "entityId": 116,
                  "name": "Product 3",
                  "prices": {
                    "basePrice": {
                      "currencyCode": "USD",
                      "value": 8.99
                    }
                  }
                }
              },
```

# Cursor List Pagination with Product Lists

### Example Page Query

```graphql
query CategoryProducts($path: String!) {
  site {
    route(path: $path) {
      node {
        ... on Category {
          products {
            edges {
              cursor
              node {
                entityId
                name
                sku
              }
            }
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
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
      "route": {
        "node": {
          "products": {
            "edges": [
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
                "node": {
                  "entityId": 112,
                  "name": "Product 1",
                  "sku": "sku-1"
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjE=",
                "node": {
                  "entityId": 115,
                  "name": "Product 2",
                  "sku": "sku-2"
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjI=",
                "node": {
                  "entityId": 116,
                  "name": "Product 3",
                  "sku": "sku-3"
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjM=",
                "node": {
                  "entityId": 117,
                  "name": "Product 4",
                  "sku": "sku-4"
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjQ=",
                "node": {
                  "entityId": 118,
                  "name": "Product 5",
                  "sku": "sku-5"
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjU=",
                "node": {
                  "entityId": 119,
                  "name": "Product 6",
                  "sku": "sku-6"
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjY=",
                "node": {
                  "entityId": 120,
                  "name": "Product 7",
                  "sku": "sku-7"
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjc=",
                "node": {
                  "entityId": 121,
                  "name": "Product 8",
                  "sku": "sku-8"
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjg=",
                "node": {
                  "entityId": 122,
                  "name": "Product 9",
                  "sku": "sku 9"
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjk=",
                "node": {
                  "entityId": 123,
                  "name": "Product 10",
                  "sku": "sku-10"
                }
              }
            ],
            "pageInfo": {
              "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",
              "endCursor": "YXJyYXljb25uZWN0aW9uOjk=",
              "hasNextPage": true,
              "hasPreviousPage": false
            }
          }
        }
      }
    }
  }
}
```

# Using Filters to Navigate the Cursor List

## Get the Next Page of Results

### After Query

```graphql
query CategoryProducts($path: String!) {
  site {
    route(path: $path) {
      node {
        ... on Category {
          products(after: "YXJyYXljb25uZWN0aW9uOjk=") {
            edges {
              cursor
              node {
                entityId
                name
                sku
              }
            }
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
          }
        }
      }
    }
  }
}
```

### Before Query

```graphql
query CategoryProducts($path: String!) {
  site {
      route(path: $path) {
        node {
          ... on Category {
          products(before: "YXJyYXljb25uZWN0aW9uOjEw") {
            edges {
              cursor
              node {
                entityId
                name
                sku
              }
            }
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
          }
        }
      }
    }
  }
}
```

## Using First and Last Filters

### Last Filter

```graphql
query CategoryProducts($path: String!) {
  site {
    route(path: $path) {
      node {
        ... on Category {
          products(last: 4, before: "YXJyYXljb25uZWN0aW9uOjEw") {
            edges {
              cursor
              node {
                entityId
                name
                sku
              }
            }
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
          }
        }
      }
    }
  }
}
```

### First/After Query

```graphql
query CategoryProducts($path: String!) {
  site {
    route(path: $path) {
      node {
        ... on Category {
          products(first: 5, after: "YXJyYXljb25uZWN0aW9uOjE0") {
            edges {
              cursor
              node {
                entityId
                name
                sku
              }
            }
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
          }
        }
      }
    }
  }
}
```

## CollectionInfo

### Basic Query

```graphql
query CategoryProducts($path: String!) {
  site{
    route(path: $path) {
      node {
        ... on Category {
          products(last:3 before:"YXJyYXljb25uZWN0aW9uOjc="){
            pageInfo{
              startCursor
              endCursor
            }
            collectionInfo{
              totalItems
            }
            edges{
              cursor
              node{
                entityId
              }
            }
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
      "route": {
        "node": {
          "products": {
            "pageInfo": {
              "startCursor": "YXJyYXljb25uZWN0aW9uOjQ=",
              "endCursor": "YXJyYXljb25uZWN0aW9uOjY="
            },
            "collectionInfo": {
              "totalItems": 12
            },
            "edges": [
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjQ=",
                "node": {
                  "entityId": 118
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjU=",
                "node": {
                  "entityId": 119
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjY=",
                "node": {
                  "entityId": 120
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

# Specialized Product Lists

### Bestselling Products Query

```graphql
query{
  site{
    bestSellingProducts{
      edges{
        node{
          entityId
          sku
          name
        }
      }
    }
  }
}
```
