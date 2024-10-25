const CartComponent = async () => {
  const cart = await fetch('/api/get-cart').then(res => res.json());

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: cart.currencyCode,
  });

  return (
    <div>
      {cart && (
        <>
        <h2>Cart</h2>
        <div>
          <label>Total Items:</label>
          <span>{cart.totalQuantity}</span>
        </div>
        <div>
          <label>Subtotal:</label>
          <span>{currencyFormatter.format(cart.baseAmount)}</span>
        </div>
        <div>
          <label>Grand Total:</label>
          <span>{currencyFormatter.format(cart.amount)}</span>
        </div>
        </>
      )}
    </div>
  )
}