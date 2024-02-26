const ProductGallery = ({ product }) => {
  return (
    <div>
      {product.defaultImage?.url && (
          <div className="mainImage">
            <a href={product.defaultImage.urlOriginal}>
              <img src={product.defaultImage.url} alt={product.defaultImage.altText} />
            </a>
          </div>
        )
      }

      {product.images?.edges && (
        <ul>
          {product.images.edges.map(image => (
            <li>
              <a href={image.node.urlOriginal}>
                <img src={image.node.url} alt={image.node.altText} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}