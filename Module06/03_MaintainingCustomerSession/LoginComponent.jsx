const LoginComponent = () => {
  const onSubmit = async (formData) => {
    const result = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });

    // ... Process result
  }

  return (
    <form action={onSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}