const getProductQuery = `
query GetProduct(
  $path: String!, 
  $imgSize: Int!
) {
  site {
    route(path: $path) {
      node {
        __typename
        ... on Product {
          entityId
          sku
          name
          description
          prices {
            price {
              value
              currencyCode
            }
          }
          defaultImage {
            url(width: $imgSize)
            altText
          }
        }
      }
    }
  }
}
`;

type GetProductVars = {
  path: string,
  imgSize: number,
}

type GetProductResp = {
  data: {
    site: {
      route: {
        node: Product & {
          "__typename": string,
        },
      },
    },
  },
}