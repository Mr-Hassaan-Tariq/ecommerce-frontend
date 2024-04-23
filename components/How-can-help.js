
import axios from "axios";
import { useEffect, useState } from "react";
import AllCollapseExample from "..//components/acordtion";
const Help=()=>{
  
  const[slider,getSlider]=useState([]);
  const [isActive, setIsActive] = useState(false);
  const HelpApi="http://localhost:8000/Help";

  const getHelpApi= async (url)=>{
    const res= await axios.get(url);
    const ApiData= await res.data;
    getSlider(ApiData);
  };
  useEffect(()=>{
    getHelpApi(HelpApi);
  },[])
  return(
    <div id="__nuxt">
      <div id="__layout">
        <div>
          <div className="header header-help header-background header-color">
            <div className="top-header">
              <div className="responsive-top-logo-and-login">
                <div className="faq-logo">
                  <a href="/" className="router-link-active" style={{color:"white"}}>
                    <img src="images/sehgal-logo.png" alt="" style={{width:"80px",height:"16px",position:"relative",top:"4px"}}/>
                    </a>
                </div>
                <div className="login-area">
                  <div>
                    <a href="/" className="header-color router-link-active">
                      <svg _ngcontent-c8="" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" style={{position:"relative" , top:"2px"}}>
                        <path _ngcontent-c8="" d="M8.042 14.514A6.519 6.519 0 0 1 1.519 8a6.519 6.519 0 0 1 6.523-6.514 6.521 6.521 0 0 1 6.47 5.681h-6.91l2.01-2.007a.832.832 0 1 0-1.178-1.178L5 7.412a.83.83 0 0 0 0 1.177l3.433 3.429a.834.834 0 0 0 1.178-1.178l-2.01-2.007h6.91a6.521 6.521 0 0 1-6.47 5.681z" fill-rule="nonzero" fill="#fff"></path>
                      </svg>
                      <div className="back-to-shop-text">BACK TO SHOPPING</div>
                      <div className="home-text">Home</div>
                    </a>
                  </div>
                  <div><a href="/account/login" className="header-color"><span>SIGN IN</span></a></div>
                </div>
              </div>
              <div className="help-heading"> Hi. How can we help? </div>
            </div>
          </div>
          <div className="container cont-wrap-help" style={{minHeight:"600px"}}>
            <div>
              <div>
                <h3 style={{fontFamily: 'Source Sans Pro  Helvetica Neue Arial sans-serif' , textTransform: "initial", paddingBottom: "30px" , paddingTop: "35px", marginBottom: "0px", boxSizing:"border-box"}}>Help topics</h3></div>
              <div>
                <div className="cards" style={{display:"flex",justifyContent:"center", backgroundColor:"white"}}>
                                   
                  <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>

                
                  {
                        slider && slider.map((res,i)=>{
                          return(
                          <>
                          {console.log("slider",res.img)}
                          <div style={{margin:"30px 50px"}}>

                          <a href="#" className="card" style={{border:"none"}}>
                            <div className="d-direction">
                                <img src={res.img} className="image-align-center"  style={{width:"80px",height:"80px", justifyItems:"center"}} >
                              </img>
                            </div>
                            <div className="self-align">{res.Name} 
                        </div>
                          </a>
                          </div>

                          </>
                          )
                        })
                       }     
                    </div>
                          


                </div>
              </div>
            </div>
       <AllCollapseExample/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Help;