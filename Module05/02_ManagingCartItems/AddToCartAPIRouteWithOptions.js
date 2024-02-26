gqlToken = // Customer impersonation token
storeHash = // Store hash
channelId = // Channel ID

request = // POST data

const addToCartMutation = `
mutation CreateCart(
    $cartId: String!,
    $productId: Int!,
    $multipleChoiceOptions: [CartSelectedMultipleChoiceOptionInput!]
) {
    cart {
        addCartLineItems(
            input: {
                cartEntityId: $cartId,
                data: {
                    lineItems: [
                        {
                            quantity: 1,
                            productEntityId: $productId,
                            selectedOptions: {
                                multipleChoices: $multipleChoiceOptions
                            }
                        }
                    ]
                }
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

const cartId = cookies().get('cartId');

const addToCartResult = await fetch(
  `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${gqlToken}`,
    },
    body: JSON.stringify({
      query: addToCartMutation,
      variables: {
        ...productData,
        cartId: cartId.value,
      }
    })
  }
).then(res => res.json());

// Process the result