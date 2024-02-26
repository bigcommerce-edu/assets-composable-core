export const addCartLineItem: (
  cartId: string,
  productId: number,
  quantity: number
) => Promise<Cart> = async (
  cartId,
  productId,
  quantity
) => {
  const cartResp = await bcGqlFetch<AddCartLineItemResp, AddCartLineItemVars>(
    addCartLineItemQuery,
    {
      cartId,
      productId,
      quantity,
    }
  );

  const cart = cartResp.data.cart.addCartLineItems.cart;

  return {
    ...cart,
    totalQuantity: cart.lineItems.totalQuantity,
  }
}