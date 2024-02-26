Follow along in your project codebase.

```javascript
export const getServerSideProps = (async (context) => {
  const { req, res } = context;
  const cartId = getCookie("cartId", { req, res });

  let cart;
  try {
    cart = (cartId) ? await getCartDetails(cartId) : null;
  } catch (err) {
    cart = null;
  }

  return {
    props: {
      cart,
      checkoutRedirectUrl: (cartId) ? await createCheckoutRedirectUrl(cartId) : '',
    }
  };
}) satisfies GetServerSideProps;

export default function CartPage(
  { cart, checkoutRedirectUrl }: { cart: CartDetails | null, checkoutRedirectUrl: string }
) {
  // cart and checkoutRedirectUrl are received as props

  return (
    // JSX code
  )
}
```

`app/(default)/cart/page.tsx`:

```javascript
export default async function CartPage() {
  ...

  const cart = await getCart(cartId);

  ...

  return (
    // Uses the cart data fetched above
  )
}
```

`components/Header/cart.tsx`:

```javascript
export const Cart = async () => {
  const cartId = cookies().get('cartId')?.value;

  ...

  const cart = await getCart(cartId);

  ...

  return (
    // Utilizes cart
  )
};
```