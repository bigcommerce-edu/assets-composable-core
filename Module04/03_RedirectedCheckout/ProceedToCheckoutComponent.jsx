const ProceedToCheckoutComponent = () => {
  const onClick = async () => {
    const { redirectUrl } = await fetch('/api/get-checkout-redirect')
      .then(res => res.json());
    
    window.location = redirectUrl;
  }

  return (
    <button onClick={onClick}>Proceed to Checkout</button>
  )
}