//...

// START NEW CODE
const FaqMetafield = z.object({
  key: z.string(),
  question: z.string(),
  answer: z.string(),
});
// END NEW CODE

export const getProductFaqMetafields = cache(
  //...