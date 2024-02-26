export const getProductFaqMetafields = cache(
  async (
    productId: number,
    limit: number
  ) => {
    const query = graphql(GET_PRODUCT_FAQ_METAFIELDS_QUERY);

    const response = await client.fetch({
      document: query,
      variables: {
        productId,
        limit,
      },
    });

    const metafields = response.data.site.product?.metafields;

    if (!metafields) {
      return { faqs: [] };
    }

    const fields = removeEdgesAndNodes(metafields);
  },
);