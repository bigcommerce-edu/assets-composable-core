//...

export default function App({ Component, pageProps }: AppProps) {
  // START MODIFIED CODE
  const { settings, navCategories } = pageProps;
  return (
    <GlobalDataContext.Provider value={{settings, navCategories}}>
  {/* END MODIFIED CODE */}
      {/*...*/}