//...
// START NEW CODE
import { useCustomerSession } from '@/context/customerSession';
// END NEW CODE

//...

export default function LoginPage() {
  //...

  // START NEW CODE
  const { setLoggedIn } = useCustomerSession();
  // END NEW CODE
  const router = useRouter();

  const submitLogin = async () => {
    //...
    
    if (loginResp.loggedIn) {
      // START NEW CODE
      setLoggedIn(true);
      // END NEW CODE
      router.push("/");
    } else {
     //...
    }
  }

  return (
    //...
  )
}