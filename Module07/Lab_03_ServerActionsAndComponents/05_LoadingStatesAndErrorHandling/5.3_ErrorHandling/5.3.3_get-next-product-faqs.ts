//...

const getNextProductFaqs = async (
  productId: number,
  limit: number,
  endCursor?: string | null
) => {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await sleep(2000);

  // START NEW CODE
  throw new Error("Something went wrong");
  // END NEW CODE

  //...