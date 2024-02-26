//...

type CustomerSessionData = {
  cart: Cart | null,
  setCart: (cart: Cart) => void,
  // START NEW CODE
  loggedIn: boolean,
  setLoggedIn: (loggedIn: boolean) => void,
  // END NEW CODE
}

export const CustomerSessionContext = createContext<CustomerSessionData>({
  cart: null,
  setCart: (cart) => {},
  // START NEW CODE
  loggedIn: false,
  setLoggedIn: (loggedIn) => {},
  // END NEW CODE
});

export const CustomerSessionProvider = (...) => {
  const [cart, setCart] = useState<Cart | null>(null);
  // START NEW CODE
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  // END NEW CODE

    useEffect(() => {
    fetch('/api/getCustomerSession', {
      //...
    }).then(res => res.json())
      .then(res => {
        //...
        // START NEW CODE
        setLoggedIn(Boolean(res.loggedIn));
        // END NEW CODE
      })
  }, []);

  return (
    {/* START MODIFIED CODE */}
    <CustomerSessionContext.Provider value={{ cart, setCart, loggedIn, setLoggedIn }}>
    {/* END MODIFIED CODE */}
      {children}
    </CustomerSessionContext.Provider>
  )
}

//...