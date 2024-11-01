// ...
import * as jwt from 'jsonwebtoken';

storeHash = // Store hash
channelId = // Channel ID
gqlToken = // Storefront token
secret = // Secret value

const customerToken = cookies().get('customer');

let customerId = null;
if (customerToken) {
  try {
    const customerClaim = jwt.verify(customerToken.value, secret);
    const customer = JSON.parse(customerClaim.sub);
  } catch (err) {
    // JWT was invalid ...
  }
}

fetch(
  `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${gqlToken}`,
      ...(customer.token && { 'X-Bc-Customer-Id': customer.token }),
    },
    body: JSON.stringify({
      query: // Query
      variables: // Vars
    })
  }
)