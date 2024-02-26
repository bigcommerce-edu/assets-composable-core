export const createCheckoutRedirectUrl: (
  cartId: string
) => Promise<string> = async (
  cartId
) => {
  const redirectResp = await bcRestFetch<CreateCheckoutRedirectResp, CreateCheckoutRedirectReq>(
    `v3/carts/${cartId}/redirect_urls`,
    "POST",
    {
      cartId,
    }
  );

  return redirectResp.data?.checkout_url ?? '';
}