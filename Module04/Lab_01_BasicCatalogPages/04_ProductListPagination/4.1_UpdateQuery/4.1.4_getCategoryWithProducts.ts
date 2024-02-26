//...

type GetCategoryWithProductsVars = {
  //...
  // START NEW CODE
  limit: number,
  before?: string,
  after?: string,
  // END NEW CODE
}

type GetCategoryWithProductsResp = {
  data: {
    site: {
      route: {
        node: BasicCategory & {
         //...
          products: {
            // START NEW CODE
            pageInfo: {
              hasNextPage: boolean,
              hasPreviousPage: boolean,
              startCursor: string | null,
              endCursor: string | null,
            },
            // END NEW CODE
            edges: {
              //...
            }[],
          },
        },
      },
    },
  },
}

//...