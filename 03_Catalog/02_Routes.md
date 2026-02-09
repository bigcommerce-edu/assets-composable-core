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