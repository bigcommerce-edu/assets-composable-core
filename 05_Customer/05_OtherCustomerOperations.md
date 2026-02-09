## Login with a JWT

### Example Login with JWT

```graphql
mutation Login($jwt: String!) {
 loginWithCustomerLoginJwt(jwt: $jwt) {
   customer {
     entityId
     email
   }
   customerAccessToken {
     value
     expiresAt
   }
 }
}
```

## Managing Passwords

### Example Request Password Form

[View](./05_OtherCustomerOperations/RequestPasswordReset.js)

**Example reset link:** `mystore.com/passwordreset?c={id}&t={reset token}`
