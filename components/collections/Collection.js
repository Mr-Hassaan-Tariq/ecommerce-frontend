import axios from "axios";
import { useEffect, useState } from "react";

const Collection = () =>{
  const [collData , setcollData]=useState([]);
  const collApi="http://localhost:8000/collection";

  const getCollData = async (url)=>{
    const res= await axios.get(url);
    const collecData= await res.data;
    setcollData(collecData);
  };
  useEffect(() => {
    getCollData(collApi);
  }, []);
    return(
        <>
        <main className="layout-with-footer">
            
            <section className="filter filter-desk only-desktop">
              <div className="container">
                <div  className="item">
                  <div  className="select">
                    <span  style={{pointerEvents: "none"}}>Sort</span>
                  </div>
                  <div  className="sort-list">
                    <div >
                      <div  className="arrow"></div>
                      <ul  className="dropdown" style={{overflow: "auto"}}>
                        <li  className="">
                          <span  className="seleted-img">
                            <img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/>
                            </span>
                            <span  className="drop-list">
                              Whats New
                              </span>
                        </li>
                        <li  className="">
                          <span  className="seleted-img">
                            <img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/>
                            </span>
                            <span  className="drop-list">
                              Price low to high
                            </span>
                        </li>
                        <li  className="">
                          <span  className="seleted-img">
                            <img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/></span><span  className="drop-list">Price high to low</span>
                        </li>
                        <li  className="">
                          <span  className="seleted-img">
                            <img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/></span><span  className="drop-list">Discount low to high</span>
                        </li>
                        <li  className="">
                          <span  className="seleted-img">
                            <img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/></span><span  className="drop-list">Discount high to low</span>
                        </li>
                        <li  className="">
                          <span  className="seleted-img">
                            <img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/></span><span  className="drop-list">Sort by sale</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div  className="item" items="0,57665">
                  <div  className="select">
                    <span  style={{pointerEvents: "none"}}>Price Range</span>
                  </div>
                  <ul  className="dropdown price-slide-container">
                    <li >
                      <div  className="vue-slider vue-slider-ltr" formatter="Rs{value}" prefix="Rs" style={{padding:" 7px 0px", width: "100%", height:" 4px"}}>
                        <div className="vue-slider-rail">
                          <div className="vue-slider-process" style={{height: "100%", top: "0px" ,left: "0%" ,width: "100%", transitionProperty: "width, left" ,transitionDuration: "0.5s"}}></div>
                          <div aria-valuetext="1" className="vue-slider-dot" role="slider" aria-valuenow="1" aria-valuemin="1" aria-valuemax="20000" aria-orientation="horizontal" tabindex="0" style={{width: "14px" ,height: "14px", transform: "translate(-50%, -50%)" ,top: "50%" ,left: "0%", transition: "left 0.5s ease 0s"}}>
                            <div className="vue-slider-dot-handle"></div>
                            <div className="vue-slider-dot-tooltip vue-slider-dot-tooltip-top vue-slider-dot-tooltip-show">
                              <div className="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top">
                                <span className="vue-slider-dot-tooltip-text">1</span>
                              </div>
                            </div>
                          </div>
                          <div aria-valuetext="20000" className="vue-slider-dot" role="slider" aria-valuenow="20000" aria-valuemin="1" aria-valuemax="20000" aria-orientation="horizontal" tabindex="0" style={{width: "14px", height: "14px", transform: "translate(-50%, -50%)" ,top: "50%", left: "100%", transition:" left 0.5s ease 0s"}}>
                            <div className="vue-slider-dot-handle"></div>
                            <div className="vue-slider-dot-tooltip vue-slider-dot-tooltip-top vue-slider-dot-tooltip-show">
                              <div className="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top">
                                <span className="vue-slider-dot-tooltip-text">20000</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="side-filters">
                  <div className="item">
                    Filters <span className="filter_icon"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE0IDE0Ij48ZGVmcz48c3R5bGU+LmEsLmJ7ZmlsbDojMDAwO30uYXtvcGFjaXR5OjA7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzI0Ljg3NiAxMTIuMTI0KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcyNC44NzYgLTExMi4xMjQpIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcyNS44NTkgLTEwOC41NjIpIj48cGF0aCBjbGFzcz0iYiIgZD0iTTc2LjI1Nyw4MS4zOEg2OC44MjNhMS41MzMsMS41MzMsMCwwLDAtMi45MDcsMGgtMS4xNmEuNDg4LjQ4OCwwLDAsMCwwLC45NzZoMS4xNmExLjUzMywxLjUzMywwLDAsMCwyLjkwNywwaDcuNDM0YS40ODguNDg4LDAsMSwwLDAtLjk3NlptLTguODg4LDEuMDQ2YS41NTguNTU4LDAsMSwxLC41NTgtLjU1OEEuNTU4LjU1OCwwLDAsMSw2Ny4zNjksODIuNDI1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY0LjI2NyAtODAuMzM0KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNzYuMjU3LDIwOS45MTNINzUuMWExLjUzMywxLjUzMywwLDAsMC0yLjkwNywwSDY0Ljc1NWEuNDg4LjQ4OCwwLDEsMCwwLC45NzZoNy40MzRhMS41MzMsMS41MzMsMCwwLDAsMi45MDcsMGgxLjE2YS40ODguNDg4LDAsMSwwLDAtLjk3NlptLTIuNjE0LDEuMDQ2YS41NTguNTU4LDAsMSwxLC41NTgtLjU1OEEuNTU4LjU1OCwwLDAsMSw3My42NDMsMjEwLjk1OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NC4yNjcgLTIwNC42ODUpIi8+PC9nPjwvZz48L3N2Zz4="/></span>
                  </div>
                </div>
              </div>
            </section>
            <section className="filter only-mobile block active-filter">
              <div className="filter-main-container">
                <div className="container filters_container">
                  <div  className="item">
                    <div  className="select">
                      <span  style={{pointerEvents: "none"}}>Sort</span>
                    </div>
                    <div  className="sort-list">
                      <div >
                        <div  className="arrow"></div>
                        <ul  className="dropdown" style={{overflow: "auto"}}>
                          <li  className="">
                            <span  className="seleted-img"><img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/></span><span  className="drop-list">Whats New</span>
                          </li>
                          <li  className="">
                            <span  className="seleted-img"><img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/></span><span  className="drop-list">Price low to high</span>
                          </li>
                          <li  className="">
                            <span  className="seleted-img"><img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/></span><span  className="drop-list">Price high to low</span>
                          </li>
                          <li  className="">
                            <span  className="seleted-img"><img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/></span><span  className="drop-list">Discount low to high</span>
                          </li>
                          <li  className="">
                            <span  className="seleted-img"><img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/></span><span  className="drop-list">Discount high to low</span>
                          </li>
                          <li  className="">
                            <span  className="seleted-img"><img  src="https://d30fs77zq6vq2v.cloudfront.net/media/14012022/g_lxTQ-JiXXwT0h1HW5CJBtK-88681897008.png"/></span><span  className="drop-list">Sort by sale</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div  className="item" items="0,57665">
                    <div  className="select">
                      <span  style={{pointerEvents: "none"}}>Price</span>
                    </div>
                    <ul  className="dropdown price-slide-container">
                    </ul>
                  </div>
                  <div className="item">
                    Filter <span className="filter_icon"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE0IDE0Ij48ZGVmcz48c3R5bGU+LmEsLmJ7ZmlsbDojMDAwO30uYXtvcGFjaXR5OjA7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzI0Ljg3NiAxMTIuMTI0KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcyNC44NzYgLTExMi4xMjQpIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcyNS44NTkgLTEwOC41NjIpIj48cGF0aCBjbGFzcz0iYiIgZD0iTTc2LjI1Nyw4MS4zOEg2OC44MjNhMS41MzMsMS41MzMsMCwwLDAtMi45MDcsMGgtMS4xNmEuNDg4LjQ4OCwwLDAsMCwwLC45NzZoMS4xNmExLjUzMywxLjUzMywwLDAsMCwyLjkwNywwaDcuNDM0YS40ODguNDg4LDAsMSwwLDAtLjk3NlptLTguODg4LDEuMDQ2YS41NTguNTU4LDAsMSwxLC41NTgtLjU1OEEuNTU4LjU1OCwwLDAsMSw2Ny4zNjksODIuNDI1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY0LjI2NyAtODAuMzM0KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNzYuMjU3LDIwOS45MTNINzUuMWExLjUzMywxLjUzMywwLDAsMC0yLjkwNywwSDY0Ljc1NWEuNDg4LjQ4OCwwLDEsMCwwLC45NzZoNy40MzRhMS41MzMsMS41MzMsMCwwLDAsMi45MDcsMGgxLjE2YS40ODguNDg4LDAsMSwwLDAtLjk3NlptLTIuNjE0LDEuMDQ2YS41NTguNTU4LDAsMSwxLC41NTgtLjU1OEEuNTU4LjU1OCwwLDAsMSw3My42NDMsMjEwLjk1OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NC4yNjcgLTIwNC42ODUpIi8+PC9nPjwvZz48L3N2Zz4="/></span> 
                  </div>
                </div>
                <div className="outer-size">
                  <div>
                    <p className="">
                      S
                    </p>
                  </div>
                  <div>
                    <p className="">
                      M
                    </p>
                  </div>
                  <div>
                    <p className="">
                      L
                    </p>
                  </div>
                  <div>
                    <p className="">
                      XL
                    </p>
                  </div>
                  <div>
                    <p className="">
                      Shirts
                    </p>
                  </div>
                  <div>
                    <p className="">
                      Tops
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className="sidebar filter sidebar_filter hidden">
              <div className="content content-mobile">
                <div className="filter-bottom filter-top">
                  <div>
                    <button className="filter-btn btn-effect"><span className="filter_icon"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij48ZGVmcz48c3R5bGU+LmEsLmJ7ZmlsbDojOTk5O30uYXtvcGFjaXR5OjA7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzI0Ljg3NiAxMTIuMTI0KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcyNC44NzYgLTExMi4xMjQpIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcyNS44NTkgLTEwOC41NjIpIj48cGF0aCBjbGFzcz0iYiIgZD0iTTc2LjI1Nyw4MS4zOEg2OC44MjNhMS41MzMsMS41MzMsMCwwLDAtMi45MDcsMGgtMS4xNmEuNDg4LjQ4OCwwLDAsMCwwLC45NzZoMS4xNmExLjUzMywxLjUzMywwLDAsMCwyLjkwNywwaDcuNDM0YS40ODguNDg4LDAsMSwwLDAtLjk3NlptLTguODg4LDEuMDQ2YS41NTguNTU4LDAsMSwxLC41NTgtLjU1OEEuNTU4LjU1OCwwLDAsMSw2Ny4zNjksODIuNDI1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY0LjI2NyAtODAuMzM0KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNzYuMjU3LDIwOS45MTNINzUuMWExLjUzMywxLjUzMywwLDAsMC0yLjkwNywwSDY0Ljc1NWEuNDg4LjQ4OCwwLDEsMCwwLC45NzZoNy40MzRhMS41MzMsMS41MzMsMCwwLDAsMi45MDcsMGgxLjE2YS40ODguNDg4LDAsMSwwLDAtLjk3NlptLTIuNjE0LDEuMDQ2YS41NTguNTU4LDAsMSwxLC41NTgtLjU1OEEuNTU4LjU1OCwwLDAsMSw3My42NDMsMjEwLjk1OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NC4yNjcgLTIwNC42ODUpIi8+PC9nPjwvZz48L3N2Zz4="/></span>Filter</button>
                  </div>
                  <div>
                    <button className="btn-color btn-effect">Clear all</button>
                  </div>
                </div>
                <div className="filter-primary">
                  <div className="optoins-list">
                    <ul className="desktop-filter-options-width">
                      <li className="active" style={{cursor: "pointer"}}>
                        <span>Size</span> 
                      </li>
                      <li className="" style={{cursor: "pointer"}}>
                        <span>Brand</span> 
                      </li>
                      <li className="" style={{cursor: "pointer"}}>
                        <span>Subcategory</span> 
                      </li>
                    </ul>
                  </div>
                  <div className="filter-list desktop-filter-options-width">
                    <div  className="card desktop-active-card-max-width">
                      
                      <div  className="sub_filter">
                        
                        <ul  className="list">
                          <li  className="desktop-filter">
                            <div  style={{display: "flex", alignItems: "center"}}>
                              <div  className="check-img">
                                <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy40ODUiIGhlaWdodD0iMTAuMTI3IiB2aWV3Qm94PSIwIDAgMTMuNDg1IDEwLjEyNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzhhOTE5Yzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDEuODAzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA0MS44MDMpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTEyLjUyMSw0MS44LDQuMzIsNTAsLjk2Myw0Ni42NDUsMCw0Ny42MWw0LjMyLDQuMzIsOS4xNjUtOS4xNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00MS44MDMpIi8+PC9nPjwvZz48L3N2Zz4="/>
                              </div><span  style={{lineHeight: "1.3"}}>Shirts</span>
                            </div>
                            <div  className="count-item"></div>
                          </li>
                          <li  className="desktop-filter">
                            <div  style={{display: "flex" ,alignItems: "center"}}>
                              <div  className="check-img">
                                <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy40ODUiIGhlaWdodD0iMTAuMTI3IiB2aWV3Qm94PSIwIDAgMTMuNDg1IDEwLjEyNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzhhOTE5Yzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDEuODAzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA0MS44MDMpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTEyLjUyMSw0MS44LDQuMzIsNTAsLjk2Myw0Ni42NDUsMCw0Ny42MWw0LjMyLDQuMzIsOS4xNjUtOS4xNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00MS44MDMpIi8+PC9nPjwvZz48L3N2Zz4="/>
                              </div><span  style={{lineHeight: "1.3"}}>Tops</span>
                            </div>
                            <div  className="count-item"></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div  className="card desktop-active-card-max-width active">
                      
                      <div  className="sub_filter">
                        
                        <ul  className="list">
                          <li  className="desktop-filter">
                            <div  style={{display:" flex" ,alignItems: "center"}}>
                              <div  className="check-img">
                                <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy40ODUiIGhlaWdodD0iMTAuMTI3IiB2aWV3Qm94PSIwIDAgMTMuNDg1IDEwLjEyNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzhhOTE5Yzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDEuODAzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA0MS44MDMpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTEyLjUyMSw0MS44LDQuMzIsNTAsLjk2Myw0Ni42NDUsMCw0Ny42MWw0LjMyLDQuMzIsOS4xNjUtOS4xNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00MS44MDMpIi8+PC9nPjwvZz48L3N2Zz4="/>
                              </div><span  style={{lineHeight: "1.3"}}>L</span>
                            </div>
                            <div  className="count-item">
                              <span >137</span>
                            </div>
                          </li>
                          <li  className="desktop-filter">
                            <div  style={{display: "flex", alignItems:" center"}}>
                              <div  className="check-img">
                                <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy40ODUiIGhlaWdodD0iMTAuMTI3IiB2aWV3Qm94PSIwIDAgMTMuNDg1IDEwLjEyNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzhhOTE5Yzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDEuODAzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA0MS44MDMpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTEyLjUyMSw0MS44LDQuMzIsNTAsLjk2Myw0Ni42NDUsMCw0Ny42MWw0LjMyLDQuMzIsOS4xNjUtOS4xNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00MS44MDMpIi8+PC9nPjwvZz48L3N2Zz4="/>
                              </div><span  style={{lineHeight: "1.3"}}>M</span>
                            </div>
                            <div  className="count-item">
                              <span >129</span>
                            </div>
                          </li>
                          <li  className="desktop-filter">
                            <div  style={{display: "flex", alignItems: "center"}}>
                              <div  className="check-img">
                                <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy40ODUiIGhlaWdodD0iMTAuMTI3IiB2aWV3Qm94PSIwIDAgMTMuNDg1IDEwLjEyNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzhhOTE5Yzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDEuODAzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA0MS44MDMpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTEyLjUyMSw0MS44LDQuMzIsNTAsLjk2Myw0Ni42NDUsMCw0Ny42MWw0LjMyLDQuMzIsOS4xNjUtOS4xNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00MS44MDMpIi8+PC9nPjwvZz48L3N2Zz4="/>
                              </div><span  style={{lineHeight: "1.3"}}>S</span>
                            </div>
                            <div  className="count-item">
                              <span >129</span>
                            </div>
                          </li>
                          <li  className="desktop-filter">
                            <div  style={{display: "flex", alignItems: "center"}}>
                              <div  className="check-img">
                                <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy40ODUiIGhlaWdodD0iMTAuMTI3IiB2aWV3Qm94PSIwIDAgMTMuNDg1IDEwLjEyNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzhhOTE5Yzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDEuODAzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA0MS44MDMpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTEyLjUyMSw0MS44LDQuMzIsNTAsLjk2Myw0Ni42NDUsMCw0Ny42MWw0LjMyLDQuMzIsOS4xNjUtOS4xNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00MS44MDMpIi8+PC9nPjwvZz48L3N2Zz4="/>
                              </div><span  style={{lineHeight: "1.3"}}>XL</span>
                            </div>
                            <div  className="count-item">
                              <span >11</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div  className="card desktop-active-card-max-width">
                      <div  className="filter-search">
                        <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojOGE5MTljO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iYSIgZD0iTTEzLjIwOSwxMS42MmE3LjMzOSw3LjMzOSwwLDEsMC0xLjU5MSwxLjU5MUwxNi40MDksMTgsMTgsMTYuNDExLDEzLjIwOSwxMS42MlptLTUuOS43NTZhNS4wNjIsNS4wNjIsMCwxLDEsNS4wNjItNS4wNjIsNS4wNjgsNS4wNjgsMCwwLDEtNS4wNjIsNS4wNjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAwMikiLz48L3N2Zz4="/> <input  type="text" placeholder="Search"/>
                      </div>
                      <div  className="sub_filter">
                        
                        <ul  className="list">
                          
                          <li  className="desktop-filter">
                            <div  style={{display: "flex", alignItems: "center"}}>
                              <div  className="check-img">
                                <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy40ODUiIGhlaWdodD0iMTAuMTI3IiB2aWV3Qm94PSIwIDAgMTMuNDg1IDEwLjEyNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzhhOTE5Yzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDEuODAzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA0MS44MDMpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTEyLjUyMSw0MS44LDQuMzIsNTAsLjk2Myw0Ni42NDUsMCw0Ny42MWw0LjMyLDQuMzIsOS4xNjUtOS4xNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00MS44MDMpIi8+PC9nPjwvZz48L3N2Zz4="/>
                              </div><span  style={{lineHeight: "1.3"}}>EAST LINE</span>
                            </div>
                            <div  className="count-item"></div>
                          </li>
                          <li  className="desktop-filter">
                            <div  style={{display: "flex", alignItems: "center"}}>
                              <div  className="check-img">
                                <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy40ODUiIGhlaWdodD0iMTAuMTI3IiB2aWV3Qm94PSIwIDAgMTMuNDg1IDEwLjEyNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzhhOTE5Yzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDEuODAzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA0MS44MDMpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTEyLjUyMSw0MS44LDQuMzIsNTAsLjk2Myw0Ni42NDUsMCw0Ny42MWw0LjMyLDQuMzIsOS4xNjUtOS4xNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00MS44MDMpIi8+PC9nPjwvZz48L3N2Zz4="/>
                              </div><span  style={{lineHeight: "1.3"}}>PLAZA-II</span>
                            </div>
                            <div  className="count-item"></div>
                          </li>
                          <li  className="desktop-filter">
                            <div  style={{display: "flex", alignItems: "center"}}>
                              <div  className="check-img">
                                <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy40ODUiIGhlaWdodD0iMTAuMTI3IiB2aWV3Qm94PSIwIDAgMTMuNDg1IDEwLjEyNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzhhOTE5Yzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDEuODAzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA0MS44MDMpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTEyLjUyMSw0MS44LDQuMzIsNTAsLjk2Myw0Ni42NDUsMCw0Ny42MWw0LjMyLDQuMzIsOS4xNjUtOS4xNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00MS44MDMpIi8+PC9nPjwvZz48L3N2Zz4="/>
                              </div><span  style={{lineHeight: "1.3"}}>Pop</span>
                            </div>
                            <div  className="count-item"></div>
                          </li>
                          <li  className="desktop-filter">
                            <div  style={{display: "flex" , alignItems: "center"}}>
                              <div  className="check-img">
                                <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy40ODUiIGhlaWdodD0iMTAuMTI3IiB2aWV3Qm94PSIwIDAgMTMuNDg1IDEwLjEyNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzhhOTE5Yzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDEuODAzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA0MS44MDMpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTEyLjUyMSw0MS44LDQuMzIsNTAsLjk2Myw0Ni42NDUsMCw0Ny42MWw0LjMyLDQuMzIsOS4xNjUtOS4xNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00MS44MDMpIi8+PC9nPjwvZz48L3N2Zz4="/>
                              </div><span  style={{lineHeight: "1.3"}}>WEST LINE</span>
                            </div>
                            <div  className="count-item"></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-bottom" style={{display: "flex", cursor:" pointer"}}>
                  <div className="button-close" style={{borderRight: "1px solid rgb(233, 224, 224)", width: "100%", height: "100%", justifyContent: "center", display: "flex"}}>
                    <span style={{alignSelf: "center"}}>Close</span>
                  </div>
                  <div className="button-apply" style={{borderLeft: "1px solid rgb(233, 224, 224)", width: "100%", height:" 100%", justifyContent: "center", display: "flex"}}>
                    <span className="btn-color" style={{alignSelf: "center"}}>Apply</span>
                  </div>
                </div>
              </div>
              <div id="vue-directive-loading18388fcdfef" style={{width: "100%", position: "absolute", top: "0px" ,bottom:" 0px" ,background: "rgba(255, 255, 255, 0.86)", justifyContent: "center", display: "none"}}>
                <div className="v_loading" style={{alignSelf: "center"}}></div>
              </div>
            </div>
            <div >
              
              <section  className="count listing-count"></section>
              <section  className="products">
                <div  className="container desktop-container">
                  <div   id="6310b820f96ef34707a6445a" className="product">
                    <div  className="image_wrapper">
                      <div  className="heart_wrapper">
                        <div   className="">
                          <div  className="heart fav">
                            <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                              <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                            </svg>
                          </div>
                          
                        </div>
                      </div>
                      <a  href="/west-line-women-overcoat-shirt-brown?id=6310b820f96ef34707a6445a" className="image">
                        <img  alt="WEST LINE WOMEN OVERCOAT SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16725_941_1662118132_6311e8f412286-892180671110.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16725_941_1662118132_6311e8f412286-892180671110.jpg" lazy="loaded"/>
                      </a>
                    </div>
                    <div  className="product__details">
                      <div  className="brand_name">
                        <p  className="brand_text">WEST LINE</p>
                      </div>
                      <div  className="product_name">
                        <a  href="/west-line-women-overcoat-shirt-brown?id=6310b820f96ef34707a6445a" className="name">west line women overcoat shirt</a>
                      </div>
                      <div  className="price_box">
                        <p  className="price">
                          <span  className="discounted_price"> Rs 1,449 </span>
                          <del >Rs 3,200</del>
                          <span  className="percentage-text"> -55% </span>
                        </p>
                      </div>
                      <div  className="desktop-offer">
                        
                      </div>
                    </div>
                    <div  className="desktop-offer">
                      
                    </div>
                  </div>
                  <div   id="6310b826f96ef34707a64475" className="product">
                    <div  className="image_wrapper">
                      <div  className="heart_wrapper">
                        <div   className="">
                          <div  className="heart fav">
                            <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                              <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                            </svg>
                          </div>
                          
                        </div>
                      </div>
                      <a  href="/west-line-women-overcoat-shirt-black?id=6310b826f96ef34707a64475" className="image">
                        <img  alt="WEST LINE WOMEN OVERCOAT SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16726_450_1662118604_6311eacc155db-333789212720.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16726_450_1662118604_6311eacc155db-333789212720.jpg" lazy="loaded"/>
                      </a>
                    </div>
                    <div  className="product__details">
                      <div  className="brand_name">
                        <p  className="brand_text">WEST LINE</p>
                      </div>
                      <div  className="product_name">
                        <a  href="/west-line-women-overcoat-shirt-black?id=6310b826f96ef34707a64475" className="name">west line women overcoat shirt</a>
                      </div>
                      <div  className="price_box">
                        <p  className="price">
                          <span  className="discounted_price"> Rs 1,449 </span>
                          <del >Rs 3,200</del>
                          <span  className="percentage-text"> -55% </span>
                        </p>
                      </div>
                      <div  className="desktop-offer">
                        
                      </div>
                    </div>
                    <div  className="desktop-offer">
                      
                    </div>
                  </div>
                  <div   id="6310b82df96ef34707a64491" className="product">
                    <div  className="image_wrapper">
                      <div  className="heart_wrapper">
                        <div   className="">
                          <div  className="heart fav">
                            <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                              <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                            </svg>
                          </div>
                          
                        </div>
                      </div>
                      <a  href="/west-line-women-formal-shirt-mustard?id=6310b82df96ef34707a64491" className="image">
                        <img  alt="WEST LINE WOMEN FORMAL SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20092022/16727_64_1663659970_63296fc256336-1064127861210.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20092022/16727_64_1663659970_63296fc256336-1064127861210.jpg" lazy="loaded"/>
                      </a>
                    </div>
                    <div  className="product__details">
                      <div  className="brand_name">
                        <p  className="brand_text">WEST LINE</p>
                      </div>
                      <div  className="product_name">
                        <a  href="/west-line-women-formal-shirt-mustard?id=6310b82df96ef34707a64491" className="name">west line women formal shirt</a>
                      </div>
                      <div  className="price_box">
                        <p  className="price">
                          <span  className="discounted_price"> Rs 1,799 </span>
                          <del >Rs 3,200</del>
                          <span  className="percentage-text"> -44% </span>
                        </p>
                      </div>
                      <div  className="desktop-offer">
                        
                      </div>
                    </div>
                    <div  className="desktop-offer">
                      
                    </div>
                  </div>
                  <div   id="6310b834f96ef34707a644b4" className="product">
                    <div  className="image_wrapper">
                      <div  className="heart_wrapper">
                        <div   className="">
                          <div  className="heart fav">
                            <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                              <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                            </svg>
                          </div>
                          
                        </div>
                      </div>
                      <a  href="/west-line-women-formal-shirt-brown?id=6310b834f96ef34707a644b4" className="image">
                        <img  alt="WEST LINE WOMEN FORMAL SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16728_279_1662124569_63120219bf01c-902459638116.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16728_279_1662124569_63120219bf01c-902459638116.jpg" lazy="loaded"/>
                      </a>
                    </div>
                    <div  className="product__details">
                      <div  className="brand_name">
                        <p  className="brand_text">WEST LINE</p>
                      </div>
                      <div  className="product_name">
                        <a  href="/west-line-women-formal-shirt-brown?id=6310b834f96ef34707a644b4" className="name">west line women formal shirt</a>
                      </div>
                      <div  className="price_box">
                        <p  className="price">
                          <span  className="discounted_price"> Rs 1,799 </span>
                          <del >Rs 3,200</del>
                          <span  className="percentage-text"> -44% </span>
                        </p>
                      </div>
                      <div  className="desktop-offer">
                        
                      </div>
                    </div>
                    <div  className="desktop-offer">
                      
                    </div>
                  </div>
                </div>
                <div  className="mobile-banners-filter">
                  <div   className="container listing-container">
                    <section >
                      <div className="open-app">
                        <a href="https://play.google.com/store/apps/details?id=com.clicky.pk&amp;utm_source=android-web&amp;utm_medium=open-app&amp;utm_campaign=appDrive`"> Open App </a>
                      </div>
                    </section>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-red-top-red?id=632ebf347ff16153d48f7dc1" className="image">
                            <img  alt="West line women red top" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/19489_921_1664007964_632ebf1c92c1d-1012070256803.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/19489_921_1664007964_632ebf1c92c1d-1012070256803.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-red-top-red?id=632ebf347ff16153d48f7dc1" className="name">west line women red top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 2,599</del>
                                <span  className="discounted_price"> Rs 1,649 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-green-top-light-green?id=632ec1487ff16153d48f85af" className="image">
                            <img  alt="West line women green top" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/19490_337_1664008033_632ebf61d636a-1076899045738.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/19490_337_1664008033_632ebf61d636a-1076899045738.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-green-top-light-green?id=632ec1487ff16153d48f85af" className="name">west line women green top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 2,299</del>
                                <span  className="discounted_price"> Rs 1,649 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-womens-western-top-pink?id=632ecf5e7ff16153d48fb58d" className="image">
                            <img  alt="WEST LINE WOMENS WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17693_390_1664011344_632ecc5001923-1149508431630.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17693_390_1664011344_632ecc5001923-1149508431630.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-womens-western-top-pink?id=632ecf5e7ff16153d48fb58d" className="name">west line womens western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,699</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-womens-western-top-dark-green?id=632ecf477ff16153d48fb51b" className="image">
                            <img  alt="WEST LINE WOMENS WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17687_140_1664009678_632ec5ce9efd0-33665551201.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17687_140_1664009678_632ec5ce9efd0-33665551201.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-womens-western-top-dark-green?id=632ecf477ff16153d48fb51b" className="name">west line womens western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,699</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-womens-western-top-dark-gray?id=632ecf527ff16153d48fb553" className="image">
                            <img  alt="WEST LINE WOMENS WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17691_167_1664011226_632ecbda4ec19-2140778584.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17691_167_1664011226_632ecbda4ec19-2140778584.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-womens-western-top-dark-gray?id=632ecf527ff16153d48fb553" className="name">west line womens western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,699</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-womens-western-top-navy?id=632ecf437ff16153d48fb507" className="image">
                            <img  alt="WEST LINE WOMENS WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17686_792_1664009626_632ec59a51298-1162608468699.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17686_792_1664009626_632ec59a51298-1162608468699.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-womens-western-top-navy?id=632ecf437ff16153d48fb507" className="name">west line womens western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,699</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container filterList">
                      
                      
                      
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-womens-western-top-brown?id=632ecf4c7ff16153d48fb533" className="image">
                            <img  alt="WEST LINE WOMENS WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17688_63_1664009866_632ec68a022b9-1082835448215.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17688_63_1664009866_632ec68a022b9-1082835448215.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-womens-western-top-brown?id=632ecf4c7ff16153d48fb533" className="name">west line womens western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,699</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-womens-western-top-blue?id=632ecf587ff16153d48fb56f" className="image">
                            <img  alt="WEST LINE WOMENS WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17692_8_1664011278_632ecc0e4f210-801188068192.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17692_8_1664011278_632ecc0e4f210-801188068192.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-womens-western-top-blue?id=632ecf587ff16153d48fb56f" className="name">west line womens western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,699</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-womens-western-top-brown?id=632ecf2e7ff16153d48fb49b" className="image">
                            <img  alt="WEST LINE WOMENS WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24092022/17675_325_1664009138_632ec3b2eea54-1262870513174.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24092022/17675_325_1664009138_632ec3b2eea54-1262870513174.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-womens-western-top-brown?id=632ecf2e7ff16153d48fb49b" className="name">west line womens western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,699</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-womens-western-top-black?id=632ecf337ff16153d48fb4be" className="image">
                            <img  alt="WEST LINE WOMENS WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17677_176_1664009086_632ec37e07f04-797550867576.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17677_176_1664009086_632ec37e07f04-797550867576.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-womens-western-top-black?id=632ecf337ff16153d48fb4be" className="name">west line womens western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,699</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-womens-western-top-silver?id=632ecf397ff16153d48fb4d9" className="image">
                            <img  alt="WEST LINE WOMENS WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17678_101_1664009244_632ec41c03f6d-1152804042740.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/17678_101_1664009244_632ec41c03f6d-1152804042740.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-womens-western-top-silver?id=632ecf397ff16153d48fb4d9" className="name">west line womens western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,699</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-womens-western-top-multi?id=632ecf3e7ff16153d48fb4f3" className="image">
                            <img  alt="WEST LINE WOMENS WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24092022/17681_649_1664009498_632ec51ada199-741897691034.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24092022/17681_649_1664009498_632ec51ada199-741897691034.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-womens-western-top-multi?id=632ecf3e7ff16153d48fb4f3" className="name">west line womens western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,699</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container filterList">
                      <div  className="brnads-list">
                        <div  className="filter_main">
                          <div  className="filter-size">
                            <div  className="size-heading">
                              <h3 > Filter by <span >Size</span>
                              </h3>
                            </div>
                            <div   className="main-container">
                              <div  className="size-list">
                                <div  className="">
                                  <span >L</span>
                                </div>
                                <div  className="">
                                  <span >M</span>
                                </div>
                                <div  className="">
                                  <span >S</span>
                                </div>
                                <div  className="">
                                  <span >XL</span>
                                </div>
                              </div>
                              
                              
                            </div>
                          </div>
                          <div  className="showmore">
                            
                          </div>
                        </div>
                      </div>
                      
                      
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-womens-western-top-white?id=632edb217ff16153d48fdfe9" className="image">
                            <img  alt="West Line Womens Western Top" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16693_472_1664013675_632ed56b21076-92234781534.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16693_472_1664013675_632ed56b21076-92234781534.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-womens-western-top-white?id=632edb217ff16153d48fdfe9" className="name">west line womens western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,899</del>
                                <span  className="discounted_price"> Rs 1,499 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-black?id=632eda1f7ff16153d48fdbe1" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16675_704_1664013590_632ed5168d9b7-123906870382.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16675_704_1664013590_632ed5168d9b7-123906870382.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-black?id=632eda1f7ff16153d48fdbe1" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-black?id=632eda187ff16153d48fdbc0" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16672_585_1664013515_632ed4cbea8a3-1648200592252.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16672_585_1664013515_632ed4cbea8a3-1648200592252.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-black?id=632eda187ff16153d48fdbc0" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-yellow?id=632eda0c7ff16153d48fdb82" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16664_877_1664013272_632ed3d8ee493-1635376779477.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16664_877_1664013272_632ed3d8ee493-1635376779477.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-yellow?id=632eda0c7ff16153d48fdb82" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-light-pink?id=632edab97ff16153d48fde0e" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24092022/16665_905_1664013394_632ed4520455e-315546983432.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24092022/16665_905_1664013394_632ed4520455e-315546983432.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-light-pink?id=632edab97ff16153d48fde0e" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-blue?id=632edab47ff16153d48fddf4" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16663_743_1664013216_632ed3a08c650-291790632508.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16663_743_1664013216_632ed3a08c650-291790632508.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-blue?id=632edab47ff16153d48fddf4" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 1,399 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-blue?id=632eda047ff16153d48fdb56" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16649_973_1664013089_632ed32136ede-1033262829423.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16649_973_1664013089_632ed32136ede-1033262829423.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-blue?id=632eda047ff16153d48fdb56" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 1,499 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-black?id=632ed9f77ff16153d48fdb05" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16645_623_1664012796_632ed1fc3c989-463509952331.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16645_623_1664012796_632ed1fc3c989-463509952331.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-black?id=632ed9f77ff16153d48fdb05" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 1,499 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-black?id=632ed9fe7ff16153d48fdb35" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24092022/16648_535_1664013011_632ed2d3cfe8c-1074097821554.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24092022/16648_535_1664013011_632ed2d3cfe8c-1074097821554.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-black?id=632ed9fe7ff16153d48fdb35" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 1,499 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-brown?id=632ed07a7ff16153d48fb9c3" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16623_165_1664012328_632ed0284ef57-1278576674501.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16623_165_1664012328_632ed0284ef57-1278576674501.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">PLAZA-II</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-brown?id=632ed07a7ff16153d48fb9c3" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 1,499 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-white?id=632ed9f17ff16153d48fdaec" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16612_373_1664012501_632ed0d50af8c-1400071787976.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16612_373_1664012501_632ed0d50af8c-1400071787976.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">PLAZA-II</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-white?id=632ed9f17ff16153d48fdaec" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 999 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-black?id=632efbfa4ac6b47892989b4c" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16613_676_1664023460_632efba45e242-921755381025.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16613_676_1664023460_632efba45e242-921755381025.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-black?id=632efbfa4ac6b47892989b4c" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-white-formal-shirt-gray?id=632d9cc0d16add1adcf80f30" className="image">
                            <img  alt="WEST LINE WOMEN WHITE FORMAL SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16712_52_1664344151_6333e057b9134-1518079094873.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28092022/16712_52_1664344151_6333e057b9134-1518079094873.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-white-formal-shirt-gray?id=632d9cc0d16add1adcf80f30" className="name">west line women white formal shirt</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 3,200</del>
                                <span  className="discounted_price"> Rs 1,349 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-top-white?id=6315d2140191ca76e0cb35cf" className="image">
                            <img  alt="WEST LINE WOMEN Top" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08092022/19500_675_1662617535_631987bfce3be-1160010752519.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08092022/19500_675_1662617535_631987bfce3be-1160010752519.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-top-white?id=6315d2140191ca76e0cb35cf" className="name">west line women top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 2,399</del>
                                <span  className="discounted_price"> Rs 1,249 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-blue-top-blue?id=6311f32febe89a1c74684a8a" className="image">
                            <img  alt="West line women Blue Top" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03092022/19488_181_1662191949_6313094dd0230-563135971985.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03092022/19488_181_1662191949_6313094dd0230-563135971985.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-blue-top-blue?id=6311f32febe89a1c74684a8a" className="name">west line women blue top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 2,499</del>
                                <span  className="discounted_price"> Rs 1,649 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-top-summer-chocolate?id=6311d122ebe89a1c7467d5fb" className="image">
                            <img  alt="West line women top summer" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03092022/19501_162_1662192099_631309e309930-985831311863.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03092022/19501_162_1662192099_631309e309930-985831311863.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-top-summer-chocolate?id=6311d122ebe89a1c7467d5fb" className="name">west line women top summer</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 2,499</del>
                                <span  className="discounted_price"> Rs 1,649 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-sky-blue?id=6311db2bebe89a1c7467f755" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16646_718_1662121529_6311f6391f6de-1152479486760.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16646_718_1662121529_6311f6391f6de-1152479486760.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-sky-blue?id=6311db2bebe89a1c7467f755" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,999</del>
                                <span  className="discounted_price"> Rs 1,799 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-multi?id=6311f54debe89a1c74685162" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16637_447_1662121187_6311f4e33fbd1-886890803962.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16637_447_1662121187_6311f4e33fbd1-886890803962.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">PLAZA-II</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-multi?id=6311f54debe89a1c74685162" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 1,449 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-formal-shirt-black?id=6310b80bf96ef34707a64409" className="image">
                            <img  alt="WEST LINE WOMEN FORMAL SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16722_709_1662118775_6311eb77f2018-279826986912.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16722_709_1662118775_6311eb77f2018-279826986912.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-formal-shirt-black?id=6310b80bf96ef34707a64409" className="name">west line women formal shirt</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 3,200</del>
                                <span  className="discounted_price"> Rs 1,599 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-overcoat-shirt-gray?id=6310b81af96ef34707a64445" className="image">
                            <img  alt="WEST LINE WOMEN OVERCOAT SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16724_909_1662118489_6311ea592ac49-251729189584.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16724_909_1662118489_6311ea592ac49-251729189584.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-overcoat-shirt-gray?id=6310b81af96ef34707a64445" className="name">west line women overcoat shirt</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 3,200</del>
                                <span  className="discounted_price"> Rs 1,449 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-formal-shirt-mustard?id=6310b813f96ef34707a64429" className="image">
                            <img  alt="WEST LINE WOMEN FORMAL SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16723_14_1662118090_6311e8cad91f3-1039146617092.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16723_14_1662118090_6311e8cad91f3-1039146617092.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-formal-shirt-mustard?id=6310b813f96ef34707a64429" className="name">west line women formal shirt</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 3,200</del>
                                <span  className="discounted_price"> Rs 1,599 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-overcoat-shirt-brown?id=6310b820f96ef34707a6445a" className="image">
                            <img  alt="WEST LINE WOMEN OVERCOAT SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16725_941_1662118132_6311e8f412286-892180671110.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16725_941_1662118132_6311e8f412286-892180671110.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-overcoat-shirt-brown?id=6310b820f96ef34707a6445a" className="name">west line women overcoat shirt</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 3,200</del>
                                <span  className="discounted_price"> Rs 1,449 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-overcoat-shirt-black?id=6310b826f96ef34707a64475" className="image">
                            <img  alt="WEST LINE WOMEN OVERCOAT SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16726_450_1662118604_6311eacc155db-333789212720.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16726_450_1662118604_6311eacc155db-333789212720.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-overcoat-shirt-black?id=6310b826f96ef34707a64475" className="name">west line women overcoat shirt</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 3,200</del>
                                <span  className="discounted_price"> Rs 1,449 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-formal-shirt-mustard?id=6310b82df96ef34707a64491" className="image">
                            <img  alt="WEST LINE WOMEN FORMAL SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20092022/16727_64_1663659970_63296fc256336-1064127861210.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20092022/16727_64_1663659970_63296fc256336-1064127861210.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-formal-shirt-mustard?id=6310b82df96ef34707a64491" className="name">west line women formal shirt</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 3,200</del>
                                <span  className="discounted_price"> Rs 1,799 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-formal-shirt-brown?id=6310b834f96ef34707a644b4" className="image">
                            <img  alt="WEST LINE WOMEN FORMAL SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16728_279_1662124569_63120219bf01c-902459638116.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16728_279_1662124569_63120219bf01c-902459638116.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-formal-shirt-brown?id=6310b834f96ef34707a644b4" className="name">west line women formal shirt</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 3,200</del>
                                <span  className="discounted_price"> Rs 1,799 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-formal-shirt-sea-green?id=6310ae25f96ef34707a62831" className="image">
                            <img  alt="WEST LINE WOMEN FORMAL SHIRT" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16721_480_1662118179_6311e92365051-333668578633.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16721_480_1662118179_6311e92365051-333668578633.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-formal-shirt-sea-green?id=6310ae25f96ef34707a62831" className="name">west line women formal shirt</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 3,200</del>
                                <span  className="discounted_price"> Rs 1,599 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-gray?id=62c3f0b4d57d5e258adbf449" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/21072022/16621_634_1657008197_62c3f0451e79c-468603894709.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/21072022/16621_634_1657008197_62c3f0451e79c-468603894709.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-gray?id=62c3f0b4d57d5e258adbf449" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 999 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="outer-container">
                      
                      
                      <div >
                        <div  className="image_wrapper">
                          <a  href="/west-line-women-western-top-black?id=62c3eeb4d57d5e258adbed2e" className="image">
                            <img  alt="WEST LINE WOMEN WESTERN TOP" data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/21072022/16611_798_1657007594_62c3edeab2fa1-684512824821.jpg" src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/21072022/16611_798_1657007594_62c3edeab2fa1-684512824821.jpg" lazy="loaded"/>
                          </a>
                        </div>
                        <div  className="product__details list_details">
                          <div  className="brand_name">
                            <p  className="brand_text">WEST LINE</p>
                            <div  className="heart_wrappers mobile-heart">
                              <div   className="">
                                <div  className="heart fav">
                                  <svg  viewBox="0 0 18 16 " id="heart " width="100% " height="100%">
                                    <path  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z " stroke="#707070 " stroke-width="2 "></path>
                                  </svg>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div  className="product_name">
                            <a  href="/west-line-women-western-top-black?id=62c3eeb4d57d5e258adbed2e" className="name">west line women western top</a>
                          </div>
                          <div  className="price_box">
                            <div  className="price-inner-box">
                              <p  className="price">
                                <del >Rs 1,850</del>
                                <span  className="discounted_price"> Rs 999 </span>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </section>
            </div>
            <section className="foot">
              <p>You've viewed 40 of 152 products</p>
              <progress max="801" value="80" aria-hidden="true" className="bar"></progress>
              <div className="pagination_box">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <button disabled="disabled" className="page-link pagination-link--disable">«</button>
                  </li>
                  <li className="page-item disabled">
                    <button disabled="disabled" className="page-link pagination-link--disable">‹</button>
                  </li>
                  <li className="page-item" style={{display: "none"}}>
                    <button className="page-link">1</button>
                  </li>
                  <li className="page-item" style={{display: "none"}}>
                    <button className="page-link">2</button>
                  </li>
                  <li className="page-item disabled" style={{display: "none"}}>
                    <span className="page-link pagination-link--disable">...</span>
                  </li>
                  <li className="page-item active">
                    <button className="page-link pagination-link--active">1</button>
                  </li>
                  <li className="page-item ">
                    <button className="page-link ">2</button>
                  </li>
                  <li className="page-item ">
                    <button className="page-link ">3</button>
                  </li>
                  <li className="page-item disabled" style={{display: "none"}}>
                    <span className="page-link pagination-link--disable">...</span>
                  </li>
                  <li className="page-item" style={{display: "none"}}>
                    <button className="page-link">3</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">4</button>
                  </li>
                  <li className="page-item ">
                    <button className="page-link ">›</button>
                  </li>
                  <li className="page-item ">
                    <button className="page-link ">»</button>
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </>
    )
}

export default Collection