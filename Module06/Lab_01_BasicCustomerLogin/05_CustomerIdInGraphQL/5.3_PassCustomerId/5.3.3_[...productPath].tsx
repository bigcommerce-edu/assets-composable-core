//...
// START NEW CODE
import getCurrentCustomer from '@/lib/getCurrentCustomer';
// END NEW CODE

export const getServerSideProps = (async (context) => {
  //...
  const path = "/products/" + pathSegments.join("/");

  // START NEW CODE
  const { req, res } = context;
  const customer = getCurrentCustomer(req, res);
  // END NEW CODE

  const imgSize = 900;
  //...

  try {
    // START MODIFIED CODE
    product = await getProduct(path, imgSize, customer?.entityId);
    // END MODIFIED CODE
  } catch (err) {
    //...
  }

  //...
}) satisfies GetServerSideProps;

//...