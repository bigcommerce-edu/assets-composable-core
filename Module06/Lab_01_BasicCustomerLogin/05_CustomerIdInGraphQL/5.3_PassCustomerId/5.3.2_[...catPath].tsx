//...
// START NEW CODE
import getCurrentCustomer from '@/lib/getCurrentCustomer';
// END NEW CODE

export const getServerSideProps = (async (context) => {
  //...
  const path = "/" + pathSegments.join("/");

  // START NEW CODE
  const { req, res } = context;
  const customer = getCurrentCustomer(req, res);
  // END NEW CODE

  const mainImgSize = 500;
  //...

  try {
    category = await getCategoryWithProducts(
      path, 
      mainImgSize,
      thumbnailSize,
      {
        limit: 12,
        before: before ? String(before) : undefined,
        after: after ? String(after) : undefined,
      // START MODIFIED CODE
      },
      customer?.entityId
      // END MODIFIED CODE
    );
  } catch (err) {
    //...
  }
  
  //...
}) satisfies GetServerSideProps;

//...