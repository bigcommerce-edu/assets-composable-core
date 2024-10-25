const ProductForm = ({ product }) => {
  const getOptionByType = (node) => {
    switch (node.__typename) {
      case 'MultipleChoiceOption':
        return (
          <select id={`option-${node.entityId}`}>
            {node.values.edges.map(val => (
              <option value={val.node.entityId}>{val.node.label}</option>
            ))}
          </select>
        )
      default:
        return '';
    }
  }

  return (
    <form>
      {product.productOptions.edges.map(option => (
        <div>
          <label for={`option-${option.node.entityId}`}>{option.node.displayName}</label>
          {getOptionByType(option.node)}
        </div>
      ))}
    </form>
  )
}