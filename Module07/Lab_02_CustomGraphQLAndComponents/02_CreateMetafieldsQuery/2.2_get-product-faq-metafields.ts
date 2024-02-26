const GET_PRODUCT_FAQ_METAFIELDS_QUERY = /* GraphQL */ `
  query getProductFaqMetafields($productId: Int!, $limit: Int) {
    site {
      product(entityId: $productId) {
        metafields(namespace: "FAQ", first: $limit) {
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