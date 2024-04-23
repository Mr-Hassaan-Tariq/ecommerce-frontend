import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {useOpenModalContext} from "../context/OpenModalContext"
const CarFilterModal=({getMakers})=>{
    const [openModal,{handleOpenModalChange}] = useOpenModalContext()
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    console.log(getMakers ,"makers");
    const getModel = async(id) =>{
        console.log(id,"id");
        let res1 = await axios.get(`${process.env.NEXT_PUBLIC_API}/getMakerById/866`)
        console.log(res1.data,"res1datat");
    }
    React.useEffect(()=>{
        getModel()
    },[])
    return(
        <Modal
        show={openModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="modal-dialog" style={{width: '902px'}}>
          <div className="modal-content">
            <div className="modal-body clearfix">
              <div className="col col-3 cat-selection makes pull-left active">
                <div className="header-car-info arrow-right">Make</div>
                <div className="form-group nomargin">
                  <h5 className="listing-title">Popular</h5>
   
                  <ul className="fs14 get-listing make-listings">
                  {
        getMakers && getMakers.map((item)=>{
                return(
                    <li className="make"  id={item.id}>{item.name} <i className="fa fa-angle-right" /></li>
                )
        })
    }
                  </ul>
                  <h5 className="listing-title">Others</h5>
                  <ul className="fs14 get-listing make-listings">
                  </ul>
                </div>
              </div>
              <div className="col col-3 cat-selection models pull-left">
                <div className="header-car-info arrow-right">Model</div>
                <div className="form-group nomargin">
                  <ul className="model-listings fs14 get-listing models_for_42" id="CarModelArea" style={{display: 'none'}} />
                </div>
              </div>
              <div className="col col-3 cat-selection versions pull-left">
                <div className="header-car-info arrow-right">Version</div>
                <div className="form-group nomargin version-listings-outer">
                  <ul className="fs14 get-listing version-listings" id="CarVersionArea" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a href="javascript:void(0)" id="SubmitBtn" className="btn btn-primary" disabled="disabled">Done</a>
              <button className="btn btn-danger" data-dismiss="modal" onClick={()=> handleOpenModalChange(false)}>Close</button>
            </div>
          </div>
        </div>
      </Modal>
    )
}

export default CarFilterModal;
