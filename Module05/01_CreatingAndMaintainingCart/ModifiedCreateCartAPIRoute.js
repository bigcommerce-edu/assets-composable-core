//...

const cartResult = await fetch(
  `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
  {
    method: 'POST',
    headers: ...,
    body: JSON.stringify({
      'query': createCartQuery,
      'variables': {
        productId,
      }
    }),
  }
).then(res => res.json());

// Store the cart ID in a cookie
cookies().set(
  'cartId', 
  cartResult.data.cart.createCart.cart.entityId,
  { secure: true, httpOnly: true }
);