const { default: Link } = require("next/link");
const Footer = () => {
  return (
    <>
      <section className="activeDropdown">
        <div className="dropdown-footer">
          <div>
            <p>More about Online Shopping at Clicky</p>
          </div>
          <div className="arrow-image">
            <svg
              width={18}
              height={18}
              viewBox="0 0 24 24"
              className="pull-right footer-arrow"
              style={{ transform: "rotate(0deg)" }}
            >
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h24v24H0z" opacity="0.05" />
                <path
                  fill="#282C3F"
                  d="M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232"
                />
              </g>
            </svg>
          </div>
        </div>
        <div id="footer">
          <footer>
            <div className="container">
              <div className="grid">
                {/* <ul> */}
                <nav>
                  <h2>HELP &amp; INFORMATION</h2>
                  <li style={{listStyle: "none"}}>
                  <Link href="/ReqCalBack">Request a Call Back!</Link>
                  </li>
                  <li style={{listStyle: "none"}}>
                  <Link href="/contactus">Contact Us</Link>
                  </li>
                  <li style={{listStyle: "none"}}>
                  <Link href="/help">FAQ &amp; Help Center</Link>
                  </li>
                </nav>
                <nav>
                  <h2>ABOUT CLICKY</h2>
                  <Link href="/aboutUs">About Us</Link>
                  <li style={{listStyle: "none"}}>
                  <Link href="/privacy">Privacy Statement</Link>
                  </li>
                  <li style={{listStyle: "none"}}>
                  <Link href="/terms&Condition">
                    Terms &amp; Conditions
                  </Link>
                  </li>
                  <li style={{listStyle: "none"}}>
                  <Link href="/return-and-Refund">
                    Returns &amp; Refunds
                  </Link>
                  </li>
                </nav>
                {/* </ul> */}
                <nav>
                  <h2>DOWNLOAD OUR APP</h2>
                  <div className="social-img">
                    <a
                      target="_blank"
                      href=""
                    >
                      <div className="store-img">
                        <img
                          src="https://www.clicky.pk/_nuxt/img/googleplay.3eb27f7.png"
                          alt="img"
                        />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href="https://apps.apple.com/pk/app/clicky-online-shopping/id1448160644?app=itunes&ign-mpt=uo%3D4&utm_source=desktop-web&utm_medium=footer&utm_campaign=appDrive"
                    >
                      <div className="store-img">
                        <img
                          src="https://www.clicky.pk/_nuxt/img/appstore.91f0e59.png"
                          alt="img"
                        />
                      </div>
                    </a>
                  </div>
                  <h2>KEEP IN TOUCH</h2>
                  <div className="social-icon">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/sehgalmotorsoriginal/"
                    >
                      <div className="icon-dev">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuBAMAAAChYuY5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUdwTGtwemtzfGtve2pvemtve2tvemtwfGluefUlRLIAAAAIdFJOUwBrH53nUcA4IG5LhwAAAJVJREFUOMtjKOvAAC0CDAwZmMId7QwMWEQ7Gmkh7CxaGiiBIdzMAAQcGMIBWIUbGbAKO2AXNsAuDDSaNcXFA124gIFBA4u7FRgYIrALS9BEOElJCehoJiUl1KBKYIACHMIWJAlnYBdGDRNnY2OgA4uNjenn+YEWLsQuzEqi2R5YhFthDFRhYNJlF4QDYBwUgmhRBpoCABNbbuleTr6VAAAAAElFTkSuQmCC"
                          alt="img"
                        />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href="https://twitter.com/sehgalmotors"
                    >
                      <div className="icon-dev">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTG90gGpvempvempvempvempvempvemtwfGtwe2luee9YQboAAAAKdFJOUwAW8uDMspZvNFAVWINuAAABP0lEQVQ4y82Tv0sDMRTHX7C0dTsQhDqJrQjZirg4WUQQJ7GCtFOlrZSbrqD4Y3K5vejWSZt6te+vNAmX5KXJH+B3ueRzuW9evnkHQFUfHZxM1SDxMOsjosgA8hlUyKsPVCrYkwCYt50L1xw5rgH6wn6whUYZgyvsGP5m8KpxBxzFe8m54cc4UJOj0t7a4BKkD+Kl5jXHrwFS9ZwoXrW4kLO5HvU8/u2KO3whPopvm0nr1vIvZZtioH2Je9WQn6nDtHjAZZm6/k0NaChEM8n3IjzxTkPTkToNeKH5TsB/3WUH5avcbyLlyIAeurFtgW2ed11eaxq3h4qPF6YNmB/RyvbZbhBmqZxsLWgr110Ybdrgn/HlubPpEJNHh3/s8ucxCXqR2dVe/PfOpUZONfH+waHJcQq+GuNz3rx4TeAf6w+XsHQNsQ1wBQAAAABJRU5ErkJggg=="
                          alt="img"
                        />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/sehgalmotors/"
                    >
                      <div className="icon-dev">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAtBAMAAAAuHTTtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTGpvempvempxempvemtvempvenF5h2pvemtyfGluedANjL4AAAAKdFJOUwC/mT7uVdIMcihdqGdAAAABBUlEQVQoz73TO0/DMBQF4NNGKLQTkUBInRgYUKdK2boBA1KmsCGmzpmyslVILEzdKrEluB7Or+Q6D8euQyfEmexPsXx9HQPPGb2oK2DKIDd4DfGARYgVshAV/Pkj8Eke4QUw/2t8AtYBqiShg/ruvejHPeoVEBVHeA0MzelQlwbjRY86TZf8RpMv1mlaCFaQTm1anFCbWYOmr03OybLDmNy2eEbuTiEsOstRDBspu5FbksU1q6Z4mR8sTrqa5Jgbi5Fc6w6YySlzi+YGq48XsRoDTp3rsGg+NanhYttfnXuI6JZ8yOEj8LbvBi7a/IaZKn2LMyV+n3i5lLWjv/foQxh9Mv+VHyXkQikSnHouAAAAAElFTkSuQmCC"
                          alt="img"
                        />
                      </div>
                    </a>
                  </div>
                </nav>
                <nav>
                  <h2>MORE FROM SEGHAL MOTORS</h2>
                  <a href="">Sell On Seghal</a>
                </nav>
                <nav>
                  <h2>SHOPPING FROM</h2>
                  <span>You're in Pakistan</span>
                </nav>
              </div>
            </div>
            <div>
              <div className="clicky-about-footer">
                <div className="bottom-foot">
                  <div className="content" />
                </div>
                <div className="clicky-footer-category-tag bottom-foot">
                  <div className="content" />
                </div>
                <div className="bottom-foot">
                  <div className="clicky-footer-category-tag">
                    <div className="content" />
                  </div>
                </div>
                <div className="bottom-foot">
                  <div className="clicky-footer-category-tag">
                    <div className="content" />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
      <div id="foorer-nav" className="only-mobile">
        <div
          style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 12 }}
        >
          <div
            className="bottom-navigation"
            style={{ position: "fixed", bottom: 0 }}
          >
            <div className="items">
              <a
                href="/"
                aria-current="page"
                className="router-link-exact-active router-link-active"
              >
                <div className="icon">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NyAtMTQ3MSkiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4NyAxNDcxKSIvPjxwYXRoIGQ9Ik0zLjY3NCwyNC4xMTJhLjUzOS41MzksMCwwLDAsLjU0NS41NzlsNi41NTItLjAwOC4wMS01LjM1NGEuNzYyLjc2MiwwLDAsMSwuNzY3LS44ODNoMi43MTlhLjg0MS44NDEsMCwwLDEsLjk1My44ODNsLS4wMTIsNS4zMzdoNi40MTRhLjY3LjY3LDAsMCwwLC42ODgtLjcyMVYxNC4wNzRMMTMuMjcsNi4wNTVsLTkuNiw4LjAxOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Ni4wMDggMTQ2Ny42MjcpIi8+PC9nPjwvc3ZnPg=="
                    alt="Home"
                    className="navigation-icons"
                  />
                </div>
                <div className="tab" style={{ fontSize: "9px", color: "#000" }}>
                  Home
                </div>
              </a>
            </div>
            <div className="items">
              <div className="icon">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9LmJ7ZmlsbDojOGE5MTljO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM4IC02NTIpIj48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzggNjUyKSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNjQuMTkxLDU3LjQ4OVY2Mi43QTEuNDg5LDEuNDg5LDAsMCwxLDYyLjcsNjQuMTkxSDU3LjQ4OUExLjQ4OSwxLjQ4OSwwLDAsMSw1Niw2Mi43VjU3LjQ4OUExLjQ4OSwxLjQ4OSwwLDAsMSw1Ny40ODksNTZINjIuN0ExLjQ4OSwxLjQ4OSwwLDAsMSw2NC4xOTEsNTcuNDg5Wk03My4xMjcsNTZINjcuOTE0YTEuNDg5LDEuNDg5LDAsMCwwLTEuNDg5LDEuNDg5VjYyLjdhMS40ODksMS40ODksMCwwLDAsMS40ODksMS40ODloNS4yMTNBMS40ODksMS40ODksMCwwLDAsNzQuNjE2LDYyLjdWNTcuNDg5QTEuNDg5LDEuNDg5LDAsMCwwLDczLjEyNyw1NlpNNjIuNyw2Ni40MjVINTcuNDg5QTEuNDg5LDEuNDg5LDAsMCwwLDU2LDY3LjkxNHY1LjIxM2ExLjQ4OSwxLjQ4OSwwLDAsMCwxLjQ4OSwxLjQ4OUg2Mi43YTEuNDg5LDEuNDg5LDAsMCwwLDEuNDg5LTEuNDg5VjY3LjkxNEExLjQ4OSwxLjQ4OSwwLDAsMCw2Mi43LDY2LjQyNVptNy44MTksMGE0LjEsNC4xLDAsMSwwLDQuMSw0LjFBNC4xLDQuMSwwLDAsMCw3MC41MjEsNjYuNDI1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODUgNTk5KSIvPjwvZz48L3N2Zz4="
                  alt="Catalog"
                  className="navigation-icons"
                />
              </div>
              <div className="tab" style={{ fontSize: "9px", color: "gray" }}>
                Category
              </div>
            </div>
            <div className="items">
              <a href="/new-arrivals?page=1">
                <div className="icon">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmEsLmN7ZmlsbDojZmZmO30uYXtvcGFjaXR5OjA7fS5ie2ZpbGw6IzhhOTE5Yzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NyAtNjQwKSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg3IDY0MCkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTEgNjQxKSI+PHBhdGggY2xhc3M9ImIiIGQ9Ik05Mi4yNDksNS43MTZhLjY0NS42NDUsMCwwLDAtMS4yLjMzNCwxLjQyNywxLjQyNywwLDAsMS0yLjg1NSwwVi42NDVBLjY0NS42NDUsMCwwLDAsODcuMS4xODksMzEuNTI2LDMxLjUyNiwwLDAsMCw4My41NjIsNC42YTI1LjA0NCwyNS4wNDQsMCwwLDAtMi40MzcsNC41NDNBMTQuNCwxNC40LDAsMCwwLDgwLDE0LjQ2YTcuNTUyLDcuNTUyLDAsMCwwLDE1LjEsMEExNy4yMjksMTcuMjI5LDAsMCwwLDkyLjI0OSw1LjcxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTE1NC4zMSwyNTMuMTY4aC0yLjc2M2EuNjQ1LjY0NSwwLDAsMCwwLDEuMjloMS4yMDZMMTUwLDI1Ny4yMTNsLTEuNS0xLjVhLjY0NS42NDUsMCwwLDAtLjkxMiwwbC0xLjQ2NSwxLjQ2NWEuNjQ1LjY0NSwwLDAsMCwuOTEyLjkxMmwxLjAwOS0xLjAwOSwxLjUsMS41YS42NDUuNjQ1LDAsMCwwLC45MTIsMGwzLjIxMS0zLjIxMXYxLjIwNmEuNjQ1LjY0NSwwLDAsMCwxLjI5LDB2LTIuNzYzQS42NDUuNjQ1LDAsMCwwLDE1NC4zMSwyNTMuMTY4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYzLjA5OSAtMjQyLjI4NCkiLz48L2c+PC9nPjwvc3ZnPg=="
                    alt="Trends"
                    className="navigation-icons"
                  />
                </div>
                <div className="tab" style={{ fontSize: "9px", color: "gray" }}>
                  New Arrivals
                </div>
              </a>
            </div>
            <div className="items">
              <div className="icon">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9LmJ7ZmlsbDojOGE5MTljO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIzIC02NzYpIj48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMgNjc2KSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg0LjcwMiA2MzcuMDQpIj48Y2lyY2xlIGNsYXNzPSJiIiBjeD0iNC42ODIiIGN5PSI0LjY4MiIgcj0iNC42ODIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2LjExIDQwLjk2KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNTEuNzg1LDI2Ni4yNEg0OS44YTguODY5LDguODY5LDAsMCwwLTguODQsOC45aDBhLjQ2OC40NjgsMCwwLDAsLjQ2OC40NjhoMTguNzNhLjUxNS41MTUsMCwwLDAsLjQ2OC0uNTI0LDguODU5LDguODU5LDAsMCwwLTguODQtOC44NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTIxNC45NzkpIi8+PC9nPjwvZz48L3N2Zz4="
                  alt="Account"
                  className="navigation-icons"
                />
              </div>
              <div className="tab" style={{ fontSize: "9px", color: "gray" }}>
                Account
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
