import { useEffect, useState } from "react";
import axios from "axios";

function Vachars() {
  const [vacherData, setvachersData] = [];
  const vacharApi = "http://localhost:8000/Vachars";

  const getVacharData = async (url) => {
    const res = await axios.get(url);
    const vachData = await res.data;
    setvachersData(vachData);
  };

  useEffect(() => {
    getVacharData(vacharApi);
  }, []);

  return (
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
                  <span className="wallet-blance"> PKR.0 </span>
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
            {vacherData &&
              vacherData.map((val, i) => (
                <>
                  <div className="active" key={i}>
                    <a href={val.url} className="beauty-desktop">
                      <img src={val.url} alt={vacherData.title} />
                    </a>
                  </div>
                </>
              ))}
          </div>
        </div>
        <div className="content">
          <div>
            <div className="mobile-screen">
              <section id="voucher" className="order-detail-list">
                <div className="my-orders">
                  <div className="order-inner">
                    <ul className="order-tabs">
                      <li id="active">
                        <a
                          href="#"
                          aria-current="page"
                          className="router-link-exact-active router-link-active"
                        >
                          Collected
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card">
                    <div>Nothing Here!</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Vachars;
