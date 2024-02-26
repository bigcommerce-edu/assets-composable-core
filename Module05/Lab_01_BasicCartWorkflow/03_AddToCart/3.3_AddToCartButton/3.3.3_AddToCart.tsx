//...

  const onClick = async () => {
    setLoading(true);

    const res:{cart: Cart | null} = await fetch("/api/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        productId: product.entityId,
      })
    }).then(res => res.json());

    setLoading(false);
  }

//...