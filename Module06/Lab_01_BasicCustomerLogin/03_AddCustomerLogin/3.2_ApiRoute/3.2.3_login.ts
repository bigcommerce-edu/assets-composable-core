export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ loggedIn: boolean, error?: string }>
) {
  //...

  // START NEW CODE
  try {
    const customer = await login(email, password);

    const customerToken = jwt.sign({
      sub: customer.entityId,
    }, JWT_SECRET);

    setCookie("customer", customerToken, { req, res, httpOnly: true, secure: true });

    res.status(200).json({ loggedIn: true });
  } catch (err)  {
    const error = (err instanceof Error) ? err.message : String(err);

    res.status(401).json({ loggedIn: false, error });
  }
  // END NEW CODE
}