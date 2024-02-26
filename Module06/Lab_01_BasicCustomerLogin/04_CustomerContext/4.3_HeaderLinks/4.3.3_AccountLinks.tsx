//...

  const logOut = async () => {
    // START NEW CODE
    setLoading(true);
    await fetch("/api/logout", { method: "POST" });
    setLoading(false);
    router.reload();
    // END NEW CODE
  }

//...