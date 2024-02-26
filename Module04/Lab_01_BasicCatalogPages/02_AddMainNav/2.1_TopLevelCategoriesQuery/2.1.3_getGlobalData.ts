//...

  const settings = settingsResp.data.site.settings;
  // START NEW CODE
  const navCategories = settingsResp.data.site.categoryTree;
  // END NEW CODE

  return {
    settings: {
      //...
    },
    // START NEW CODE
    navCategories,
    // END NEW CODE
  };

//...