# Authenticating Customers with GraphQL

### Example Mutation

```graphql
mutation Login($email: String!, $pass: String!) {
 login(email: $email, password: $pass) {
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

### Example Error Response

```json
{
  "data": null,
  "errors": [
    {
      "message": "Invalid credentials",
      "path": [
        "login"
      ],
      ...
    }
  ]
}
```

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

# Anatomy of the Customer Object

### Example Query

```graphql
query GetCustomer {
  customer {
    entityId
    email
    firstName
    lastName
  }
}
```

[Next](../03_CustomerContext/03_CustomerContext.md)
