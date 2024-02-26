//...
// START NEW CODE
import getCurrentCustomer from './getCurrentCustomer';
// END NEW CODE

const getGlobalServerSideProps = (async ({ req, res }: GetServerSidePropsContext) => {
  // START NEW CODE
  const customer = getCurrentCustomer(req, res);
  // END NEW CODE

  let globalData;
  try {
    // START MODIFIED CODE
    globalData = await getGlobalData(customer?.entityId);
    // END MODIFIED CODE
  } catch (err) {
    //...
  }
  //...
});

//...