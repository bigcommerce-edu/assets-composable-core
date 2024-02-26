export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const router = useRouter();

  const submitLogin = async () => {
    
  }

  return (
    <>
      <PageHeading>Log In</PageHeading>
      <div className="w-1/3">
        <form onSubmit={(e) => {e.preventDefault(); submitLogin()}}
          className="">
          {errorMsg && (
            <div className="bg-rose-400 p-2 font-bold text-sm text-center">
              {errorMsg}
            </div>
          )}

          <div className="my-8 p-4">
            <label className="font-bold text-lg block">Email</label>
            <input className="w-full border border-neutral-300 p-2
              hover:border-neutral-700"
              type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="my-8 p-4">
            <label className="font-bold text-lg block">Password</label>
            <input className="w-full border border-neutral-300 p-2
              hover:border-neutral-700"
              type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="my-8 p-4 text-center">
          <button disabled={loading} className="p-2 rounded-md text-lg w-44
            bg-neutral-700 text-white hover:bg-neutral-500 disabled:bg-neutral-500">
            {loading ? (
              <span>...</span>
            ) : (
              <span>
                Log In
              </span>
            )}
          </button>
          </div>
        </form>
      </div>
    </>
  )
}