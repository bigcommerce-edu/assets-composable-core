# Authenticating Customers with GraphQL

### Example Mutation

```graphql
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    customer {
      ...
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

# Customer Context in GraphQL Requests

### Headers

```
Accept: "application/json"
Content-Type: "application/json"
Authorization: "Bearer {customer impersonation token}"
X-Bc-Customer-Id: 2
```

### Body

```
query: "query GetCustomer {
  customer {
    entityId
    email
  }
}"
```

# Other Customer Operations

### Reset Password Request API Endpoint

[View](./RequestPasswordReset.js)
