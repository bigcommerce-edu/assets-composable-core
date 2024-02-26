//...

export const getCategoryWithProducts: (
  path: string,
  mainImgSize: number,
  thumbnailSize: number,
  // START MODIFIED CODE
  page: {limit: number, before?: string, after?: string},
  customerId?: number
  // END MODIFIED CODE
) => Promise<PagedCategory> = async (
  path,
  mainImgSize,
  thumbnailSize,
  // START MODIFIED CODE
  page,
  customerId
  // END MODIFIED CODE
) => {
  const categoryResp = await bcGqlFetch<GetCategoryWithProductsResp, GetCategoryWithProductsVars>(
    page.before ? getCategoryWithBeforeQuery : getCategoryWithAfterQuery,
    {
      path,
      mainImgSize,
      thumbnailSize,
      ...page
    // START MODIFIED CODE
    },
    customerId
    // END MODIFIED CODE
  );

  //...
}

//...