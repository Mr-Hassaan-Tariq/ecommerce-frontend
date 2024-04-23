import Accordion from "react-bootstrap/Accordion";

function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        Are all products on SehgalMotors.PK original and genuine?
        </Accordion.Header>
        <Accordion.Body>
        Yes, we are committed for offering our customers only 100% genuine and original products. 
        We also take all necessary actions to ensure this.
         Any Any non-genuine products is immediately delisted from SehgalMotors.PK.
         Please send us an email on complains@sehgalmotors.pk 
         if you think a product listed on our website does not fulfill these standards.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
        How do I place an order?
        </Accordion.Header>
        <Accordion.Body>
        Shopping on SehgalMotors.PK is easy!

Once you have found the product you want to buy, just follow the steps below:

Click on ‘buy now’, to add this product to your cart
Click on ‘Check out’ to confirm the order
You will then need to fill in your contact details and preferred shipping address
Choose your preferred payment option before clicking the ’Confirm order’ button
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How can I cancel my order?</Accordion.Header>
        <Accordion.Body>
          You have to go through the company's customer service and ask them to
          cancel the order. Most companies should be able to do it at this stage
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          What is the procedure for Returns or Exchange?
        </Accordion.Header>
        <Accordion.Body>
          You can Sign in to your Sehgal Account From Here. <br/> 
          Go to my order<br/>
          section. <br/>
          Click on the View order for the specific order you want to 
          place replacement/refund Request Select refund/replace option from the
          top and then click one or all items that you want return or replaced. <br/>
          
          Select the quantities and reason for replacement/refund Click on the
          SAVE button to submit the request
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How can I get a refund or replacement for my product?</Accordion.Header>
        <Accordion.Body>
        Call us at 03354234239 / 03334868148 to create your return request, 
        select the product you wish to return on the return form that arrived with your order.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
