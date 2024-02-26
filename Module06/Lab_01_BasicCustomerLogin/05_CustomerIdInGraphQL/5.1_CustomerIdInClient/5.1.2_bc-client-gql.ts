//...

  const result = await fetch(
    `https://store-${BC_STORE_HASH}-${BC_CHANNEL_ID}.mybigcommerce.com/graphql`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${BC_CI_TOKEN}`,
        // START NEW CODE
        ...(customerId && { 'X-Bc-Customer-Id': String(customerId) }),
        // END NEW CODE
      },
      body: JSON.stringify({
        query,
        ...(variables && { variables }),
      }),
    }
  ).then(res => res.json());

//...