type GlobalDataContextFields = {
  settings: StoreSettings | undefined,
  navCategories: NavCategory[] | undefined,
}

export const GlobalDataContext = createContext<Partial<GlobalDataContextFields>>({});

export const useGlobalData = () => useContext(GlobalDataContext);