//...

const productFragment = `
  ...
`

// START NEW CODE
const pageFragment = `
fragment pageFields on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
`
// END CODE

// START REPLACED CODE
const getCategoryWithBeforeQuery = `
query GetCategory(
  $path: String!,
  $mainImgSize: Int!
  $thumbnailSize: Int!,
  $limit: Int,
  $before: String
) {
  site {
    route(path: $path) {
      node {
        __typename
        ... on Category {
          ... categoryFields
          products(
            last: $limit,
            before: $before
          ) {
            pageInfo {
              ... pageFields
            }
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

${pageFragment}
`

const getCategoryWithAfterQuery = `
query GetCategory(
  $path: String!,
  $mainImgSize: Int!
  $thumbnailSize: Int!,
  $limit: Int,
  $after: String
) {
  site {
    route(path: $path) {
      node {
        __typename
        ... on Category {
          ... categoryFields
          products(
            first: $limit,
            after: $after
          ) {
            pageInfo {
              ... pageFields
            }
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

${pageFragment}
`
// END REPLACED CODE

//...