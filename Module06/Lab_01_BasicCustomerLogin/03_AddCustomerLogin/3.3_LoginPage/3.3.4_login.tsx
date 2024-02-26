export default function LoginPage() {
  //...

  const submitLogin = async () => {
    setLoading(true);
    setErrorMsg(null);

    const loginResp = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    }).then(res => res.json());

    setLoading(false);
    
    if (loginResp.loggedIn) {
      router.push("/");
    } else {
      setErrorMsg(loginResp.error ?? "An unexpected error occurred");
    }
  }

  //...
}