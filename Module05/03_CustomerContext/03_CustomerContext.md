# Customer Context in GraphQL Requests

### Headers

```
Accept: "application/json"
Content-Type: "application/json"
Authorization: "Bearer {storefront token}"
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