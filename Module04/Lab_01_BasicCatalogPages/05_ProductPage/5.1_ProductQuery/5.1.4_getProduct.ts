export const getProduct: (
  path: string,
  imgSize: number
) => Promise<Product> = async (
  path,
  imgSize
) => {
  const productResp = await bcGqlFetch<GetProductResp, GetProductVars>(
    getProductQuery,
    {
      path,
      imgSize,
    }
  );

  const product = productResp.data.site.route.node;

  if (!product || product.__typename !== "Product") {
    throw new Error(`Product not found for "${path}"`);
  }

  return product;
}