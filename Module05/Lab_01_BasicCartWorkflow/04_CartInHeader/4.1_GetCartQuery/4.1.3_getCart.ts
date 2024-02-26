export const getCart: (
  cartId: string
) => Promise<Cart> = async (
  cartId
) => {
  const cartResp = await bcGqlFetch<GetCartResp, GetCartVars>(
    getCartQuery,
    {
      cartId
    }
  );

  const cart = cartResp.data.site.cart;
  if (!cart) {
    throw new Error("Cart not found");
  }

  return {
    ...cart,
    totalQuantity: cart.lineItems.totalQuantity,
  }
}