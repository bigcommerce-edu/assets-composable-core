export default function ProductPage(
  { product, imgSize }: { product: Product, imgSize: number }
) {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.prices.price.currencyCode,
  });

  return (
    <>
      <PageHeading>{product.name}</PageHeading>
      <div className="w-full max-w-screen-2xl flex flex-wrap justify-center">
        <div className="w-1/2">
          {product.defaultImage && (
            <Image src={product.defaultImage.url} 
              alt={product.defaultImage.altText ?? ''}
              width={imgSize} height={imgSize / 2}
              className="" />
          )}
        </div>
        <div className="w-1/2 p-4">
          <p className="my-2"><label className="font-bold">SKU:</label> {product.sku}</p>
          {product.description && (
            <div dangerouslySetInnerHTML={{__html: product.description}}
              className="my-2" />
          )}
          <div className="text-lg my-4">
            <label className="font-bold">Price:</label>
            <span> {currencyFormatter.format(product.prices.price.value)}</span>
          </div>
        </div>
      </div>
    </>
  )
}