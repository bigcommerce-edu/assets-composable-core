# Registering Customers with GraphQL

### Example Mutation

```graphql
mutation RegisterCustomer(
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $password: String!
) {
    customer {
        registerCustomer(
            input: {
                firstName: $firstName,
                lastName: $lastName,
                email: $email,
                password: $password
            }
        ) {
            customer {
                entityId
                email
            }
        }
    }
}
```

### Example Response

```json
{
    "data": {
        "customer": {
            "registerCustomer": {
                "customer": {
                    "entityId": 47,
                    "email": "john.doe@mystore.com"
                }
            }
        }
    }
}
```

### Example Detailed Mutation

```graphql
mutation RegisterCustomer(
    ...
) {
    customer {
        registerCustomer(
            input: {
                ...
                phone: "111-222-3333",
                address: {
                    firstName: "John",
                    lastName: "Doe",
                    address1: "123 Park Central East",
                    address2: "Ste 1",
                    city: "Austin",
                    company: "My Store",
                    countryCode: "US",
                    stateOrProvince: "Texas",
                    phone: "444-555-6666",
                    postalCode: "78701"
                }
            }
        ) {
            customer {
                entityId
                email
            }
        }
    }
}
```

# Associating Customes with the Correct Channel

### Example Channel Details

```json
{
    "data": [
        {
            "id": 45,
            ...
            "origin_channel_id": 12345,
            "channel_ids": [
                1,
                12345
            ]
        }
    ],
    ...
}
```

# A Simple Customer Registration Form

### Registration Component

[View](./RegistrationComponent.jsx)

### Registration API Endpoint

[View](./RegistrationAPIRoute.js)
