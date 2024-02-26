const token = // Store-level v2/v3 account token
const storeHash = // Store hash

const cartId = cookies().get('cartId');

const generateCartUrlResult = await fetch(
  `https://api.bigcommerce.com/stores/${storeHash}/v3/carts/${cartId.value}/redirect_urls`,
  {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Auth-Token': token,
      }
  }
).then(res => res.json());

return {
  redirectUrl: generateCartUrlResult.data.checkout_url,
};