export const getProductFaqMetafields = cache(
  async (
    //...
  ) => {
    //...

    const metafields = response.data.site.product?.metafields;

    if (!metafields) {
      // START MODIFIED CODE
      return { endCursor: null, faqs: [] };
      // END MODIFIED CODE
    }

    //...

    return {
      // START NEW CODE
      endCursor: metafields.pageInfo.hasNextPage ? metafields.pageInfo.endCursor : null,
      // END NEW CODE
      faqs,
    };
  },
);