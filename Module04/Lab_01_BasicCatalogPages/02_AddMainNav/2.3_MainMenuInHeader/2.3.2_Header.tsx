//...

const Header = () => {
  // START MODIFIED CODE
  const { settings, navCategories } = useGlobalData();

  const emptySettings = { logoImageUrl: null, logoText: null, storeName: null };

  const { logoImageUrl, logoText, storeName } = settings ?? emptySettings;
  // END MODIFIED CODE

  return (
    //...