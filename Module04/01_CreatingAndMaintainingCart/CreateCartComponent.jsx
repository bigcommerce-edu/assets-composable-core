const CreateCartComponent = ({ product }) => {
  const onClick = async () => {
    await fetch(
      '/api/create-cart',
      {
        method: 'POST',
        body: JSON.stringify({
          productId: product.entityId,
        })
      }
    );
  }

  return (
    <button onClick={onClick}>
      Add {product.name} to Cart
    </button>
  )
}