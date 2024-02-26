//...

const ProductFaqs = ({
  //...
}: {
  //...
}) => {
  //...

  return (
    <>
      <Accordion type="multiple">
        {/*...*/}
      </Accordion>

      {/* START NEW CODE */}
      {endCursor !== null && (
        <Button
          className="mx-auto block text-center md:w-2/3 lg:w-1/3"
          onClick={getNextFaqs}
          variant="secondary"
        >
          <span>Load more</span>
        </Button>
      )}
      {/* END NEW CODE */}
    </>
  );
};

//...