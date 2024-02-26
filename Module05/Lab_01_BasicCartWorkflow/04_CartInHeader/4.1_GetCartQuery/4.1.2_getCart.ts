const getCartQuery = `
query GetCart($cartId: String!) {
  site {
    cart(entityId: $cartId) {
      ...cartFields
    }
  }
}

${CartFragment}
`;

type GetCartVars = {
  cartId: string,
}

type GetCartResp = {
  data: {
    site: {
      cart: BasicCart & {
        lineItems: {
          totalQuantity: number,
        },
      },
    },
  },
}