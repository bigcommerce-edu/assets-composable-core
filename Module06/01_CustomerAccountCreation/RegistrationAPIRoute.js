apiToken = // v2/v3 OAuth token for store-level API account
storeHash = // store hash
channelId = // ID of headless storefront channel

const customerData = await request.json();
const password = customerData.password;
delete customerData.password;

const result = await fetch(
  `https://api.bigcommerce.com/stores/${storeHash}/v3/customers`, 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': apiToken,
    },
    body: JSON.stringify([{
      ...customerData,
      authentication: {
        new_password: password,
      },
      origin_channel_id: channelId,
      channel_ids: [channelId],
    }])
  }
).then(res => res.json());

// ... Process the result, including capturing the customer ID and initializing a session

return {status: 'ok'};