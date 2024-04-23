const Change=()=>{

  return(
   
    <div id="__layout">
        <div>
          <div className="sidebar only-mobile hidden">
            <div className="mob-search">
              <div className="search-icon-box"></div>
              <p>Search of item</p>
            </div>
            <div id="scrollViews" className="main-search" style={{display: "none"}}>
              <div className="search-input-area" >
                <div style={{width:"100%",borderRadius:".08rem",boxSizing:"border-box"}} >
                  <form autocomplete="off" style={{background:"#f2f2f2",display:"flex",paddingLeft:"10px"}} >
                    <div className="display-flex-center-content" >
                      <div className="align-self" >
                        <div className="search-icon-box" ></div>
                      </div>
                    </div>
                    <div style={{width:"100%",marginLeft:".26666667rem"}} >
                      <input type="text" placeholder="Search for item" value className="search-input" />
                    </div>
                  </form>
                </div>
                <div className="display-flex-center-content" style={{paddingLeft:"10px"}} >
                  <span className="align-self" style={{color:"#0e0d0d73",fontSize:"11px"}} >Cancel</span>
                </div>
              </div>
         
              <div className="tags" >
                <div className="title" >
                  <span >Popular Searches</span>
                </div>
                <div className="list-tags" style={{width:"100%" , display:"flex", flexWrap:"wrap"}} >
                  <div className="chip" >scalloped swimwear</div>
                  <div className="chip" >party</div>
                  <div className="chip" >fluffy</div>
                  <div className="chip" >crop tops</div>
                  <div className="chip" >tees</div>
                  <div className="chip" >jeans</div>
                  <div className="chip" >intimates</div>
                  <div className="chip" >twist sweaters</div>
                </div>
              </div>
            
            </div>
            <div className="content">
              <div className="mob-list">
                <ul>
                  <li>
                    <div className="category-nav">
                      <div className="cate-inner">
                        <h3> MEN </h3>
                        <div className="arrow">
                          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMCAtMTg1KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE4NSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAgMTM5LjA5MykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNDguOTA3KSI+PHBhdGggZD0iTTE1Ljg3Nyw0OC45MDcsOSw1NS43ODQsMi4xMjMsNDguOTA3LDAsNTEuMDI5bDksOSw5LTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00OC45MDcpIi8+PC9nPjwvZz48L2c+PC9zdmc+"/>
                        </div>
                        <div className="arrowup">
                          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMy44NzgpIj48cGF0aCBkPSJNMTUuODc3LDYwLjAyOSw5LDUzLjE1MiwyLjEyMyw2MC4wMjksMCw1Ny45MDdsOS05LDksOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjkwNykiLz48L2c+PC9zdmc+"/>
                        </div>
                      </div>
                      <div className="category-img" style={{backgroundImage:'url("https://d30fs77zq6vq2v.cloudfront.net/category/03012021/Men-1270783577199.jpg")'}}></div>
                    </div>
                    <div className="child-list">
                      <ul>
                        <li>
                          <div className="child-head">
                            <h3>CLOTHING</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/1-Shirt-1157795563315.jpg" alt="Shirts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Shirts</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/2-T-Shirts-1445641635344.jpg" alt="T-Shirts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>T-Shirts</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/3-Jeans-406453109697.jpg" alt="Jeans "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Jeans </span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/4-Pants-931413044989.jpg" alt="Pants"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Pants</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/5-Activewear-667523462024.jpg" alt="Activewear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Activewear</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/6-TraditionalClothing-968997742424.jpg" alt="Traditional Clothing"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Traditional Clothing</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/7-Shorts-1257473590365.jpg" alt="Shorts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Shorts</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/8-Sleep-&amp;-Lounge-1600610410211.jpg" alt="Sleep &amp; Lounge"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sleep &amp; Lounge</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/9-Boxers-1608192210277.jpg" alt="Boxers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Boxers</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="child-head">
                            <h3>FOOTWEAR</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/1-Casual-Shoes-129254429712.jpg" alt="Casual Shoes"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Casual Shoes</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/2-Sports-Shoes-1605714980676.jpg" alt="Sports Shoes"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sports Shoes</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/3-Formal-Shoes-1470655614006.jpg" alt="Formal Shoes"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Formal Shoes</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/4-PeshawariChappal-1456314230229.jpg" alt="Peshawari"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Peshawari</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/5-Sandals-608586312597.jpg" alt="Sandals"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sandals</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/6-Sneakers-494107153594.jpg" alt="Sneakers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sneakers</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/7-Slippers-1014987392520.jpg" alt="Slippers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Slippers</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="child-head">
                            <h3>ACCESSORIES</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/1-Wallets-436296049905.jpg" alt="Wallets"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Wallets</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/2-Ties-&amp;-Cufflinks-418775770458.jpg" alt="Ties &amp; Cufflinks"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Ties &amp; Cufflinks</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/3-Belts-&amp;-Key-chains-1273696948655.jpg" alt="Belts &amp; Key chains"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Belts &amp; Key chains</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/4-Fragrances-827959801124.jpg" alt="Fragrances "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Fragrances </span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/5-Socks-&amp;-Gloves-647929888791.jpg" alt="Socks &amp; Gloves"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Socks &amp; Gloves</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/6-Eyewear-237004984331.jpg" alt="Eyewear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Eyewear</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/7-Caps-&amp;-Hats-1429245738983.jpg" alt="Caps &amp; Hats"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Caps &amp; Hats</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/8-Jewellery-250102422022.jpg" alt="Jewelry "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Jewelry </span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/bags-130503660229.png" alt="Bags"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bags</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/9-Watches-1484824407106.jpg" alt="Watches"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Watches</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/10-Facemasks-11769147843.jpg" alt="Facemasks"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Facemasks</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="child-head">
                            <h3>WINTER WEAR</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/1-Jackets-323663367412.jpg" alt="Jackets "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Jackets </span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/2-Hoodies-1358128538798.jpg" alt="Hoodies"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Hoodies</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/3-Sweaters-&amp;-Sweatshirts-683337996110.jpg" alt="Sweaters &amp; Sweatshirts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sweaters &amp; Sweatshirts</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="category-nav">
                      <div className="cate-inner">
                        <h3> WOMEN </h3>
                        <div className="arrow">
                          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMCAtMTg1KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE4NSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAgMTM5LjA5MykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNDguOTA3KSI+PHBhdGggZD0iTTE1Ljg3Nyw0OC45MDcsOSw1NS43ODQsMi4xMjMsNDguOTA3LDAsNTEuMDI5bDksOSw5LTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00OC45MDcpIi8+PC9nPjwvZz48L2c+PC9zdmc+"/>
                        </div>
                        <div className="arrowup">
                          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMy44NzgpIj48cGF0aCBkPSJNMTUuODc3LDYwLjAyOSw5LDUzLjE1MiwyLjEyMyw2MC4wMjksMCw1Ny45MDdsOS05LDksOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjkwNykiLz48L2c+PC9zdmc+"/>
                        </div>
                      </div>
                      <div className="category-img" style={{backgroundImage:'url("https://d30fs77zq6vq2v.cloudfront.net/category/03012021/Women-255987238699.jpg")'}}></div>
                    </div>
                    <div className="child-list">
                      <ul>
                        <li>
                          <div className="child-head">
                            <h3>WESTERN WEAR </h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Tops-_-Tunics-651467559549.jpg" alt="Tops &amp; Tunics"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Tops &amp; Tunics</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-T-shirts-_-Tanktops-1011672759349.jpg" alt="T-shirts &amp; Tanktops"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>T-shirts &amp; Tanktops</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Jeans-1591163790241.jpg" alt="Jeans "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Jeans </span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Pant-_-Trousers-1191939147697.jpg" alt="Pants &amp; Trousers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Pants &amp; Trousers</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Dresses-1284839976064.jpg" alt="Dresses &amp; Skirts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Dresses &amp; Skirts</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/6-Winter-Wear-1277285208215.jpg" alt="Winter Wear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Winter Wear</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/7-Activewear-1144513021539.jpg" alt="Activewear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Activewear</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/8-Coats-_-Blazers-60817697862.jpg" alt="Women Suiting's"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Women Suiting's</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Gym Wear</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="child-head">
                            <h3>ETHNIC WEAR</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Unstitched-1493843955268.jpg" alt="Unstitched"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Unstitched</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Kurtas-_-Shalwar-Kameez-1579662965610.jpg" alt="Shalwar Kameez"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Shalwar Kameez</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Dupattas-_-Shawls-867073790085.jpg" alt="Dupattas &amp; Shawls"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Dupattas &amp; Shawls</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/Bottoms-1013429517683.png" alt="Bottoms "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bottoms </span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Hijabs-_-Abayas-718109868215.jpg" alt="Hijabs &amp; Abayas"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Hijabs &amp; Abayas</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Kurtis-976534028506.jpg" alt="Kurtas"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Kurtas</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/Festive-Wear-425981244328.jpg" alt="Festive Wear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Festive Wear</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/09052022/Women_SummemrCollection-1123528836368.jpg" alt="Summer Collections"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Summer Collections</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="child-head">
                            <h3>LINGERIE &amp; NIGHTWEAR</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Bras-_-Panties-1505347298025.jpg" alt="Bras &amp; Panties"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bras &amp; Panties</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/Shapewear-906202531129.jpg" alt="Shapewear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Shapewear</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Sleepwear-380759470041.jpg" alt="Sleepwear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sleepwear</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Vests,-Camisoles-_-Thermals-788590285150.jpg" alt="Vests, Camisoles &amp; Thermals"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Vests, Camisoles &amp; Thermals</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Bra-243359660829.jpg" alt="Bras"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bras</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Kaftan-549752697441.jpg" alt="Kaftan"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Kaftan</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="child-head">
                            <h3>FOOTWEAR</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Heels-411323959344.jpg" alt="Heels"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Heels</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Flats-1105092547669.jpg" alt="Flats"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Flats</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Pumps-806948265216.jpg" alt="Pumps"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Pumps</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Flip-Flops-755061452038.jpg" alt="Flip Flops"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Flip Flops</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/6-Party-Wear-811918480145.jpg" alt="Party Wear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Party Wear</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/8-Sneakers-52334530637.jpg" alt="Sneakers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sneakers</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/9-Khussa-819518648430.jpg" alt="Khussa"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Khussa</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Sports-Shoes-1296127977380.jpg" alt="Sports Shoes"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sports Shoes</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/10-Sandals-1381349075183.jpg" alt="Sandals"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sandals</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="child-head">
                            <h3>BEAUTY</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Skin-Care-995139168101.jpg" alt="Skin Care "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Skin Care </span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/Hair-Care-459915484166.jpg" alt="Hair Care"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Hair Care</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Fragrances-1571198520135.jpg" alt="Fragrances"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Fragrances</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Tools-1274951286952.jpg" alt="Tools"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Tools</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Makeup-1250425784431.jpg" alt="Makeup"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Makeup</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="child-head">
                            <h3>ACCESSORIES</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Watches-323845952920.jpg" alt="Watches"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Watches</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Jewellery-125686733188.jpg" alt="Jewellery"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Jewellery</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Socks-281270480977.jpg" alt="Socks &amp; Gloves"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Socks &amp; Gloves</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Handbags-1351382462343.jpg" alt="Bags"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bags</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/6-Hair-Clips-_-Tie-1467245183125.jpg" alt="Hair clips &amp; tie"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Hair clips &amp; tie</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/Facemask-80404343480.jpg" alt="Facemasks"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Facemasks</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="category-nav">
                      <div className="cate-inner">
                        <h3> KIDS </h3>
                        <div className="arrow">
                          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMCAtMTg1KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE4NSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAgMTM5LjA5MykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNDguOTA3KSI+PHBhdGggZD0iTTE1Ljg3Nyw0OC45MDcsOSw1NS43ODQsMi4xMjMsNDguOTA3LDAsNTEuMDI5bDksOSw5LTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00OC45MDcpIi8+PC9nPjwvZz48L2c+PC9zdmc+"/>
                        </div>
                        <div className="arrowup">
                          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMy44NzgpIj48cGF0aCBkPSJNMTUuODc3LDYwLjAyOSw5LDUzLjE1MiwyLjEyMyw2MC4wMjksMCw1Ny45MDdsOS05LDksOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjkwNykiLz48L2c+PC9zdmc+"/>
                        </div>
                      </div>
                      <div className="category-img" style={{backgroundImage:'url("https://d30fs77zq6vq2v.cloudfront.net/category/03012021/Kids-317013854153.jpg")'}}></div>
                    </div>
                    <div className="child-list">
                      <ul>
                        <li>
                          <div className="child-head">
                            <h3>GIRL'S CLOTHING</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Dresses-1037201877614.jpg" alt="Dresses"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Dresses</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/09052022/Kids_Bottom-783688179244.jpg" alt="Bottoms"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bottoms</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Tops-_-Tees-121408693523.jpg" alt="Tops &amp; Tees"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Tops &amp; Tees</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Winter-Wear-702869412200.jpg" alt="Winter Wear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Winter Wear</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Festive wear</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>JumpSuit</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Girls-Footwear-219031462889.jpg" alt="Girls Footwear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Girls Footwear</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="child-head">
                            <h3>BOY'S CLOTHING</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Boys-Shirts-716649192612.jpg" alt="Boys Shirts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Boys Shirts</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Tops-_-Tees-1325025498625.jpg" alt="T-shirts"/>
                                  </div>
                                  <div className="sub-cate-name"><span>T-shirts</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link">
                                  <div className="sub-cat-img"><img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Winter-Wear-1642659642680.jpg" alt="Winter Wear"/></div><div className="sub-cate-name"><span>Winter Wear</span></div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link"><div className="sub-cat-img">
                                    
                                  </div><div className="sub-cate-name"><span>Bottoms</span></div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link"><div className="sub-cat-img">
                                    
                                  </div><div className="sub-cate-name"><span>Festive wear</span></div>
                                </a>
                              </li>
                              <li>
                                <a className="sub-category-link"><div className="sub-cat-img"><img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Boys-Footwear3-773446947925.jpg" alt="Boys Footwear"/></div><div className="sub-cate-name"><span>Boys Footwear</span></div></a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="child-head">
                            <h3>KIDS ACCESSORIES</h3>
                          </div>
                          <div className="links-categories">
                            <ul>
                              <li><a className="sub-category-link"><div className="sub-cat-img"><img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Socks-1616892711841.jpg" alt="Socks"/></div><div className="sub-cate-name"><span>Socks</span></div></a></li><li><a className="sub-category-link"><div className="sub-cat-img"><img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Stationery-1166487847816.jpg" alt="Stationery"/></div><div className="sub-cate-name"><span>Stationery</span></div></a></li><li><a className="sub-category-link"><div className="sub-cat-img"><img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Toys-205153132445.jpg" alt="Toys"/></div><div className="sub-cate-name"><span>Toys</span></div></a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="category-nav">
                      <div className="cate-inner">
                        <h3> HOME </h3>
                        <div className="arrow"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMCAtMTg1KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE4NSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAgMTM5LjA5MykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNDguOTA3KSI+PHBhdGggZD0iTTE1Ljg3Nyw0OC45MDcsOSw1NS43ODQsMi4xMjMsNDguOTA3LDAsNTEuMDI5bDksOSw5LTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00OC45MDcpIi8+PC9nPjwvZz48L2c+PC9zdmc+"/></div><div className="arrowup"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMy44NzgpIj48cGF0aCBkPSJNMTUuODc3LDYwLjAyOSw5LDUzLjE1MiwyLjEyMyw2MC4wMjksMCw1Ny45MDdsOS05LDksOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjkwNykiLz48L2c+PC9zdmc+"/></div>
                      </div><div className="category-img" style={{backgroundImage:'url("https://d30fs77zq6vq2v.cloudfront.net/category/03012021/Home-1058149922279.jpg")'}}></div>
                    </div>
                    <div className="child-list"><ul><li><div className="child-head"><h3>BATH </h3></div><div className="links-categories"><ul><li><a className="sub-category-link"><div className="sub-cat-img"><img src="https://d30fs77zq6vq2v.cloudfront.net/category/12092022/1-Bath_Towel-830002814961.jpg" alt="Bath &amp; Hand Towel"/></div><div className="sub-cate-name"><span>Bath &amp; Hand Towel</span></div></a></li></ul></div></li></ul></div>
                  </li>
                  <li>
                  <div className="category-nav">
                  <div className="cate-inner">
                  <h3> BEAUTY </h3>
                  <div className="arrow">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMCAtMTg1KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE4NSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAgMTM5LjA5MykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNDguOTA3KSI+PHBhdGggZD0iTTE1Ljg3Nyw0OC45MDcsOSw1NS43ODQsMi4xMjMsNDguOTA3LDAsNTEuMDI5bDksOSw5LTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00OC45MDcpIi8+PC9nPjwvZz48L2c+PC9zdmc+"/>
                  </div>
                  <div className="arrowup">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMy44NzgpIj48cGF0aCBkPSJNMTUuODc3LDYwLjAyOSw5LDUzLjE1MiwyLjEyMyw2MC4wMjksMCw1Ny45MDdsOS05LDksOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjkwNykiLz48L2c+PC9zdmc+"/>
                  </div>
                  </div>
                  <div className="category-img" style={{backgroundImage:'url("https://d30fs77zq6vq2v.cloudfront.net/category/24012022/L75pdZhwVjAxZC8UcamPX4qp-331684304579-42954128986.jpg")'}}>
                  </div>
                  </div>
                  <div className="child-list">
                  <ul>
                  <li>
                  <div className="child-head">
                  <h3>MAKE UP</h3>
                  </div>
                  <div className="links-categories">
                  <ul>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Face-850773950340.jpg" alt="Face"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Face
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Eyes-1484752010430.jpg" alt="Eyes"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Eyes
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Brush-_-Applicator-168512272914.jpg" alt="Brush &amp; Applicator"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Brush &amp; Applicator
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Lips-146273278870.jpg" alt="Lips"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Lips
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Value-_-Gift-Set-1046163461383.jpg" alt="Value &amp; Gift Set"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>Value &amp; Gift Set</span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/6-Makeup-Accessories-1038011268671.jpg" alt="Makeup Accessories"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Makeup Accessories
                  </span>
                  </div>
                  </a>
                  </li>
                  </ul>
                  </div>
                  </li>
                  <li>
                  <div className="child-head">
                  <h3>
                  SKIN CARE
                  </h3>
                  </div>
                  <div className="links-categories">
                  <ul>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Sun-Care-888337151122.jpg" alt="Sun Care"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Sun Care
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link"><div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Face-Treatment-344529371492.jpg" alt="Face Treatment"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Face Treatment
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link"><div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Cleansers-1193622127182.jpg" alt="Cleansers"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Cleansers
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Value-_-Gift-Set-169153712450.jpg" alt="Value &amp; Gift Set"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Value &amp; Gift Set
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Mask-543627499897.jpg" alt="Mask"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Mask
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/6-Moisturizers-13806478175.jpg" alt="Moisturizers"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Moisturizers
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/7-Eye-Care-1530830830493.jpg" alt="Eye Care"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Eye Care
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link"><div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/8-Lip-Treatment-1168537195551.jpg" alt="Lip Treatment"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  Lip Treatment
                  </span>
                  </div>
                  </a>
                  </li>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/9-High-Tech-Tool-1106897865215.jpg" alt="High Tech Tool"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>
                  High Tech Tool
                  </span>
                  </div>
                  </a>
                  </li>
                  </ul>
                  </div>
                  </li>
                  <li>
                  <div className="child-head">
                  <h3>HAIR CARE</h3>
                  </div>
                  <div className="links-categories">
                  <ul>
                  <li>
                  <a className="sub-category-link">
                  <div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Hair-Styling-_-Treatment-790143383115.jpg" alt="Hair Styling &amp; Treatment"/>
                  </div><div className="sub-cate-name"><span>Hair Styling &amp; Treatment</span></div></a></li><li><a className="sub-category-link"><div className="sub-cat-img"><img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Hair-Tool-1242632818125.jpg" alt="Hair Tool"/>
                  </div><div className="sub-cate-name"><span>Hair Tool</span></div></a></li><li><a className="sub-category-link"><div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Shampoo-_-Conditioner-721484041349.jpg" alt="Shampoo &amp; Conditioner"/>
                  </div>
                  <div className="sub-cate-name"><span>Shampoo &amp; Conditioner</span></div></a></li></ul></div></li><li><div className="child-head"><h3>PERSONAL CARE</h3></div><div className="links-categories"><ul><li><a className="sub-category-link"><div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Feminine-Care-324368917085.jpg" alt="Feminine Care"/>
                  </div>
                  <div className="sub-cate-name"><span>Feminine Care</span></div></a></li><li><a className="sub-category-link"><div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Men-Grooming-1180095820746.jpg" alt="Men Grooming"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>Men Grooming</span>
                  </div></a></li><li>
                  <a className="sub-category-link"><div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Body-Care-107240149029.jpg" alt="Body Care"/>
                  </div>
                  <div className="sub-cate-name">
                  <span>Body Care
                  </span>
                  </div></a></li></ul></div></li><li>
                  <div className="child-head"><h3>FRAGRANCE</h3></div><div className="links-categories"><ul><li><a className="sub-category-link"><div className="sub-cat-img">
                  <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Men-1315680408237.jpg" alt="Men"/>
                  </div><div className="sub-cate-name">
                    <span>Men</span>
                    </div>
                    </a>
                    </li>
                    <li>
                      <a className="sub-category-link"><div className="sub-cat-img">
                        <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Kids-271197393270.jpg" alt="Kids"/>
                        </div>
                        <div className="sub-cate-name">
                          <span>Kids</span>
                          </div>
                          </a>
                          </li>
                          <li>
                            <a className="sub-category-link">
                              <div className="sub-cat-img">
                                <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Women-724096868926.jpg" alt="Women"/>
                                </div>
                                <div className="sub-cate-name">
                                  <span>Women</span>
                                  </div>
                                  </a>
                                  </li>
                                  <li>
                                    <a className="sub-category-link">
                                      <div className="sub-cat-img">
                                        <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/Aromatic-Products-1135473568317.jpg" alt="Aromatic Product"/>
                                        </div>
                                        <div className="sub-cate-name">
                                          <span>Aromatic Product</span>
                                          </div>
                                          </a>
                                          </li>
                                          </ul>
                                          </div>
                                          </li>
                                          <li>
                                            <div className="child-head">
                                              <h3>BATH &amp; BODY</h3>
                                              </div>
                                              <div className="links-categories">
                                                <ul>
                                                  <li>
                                                    <a className="sub-category-link">
                                                      <div className="sub-cat-img">
                                                        <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Bath-_-Shower-726517204063.jpg" alt="Bath &amp; Shower"/>
                                                        </div><div className="sub-cate-name"><span>Bath &amp; Shower</span></div></a></li><li><a className="sub-category-link"><div className="sub-cat-img"><img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Body-Moisturizer-542779519742.jpg" alt="Body Care"/></div><div className="sub-cate-name"><span>Body Care</span></div></a></li><li><a className="sub-category-link"><div className="sub-cat-img"><img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Body-Moisturizer-917894770861.jpg" alt="Body Moisturizer"/></div><div className="sub-cate-name"><span>Body Moisturizer</span></div></a></li></ul></div></li><li><div className="child-head"><h3>MOTHER &amp; BABY CARE</h3></div><div className="links-categories"><ul><li><a className="sub-category-link"><div className="sub-cat-img"><img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Kids-And-Baby-Care-334578841703.jpg" alt="Kids And Baby Care"/>
                                                        </div><div className="sub-cate-name"><span>Kids And Baby Care</span></div></a></li></ul></div></li></ul></div></li><li><a href="/new-arrivals?page=1"><div className="image-subcate"><h3 className="cate-title">New Arrivals</h3></div></a></li>
                </ul>
              </div>
            </div>
          </div>

          <header className="only-mobile">
            <div className="showHeader header h-mobile-fixed" style={{zIndex: "14"}} >
              <div className="container" style={{height: "35px"}} >
                <div style={{display: "flex"}}>
                  <button className="div-height arrow-back logo-effect" style={{paddingLeft: "0px"}}>
                    <img src="images/arrow-right.svg" alt="" className="btn logo-effect"/>
                  </button>
                  <div className="div-height" style={{width: "95px", paddingRight: "14px", paddingLeft: "10px"}}>
                    <a href="/" className="img logo-effect router-link-active">
                      <img src="images/sehgal-logo.png" alt=""/>
                    </a>
                  </div>
                </div>
                <div className="form" >
                  <form >
                    <div className="input" >
                      <input type="search" placeholder="Search for items, brands and inspiration" value /><button aria-label="search" ><svg viewbox="0 0 17 17" >
                      <title >
                        Search
                      </title>
                      <path fill="currentColor" fill-rule="nonzero" d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z" data-v-8c18c444></path></svg></button>
                    </div>
                  </form>
                </div>
                <nav className="user_links" style={{position:"relative",top:"-8px"}} >
                  <a aria-label="search" className="only-mobile" ><svg xmlns="http: //www.w3.org/2000/svg" width="17" height="17" viewbox="0 0 17 17" >
                  <path fill="#000" fill-rule="nonzero" d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z" data-v-8c18c444></path></svg></a><a href="/notifications" className="only-mobile" ><span style={{position:"relative"}} ><img src="images/notification.e7d837a.svg" /></span></a>
                  <div className="mobile-wishlist" >
                    <svg xmlns="http: //www.w3.org/2000/svg" viewbox="0 0 20 18" >
                    <path fill="#000" fill-rule="nonzero" d="M10.618 15.474a21.327 21.327 0 0 0 3.137-2.076c2.697-2.166 4.249-4.619 4.245-7.299-.003-2.284-1.757-4.101-3.881-4.099-1.016 0-1.97.417-2.69 1.158l-1.43 1.467-1.432-1.463a3.748 3.748 0 0 0-2.695-1.151C3.749 2.013 1.998 3.837 2 6.12c.003 2.677 1.559 5.123 4.256 7.281a21.32 21.32 0 0 0 3.756 2.39c.191-.096.394-.202.606-.318zM9.996 1.763l.203-.2A5.726 5.726 0 0 1 14.116 0c3.246-.004 5.88 2.725 5.884 6.097C20.01 13.845 10.014 18 10.014 18S.01 13.87 0 6.124C-.003 2.752 2.624.014 5.87.01A5.733 5.733 0 0 1 9.79 1.564l.205.199z" data-v-8c18c444></path></svg>
                  </div><span className="cart__icon" ><svg xmlns="http: //www.w3.org/2000/svg" viewbox="0 0 20 20" >
                  <path fill="#000" fill-rule="nonzero" d="M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0 1 10 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z" data-v-8c18c444></path></svg></span>
                </nav>
              </div>
            </div>
            <div id="scrollViews" className="main-search" style={{display:"none"}}  >
              <div className="search-input-area" >
                <div style={{width:"100%", borderRadius:".08rem",boxSizing:"border-box"}} >
                  <form autocomplete="off" style={{background:"#f2f2f2", display:"flex" ,paddingLeft:"10px" }}>
                    <div className="display-flex-center-content" >
                      <div className="align-self" >
                        <div className="search-icon-box" ></div>
                      </div>
                    </div>
                    <div style={{width:"100%", marginLeft:".26666667rem"}} >
                      <input type="text" placeholder="Search for item" value className="search-input"/ >
                    </div>
                  </form>
                </div>
                <div className="display-flex-center-content" style={{paddingLeft:"10px"}} >
                  <span className="align-self" style={{color:"#0e0d0d73", fontSize:"11px"}} >Cancel</span>
                </div>
              </div>
              <div className="tags" >
                <div className="title" >
                  <span >Popular Searches</span>
                </div>
                <div className="list-tags" style={{width:"100%",display:"flex",flexWrap:"wrap"}} >
                  <div className="chip" >
                    scalloped swimwear
                  </div>
                  <div className="chip" >
                    party
                  </div>
                  <div className="chip" >
                    fluffy
                  </div>
                  <div className="chip" >
                    crop tops
                  </div>
                  <div className="chip" >
                    tees
                  </div>
                  <div className="chip" >
                    jeans
                  </div>
                  <div className="chip" >
                    intimates
                  </div>
                  <div className="chip" >
                    twist sweaters
                  </div>
                </div>
              </div>
            </div>
          </header>
            
          <header className="only-desktop">
            <div className="sidebar only-mobile hidden">
              <div className="mob-search">
                <div className="search-icon-box"></div>
                <p>
                  Search of item
                </p>
              </div>
              <div id="scrollViews" className="main-search" style={{display:"none"}} >
                <div className="search-input-area" >
                  <div style={{width:"100%",borderRadius:".08rem",boxSizing:"border-box"}} >
                    <form autocomplete="off" style={{background:"#f2f2f2", display:"flex", paddingLeft:"10px"}} >
                      <div className="display-flex-center-content" >
                        <div className="align-self" >
                          <div className="search-icon-box" ></div>
                        </div>
                      </div>
                      <div style={{width:"100%", marginLeft:".26666667rem"}} >
                        <input type="text" placeholder="Search for item" value className="search-input" />
                      </div>
                    </form>
                  </div>
                  <div className="display-flex-center-content" style={{paddingLeft:"10px"}} >
                    <span className="align-self" style={{color:"#0e0d0d73",fontSize:"11px" }}>Cancel</span>
                  </div>
                </div>
                <div className="tags" >
                  <div className="title" >
                    <span >Popular Searches</span>
                  </div>
                  <div className="list-tags" style={{width:"100%",display:"flex",flexWrap:"wrap"}} >
                    <div className="chip" >
                      scalloped swimwear
                    </div>
                    <div className="chip" >
                      party
                    </div>
                    <div className="chip" >
                      fluffy
                    </div>
                    <div className="chip" >
                      crop tops
                    </div>
                    <div className="chip" >
                      tees
                    </div>
                    <div className="chip" >
                      jeans
                    </div>
                    <div className="chip" >
                      intimates
                    </div>
                    <div className="chip" >
                      twist sweaters
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="mob-list">
                  <ul>
                    <li>
                      <div className="category-nav">
                        <div className="cate-inner">
                          <h3>
                            MEN
                          </h3>
                          <div className="arrow">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMCAtMTg1KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE4NSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAgMTM5LjA5MykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNDguOTA3KSI+PHBhdGggZD0iTTE1Ljg3Nyw0OC45MDcsOSw1NS43ODQsMi4xMjMsNDguOTA3LDAsNTEuMDI5bDksOSw5LTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00OC45MDcpIi8+PC9nPjwvZz48L2c+PC9zdmc+"/>
                          </div>
                          <div className="arrowup">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMy44NzgpIj48cGF0aCBkPSJNMTUuODc3LDYwLjAyOSw5LDUzLjE1MiwyLjEyMyw2MC4wMjksMCw1Ny45MDdsOS05LDksOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjkwNykiLz48L2c+PC9zdmc+"/>
                          </div>
                        </div>
                        <div className="category-img" style={{backgroundImage:'url("https://d30fs77zq6vq2v.cloudfront.net/category/03012021/Men-1270783577199.jpg")'}}></div>
                      </div>
                      <div className="child-list">
                        <ul>
                          <li>
                            <div className="child-head">
                              <h3>
                                CLOTHING
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/1-Shirt-1157795563315.jpg" alt="Shirts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Shirts</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/2-T-Shirts-1445641635344.jpg" alt="T-Shirts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>T-Shirts</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/3-Jeans-406453109697.jpg" alt="Jeans "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Jeans</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/4-Pants-931413044989.jpg" alt="Pants"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Pants</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/5-Activewear-667523462024.jpg" alt="Activewear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Activewear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/6-TraditionalClothing-968997742424.jpg" alt="Traditional Clothing"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Traditional Clothing</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/7-Shorts-1257473590365.jpg" alt="Shorts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Shorts</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/8-Sleep-&amp;-Lounge-1600610410211.jpg" alt="Sleep &amp; Lounge"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sleep &amp; Lounge</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/9-Boxers-1608192210277.jpg" alt="Boxers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Boxers</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                FOOTWEAR
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/1-Casual-Shoes-129254429712.jpg" alt="Casual Shoes"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Casual Shoes</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/2-Sports-Shoes-1605714980676.jpg" alt="Sports Shoes"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sports Shoes</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/3-Formal-Shoes-1470655614006.jpg" alt="Formal Shoes"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Formal Shoes</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/4-PeshawariChappal-1456314230229.jpg" alt="Peshawari"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Peshawari</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/5-Sandals-608586312597.jpg" alt="Sandals"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sandals</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/6-Sneakers-494107153594.jpg" alt="Sneakers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sneakers</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/7-Slippers-1014987392520.jpg" alt="Slippers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Slippers</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                ACCESSORIES
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/1-Wallets-436296049905.jpg" alt="Wallets"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Wallets</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/2-Ties-&amp;-Cufflinks-418775770458.jpg" alt="Ties &amp; Cufflinks"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Ties &amp; Cufflinks</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/3-Belts-&amp;-Key-chains-1273696948655.jpg" alt="Belts &amp; Key chains"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Belts &amp; Key chains</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/4-Fragrances-827959801124.jpg" alt="Fragrances "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Fragrances</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/5-Socks-&amp;-Gloves-647929888791.jpg" alt="Socks &amp; Gloves"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Socks &amp; Gloves</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/6-Eyewear-237004984331.jpg" alt="Eyewear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Eyewear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/7-Caps-&amp;-Hats-1429245738983.jpg" alt="Caps &amp; Hats"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Caps &amp; Hats</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/8-Jewellery-250102422022.jpg" alt="Jewelry "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Jewelry</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/bags-130503660229.png" alt="Bags"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bags</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/9-Watches-1484824407106.jpg" alt="Watches"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Watches</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/10-Facemasks-11769147843.jpg" alt="Facemasks"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Facemasks</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                WINTER WEAR
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/1-Jackets-323663367412.jpg" alt="Jackets "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Jackets</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/2-Hoodies-1358128538798.jpg" alt="Hoodies"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Hoodies</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/3-Sweaters-&amp;-Sweatshirts-683337996110.jpg" alt="Sweaters &amp; Sweatshirts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sweaters &amp; Sweatshirts</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="category-nav">
                        <div className="cate-inner">
                          <h3>
                            WOMEN
                          </h3>
                          <div className="arrow">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMCAtMTg1KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE4NSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAgMTM5LjA5MykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNDguOTA3KSI+PHBhdGggZD0iTTE1Ljg3Nyw0OC45MDcsOSw1NS43ODQsMi4xMjMsNDguOTA3LDAsNTEuMDI5bDksOSw5LTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00OC45MDcpIi8+PC9nPjwvZz48L2c+PC9zdmc+"/>
                          </div>
                          <div className="arrowup">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMy44NzgpIj48cGF0aCBkPSJNMTUuODc3LDYwLjAyOSw5LDUzLjE1MiwyLjEyMyw2MC4wMjksMCw1Ny45MDdsOS05LDksOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjkwNykiLz48L2c+PC9zdmc+"/>
                          </div>
                        </div>
                        <div className="category-img" style={{backgroundImage:'url("https://d30fs77zq6vq2v.cloudfront.net/category/03012021/Women-255987238699.jpg")'}}></div>
                      </div>
                      <div className="child-list">
                        <ul>
                          <li>
                            <div className="child-head">
                              <h3>
                                WESTERN WEAR
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Tops-_-Tunics-651467559549.jpg" alt="Tops &amp; Tunics"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Tops &amp; Tunics</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-T-shirts-_-Tanktops-1011672759349.jpg" alt="T-shirts &amp; Tanktops"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>T-shirts &amp; Tanktops</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Jeans-1591163790241.jpg" alt="Jeans "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Jeans</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Pant-_-Trousers-1191939147697.jpg" alt="Pants &amp; Trousers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Pants &amp; Trousers</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Dresses-1284839976064.jpg" alt="Dresses &amp; Skirts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Dresses &amp; Skirts</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/6-Winter-Wear-1277285208215.jpg" alt="Winter Wear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Winter Wear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/7-Activewear-1144513021539.jpg" alt="Activewear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Activewear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/8-Coats-_-Blazers-60817697862.jpg" alt="Women Suiting's"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Women Suiting's</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img"></div>
                                  <div className="sub-cate-name">
                                    <span>Gym Wear</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                ETHNIC WEAR
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Unstitched-1493843955268.jpg" alt="Unstitched"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Unstitched</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Kurtas-_-Shalwar-Kameez-1579662965610.jpg" alt="Shalwar Kameez"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Shalwar Kameez</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Dupattas-_-Shawls-867073790085.jpg" alt="Dupattas &amp; Shawls"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Dupattas &amp; Shawls</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/Bottoms-1013429517683.png" alt="Bottoms "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bottoms</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Hijabs-_-Abayas-718109868215.jpg" alt="Hijabs &amp; Abayas"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Hijabs &amp; Abayas</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Kurtis-976534028506.jpg" alt="Kurtas"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Kurtas</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/Festive-Wear-425981244328.jpg" alt="Festive Wear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Festive Wear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/09052022/Women_SummemrCollection-1123528836368.jpg" alt="Summer Collections"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Summer Collections</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                LINGERIE &amp; NIGHTWEAR
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Bras-_-Panties-1505347298025.jpg" alt="Bras &amp; Panties"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bras &amp; Panties</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/Shapewear-906202531129.jpg" alt="Shapewear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Shapewear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Sleepwear-380759470041.jpg" alt="Sleepwear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sleepwear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Vests,-Camisoles-_-Thermals-788590285150.jpg" alt="Vests, Camisoles &amp; Thermals"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Vests, Camisoles &amp; Thermals</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Bra-243359660829.jpg" alt="Bras"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bras</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Kaftan-549752697441.jpg" alt="Kaftan"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Kaftan</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                FOOTWEAR
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Heels-411323959344.jpg" alt="Heels"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Heels</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Flats-1105092547669.jpg" alt="Flats"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Flats</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Pumps-806948265216.jpg" alt="Pumps"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Pumps</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Flip-Flops-755061452038.jpg" alt="Flip Flops"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Flip Flops</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/6-Party-Wear-811918480145.jpg" alt="Party Wear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Party Wear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/8-Sneakers-52334530637.jpg" alt="Sneakers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sneakers</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/9-Khussa-819518648430.jpg" alt="Khussa"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Khussa</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Sports-Shoes-1296127977380.jpg" alt="Sports Shoes"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sports Shoes</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/10-Sandals-1381349075183.jpg" alt="Sandals"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sandals</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                BEAUTY
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Skin-Care-995139168101.jpg" alt="Skin Care "/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Skin Care</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/Hair-Care-459915484166.jpg" alt="Hair Care"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Hair Care</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Fragrances-1571198520135.jpg" alt="Fragrances"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Fragrances</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Tools-1274951286952.jpg" alt="Tools"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Tools</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Makeup-1250425784431.jpg" alt="Makeup"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Makeup</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                ACCESSORIES
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Watches-323845952920.jpg" alt="Watches"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Watches</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Jewellery-125686733188.jpg" alt="Jewellery"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Jewellery</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Socks-281270480977.jpg" alt="Socks &amp; Gloves"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Socks &amp; Gloves</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Handbags-1351382462343.jpg" alt="Bags"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bags</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/6-Hair-Clips-_-Tie-1467245183125.jpg" alt="Hair clips &amp; tie"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Hair clips &amp; tie</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/Facemask-80404343480.jpg" alt="Facemasks"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Facemasks</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="category-nav">
                        <div className="cate-inner">
                          <h3>
                            KIDS
                          </h3>
                          <div className="arrow">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMCAtMTg1KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE4NSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAgMTM5LjA5MykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNDguOTA3KSI+PHBhdGggZD0iTTE1Ljg3Nyw0OC45MDcsOSw1NS43ODQsMi4xMjMsNDguOTA3LDAsNTEuMDI5bDksOSw5LTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00OC45MDcpIi8+PC9nPjwvZz48L2c+PC9zdmc+"/>
                          </div>
                          <div className="arrowup">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMy44NzgpIj48cGF0aCBkPSJNMTUuODc3LDYwLjAyOSw5LDUzLjE1MiwyLjEyMyw2MC4wMjksMCw1Ny45MDdsOS05LDksOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjkwNykiLz48L2c+PC9zdmc+"/>
                          </div>
                        </div>
                        <div className="category-img" style={{backgroundImage:'url("https://d30fs77zq6vq2v.cloudfront.net/category/03012021/Kids-317013854153.jpg")'}}></div>
                      </div>
                      <div className="child-list">
                        <ul>
                          <li>
                            <div className="child-head">
                              <h3>
                                GIRL'S CLOTHING
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Dresses-1037201877614.jpg" alt="Dresses"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Dresses</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/09052022/Kids_Bottom-783688179244.jpg" alt="Bottoms"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bottoms</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Tops-_-Tees-121408693523.jpg" alt="Tops &amp; Tees"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Tops &amp; Tees</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Winter-Wear-702869412200.jpg" alt="Winter Wear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Winter Wear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img"></div>
                                  <div className="sub-cate-name">
                                    <span>Festive wear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img"></div>
                                  <div className="sub-cate-name">
                                    <span>JumpSuit</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Girls-Footwear-219031462889.jpg" alt="Girls Footwear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Girls Footwear</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                BOY'S CLOTHING
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Boys-Shirts-716649192612.jpg" alt="Boys Shirts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Boys Shirts</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Tops-_-Tees-1325025498625.jpg" alt="T-shirts"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>T-shirts</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Winter-Wear-1642659642680.jpg" alt="Winter Wear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Winter Wear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img"></div>
                                  <div className="sub-cate-name">
                                    <span>Bottoms</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img"></div>
                                  <div className="sub-cate-name">
                                    <span>Festive wear</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Boys-Footwear3-773446947925.jpg" alt="Boys Footwear"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Boys Footwear</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                KIDS ACCESSORIES
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Socks-1616892711841.jpg" alt="Socks"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Socks</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Stationery-1166487847816.jpg" alt="Stationery"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Stationery</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Toys-205153132445.jpg" alt="Toys"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Toys</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="category-nav">
                        <div className="cate-inner">
                          <h3>
                            HOME
                          </h3>
                          <div className="arrow">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMCAtMTg1KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE4NSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAgMTM5LjA5MykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNDguOTA3KSI+PHBhdGggZD0iTTE1Ljg3Nyw0OC45MDcsOSw1NS43ODQsMi4xMjMsNDguOTA3LDAsNTEuMDI5bDksOSw5LTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00OC45MDcpIi8+PC9nPjwvZz48L2c+PC9zdmc+"/>
                          </div>
                          <div className="arrowup">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMy44NzgpIj48cGF0aCBkPSJNMTUuODc3LDYwLjAyOSw5LDUzLjE1MiwyLjEyMyw2MC4wMjksMCw1Ny45MDdsOS05LDksOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjkwNykiLz48L2c+PC9zdmc+"/>
                          </div>
                        </div>
                        <div className="category-img" style={{backgroundImage:'url("https://d30fs77zq6vq2v.cloudfront.net/category/03012021/Home-1058149922279.jpg")'}}></div>
                      </div>
                      <div className="child-list">
                        <ul>
                          <li>
                            <div className="child-head">
                              <h3>
                                BATH
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/12092022/1-Bath_Towel-830002814961.jpg" alt="Bath &amp; Hand Towel"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bath &amp; Hand Towel</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="category-nav">
                        <div className="cate-inner">
                          <h3>
                            BEAUTY
                          </h3>
                          <div className="arrow">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMCAtMTg1KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE4NSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAgMTM5LjA5MykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNDguOTA3KSI+PHBhdGggZD0iTTE1Ljg3Nyw0OC45MDcsOSw1NS43ODQsMi4xMjMsNDguOTA3LDAsNTEuMDI5bDksOSw5LTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00OC45MDcpIi8+PC9nPjwvZz48L2c+PC9zdmc+"/>
                          </div>
                          <div className="arrowup">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMy44NzgpIj48cGF0aCBkPSJNMTUuODc3LDYwLjAyOSw5LDUzLjE1MiwyLjEyMyw2MC4wMjksMCw1Ny45MDdsOS05LDksOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjkwNykiLz48L2c+PC9zdmc+"/>
                          </div>
                        </div>
                        <div className="category-img" style={{backgroundImage:'url("https://d30fs77zq6vq2v.cloudfront.net/category/24012022/L75pdZhwVjAxZC8UcamPX4qp-331684304579-42954128986.jpg")'}}></div>
                      </div>
                      <div className="child-list">
                        <ul>
                          <li>
                            <div className="child-head">
                              <h3>
                                MAKE UP
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Face-850773950340.jpg" alt="Face"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Face</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Eyes-1484752010430.jpg" alt="Eyes"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Eyes</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Brush-_-Applicator-168512272914.jpg" alt="Brush &amp; Applicator"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Brush &amp; Applicator</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Lips-146273278870.jpg" alt="Lips"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Lips</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Value-_-Gift-Set-1046163461383.jpg" alt="Value &amp; Gift Set"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Value &amp; Gift Set</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/6-Makeup-Accessories-1038011268671.jpg" alt="Makeup Accessories"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Makeup Accessories</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                SKIN CARE
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Sun-Care-888337151122.jpg" alt="Sun Care"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Sun Care</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Face-Treatment-344529371492.jpg" alt="Face Treatment"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Face Treatment</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Cleansers-1193622127182.jpg" alt="Cleansers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Cleansers</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/4-Value-_-Gift-Set-169153712450.jpg" alt="Value &amp; Gift Set"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Value &amp; Gift Set</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/5-Mask-543627499897.jpg" alt="Mask"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Mask</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/6-Moisturizers-13806478175.jpg" alt="Moisturizers"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Moisturizers</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/7-Eye-Care-1530830830493.jpg" alt="Eye Care"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Eye Care</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/8-Lip-Treatment-1168537195551.jpg" alt="Lip Treatment"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Lip Treatment</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/9-High-Tech-Tool-1106897865215.jpg" alt="High Tech Tool"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>High Tech Tool</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                HAIR CARE
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Hair-Styling-_-Treatment-790143383115.jpg" alt="Hair Styling &amp; Treatment"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Hair Styling &amp; Treatment</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Hair-Tool-1242632818125.jpg" alt="Hair Tool"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Hair Tool</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Shampoo-_-Conditioner-721484041349.jpg" alt="Shampoo &amp; Conditioner"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Shampoo &amp; Conditioner</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                PERSONAL CARE
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Feminine-Care-324368917085.jpg" alt="Feminine Care"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Feminine Care</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Men-Grooming-1180095820746.jpg" alt="Men Grooming"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Men Grooming</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Body-Care-107240149029.jpg" alt="Body Care"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Body Care</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                FRAGRANCE
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Men-1315680408237.jpg" alt="Men"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Men</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Kids-271197393270.jpg" alt="Kids"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Kids</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/3-Women-724096868926.jpg" alt="Women"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Women</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/20042022/Aromatic-Products-1135473568317.jpg" alt="Aromatic Product"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Aromatic Product</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                BATH &amp; BODY
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Bath-_-Shower-726517204063.jpg" alt="Bath &amp; Shower"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Bath &amp; Shower</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Body-Moisturizer-542779519742.jpg" alt="Body Care"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Body Care</span>
                                  </div></a>
                                </li>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/2-Body-Moisturizer-917894770861.jpg" alt="Body Moisturizer"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Body Moisturizer</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="child-head">
                              <h3>
                                MOTHER &amp; BABY CARE
                              </h3>
                            </div>
                            <div className="links-categories">
                              <ul>
                                <li>
                                  <a className="sub-category-link">
                                  <div className="sub-cat-img">
                                    <img src="https://d30fs77zq6vq2v.cloudfront.net/category/16042022/1-Kids-And-Baby-Care-334578841703.jpg" alt="Kids And Baby Care"/>
                                  </div>
                                  <div className="sub-cate-name">
                                    <span>Kids And Baby Care</span>
                                  </div></a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="/new-arrivals?page=1">
                      <div className="image-subcate">
                        <h3 className="cate-title">
                          New Arrivals
                        </h3>
                      </div></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          
          
          <main className="account_layout">
            <div className="layout default-layout">
              <div className="sidebar__ only-desktop">
                <div className="card hello">
                  <div className="img">S</div>
                  <div className="text user-profile-hi">
                    <p style={{marginRight: "5px"}}>Hi,</p>
                    <h4>Shahid</h4>
                  </div>
                </div>
                <div className="card nav">
                  <a href="/my/account" aria-current="page" className="router-link-exact-active active">
                   <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBmaWxsPSIjMkQyRDJEIiBkPSJNMTAgMmE0IDQgMCAxIDAgMCA4IDQgNCAwIDAgMCAwLTh6bTAgMTBhNiA2IDAgMSAxIDAtMTIgNiA2IDAgMCAxIDAgMTJ6bTcuNjc4IDhMMTkgMTguNDY4YTYuODA5IDYuODA5IDAgMCAwLS4yMDctLjQ2OEguMjA3Yy0uMDc1LjE1NC0uMTQ0LjMxLS4yMDcuNDY4TDEuMzIyIDIwaC4yODJjLjU2NC0yLjc5MiAzLjgxNC01IDcuODk2LTVzNy4zMzIgMi4yMDggNy44OTYgNWguMjgyek0wIDIwaDIwYy0uNTUzLTQuMDA2LTQuODE5LTctMTAtN1MuNTUzIDE1Ljk5NCAwIDIweiIvPjwvc3ZnPg==" alt=""/>
                     <span>
                      Account Overview
                      </span>
                  </a>
                </div>
                <div>
                  <div className="card nav wallet-nav">
                    <div className="wallet-container">
                      <div className="image-new">
                        <img src="images/smallicon.741101c.svg" alt="" className="wallet_img"/>
                      </div>
                      <div className="acount-wallet">
                        <span className="wallet-blance"> PKR. 0 </span>
                      </div>
                    </div>
                    <div className="wallet-menu activate-btn">
                      <button className="btn-effect"> Activate My Wallet </button>
                    </div>
                  </div>
                </div>
                <div className="card nav">
                  <a href="/my/referral" className="wallet-refer">
                   <img src="images/refer.53ab08b.svg" alt="" style={{width: "30px", height: "30px"}}/>
                    <div className="referral-link">
                      <span>Referrals</span>
                      <div className="refer-container">
                        <div className="totall-earning">
                          <span>Total Earning</span>
                          <h2>Rs. 0</h2>
                        </div>
                        <div>
                          <img src="images/money-icon.5e128b1.svg"/>
                        </div>
                      </div>
                      <div className="progress-bar">
                        <progress max="100000" value="0"></progress>
                        <p>Earn up to Rs. 1 Lakh by inviting all your contacts</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/my/vouchers?tab=collected" className="">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJxSURBVEiJrdRfaJdlFAfwj9tP2ZYY6iT5zVrD/ijNi1gSWN6oF5EWRF6otJLuwmsZFv0hIqK8md0WBOvGCymRwCy7UjChWYL4E3FDackcaEQXNhl18Zx3e/bu/YE/8wsvz/Occ57vec6f9zAfHf4/ljRTDOImTrRAtgxb8TaOYgKjucGibP8VrmEf6vinRNaOdRiI7zmsxjn8Et8p/IZ+/FV+zdpwsifOdbyED3AMvwfBMF7HU02i+gZbikNbrA9gDS7g1YhkHHtxHe/iUTwfDqfxDg6UyFfFt8D5eXwfl7bhQXyBnZnNIH6KSL7EK1iO7dgQNicwpKLQR6Ri5XgLH2fnl/Gs1GnbpXT+EXefDvlEmbhI0dm4nGNUKmZhNxNOx/AmjuMJKaXnpLRNh2wBNmMKX6MvZJ1S/mE9DmMXllYRBF6U6vcDNpWVvXgDF1EL2a9ScVvBMryHg6T/oAs/x0rqpknckfr8T9xu0UknFqO3FsQdeKZFkhyX8XhJdhZdRSpmcKtkcAlP3qWDfyvuzzDXRTXzxwapYAU2YkeFTTMsMldHHTiNhrm2hO9ifQxXcQavSSkdwYrMdirbD0jRn1aazpvDSfHKF2Ltk1pvVOqyk/i09OIPs5c3pJFSifPoif1wJu8PhyfxGR4q3SsGZI80TWfRlu3rUtg34vxjphvDfmkkr5P+3KFMX3TQDawMrlnU4lXj2J3J87x+go9iPyml5NtM/34pmvHgbIduaUg9bD6mVGMrDknFz0lzPBKc3YWDRgVRMwdVGKmQNdDdVqG4F3zeTFGTRmwvrpR0yytkraCO6aLnl0rD6X7iDv7+Dw0jezSi4M0oAAAAAElFTkSuQmCC" alt=""/>
                    <span>Vouchers</span>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/my/change-password" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDIyIDE4Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTZoMThWMkgydjE0ek0wIDBoMjJ2MThIMFYweiIvPjxwYXRoIGQ9Ik0xMiA1aDR2MWgtNHptMCAzaDZ2MWgtNnptMCAzaDZ2MWgtNnpNOSA3YTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMHptLTIgM2MtMS41NTQgMC0yLjgzNCAxLjI4My0zIDNoNmMtLjE2Ni0xLjcxNy0xLjQ0Ni0zLTMtM3oiLz48L2c+PC9zdmc+" alt=""/>
                    <span>Change Password</span>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/my/orders?tab=Dispatched" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg==" alt=""/>
                    <span>My Orders</span>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/my/disputes?tab=processing" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg==" alt=""/>
                    <span>
                      Return &amp; Refunds
                    </span>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/my/details" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDIyIDE4Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTZoMThWMkgydjE0ek0wIDBoMjJ2MThIMFYweiIvPjxwYXRoIGQ9Ik0xMiA1aDR2MWgtNHptMCAzaDZ2MWgtNnptMCAzaDZ2MWgtNnpNOSA3YTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMHptLTIgM2MtMS41NTQgMC0yLjgzNCAxLjI4My0zIDNoNmMtLjE2Ni0xLjcxNy0xLjQ0Ni0zLTMtM3oiLz48L2c+PC9zdmc+" alt=""/>
                    <span>
                      My details
                    </span>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/my/earnings" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg==" alt=""/>
                    <span>
                      My Earnings
                    </span>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/my/address" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE4IDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMThoMTRWOC4zMTZMOSAyLjU4NWwtNyA1LjczVjE4ek0wIDcuMzY4TDkgMGw5IDcuMzY4VjIwSDBWNy4zNjh6Ii8+PHBhdGggZD0iTTExIDloMnYyaC0yem0tNCA0aDR2Nkg3eiIvPjwvZz48L3N2Zz4=" alt=""/>
                    <span>
                      Address book
                    </span>
                  </a>
                </div>
                <div className="card nav">
                  <a active-className="active">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDIwIDE3Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOS45NjUuMXYxNi44aC05LjQ0MXYtMi4wNjdoNy4zODhzLjA0LTEyLjY4OSAwLTEyLjY4OWgtNy4zODhWLjFoOS40NDF6Ii8+PHBhdGggZD0iTTIuMTQzIDkuNTV2LTIuMWgxMS41MjR2Mi4xeiIvPjxwYXRoIGQ9Ik0xLjUyNSAxMC4wMzRsLS4wMDIuMDAyTC4wNDIgOC41NTRsLjAwMS0uMDAxLS4wMDEtLjAwMkwxLjUyMyA3LjA3bC4wMDIuMDAxIDMuNzE0LTMuNzE0TDYuNzIxIDQuODQgMy4wMDcgOC41NTNsMy43MTQgMy43MTQtMS40ODIgMS40ODEtMy43MTQtMy43MTR6Ii8+PC9nPjwvc3ZnPg==" alt=""/>
                    <span>
                      Sign out
                    </span>
                  </a>
                </div>
              </div>
              <div className="content">
                <div  id="change-password" className="change-password">
                  <div  className="card">
                    <div  className="my-detail">
                      <h1 >
                        <span >
                          <img  src="images/arrow-right.svg"/>
                          </span>
                          Change Password
                        </h1>
                      </div>
                    <form  novalidate="novalidate" autocomplete="off">
                      <div  className="form">
                        <div  className="margin">
                          <label >
                            New Password
                          </label>
                          <input  type="text" name="newPassword" placeholder="Set password" aria-required="true" aria-invalid="false"/>
                        </div>
                        <div  className="margin">
                          <label >
                            Confirm Password
                          </label>
                          <input  type="text" name="newPassword1" placeholder="Confirm Password" aria-required="true" aria-invalid="false"/>
                        </div>
                        <div  className="margin">
                          <button  type="submit" className="btn dark btn-effect" style={{marginLeft: "0px"}}>
                            <span >
                              Update
                              </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>          
        </div>
      </div>
  )
} 
export default Change;




