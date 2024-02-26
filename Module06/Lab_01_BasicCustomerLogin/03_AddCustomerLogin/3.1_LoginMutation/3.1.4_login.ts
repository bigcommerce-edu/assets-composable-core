export const login: (
  email: string, password: string
) => Promise<Customer> = async (
  email, password
) => {
  const customerResp = await bcGqlFetch<LoginResp, LoginVars>(
    loginQuery,
    {
      email,
      password,
    }
  );

  const customer = customerResp.data.login.customer;
  if (!customer) {
    throw new Error("Customer login failed");
  }

  return customer;
}