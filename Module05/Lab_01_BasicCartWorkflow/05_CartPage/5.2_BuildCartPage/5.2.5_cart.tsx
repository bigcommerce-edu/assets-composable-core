export const getServerSideProps = (async (context) => {
  const globalProps = await getGlobalServerSideProps(context);

  // START NEW CODE
  const { req, res } = context;
  const cartId = getCookie("cartId", { req, res });

  let cart;
  try {
    cart = (cartId) ? await getCartDetails(cartId) : null;
  } catch (err) {
    cart = null;
  }
  // END NEW CODE

  return {
    props: {
      ... globalProps,
      // START NEW CODE
      cart
      // END NEW CODE
    }
  };
}) satisfies GetServerSideProps;