//...

const Faqs = async ({productId}: {productId: number}) => {
  // START NEW CODE
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await sleep(2000);
  // END NEW CODE

  //...