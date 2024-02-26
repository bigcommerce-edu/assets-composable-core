//...
// START NEW CODE
import AddToCart from '@/components/Product/AddToCart';
// END NEW CODE

export const getServerSideProps = (async (context) => {
  //...
}

export default function ProductPage(
  { product, imgSize }: { product: Product, imgSize: number }
) {
  //...
  return (
    <>
      <PageHeading>{product.name}</PageHeading>
      <div className="w-full ...">
        <div className="w-1/2">
          {/*...*/}
        </div>
        <div className="w-1/2 p-4">
          {/*...*/}
          <div className="text-lg my-4">
            <label {/*...*/}>Price:</label>
            ...
          </div>

          {/* START NEW CODE */}
          <AddToCart product={product} />
          {/* END NEW CODE */}
        </div>
      </div>
    </>
  ) 
}