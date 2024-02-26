//...
// START NEW CODE
import { CustomerSessionProvider } from "@/context/customerSession";
// END NEW CODE

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  //...
  return (
    <GlobalDataContext.Provider {/*...*/}>
      {/* START NEW CODE */}
      <CustomerSessionProvider>
      {/* END NEW CODE */}
        <main
          {/*...*/}
        >
          {/*...*/}
        </main>
      {/* START NEW CODE */}
      </CustomerSessionProvider>
      {/* END NEW CODE */}
    </GlobalDataContext.Provider>
  )
}