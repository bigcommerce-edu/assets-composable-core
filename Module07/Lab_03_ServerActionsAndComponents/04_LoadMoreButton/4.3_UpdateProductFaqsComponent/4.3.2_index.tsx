//...

const ProductFaqs = ({
  //...
}: {
  //...
}) => {
  const [faqs, setFaqs] = useState(faqData.faqs);

  // START NEW CODE
  const [endCursor, setEndCursor] = useState(faqData.endCursor);

  const getNextFaqs = async () => {
    try {
      const nextFaqData = await getNextProductFaqs(productId, limit, endCursor);

      setEndCursor(nextFaqData.endCursor);
      setFaqs(faqs.concat(nextFaqData.faqs));
    } catch (err) {
      // Handle error
    }
  };
  // END NEW CODE

  //...
};

//...