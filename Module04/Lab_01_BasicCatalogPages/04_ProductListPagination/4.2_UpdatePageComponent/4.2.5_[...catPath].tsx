export default function CategoryPage(
  // START NEW/MODIFIED CODE
  {category, mainImgSize, thumbnailSize}: {category: PagedCategory, mainImgSize: number, thumbnailSize: number}
) {
  const { before, after } = category.page;
  // END NEW/MODIFIED CODE

  return (
    <>
      <PageHeading>{category.name}</PageHeading>

      <div className="w-full ...">
        {/*...*/}
      </div>

      <ul className="w-full ...">
        {/*...*/}
      </ul>

      {/* START NEW CODE */}
      <div className="w-1/4 flex justify-around">
          {before && (
            <Link href={`/category${category.path}?before=${before}`}><ArrowLongLeft /></Link>
          )}
          {after && (
            <Link href={`/category${category.path}?after=${after}`}><ArrowLongRight /></Link>
          )}
      </div>
      {/* END NEW CODE */}
    </>
  )
}