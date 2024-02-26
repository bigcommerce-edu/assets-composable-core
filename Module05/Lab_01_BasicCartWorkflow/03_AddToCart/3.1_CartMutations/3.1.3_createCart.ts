const createCartQuery = `
mutation CreateCart(
  $productId: Int!,
  $quantity: Int!
) {
  cart {
    createCart(
      input: {
        lineItems: [
          {
            quantity: $quantity,
            productEntityId: $productId
          }
        ]
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

type CreateCartVars = {
  productId: number,
  quantity: number,
}

type CreateCartResp = {
  data: {
    cart: {
      createCart: {
        cart: BasicCart & {
          lineItems: {
            totalQuantity: number,
          },
        },
      },
    },
  },
}