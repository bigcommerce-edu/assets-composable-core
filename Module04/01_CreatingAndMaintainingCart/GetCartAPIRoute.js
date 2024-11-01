storeHash = // Store hash
channelId = // Headless storefront channel ID
gqlToken = // Storefront token

const cartQuery = `
query GetCart(
    $cartId: String
) {
    site {
        cart(entityId: $cartId) {
            totalQuantity
            currencyCode
            baseAmount {
                value
            }
            amount {
                value
            }
        }
    }
}
`

const emptyCart = {
    totalQuantity: 0,
    currencyCode: 'USD',
    baseAmount: 0,
    amount: 0,
}

  const cartId = cookies().get('cartId');

  if (cartId) {
      const cartResult = await fetch(
          `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
          {
              method: 'POST',
              headers: {
                  ...
                  Authorization: `Bearer ${gqlToken}`,
              },
              body: JSON.stringify({
                  query: cartQuery,
                  variables: {
                      cartId,
                  }
              })
          }
      ).then(res => res.json());

     const cart = cartResult.data?.site?.cart;
     if (cart) {
         return {
             totalQuantity: cart.totalQuantity,
             currencyCode: cart.currencyCode,
             baseAmount: cart.baseAmount.value,
             amount: cart.amount.value,
         }
     }
  }

  return emptyCart;