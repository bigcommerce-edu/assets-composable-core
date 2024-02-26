Follow along in your project codebase.

## 3.1

`pages/index.tsx`:

```javascript
...

export const getServerSideProps = (async (context) => {
  return {
    props: {
      ... await getGlobalServerSideProps(context),
    }
  };
}) satisfies GetServerSideProps;

...
```

## 3.3

`pages/_app.tsx`:

```javascript
...

export default function App({ Component, pageProps }: AppProps) {
  const { settings } = pageProps;
  return (
    <GlobalDataContext.Provider value={{settings}}>
      <main
        ...
      >
        <Header />
        <Component {...pageProps} />
      </main>
    </GlobalDataContext.Provider>
  )
}
```

