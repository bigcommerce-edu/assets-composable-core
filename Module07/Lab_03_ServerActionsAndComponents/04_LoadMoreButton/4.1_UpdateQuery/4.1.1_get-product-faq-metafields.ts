//...

const GET_PRODUCT_FAQ_METAFIELDS_QUERY = /* GraphQL */ `
  query getProductFaqMetafields($productId: Int!, $limit: Int, $after: String) {
    site {
      product(entityId: $productId) {
        metafields(namespace: "FAQ", first: $limit, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              key
              value
            }
          }
        }
      }
    }
  }
`;

//...