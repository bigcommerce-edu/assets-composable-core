const AccountLinks = () => {
  const [loading, setLoading] = useState(false);

  const { loggedIn } = useCustomerSession();
  const router = useRouter();

  const logOut = async () => {

  }

  return (
    <>
    {loggedIn ? (
      <button disabled={loading} className="mx-4 font-bold hover:underline"
        onClick={logOut}>
        {loading ? (
          <span>...</span>
        ) : (
          <span>Log out</span>
        )}
      </button>
    ) : (
      <Link href="/login" className="mx-4">Log in</Link>
    )}
    </>
  )
}

export default AccountLinks;