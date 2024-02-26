//...

export default function CartPage(
  // START MODIFIED CODE
  { cart, checkoutRedirectUrl }: { cart: CartDetails | null, checkoutRedirectUrl: string }
  // END MODIFIED CODE
) {
  //...

  return (
    <>
      <PageHeading>Cart</PageHeading>
      <div {/*...*/}>
        <table {/*...*/}>
          {/*...*/}
          <tfoot>
            <tr>
              {/*...*/}
            </tr>
            <tr>
              {/*...*/}
            </tr>

            {/* START NEW CODE */}
            <tr>
              <td></td>
              <td className="p-8 text-right" colSpan={2}>
                {checkoutRedirectUrl && (
                  <a className="p-2 rounded-md text-lg px-4 font-normal cursor-pointer
                    bg-neutral-700 text-white hover:bg-neutral-500 disabled:bg-neutral-500
                    hover:no-underline"
                    href={checkoutRedirectUrl}>
                    Proceed to Checkout
                  </a>
                )}
              </td>
            </tr>
            {/* END NEW CODE */}
          </tfoot>
        </table>
      </div>
    </>
  )
}