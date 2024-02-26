Follow along in your project codebase.

```javascript
const getGlobalDataQuery = `
query GetSettings($logoSize: Int!) {
  site {
      settings {
          storeName
          logoV2 {
              ... on StoreTextLogo {
                  text
              }
              ... on StoreImageLogo {
                  image {
                      url(width: $logoSize)
                  }
              }
          }
      }

      categoryTree {
        name
        path
      }
  }
}
`;

type GetGlobalDataVars = {
  logoSize: number
}

type GetGlobalDataResp = {
  data: {
    site: {
      settings: {
        storeName?: string,
        logoV2: {
          text?: string,
          image?: {
            url: string,
          }
        }
      },
      categoryTree: NavCategory[]
    }
  }
}
```

`client/queries/get-route.ts`:

```javascript
export const GET_ROUTE_QUERY = /* GraphQL */ `
  query getRoute($path: String!) {
    site {
      route(path: $path) {
        node {
          __typename
          ... on Product {
            entityId
          }
          ... (Additional fields)
        }
      }
    }
  }
`;
```

```javascript
export const getRoute = async (path: string) => {
  const query = graphql(GET_ROUTE_QUERY);

  const response = await client.fetch({
    document: query,
    variables: { path },
  });

  return response.data.site.route.node;
};
```