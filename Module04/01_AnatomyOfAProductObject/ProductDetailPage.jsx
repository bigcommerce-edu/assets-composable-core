entityId = // A product numerical entity ID
token = // GraphQL token
storeHash = // BigCommerce store hash
channelId = // BigCommerce channel ID

const ProductDetailPage = async () => {
  const productResult = await fetch(
    `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
        query getProduct($entityId: Int!) {
          site {
            product(entityId: $entityId) {
              id
              entityId
              name
              sku
              description
            }
          }
        }
        `,
        variables: {
          entityId
        }
      }),
    }
  );

  const product = await productResult.json().then(json => json.data.site.product);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>SKU: {product.sku}</p>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </div>
  )
}