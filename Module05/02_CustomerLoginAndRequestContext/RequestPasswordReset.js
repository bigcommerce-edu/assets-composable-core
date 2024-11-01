token = // Storefront token
storeHash = // Store hash
channelId = // Headless storefront channel ID
request = // POST request data

const requestResetPasswordMutation = `
mutation requestResetPassword(
    $email: String!
) {
    customer {
        requestPasswordReset(
            input: {
                email: $email,
                path: "/passwordreset"
            }
        ) {
            errors {
                ... on ValidationError {
                    message
                }
            }
        }
    }
}
`

const customerData = await request.json();
const email = customerData.email;

const resetRequestResult = await fetch(
  `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      'query': requestResetPasswordMutation,
      'variables': {
        email,
      }
    }),
  }
).then(res => res.json());