// ...
import * as jwt from 'jsonwebtoken';

secret = // Secret value
request = // The POST request

const loginData = await request.json();

const result = // Perform GraphQL login mutation request

const customerToken = jwt.sign({
  sub: result.data.login.customer.entityId,
}, secret);

cookies().set('customer', customerToken, {
  secure: true,
  httpOnly: true,
});

return {status: 'ok'};