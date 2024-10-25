const ProductPrice = ({ product }) => {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.prices.price.currencyCode,
  });

  const showPriceRange = product.prices.priceRange.min.value !== product.prices.priceRange.max.value;

  return (
    <div>
      <label>Price</label>
      {showPriceRange && (
        <p>
          {currency.format(product.prices.priceRange.min.value)} -{' '}
          {currency.format(product.prices.priceRange.max.value)}
        </p>
      )}
      {!showPriceRange && (
        <>
          {product.prices.salePrice?.value && (
            <>
              <p>
                Regular price: {currency.format(product.prices.basePrice.value)}
              </p>
              <p>
                On sale: {currency.format(product.prices.salePrice.value)}
              </p>
            </>
          )}

          {!product.prices.salePrice?.value && (
            <p>{currency.format(product.prices.price.value)}</p>
          )}

          {product.prices.retailPrice?.value && (
            <p>
              MSRP: {currency.format(product.prices.retailPrice.value)}
              (You save {currency.format(product.prices.saved.value)})
            </p>
          )}
        </>
      )}
    </div>
  )
}