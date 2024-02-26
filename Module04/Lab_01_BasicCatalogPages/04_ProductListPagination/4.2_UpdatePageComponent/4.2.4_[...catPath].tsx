export const getServerSideProps = (async (context) => {
  //...

  // START NEW CODE
  const { before, after } = context.query;
  // END NEW CODE
  
  let category;
  try {
    category = await getCategoryWithProducts(
      path, 
      mainImgSize,
      thumbnailSize,
      // START NEW CODE
      {
        limit: 12,
        before: before ? String(before) : undefined,
        after: after ? String(after) : undefined,
      }
      // END NEW CODE
    );
  } catch (err) {
    //...
  }

  //...