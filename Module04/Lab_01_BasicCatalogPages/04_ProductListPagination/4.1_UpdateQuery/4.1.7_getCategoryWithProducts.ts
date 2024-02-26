//...

const category = categoryResp.data.site.route.node;
  if (!category || category.__typename !== "Category") {
    //...
  }

  const products = (category.products?.edges ?? []).map(edge => edge.node);

  // START NEW CODE
  const pageOpts = {
    before: category.products.pageInfo.hasPreviousPage 
      ? category.products.pageInfo.startCursor : null,
    after: category.products.pageInfo.hasNextPage
      ? category.products.pageInfo.endCursor : null,
  }
  // END NEW CODE

  return {
    ...category,
    products,
    // START NEW CODE
    page: pageOpts,
    // END NEW CODE
  };

//...