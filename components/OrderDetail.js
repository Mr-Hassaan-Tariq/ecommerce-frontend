
const OrderDetails = () => {
  return (
    <>
      <main className="account_layout">
        <div className="layout default-layout">
          <div className="sidebar__ only-desktop">
            <div className="card hello">
              <div className="img">S</div>
              <div className="text user-profile-hi">
                <p style={{ marginRight: "5px" }}>Hi,</p>
                <h4>Shahid</h4>
              </div>
            </div>
            <div className="card nav">
              <a
                href="/my/account"
                aria-current="page"
                className="router-link-exact-active active"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBmaWxsPSIjMkQyRDJEIiBkPSJNMTAgMmE0IDQgMCAxIDAgMCA4IDQgNCAwIDAgMCAwLTh6bTAgMTBhNiA2IDAgMSAxIDAtMTIgNiA2IDAgMCAxIDAgMTJ6bTcuNjc4IDhMMTkgMTguNDY4YTYuODA5IDYuODA5IDAgMCAwLS4yMDctLjQ2OEguMjA3Yy0uMDc1LjE1NC0uMTQ0LjMxLS4yMDcuNDY4TDEuMzIyIDIwaC4yODJjLjU2NC0yLjc5MiAzLjgxNC01IDcuODk2LTVzNy4zMzIgMi4yMDggNy44OTYgNWguMjgyek0wIDIwaDIwYy0uNTUzLTQuMDA2LTQuODE5LTctMTAtN1MuNTUzIDE1Ljk5NCAwIDIweiIvPjwvc3ZnPg=="
                  alt=""
                />
                <span>Account Overview</span>
              </a>
            </div>
            <div>
              <div className="card nav wallet-nav">
                <div className="wallet-container">
                  <div className="image-new">
                    <img
                      src="images/smallicon.741101c.svg"
                      alt=""
                      className="wallet_img"
                    />
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
                <img
                  src="images/refer.53ab08b.svg"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="referral-link">
                  <span>Referrals</span>
                  <div className="refer-container">
                    <div className="totall-earning">
                      <span>Total Earning</span>
                      <h2>Rs. 0</h2>
                    </div>
                    <div>
                      <img src="images/money-icon.5e128b1.svg" />
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
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJxSURBVEiJrdRfaJdlFAfwj9tP2ZYY6iT5zVrD/ijNi1gSWN6oF5EWRF6otJLuwmsZFv0hIqK8md0WBOvGCymRwCy7UjChWYL4E3FDackcaEQXNhl18Zx3e/bu/YE/8wsvz/Occ57vec6f9zAfHf4/ljRTDOImTrRAtgxb8TaOYgKjucGibP8VrmEf6vinRNaOdRiI7zmsxjn8Et8p/IZ+/FV+zdpwsifOdbyED3AMvwfBMF7HU02i+gZbikNbrA9gDS7g1YhkHHtxHe/iUTwfDqfxDg6UyFfFt8D5eXwfl7bhQXyBnZnNIH6KSL7EK1iO7dgQNicwpKLQR6Ri5XgLH2fnl/Gs1GnbpXT+EXefDvlEmbhI0dm4nGNUKmZhNxNOx/AmjuMJKaXnpLRNh2wBNmMKX6MvZJ1S/mE9DmMXllYRBF6U6vcDNpWVvXgDF1EL2a9ScVvBMryHg6T/oAs/x0rqpknckfr8T9xu0UknFqO3FsQdeKZFkhyX8XhJdhZdRSpmcKtkcAlP3qWDfyvuzzDXRTXzxwapYAU2YkeFTTMsMldHHTiNhrm2hO9ifQxXcQavSSkdwYrMdirbD0jRn1aazpvDSfHKF2Ltk1pvVOqyk/i09OIPs5c3pJFSifPoif1wJu8PhyfxGR4q3SsGZI80TWfRlu3rUtg34vxjphvDfmkkr5P+3KFMX3TQDawMrlnU4lXj2J3J87x+go9iPyml5NtM/34pmvHgbIduaUg9bD6mVGMrDknFz0lzPBKc3YWDRgVRMwdVGKmQNdDdVqG4F3zeTFGTRmwvrpR0yytkraCO6aLnl0rD6X7iDv7+Dw0jezSi4M0oAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span>Vouchers</span>
              </a>
            </div>
            <div className="card nav">
              <a href="/my/change-password" className="">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDIyIDE4Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTZoMThWMkgydjE0ek0wIDBoMjJ2MThIMFYweiIvPjxwYXRoIGQ9Ik0xMiA1aDR2MWgtNHptMCAzaDZ2MWgtNnptMCAzaDZ2MWgtNnpNOSA3YTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMHptLTIgM2MtMS41NTQgMC0yLjgzNCAxLjI4My0zIDNoNmMtLjE2Ni0xLjcxNy0xLjQ0Ni0zLTMtM3oiLz48L2c+PC9zdmc+"
                  alt=""
                />
                <span>Change Password</span>
              </a>
            </div>
            <div className="card nav">
              <a href="/my/orders?tab=Dispatched" className="">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg=="
                  alt=""
                />
                <span>My Orders</span>
              </a>
            </div>
            <div className="card nav">
              <a href="/my/disputes?tab=processing" className="">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg=="
                  alt=""
                />
                <span>Return &amp; Refunds</span>
              </a>
            </div>
            <div className="card nav">
              <a href="/my/details" className="">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDIyIDE4Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTZoMThWMkgydjE0ek0wIDBoMjJ2MThIMFYweiIvPjxwYXRoIGQ9Ik0xMiA1aDR2MWgtNHptMCAzaDZ2MWgtNnptMCAzaDZ2MWgtNnpNOSA3YTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMHptLTIgM2MtMS41NTQgMC0yLjgzNCAxLjI4My0zIDNoNmMtLjE2Ni0xLjcxNy0xLjQ0Ni0zLTMtM3oiLz48L2c+PC9zdmc+"
                  alt=""
                />
                <span>My details</span>
              </a>
            </div>
            <div className="card nav">
              <a href="/my/earnings" className="">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg=="
                  alt=""
                />
                <span>My Earnings</span>
              </a>
            </div>
            <div className="card nav">
              <a href="/my/address" className="">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE4IDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMThoMTRWOC4zMTZMOSAyLjU4NWwtNyA1LjczVjE4ek0wIDcuMzY4TDkgMGw5IDcuMzY4VjIwSDBWNy4zNjh6Ii8+PHBhdGggZD0iTTExIDloMnYyaC0yem0tNCA0aDR2Nkg3eiIvPjwvZz48L3N2Zz4="
                  alt=""
                />
                <span>Address book</span>
              </a>
            </div>
            <div className="card nav">
              <a active-className="active">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDIwIDE3Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOS45NjUuMXYxNi44aC05LjQ0MXYtMi4wNjdoNy4zODhzLjA0LTEyLjY4OSAwLTEyLjY4OWgtNy4zODhWLjFoOS40NDF6Ii8+PHBhdGggZD0iTTIuMTQzIDkuNTV2LTIuMWgxMS41MjR2Mi4xeiIvPjxwYXRoIGQ9Ik0xLjUyNSAxMC4wMzRsLS4wMDIuMDAyTC4wNDIgOC41NTRsLjAwMS0uMDAxLS4wMDEtLjAwMkwxLjUyMyA3LjA3bC4wMDIuMDAxIDMuNzE0LTMuNzE0TDYuNzIxIDQuODQgMy4wMDcgOC41NTNsMy43MTQgMy43MTQtMS40ODIgMS40ODEtMy43MTQtMy43MTR6Ii8+PC9nPjwvc3ZnPg=="
                  alt=""
                />
                <span>Sign out</span>
              </a>
            </div>
          </div>
          <div className="content">
            <div className="orders" style={{ marginBottom: "70px" }}>
              <div className="card only-desktop">
                <div className="order-backicon">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0iUGF0aF8yODg4IiBkYXRhLW5hbWU9IlBhdGggMjg4OCIgZD0iTTgsMCw2LjU0NSwxLjQ1NWw1LjUwNiw1LjUwNkgwVjkuMDM5SDEyLjA1Mkw2LjU0NSwxNC41NDUsOCwxNmw4LThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiAxNikgcm90YXRlKDE4MCkiIGZpbGw9IiMyZjJmMmYiLz4KPC9zdmc+Cg=="
                    className="back-ico"
                  />
                  <h3>Order details</h3>
                </div>
                <p>Thanks for you order! Check out the details below.</p>
              </div>
              <div className="orders-stats">
                <p>
                  {" "}
                  Order Number <span>2814259558378</span>
                </p>
              </div>
              <div className="card">
                <div className="order_status_container">
                  <ol className="progtrckr">
                    <li className="progtrckr-done border-dotted">
                      <div className="order-time">
                        <p>Ordered</p>
                        <p>Mon, 26th Sep'22</p>
                      </div>
                    </li>
                    <li className="progtrckr-done border-dotted">
                      <div className="order-time">
                        <p>Processed</p>
                        <p>Processed on Mon, 26th Sep'22</p>
                      </div>
                    </li>
                    <li className="progtrckr-done border-dotted">
                      <div className="order-time">
                        <p>Shipped</p>
                        <p>
                          Package shipped via Rider services, at 06:01 PM
                          Mon,26th Sep'22
                        </p>
                      </div>
                    </li>
                    <li className="progtrckr-done animation-active">
                      <div className="order-time">
                        <p>Delivered</p>
                        <p>Packaged delivered on Thu, 29th Sep'22</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div
                  className="margin"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    className="custom-button btn-effect return-btn"
                    style={{ alignSelf: "center" }}
                  >
                    {" "}
                    Return / Refund{" "}
                  </button>
                </div>

                <br />
              </div>
              <div
                className="card thin_card checkout"
                style={{ marginTop: "10px" }}
              >
                <h5 style={{ marginTop: "10px", marginBottom: "10px" }}>
                  1 Item
                </h5>
                <span className="border"></span>
                <div className="products">
                  <div className="review-product">
                    <div className="product-image">
                      <img
                        src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/25082022/23050_306_1661412527_630724afdfd74-138357332921.jpg"
                        alt="MOVE MEN GRAY COMFORTABLE SPORTS SHOES"
                        className="review-product-image"
                      />
                    </div>
                    <div className="product-detail">
                      <div className="title">
                        {" "}
                        MOVE MEN GRAY COMFORTABLE SPORTS SHOES{" "}
                      </div>
                      <div className="detail-review">
                        <div className="size-qty">
                          <div className="qty">Qty: 1</div>
                          <div className="size">Size: 44</div>
                        </div>
                        <div className="review-button">
                          <button
                            className="custom-button mobile-btn btn-effect"
                            style={{ alignSelf: "center" }}
                          >
                            {" "}
                            Write a Review{" "}
                          </button>
                          <button
                            className="custom-button desktop-btn btn-effect"
                            style={{ alignSelf: "center" }}
                          >
                            {" "}
                            Write a Review{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card delivery">
                <h3>Delivery Details</h3> <span className="border"></span>
                <div className="margin">
                  <h4 className="label">Delivery Address:</h4>
                  <p></p>
                  <p>
                    H.No. 751-A, PNG Railway Colony, Wheatman Road, Moghalpura,
                    Lahore
                  </p>
                  <p>923004454490</p>
                </div>
                <div className="margin">
                  <h4 className="label">Delivery Method:</h4>
                  <p>Lahore Warehouse</p>
                  <h4 className="label">Delivery Charges:</h4>
                  <p>Rs. 150</p>
                </div>
              </div>
              <div className="card payment">
                <h3>Payment Details</h3> <span className="border"></span>
                <div className="margin">
                  <h4 className="label">Payment Method:</h4>
                  <p>COD</p>
                </div>
                <div className="margin">
                  <h4 className="label">Payment Status:</h4>
                  <p>Pending</p>
                </div>
              </div>
              <div className="card total">
                <h3>Order Total</h3> <span className="border"></span>
                <div className="table">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>SUBTOTAL: </td>
                        <td>Rs 1,499</td>
                      </tr>

                      <tr>
                        <td>DELIVERY: </td>
                        <td>150</td>
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
                <span className="border"></span>
                <div className="table all_bold">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>TOTAL TO PAY:</td>
                        <td>Rs 1,649</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default OrderDetails;
