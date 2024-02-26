type CustomerSessionData = {
  cart: Cart | null,
  setCart: (cart: Cart) => void,
}

export const CustomerSessionContext = createContext<CustomerSessionData>({
  cart: null,
  setCart: (cart) => {},
});

export const CustomerSessionProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart | null>(null);

  return (
    <CustomerSessionContext.Provider value={{ cart, setCart }}>
      {children}
    </CustomerSessionContext.Provider>
  )
}

export const useCustomerSession = () => useContext(CustomerSessionContext);