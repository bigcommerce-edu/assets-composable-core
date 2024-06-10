const ProductGallery = ({ product }) => {
  const getImageUrl = (urlTemplate, width, height = null) => {
    let url;

    if (height) {
      url = urlTemplate.replace('{:size}', `${width}x${height}`);
    }
    url = urlTemplate.replace('{:size}', `${width}w`);

    return url;
  };

  return (
    <div>
      {product.defaultImage?.url && (
          <div className="mainImage">
            <a href={product.defaultImage.urlOriginal}>
              <img src={getImageUrl(product.defaultImage.urlTemplate, 800)} 
                alt={product.defaultImage.altText} />
            </a>
          </div>
        )
      }

      {product.images?.edges && (
        <ul>
          {product.images.edges.map(image => (
            <li>
              <a href={image.node.urlOriginal}>
                <img src={getImageUrl(image.node.urlTemplate, 500)} 
                  alt={image.node.altText} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}