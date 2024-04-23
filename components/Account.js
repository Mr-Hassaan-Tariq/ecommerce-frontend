const Account = () => {
  return (
    <>
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
                    <span>Account Overview</span>
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
                  <a href="/changepassword" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDIyIDE4Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTZoMThWMkgydjE0ek0wIDBoMjJ2MThIMFYweiIvPjxwYXRoIGQ9Ik0xMiA1aDR2MWgtNHptMCAzaDZ2MWgtNnptMCAzaDZ2MWgtNnpNOSA3YTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMHptLTIgM2MtMS41NTQgMC0yLjgzNCAxLjI4My0zIDNoNmMtLjE2Ni0xLjcxNy0xLjQ0Ni0zLTMtM3oiLz48L2c+PC9zdmc+" alt=""/>
                    <span>Change Password</span>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/myorders" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg==" alt=""/>
                    <span>My Orders</span>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/return-and-Refund" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg==" alt=""/>
                    <span>Return &amp; Refunds</span>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/my/details" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDIyIDE4Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTZoMThWMkgydjE0ek0wIDBoMjJ2MThIMFYweiIvPjxwYXRoIGQ9Ik0xMiA1aDR2MWgtNHptMCAzaDZ2MWgtNnptMCAzaDZ2MWgtNnpNOSA3YTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMHptLTIgM2MtMS41NTQgMC0yLjgzNCAxLjI4My0zIDNoNmMtLjE2Ni0xLjcxNy0xLjQ0Ni0zLTMtM3oiLz48L2c+PC9zdmc+" alt=""/>
                    <span>My details</span>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/my/earnings" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg==" alt=""/>
                    <span>My Earnings</span>
                  </a>
                </div>
                <div className="card nav">
                  <a href="/my/address" className="">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE4IDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMThoMTRWOC4zMTZMOSAyLjU4NWwtNyA1LjczVjE4ek0wIDcuMzY4TDkgMGw5IDcuMzY4VjIwSDBWNy4zNjh6Ii8+PHBhdGggZD0iTTExIDloMnYyaC0yem0tNCA0aDR2Nkg3eiIvPjwvZz48L3N2Zz4=" alt=""/>
                    <span>Address book</span>
                  </a>
                </div>
                <div className="card nav">
                  <a active-className="active">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDIwIDE3Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOS45NjUuMXYxNi44aC05LjQ0MXYtMi4wNjdoNy4zODhzLjA0LTEyLjY4OSAwLTEyLjY4OWgtNy4zODhWLjFoOS40NDF6Ii8+PHBhdGggZD0iTTIuMTQzIDkuNTV2LTIuMWgxMS41MjR2Mi4xeiIvPjxwYXRoIGQ9Ik0xLjUyNSAxMC4wMzRsLS4wMDIuMDAyTC4wNDIgOC41NTRsLjAwMS0uMDAxLS4wMDEtLjAwMkwxLjUyMyA3LjA3bC4wMDIuMDAxIDMuNzE0LTMuNzE0TDYuNzIxIDQuODQgMy4wMDcgOC41NTNsMy43MTQgMy43MTQtMS40ODIgMS40ODEtMy43MTQtMy43MTR6Ii8+PC9nPjwvc3ZnPg==" alt=""/>
                    <span>Sign out</span>
                  </a>
                </div>
              </div>
              <div className="only-mobile block">
                <div className="sidebar__">
                  <div className="card">
                    <div className="hello card-inner">
                      <div className="img">S</div>
                      <div className="text">
                        <p style={{marginRight: "5px"}}>Hi,</p>
                        <h4>Shahid</h4>
                      </div>
                    </div>
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
                      <span>Returns &amp; Refunds</span>
                    </a>
                  </div>
                  <div className="card nav">
                    <a href="/my/details" className="">
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDIyIDE4Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTZoMThWMkgydjE0ek0wIDBoMjJ2MThIMFYweiIvPjxwYXRoIGQ9Ik0xMiA1aDR2MWgtNHptMCAzaDZ2MWgtNnptMCAzaDZ2MWgtNnpNOSA3YTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMHptLTIgM2MtMS41NTQgMC0yLjgzNCAxLjI4My0zIDNoNmMtLjE2Ni0xLjcxNy0xLjQ0Ni0zLTMtM3oiLz48L2c+PC9zdmc+" alt=""/>
                      <span>My details</span>
                    </a>
                    <div className="card nav">
                      <a href="/my/earnings" className="">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg==" alt=""/>
                        <span>My Earnings</span>
                      </a>
                    </div>
                    <a href="/my/address" className="">
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE4IDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMThoMTRWOC4zMTZMOSAyLjU4NWwtNyA1LjczVjE4ek0wIDcuMzY4TDkgMGw5IDcuMzY4VjIwSDBWNy4zNjh6Ii8+PHBhdGggZD0iTTExIDloMnYyaC0yem0tNCA0aDR2Nkg3eiIvPjwvZz48L3N2Zz4=" alt=""/>
                      <span>Address book</span>
                    </a>
                  </div>
                  <div className="card nav">
                    <a active-className="active">
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDIwIDE3Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOS45NjUuMXYxNi44aC05LjQ0MXYtMi4wNjdoNy4zODhzLjA0LTEyLjY4OSAwLTEyLjY4OWgtNy4zODhWLjFoOS40NDF6Ii8+PHBhdGggZD0iTTIuMTQzIDkuNTV2LTIuMWgxMS41MjR2Mi4xeiIvPjxwYXRoIGQ9Ik0xLjUyNSAxMC4wMzRsLS4wMDIuMDAyTC4wNDIgOC41NTRsLjAwMS0uMDAxLS4wMDEtLjAwMkwxLjUyMyA3LjA3bC4wMDIuMDAxIDMuNzE0LTMuNzE0TDYuNzIxIDQuODQgMy4wMDcgOC41NTNsMy43MTQgMy43MTQtMS40ODIgMS40ODEtMy43MTQtMy43MTR6Ii8+PC9nPjwvc3ZnPg==" alt=""/>
                      <span>Sign out</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="over">
                  <div className="overview only-desktop">
                    <h1>
                      <span >Welcome to</span>
                      <br/>
                      <span >Your Account</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </main>
          </>
           
  );
};
export default Account;
