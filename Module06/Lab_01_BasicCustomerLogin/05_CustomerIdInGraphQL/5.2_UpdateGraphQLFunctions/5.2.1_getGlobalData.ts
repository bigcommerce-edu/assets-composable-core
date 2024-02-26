//...

export const getGlobalData: 
  // START MODIFIED CODE
  (customerId?: number) => Promise<{settings: StoreSettings, navCategories: NavCategory[]}> 
= async (customerId) => {
  // END MODIFIED CODE
  const settingsResp = await bcGqlFetch<GetGlobalDataResp, GetGlobalDataVars>(
    getGlobalDataQuery,
    {
      logoSize: 500,
    // START MODIFIED CODE
    },
    customerId
    // END MODIFIED CODE
  );

  //...
}

//...