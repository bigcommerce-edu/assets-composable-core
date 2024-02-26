//...

const ProductFaqs = ({
  //...
}: {
  //...
}) => {
  const [faqs, setFaqs] = useState(faqData.faqs);
  const [endCursor, setEndCursor] = useState(faqData.endCursor);

  // START NEW CODE
  const [pending, setPending] = useState(false);
  // END NEW CODE

  const getNextFaqs = async () => {
    // START NEW CODE
    setPending(true);
    // END NEW CODE

    try {
      //...
    } catch (err) {
      //...
    }

    // START NEW CODE
    setPending(false);
    // END NEW CODE
  };

  //...