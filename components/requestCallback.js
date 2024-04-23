

const ReqCallBack=()=>{
  return(
    <main className="login">
          <a href="/" className="img router-link-active"><img src="images/sehgal-logo.png" alt=""/></a>
          <div className="form" >
            <h2 className="apply_for_vendor_heading" >Request a Call back</h2>
            <div className="sign_up_form" >
              <form autocomplete="off" >
                <div >
                  <label >Phone:</label>
                  {/* <input type="tel" name="request_phone" readonly="readonly" disabled="disabled" placeholder="Phone No" value="" /> */}
                  <input type="tel" id="phone" name="request_phone" placeholder="Phone No"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>

                  
                </div>
                <div >
                  <label >Category:</label>
                  <select name="request_category" className="form-control" >
                    <option value="" >Select a option</option>
                    <option value="general" >General</option>
                    <option value="order_id" >Order Query</option>
                  </select>
                 
                </div>
               
                <div >
                  <label for="issue" >Select Issue:</label>
                  <select id="issue" >
                    <option value="" >Select an Issue:</option>
                    <option value="Order not delivered" >Order not delivered </option>
                    <option value="Wrong size received" >Wrong size received </option>
                    <option value="Wrong color received" >Wrong color received </option>
                    <option value="Not happy with quality" >Not happy with quality </option>
                    <option value="Item damaged" >Item damaged </option>
                    <option value="Item missing in the parcel" >Item missing in the parcel </option>
                    <option value="Other" >Other </option>
                  </select>
                  
                </div>
                <div >
                  <label >Message</label>
                  <textarea type="text" name="request_description" cols="45" rows="6" ></textarea>
                  
                </div>
                <div >
                  <button type="submit" className="login-button btn-effect" ><span >Request Call Back!</span></button>
                </div>
              </form>
            </div>
          </div>
        </main>
  )
}
export default ReqCallBack