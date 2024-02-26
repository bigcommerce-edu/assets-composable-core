const AddToCart = ({ product }: {product: Product}) => {
  const [loading, setLoading] = useState(false);

  // START NEW CODE
  const { setCart } = useCustomerSession();
  // END NEW CODE

  const onClick = async () => {
    //...

    const res:{cart: Cart | null} = await fetch("/api/addToCart", {
      //...
    }).then(res => res.json());

    // START NEW CODE
    if (res.cart) {
      setCart(res.cart);
    }
    // END NEW CODE

    //...
  }

  //...