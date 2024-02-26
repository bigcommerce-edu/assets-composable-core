//...
// START NEW CODE
import getCurrentCustomer from '@/lib/getCurrentCustomer';
// END NEW CODE

type CustomerSessionResp = {
  cart: Cart | null,
  // START NEW CODE
  loggedIn: boolean,
  // END NEW CODE
}

export default async function handler(
  //...
) {
  if (req.method !== "GET") {
    // START MODIFIED CODE
    res.status(404).json({ cart: null, loggedIn: false });
    // END MODIFIED CODE
    return;
  }

  // START NEW CODE
  const customer = getCurrentCustomer(req, res);
  const loggedIn = Boolean(customer?.entityId);
  // END NEW CODE

  //...

  // START MODIFIED CODE
  res.status(200).json({ cart, loggedIn });
  // END MODIFIED CODE
}