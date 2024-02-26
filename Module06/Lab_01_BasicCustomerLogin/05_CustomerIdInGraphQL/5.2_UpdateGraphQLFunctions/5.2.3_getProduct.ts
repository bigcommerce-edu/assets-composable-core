//...

export const getProduct: (
  path: string,
  // START MODIFIED CODE
  imgSize: number,
  customerId?: number
  // END MODIFIED CODE
) => Promise<Product> = async (
  path,
  // START MODIFIED CODE
  imgSize,
  customerId
  // END MODIFIED CODE
) => {
  const productResp = await bcGqlFetch<GetProductResp, GetProductVars>(
    getProductQuery,
    {
      path,
      imgSize,
    // START MODIFIED CODE
    },
    customerId
    // END MODIFIED CODE
  );

  //...
}

//...