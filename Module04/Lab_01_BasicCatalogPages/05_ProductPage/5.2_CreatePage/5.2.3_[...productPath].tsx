export const getServerSideProps = (async (context) => {
  const globalProps = await getGlobalServerSideProps(context);

  // START NEW CODE
  const pathParam = context.params?.productPath ?? [];
  const pathSegments = Array.isArray(pathParam) ? pathParam : [pathParam];
  const path = "/" + pathSegments.join("/");

  const imgSize = 900;

  let product;
  try {
    product = await getProduct(path, imgSize);
  } catch (err) {
    console.log(err);
    product = null;
  }

  if (!product) {
    return {
      props: {... globalProps},
      notFound: true,
    }
  }
  // END NEW CODE

  return {
    props: {
      ... globalProps,
      // START NEW CODE
      product,
      imgSize
      // END NEW CODE
    }
  };
}) satisfies GetServerSideProps;