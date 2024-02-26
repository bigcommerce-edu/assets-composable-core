export const getCategoryWithProducts: (
  path: string,
  mainImgSize: number,
  thumbnailSize: number
) => Promise<Category> = async (
  path,
  mainImgSize,
  thumbnailSize
) => {
  const categoryResp = await bcGqlFetch<GetCategoryWithProductsResp, GetCategoryWithProductsVars>(
    getCategoryQuery,
    {
      path,
      mainImgSize,
      thumbnailSize,
    }
  );

  const category = categoryResp.data.site.route.node;
  if (!category || category.__typename !== "Category") {
    throw new Error(`No category found for "${path}"`);
  }

  const products = (category.products?.edges ?? []).map(edge => edge.node);

  return {
    ...category,
    products,
  };
}