const addCartLineItemQuery = `
mutation AddCartLineItem(
  $cartId: String!,
  $productId: Int!,
  $quantity: Int!
) {
  cart {
    addCartLineItems(
      input: {
        cartEntityId: $cartId,
        data: {
          lineItems: [
            {
              quantity: $quantity,
              productEntityId: $productId
            }
          ]
        }
      }
    ) {
      cart {
        ...cartFields
      }
    }
  }
}

${CartFragment}
`;

type AddCartLineItemVars = {
  cartId: string,
  productId: number,
  quantity: number,
}

type AddCartLineItemResp = {
  data: {
    cart: {
      addCartLineItems: {
        cart: BasicCart & {
          lineItems: {
            totalQuantity: number,
          },
        },
      }
    },
  },
}