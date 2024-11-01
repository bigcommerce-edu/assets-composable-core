token = // Storefront token
storeHash = // store hash
channelId = // ID of headless storefront channel

const registerCustomerMutation = `
mutation RegisterCustomer(
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $password: String!
) {
    customer {
        registerCustomer(
            input: {
                firstName: $firstName,
                lastName: $lastName,
                email: $email,
                password: $password
            }
        ) {
            customer {
                entityId
                email
            }
        }
    }
}
`

const customerData = await request.json();

const result = await fetch(
  `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`, 
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      'query': createCartMutation,
      'variables': customerData,
    }),
  }
).then(res => res.json());

// ... Verify a customer ID returned in data.customer.registerCustomer.customer.entityId

return {status: 'ok'};