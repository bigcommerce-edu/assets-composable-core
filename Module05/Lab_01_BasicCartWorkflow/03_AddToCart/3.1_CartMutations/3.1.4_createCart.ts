export const createCart: (
  productId: number,
  quantity: number
) => Promise<Cart> = async (
  productId,
  quantity
) => {
  const cartResp = await bcGqlFetch<CreateCartResp, CreateCartVars>(
    createCartQuery,
    {
      productId,
      quantity,
    }
  );

  const cart = cartResp.data.cart.createCart.cart;

  return {
    ...cart,
    totalQuantity: cart.lineItems.totalQuantity,
  }
}