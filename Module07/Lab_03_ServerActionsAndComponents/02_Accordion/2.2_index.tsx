//...

const ProductFaqs = (
  //...
) => {
  //...

  // START MODIFIED CODE
  return (
    <>
      <Accordion type="multiple">
        {faqs.map((faq) => (
          <AccordionItem className="my-2 border border-gray-200 p-2"
            key={faq.key} value={faq.key}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
  // END MODIFIED CODE
}

//...