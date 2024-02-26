const categoryFragment = `
fragment categoryFields on Category {
  name
  path
  description
  defaultImage {
    url(width: $mainImgSize)
    altText
  }
}
`

const productFragment = `
fragment productFields on Product {
  sku
  name
  path
  prices {
    price {
      value
      currencyCode
    }
  }
  defaultImage {
    url(width: $thumbnailSize)
    altText
  }
}
`

const getCategoryQuery = `
query GetCategory(
  $path: String!,
  $mainImgSize: Int!
  $thumbnailSize: Int!
) {
  site {
    route(path: $path) {
      node {
        __typename
        ... on Category {
          ... categoryFields
          products {
            edges {
              node {
                ... productFields
              }
            }
          }
        }
      }
    }
  }
}

${categoryFragment}

${productFragment}
`;

type GetCategoryWithProductsVars = {
  path: string,
  mainImgSize: number,
  thumbnailSize: number,
}

type GetCategoryWithProductsResp = {
  data: {
    site: {
      route: {
        node: BasicCategory & {
          "__typename": string,
          products: {
            edges: {
              node: CategoryProduct,
            }[],
          },
        },
      },
    },
  },
}