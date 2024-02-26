# The Create Customers Endpoint

### Example Body

```json
[
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "authentication": {
      "new_password": "secure-password"
    }
  }
]
```

### Example Response

```json
{
  "data": [
    {
      "email": "john.doe@example.com",
      "id": 123,
      ...
    }
  ]
}
```

### Example Body with Address

```json
[
  {
    ...,
    "phone": "1112223333",
    "addresses": [
      {
        "first_name": "John",
        "last_name": "Doe",
        "address1": "123 Park Central West",
        "address2": "Ste 3",
        "city": "Austin", 
        "state_or_province": "Texas",
        "postal_code": "73301",
        "country_code": "US",
        "address_type": "commercial"
      }
    ]
  }
]
```

# Associating Customes with the Correct Channel

### Example with Channel ID

```json
[
  {
    "email": "john.doe@example.com",
    "origin_channel_id": 1234,
    "channel_ids": [1234],
    ...
  }
]
```

# A Simple Customer Registration Form

### Registration Component

[View](./RegistrationComponent.jsx)

### Registration API Endpoint

[View](./RegistrationAPIRoute.js)
