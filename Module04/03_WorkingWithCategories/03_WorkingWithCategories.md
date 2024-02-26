# The Category Page

### Basic Query

```graphql
query getCategory($categoryId: Int!){
  site{
    category(entityId:$categoryId){
      id
      entityId
      name
      seo{
        pageTitle
        metaDescription
        metaKeywords
      }
    }
  }
}
```

## Query for Products in a Category

### Basic Query

```graphql
query GetCategoryProducts($categoryIds: Int!){
  site{
    category(entityId:$categoryIds){
      entityId
      name
      description
      products{
        collectionInfo{
          totalItems
        }
        edges{
          node{
            entityId
            sku
            name
            description
          }
        }
      }
    }
  }
}
```

### Sorted Query

```graphql
query GetCategoryProducts($categoryIds: Int!) {
  site {
    category(entityId: $categoryIds) {
      entityId
      name
      description
      products(sortBy: HIGHEST_PRICE) {
        collectionInfo {
          totalItems
        }
        edges {
          node {
            entityId
            sku
            name
            description
          }
        }
      }
    }
  }
}
```

# The Category Tree

### Basic Category Tree Query

```graphql
query GetCategoryTree {
  site {
    categoryTree {
      entityId
      name
      hasChildren
      path
      children {
        entityId
        name
        hasChildren
        path
      }
    }
  }
}
```

### Multi-level Query

```graphql
query GetCategoryTree {
  site {
    categoryTree {
      entityId
      name
      hasChildren
      path
      children {
        entityId
        name
        hasChildren
        path
        children {
          entityId
          name
          hasChildren
          path
        }
      }
    }
  }
}
```

## Giving a Category Tree Query a Starting Point

### Root ID Query

```graphql
query RootCategory($rootCategory: Int!) {
  site {
    categoryTree(rootEntityId: $rootCategory) {
      entityId
      name
      productCount
      hasChildren
      path
      children {
        entityId
        name
        productCount
        hasChildren
        path
      }
    }
  }
}
```

## A Practical categoryTree Example

### Category Nav Component

[View](./CategoryNavComponent.jsx)