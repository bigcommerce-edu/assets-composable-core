const RegistrationComponent = () => {
  const onSubmit = async (formData) => {
    const result = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.get('email'),
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
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
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="first_name" id="first_name" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="last_name" id="last_name" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  )
}