const cartItemFields = `
  entityId
  productEntityId
  sku
  name
  imageUrl
  quantity
  salePrice {
    value
  }
  extendedSalePrice {
    value
  }
`

const getCartsDetailsQuery = `
query GetCart($cartId: String!) {
  site {
    cart(entityId: $cartId) {
      entityId
      currencyCode
      amount {
        value
      }
      baseAmount {
        value
      }
      lineItems {
        totalQuantity,
        physicalItems {
          ...PhysicalItemFields
        }
        digitalItems {
          ...DigitalItemFields
        }
      }
    }
  }
}

fragment PhysicalItemFields on CartPhysicalItem {
  ${cartItemFields}
}

fragment DigitalItemFields on CartDigitalItem {
  ${cartItemFields}
}
`

type GetCartDetailsVars = {
  cartId: string,
}

type GetCartDetailsResp = {
  data: {
    site: {
      cart: BasicCartDetails & {
        lineItems: {
          totalQuantity: number,
          physicalItems: CartItem[],
          digitalItems: CartItem[],
        },
      },
    },
  },
}