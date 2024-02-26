export const CustomerSessionProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart | null>(null);

  // START NEW CODE
  useEffect(() => {
    fetch('/api/getCustomerSession', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(res => res.json())
      .then(res => {
        if (res.cart) {
          setCart(res.cart);
        }
      })
  }, []);
  // END NEW CODE

  return //...
}