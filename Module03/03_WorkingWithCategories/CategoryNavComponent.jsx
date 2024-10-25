const token = // GraphQL token
const storeHash = // BigCommerce store hash
const channelId = // BigCommerce channel ID

const CategoryNavComponent = async () => {
  const categoriesResult = await fetch(
    `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
    {
      ...
      body: JSON.stringify({
        query: `
        query getCategoryTree {
          site {
            categoryTree {
              entityId
              name
              path
              hasChildren
              children {
                entityId
                name
                path
              }
            }
          }
        }
        `,
      }),
    }
  );

  const categories = await categoriesResult.json().then(json => json.data.site.categoryTree);

  return (
    <ul className="nav">
      {categories.map(category => (
        <CategoryItem key={category.entityId} category={category} />
      ))}
    </ul>
  )
}

const CategoryItem = ({ category }) => {
  return (
    <li>
      <a href={`/category${category.path}`}>{category.name}</a>
      {category.hasChildren && (
        <ul className="subNav">
          {category.children.map(subCat => (
            <CategoryItem key={subCat.entityId} category={subCat} />
          ))}
        </ul>
      )}
    </li>
  )
}