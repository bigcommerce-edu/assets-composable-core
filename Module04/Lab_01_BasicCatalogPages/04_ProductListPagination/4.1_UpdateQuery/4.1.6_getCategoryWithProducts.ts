//...

  const categoryResp = await bcGqlFetch<GetCategoryWithProductsResp, GetCategoryWithProductsVars>(
    // START MODIFIED CODE
    page.before ? getCategoryWithBeforeQuery : getCategoryWithAfterQuery,
    // END MODIFIED CODE
    {
      path,
      mainImgSize,
      thumbnailSize,
      // START NEW CODE
      ...page,
      // END NEW CODE
    }
  );

//...