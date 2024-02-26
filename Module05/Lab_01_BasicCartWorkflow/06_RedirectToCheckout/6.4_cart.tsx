//...

export const getServerSideProps = (async (context) => {
  //...

  return {
    props: {
      ... globalProps,
      cart,
      // START NEW CODE
      checkoutRedirectUrl: (cartId) ? await createCheckoutRedirectUrl(cartId) : '',
      // END NEW CODE
    }
  };
}) satisfies GetServerSideProps;

//...