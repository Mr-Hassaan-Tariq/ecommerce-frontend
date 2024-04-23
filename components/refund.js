
import Link from "next/link"
const RefundsPolicy=()=>{
    return(
    <>
    <section className="mainCatSection innercatbg">
          <div className="main-overlay" />
          <div className="container">
            <div className="row">
              <div className="">
                <h2 style={{textAlign:"center",backgroundColor:"yellow"}}>Returns Policy<small>Sehgalmotors</small></h2>
              </div>
            </div>
          </div>
        </section>
        <div className="container returnPage"style={{justifyContent:"center"}}>
        
        <div className>
          <div className="">
            <div className="row">
              <div className="">
                <h3 style={{textAlign:"center",fontSize:"23px"}}>Returns Policy</h3>
                <ol className="custom-counter">
                  <li>If your product is defective / damaged or the order is Incorrect/Incomplete at the time of delivery, please contact us within the applicable time period of return. Your product may be eligible for refund or replacement depending on the product category and condition. Please see the detailed terms in the relevant category below</li>
                  <li>Please note that not all products are eligible for a return, if the product is "No longer needed"</li>
                  <li>For device related issues after usage or the expiration of the return window, we will refer you to the brand warranty center (if applicable). For more information on warranty claims please view our</li>
                </ol>
                <p>You will always find the relevant terms on the product page (Return Policy tab).</p>
              </div>
            </div>
            <div className="row">
              <div className="">
                <h3 style={{textAlign:"center",fontSize:"23px"}}>Valid reasons to return an item</h3>
                <ol className="custom-counter">
                  <li>Delivered Product is damaged (physically destroyed or broken) / defective (dead on arrival)</li>
                  <li>Delivered Product is Incorrect (different than the one presented on our website) / Incomplete (missing parts)</li>
                  <li>
                    Delivered Product is “No longer needed”* (implies that you no longer have a use for the product / you have changed your mind about the purchase / the size of a fashion product does not fit / you do not like the product after opening the package) *Eligible for selected products only
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="">
            <div className="boxed">
              <h3 style={{textAlign:"center",fontSize:"23px"}}>Conditions for Returns</h3>
              <ol className="olclass">
                <li>The product must be unused, unworn, unwashed and without any flaws. Fashion products can be tried on to see  if they fit and will still be considered unworn</li>
                <li>The product must include the original tags, user manual, warranty cards, freebies and accessories</li>
                <li>The product must be returned in the original and undamaged manufacturer packaging / box. If the product was delivered in a second layer of SehgalMotors.Pkpackaging, it must be returned in the same condition with return shipping label attached. Do not put tape or stickers on the manufacturers box</li>
              </ol>
            </div>
            <div className="notice">
              <p>If a product is returned to us in an inadequate condition, we reserve the right to send it back to you.</p>
            </div>
          </div>
        </div>
      </div>

    
    </>
    )
}

export default RefundsPolicy