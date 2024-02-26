Follow along in your project codebase.

`components/product-card/cart.tsx`:

```javascript
'use client';

...

import { addToCart } from './_actions/addToCart';

...

export const Cart = (...) => {
  ...

    <form
      action={async (formData: FormData) => {
        const result = await addToCart(formData);
        ...
      }}
    >

    ...
```

`components/product-card/_actions/add-to-cart.ts`:

```javascript
'use server';

...

import { addCartLineItem } from '~/client/mutations/addCartLineItem';
import { createCart } from '~/client/mutations/createCart';
import { getCart } from '~/client/queries/getCart';

export const addToCart = async (data: FormData) => {
  ...
  const cart = await getCart(cartId);

  try {
    if (cart) {
      await addCartLineItem(cart.entityId, {
        ...
      });
    
      ...
```