token = // Customer impersonation GraphQL token
storeHash = // Store hash
channelId = // Headless storefront channel ID
request = // POST request data

const createCartMutation = `
mutation CreateCart(
    $productId: Int!
) {
    cart {
        createCart(
            input: {
                lineItems: [
                    {productEntityId: $productId, quantity: 1}
                ]
            }
        ) {
            cart {
                entityId
            }
        }
    }
}
`

const productData = await request.json();

const productId = productData.productId;

const cartResult = await fetch(
  `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      'query': createCartMutation,
      'variables': {
        productId,
      }
    }),
  }
).then(res => res.json());

// Cart ID returned on cartResult.data.cart.createCart.cart.entityId