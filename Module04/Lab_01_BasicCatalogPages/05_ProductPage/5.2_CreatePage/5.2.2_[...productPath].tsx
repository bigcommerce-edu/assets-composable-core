export const getServerSideProps = (async (context) => {
  const globalProps = await getGlobalServerSideProps(context);

  return {
    props: {
      ... globalProps,
    }
  };
}) satisfies GetServerSideProps;