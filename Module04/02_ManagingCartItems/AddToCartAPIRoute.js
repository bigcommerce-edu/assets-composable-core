storeHash = // Store hash
channelId = // Headless storefront channel ID
request = // POST request data

const createCartMutation = `
mutation CreateCart(
    $productId: Int!
) {
    ...
}
`

const addLineItemsMutation = `
mutation AddLineItems(
) {
  $cartId: String!,
  $productId: Int!
} {
  ...
}
`

const productData = await request.json();
const productId = productData.productId;

const cartId = cookies().get('cartId');

const cartResult = await fetch(
  `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
  {
    method: 'POST',
    headers: {
      //...
    },
    body: JSON.stringify({
      // Choose which mutation based on whether we have a cart ID
      'query': cartId ? addLineItemsMutation : createCartMutation,
      'variables': {
        productId,
        // Add cart ID from cookie if it exists
        ...(cartId && { cartId: cartId.value }),
      }
    }),
  }
).then(res => res.json());

// Handle the returned cart ID if necessary