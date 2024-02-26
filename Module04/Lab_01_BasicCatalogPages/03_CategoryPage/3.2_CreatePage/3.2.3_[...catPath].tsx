export const getServerSideProps = (async (context) => {
  const globalProps = await getGlobalServerSideProps(context);

  // START NEW CODE
  const pathParam = context.params?.catPath ?? [];
  const pathSegments = Array.isArray(pathParam) ? pathParam : [pathParam];
  const path = "/" + pathSegments.join("/");

  const mainImgSize = 500;
  const thumbnailSize = 500;
  
  let category;
  try {
    category = await getCategoryWithProducts(
      path, 
      mainImgSize, 
      thumbnailSize
    );
  } catch (err) {
    console.log(err);
    category = null;
  }

  if (!category) {
    return {
      props: { ... globalProps },
      notFound: true,
    }
  }
  // END NEW CODE

  return {
    props: {
      ... globalProps,
      // START NEW CODE
      category,
      mainImgSize,
      thumbnailSize
      // END NEW CODE
    }
  };
}) satisfies GetServerSideProps;