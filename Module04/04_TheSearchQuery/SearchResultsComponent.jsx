const token = // GraphQL token
const storeHash = // BigCommerce store hash
const channelId = // BigCommerce channel ID
const searchTerm = // A search term
const currentFilters = // An array of applied filters, formatted something like:
/*
[{attribute: "Color", values: ["Black", "Blue"]}];
*/

const SearchResultsComponent = async () => {
  const searchResult = await fetch(
    `https://store-${storeHash}-${channelId}.mybigcommerce.com/graphql`,
    {
      ...
      body: JSON.stringify({
        query: `
        query Search(
          $searchTerm: String,
          $attrFilters: [ProductAttributeSearchFilterInput!]
        ) {
          site {
            search {
              searchProducts(
                filters: {
                  searchTerm: $searchTerm,
                  productAttributes: $attrFilters
                }
              ) {
                filters {
                  edges {
                    node {
                      __typename
                      ... on ProductAttributeSearchFilter {
                        filterName
                        attributes {
                            edges {
                                node {
                                    value
                                    isSelected
                                }
                            }
                        }
                      }
                    }
                  }
                }
                products {
                  edges {
                    node {
                      ...
                    }
                  }
                }
              }
            }
          }
        }
        `,
        variables: {
          searchTerm,
          attrFilters: currentFilters,
        }
      }),
    }
  );

  const { filters, products } = await searchResult.json().then(json => json.data.site.search.searchProducts);

  return (
    <>
      <div className="filters">
        {filters.edges.map(filter => (
          <>
          {filter.node.__typename === "ProductAttributeSearchFilter" && (
            <div key={filter.node.filterName}>
            <h3>{filter.node.filterName}</h3>
            <ul>
              {filter.node.attributes.edges.map(attr => (
                <li key={attr.node.value}>
                  <input type="checkbox" 
                    value={attr.node.value} 
                    checked={attr.node.isSelected} />
                  <label>{attr.node.value}</label>
                </li>
              ))}
            </ul>
            </div>
          )}
          </>
        ))}
      </div>
      <ul>
        // Display the products
      </ul>
    </>
  )
}