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

# Customer Context in GraphQL Requests

### Headers

> **Note:** The Bearer token in the `Authorization` header differs by context. In a client-side context, use the standard storefront token. In a server-side context (such as a Next.js server component), use the private storefront token.

```
Accept: "application/json"
Content-Type: "application/json"
Authorization: "Bearer {private storefront token}"
X-Bc-Customer-Access-Token: {Customer access token}
```

### Body

```
query CustomerAttributes($shirtSizeId: Int!, $favoriteColorId: Int!) {
  customer {
    firstName
    lastName
    email
    entityId
    customerGroupId
    attributeCount
    attributes {
      shirtSize: attribute(entityId: $shirtSizeId) {
        entityId
        value
      }
      favoriteColor: attribute(entityId:$favoriteColorId) {
        entityId
        value
      }
    }
  }
}
```
