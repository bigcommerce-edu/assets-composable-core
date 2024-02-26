//...

const ProductFaqs = ({
  //...
}: {
  //...
}) => {
  //...

  return (
    <>
      {/*...*/}
      {endCursor !== null && (
        <Button
          {/*...*/}
        >
          {/* START MODIFIED CODE */}
          {pending ? (
            <Spinner aria-hidden="true" className="mx-auto animate-spin" />
          ) : (
            <span>Load more</span>
          )}
          {/* END MODIFIED CODE */}
        </Button>
      )}
    </>
  );
};

//...