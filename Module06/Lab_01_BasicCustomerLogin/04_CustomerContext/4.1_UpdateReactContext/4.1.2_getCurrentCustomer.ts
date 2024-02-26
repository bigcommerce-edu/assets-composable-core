const getCurrentCustomer: (
  req: IncomingMessage, res: ServerResponse
) => Customer | null = (
  req, res
) => {
  const customerToken = getCookie("customer", { req, res });
  if (!customerToken) {
    return null;
  }

  const JWT_SECRET = process.env.JWT_SECRET ?? '';

  let customer;
  try {
    const customerClaim = jwt.verify(customerToken, JWT_SECRET);
    customer = {
      entityId: parseInt(customerClaim.sub?.toString() ?? ''),
    }
  } catch (err) {
    customer = null;
    deleteCookie("customer", { req, res });
  }

  return customer;
}

export default getCurrentCustomer;