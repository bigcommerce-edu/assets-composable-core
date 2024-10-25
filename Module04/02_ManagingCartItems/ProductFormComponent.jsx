const ProductFormComponent = ({ product }) => {
  const getOptionByType = (node) => {
    switch (node.__typename) {
      case 'MultipleChoiceOption':
        return (
          <select id={`option-${node.entityId}`} name={`option-${node.entityId}`}>
            {node.values.edges.map(val => (
              <option value={val.node.entityId} key={val.node.entityId}>{val.node.label}</option>
            ))}
          </select>
        )
      default:
        return '';
    }
  }

  const onSubmit = async (formData) => {
    const requestData = // Get the product ID, and compile our "multiple choice options" from the form data

    await fetch(
      '/api/add-to-cart',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      }
    )
  }

  return (
    <form action={onSubmit}>
      {product.productOptions.edges.map(option => (
        <div key={option.node.entityId}>
          <label htmlFor={`option-${option.node.entityId}`}>{option.node.displayName}</label>
          {getOptionByType(option.node)}
        </div>
      ))}
      <div>
        <button type="submit">Add to Cart</button>
      </div>
    </form>
  )
}