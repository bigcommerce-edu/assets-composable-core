const token = // GraphQL token
const storeHash = // BigCommerce store hash
const channelId = // BigCommerce channel ID
const prevCursor = // Previous "end" cursor, captured from the URL

const PaginatedFeaturedProducts = async () => {
  const perPage = 5;

  const productsResult = await fetch(
    `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
    {
      ...
      body: JSON.stringify({
        query: `
        query getFeaturedProducts($perPage: Int, $prevCursor: String) {
          site {
            featuredProducts(
              first: $perPage,
              after: $prevCursor
            ) {
              pageInfo {
                hasNextPage
                endCursor
              }
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
        `,
        variables: {
          perPage,
          prevCursor,
        }
      }),
    }
  );

  const { pageInfo, edges: products } = await productsResult.json().then(json => json.data.site.featuredProducts);

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.node.entityId}>{product.node.name} ({product.node.sku})</li>
        ))}
      </ul>
      {pageInfo.hasNextPage && (
        <a href={`/some/page/route?after=${pageInfo.endCursor}`}>Next</a>
      )}
    </div>
  )
}