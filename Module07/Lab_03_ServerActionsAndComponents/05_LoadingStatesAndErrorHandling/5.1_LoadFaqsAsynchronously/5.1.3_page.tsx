export default async function Product(/*...*/) {
  //...

  return (
    <>
      <BreadCrumbs productId={product.entityId} />
      <div {/*...*/}>
        {/*...*/}
         <Description product={product} />
          <Warranty product={product} />
        
          <h2 className="text-h5 my-4">Frequently Asked Questions</h2>
          <div className="mx-auto md:w-2/3">
            {/* START MODIFIED CODE */}
           <Suspense fallback={<FaqsLoading />}>
             <Faqs productId={product.entityId} />
           </Suspense>
            {/* END MODIFIED CODE */}
          </div>

        <Suspense fallback="Loading...">
          <Reviews productId={product.entityId} />
        </Suspense>
        {/*...*/}
      </div>
    </>
  );
};