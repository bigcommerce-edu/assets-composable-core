const loginQuery = `
mutation Login(
  $email: String!,
  $password: String!
) {
  login(
    email: $email,
    password: $password
  ) {
    customer {
      entityId
    }
  }
}
`;

type LoginVars = {
  email: string,
  password: string,
}

type LoginResp = {
  data: {
    login: {
      customer: Customer,
    },
  },
}