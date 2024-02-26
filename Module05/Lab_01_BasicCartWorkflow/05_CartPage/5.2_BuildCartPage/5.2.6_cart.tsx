export default function CartPage({ cart }: { cart: CartDetails | null }) {
  if (!cart) {
    return (
      <>
        <PageHeading>Cart</PageHeading>
        <div className="w-1/2 text-center">There are no items in the cart.</div>
      </>
    )
  }

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: cart?.currencyCode ?? 'USD',
  });

  return (
    <>
      <PageHeading>Cart</PageHeading>
      <div className="w-full flex justify-center">
        <table className="w-2/3">
          <tbody>
            {cart.lineItems.map(item => (
              <CartItemRow key={item.entityId} item={item} 
                currencyCode={cart.currencyCode} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="px-8 py-4 text-right" colSpan={2}>Subtotal</th>
              <td className="px-8 py-4 text-right">
                {currencyFormatter.format(cart.baseAmount.value)}
              </td>
            </tr>
            <tr>
              <th className="px-8 py-4 text-right" colSpan={2}>Grand Total</th>
              <td className="px-8 py-4 text-right">
                {currencyFormatter.format(cart.amount.value)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}