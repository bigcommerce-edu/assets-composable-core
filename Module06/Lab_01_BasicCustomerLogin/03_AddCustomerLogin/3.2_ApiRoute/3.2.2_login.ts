type LoginReq = {
  email: string,
  password: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ loggedIn: boolean, error?: string }>
) {
  if (req.method !== "POST") {
    res.status(404).json({ loggedIn: false });
    return;
  }

  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    res.status(401).json({ loggedIn: false, error: "Could not perform login" });
    return;
  }

  const reqData = req.body satisfies LoginReq;
  const { email, password } = reqData;
}