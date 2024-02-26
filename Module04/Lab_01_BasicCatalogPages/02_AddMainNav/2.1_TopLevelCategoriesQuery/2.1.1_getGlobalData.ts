//...

// START MODIFIED CODE
const getGlobalDataQuery = `
query GetSettings($logoSize: Int!) {
  site {
      settings {
          ... (LEAVE UNMODIFIED!)
      }

      categoryTree {
        entityId
        name
        path
      }
  }
}
`;
// END MODIFIED CODE

type GetGlobalDataVars = {
  //...
}

type GetGlobalDataResp = {
  data: {
    site: {
      settings: {
        //...
      },
      // START NEW CODE
      categoryTree: NavCategory[]
      // END NEW CODE
    }
  }
}

export type StoreSettings = {
  //...
}

// START NEW CODE
export type NavCategory = {
  entityId: number,
  name: string,
  path: string,
}
// END NEW CODE

//...