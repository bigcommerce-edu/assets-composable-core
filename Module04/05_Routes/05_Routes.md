# Routing 

## Queries Filtering on Path

### Basic Query

```graphql
query MyRouteQuery($myPath: String!) {
    site {
        route(path: $myPath) {
            node {
                __typename
                ... on Product {
                    name
                    sku
                }
                ... on Category {
                    name
                    description
                }
            }
        }
    }
}
```

# Use Case - Product Detail Page Routing

## Approach 1

### Combined Route/Details Query

```graphql
query MyRouteQuery($myPath: String!) {
  site {
    route(path: $myPath) {
      node {
        __typename
        ... on Product {
          entityId
          name
          sku
          defaultImage {
            isDefault
            altText
            urlOriginal
          }
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
```

## Approach 2

### Route Query for All Types

```graphql
query MyRouteQuery($myPath: String!) {
  site {
    route(path: $myPath) {
      node {
        __typename
        ... on Banner {
          entityId
          name
        }
        ... on Blog {
          id
          name
        }
        ... on Brand {
          entityId
          name
        }
        ... on Cart {
          entityId
        }
        ... on Category {
          entityId
          name
        }
        ... on ContactPage {
          entityId
          name
        }
        ... on Product {
          entityId
          name
        }
        ... on RawHtmlPage {
          entityId
          name
        }
        ... on Variant {
          entityId
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
          "__typename": "Product",
          "entityId": 28,
          "name": "Awesome Shirt"
        }
      }
    }
  }
}
```

# Redirects

### Redirects Query

```graphql
query MyQuery($myPath: String!) {
  site {
    route(path: $myPath) {
      node {
        __typename
        ... on Product {
          entityId
          name
          sku
        }
        ... on Category {
          entityId
          name
        }
      }
      redirect {
        fromPath
        to {
          ... on ProductRedirect {
            entityId
            path
          }
          ... on CategoryRedirect {
            entityId
            path
          }
        }
        toUrl
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
        "redirect": {
          "fromPath": "/product-path/",
          "id": "UmVkaXJlY3Q6Mg==",
          "to": {
            "id": "UHJvZHVjdDoxMjY=",
            "path": "/new-product-path/"
          },
          "toUrl": "https://petonline.us/cool-shirt/"
        }
      }
    }
  }
}
```

## Redirect Behavior

### Ignore Redirect Query

```graphql
query MyQuery($myPath: String!) {
  site {
    route(path: $myPath, redirectBehavior: IGNORE) {
      node {
        __typename
        ... on Product {
          entityId
          name
          sku
        }
      }
      redirect {
        fromPath
        to {
          ... on ProductRedirect {
            entityId
            path
          }
        }
        toUrl
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
                "node": null,
                "redirect": {
                    "fromPath": "/striped-t-shirt/",
                    "to": {
                        "__typename": "ProductRedirect",
                        "entityId": 129,
                        "path": "/cool-striped-t-shirt/"
                    },
                    "toUrl": "https://mystore.com/cool-striped-t-shirt/"
                }
            }
        }
    }
}
```

### Follow Redirect Query

```graphql
query MyQuery($myPath: String!) {
  site {
    route(path: $myPath, redirectBehavior: FOLLOW) {
      node {
        __typename
        ... on Product {
          entityId
          name
          sku
        }
      }
      redirect {
        fromPath
        to {
          ... on ProductRedirect {
            entityId
            path
          }
        }
        toUrl
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
                    "__typename": "Product",
                    "entityId": 129,
                    "name": "Striped T-Shirt",
                    "sku": "SHRT-STRP"
                },
                "redirect": {
                    "fromPath": "/striped-t-shirt/",
                    "to": {
                        "__typename": "ProductRedirect",
                        "entityId": 129,
                        "path": "/cool-striped-t-shirt/"
                    },
                    "toUrl": "https://mystore.com/cool-striped-t-shirt/"
                }
            }
        }
    }
}
```

