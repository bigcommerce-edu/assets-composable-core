token = // Customer impersonation GraphQL token
storeHash = // Store hash
channelId = // Headless storefront channel ID

const createRedirectMutation = `
  mutation CartRedirectMutation($cartId: String!) {
    cart {
      createCartRedirectUrls(
        input: { 
          cartEntityId: $cartId 
        }
      ) {
        redirectUrls {
          redirectedCheckoutUrl
        }
      }
    }
  }
`

const cartId = cookies().get('cartId');

const cartRedirectResult = await fetch(
  `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      'query': createRedirectMutation,
      'variables': {
        cartId,
      }
    }),
  }
).then(res => res.json());

return {
  redirectUrl: cartRedirectResult.data.cart.createCartRedirectUrls.redirectedCheckoutUrl,
};