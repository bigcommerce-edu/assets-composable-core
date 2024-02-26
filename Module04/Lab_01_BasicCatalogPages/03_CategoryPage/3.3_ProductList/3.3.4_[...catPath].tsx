export default function CategoryPage(
  //...
) {
  return (
    <>
      <PageHeading>{category.name}</PageHeading>

      <div className="w-full max-w-screen-2xl flex justify-center">
        {/*...*/}
      </div>

      {/* START NEW CODE */}
      <ul className="w-full max-w-screen-2xl grid grid-cols-1
        md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {category.products.map(product => (
          <li key={product.sku} className="bg-neutral-200 rounded-md p-4">
            <ProductCard product={product} thumbnailSize={thumbnailSize} />
          </li>
        ))}
      </ul>
      {/* END NEW CODE */}
    </>
  )
}