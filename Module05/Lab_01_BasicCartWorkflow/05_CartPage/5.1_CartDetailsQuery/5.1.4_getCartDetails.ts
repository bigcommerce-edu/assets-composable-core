export const getCartDetails: (
  cartId: string
) => Promise<CartDetails> = async (
  cartId
) => {
  const cartResp = await bcGqlFetch<GetCartDetailsResp, GetCartDetailsVars>(
    getCartsDetailsQuery,
    {
      cartId,
    }
  );

  const cart = cartResp.data.site.cart;
  if (!cart) {
    throw new Error("Cart not found");
  }

  return {
    ...cart,
    totalQuantity: cart.lineItems.totalQuantity,
    lineItems: cart.lineItems.physicalItems.concat(cart.lineItems.digitalItems),
  }
}