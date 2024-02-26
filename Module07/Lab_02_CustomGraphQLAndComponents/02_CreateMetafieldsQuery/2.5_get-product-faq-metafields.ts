export const getProductFaqMetafields = cache(
  async (
    //...
  ) => {
    //...

    const fields = removeEdgesAndNodes(metafields);

    // START NEW CODE
    const faqs = fields
      .map((field) => {
        try {
          return FaqMetafield.parse({
            ...JSON.parse(field.value),
            key: field.key,
          });
        } catch (err) {
          return { key: '', question: '', answer: '' };
        }
      })
      .filter((field) => field.key.trim().length > 0);

    return {
      faqs,
    };
    // END NEW CODE
  },
);