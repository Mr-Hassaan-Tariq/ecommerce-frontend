const SignIn = ({ setShow }) => {
  return (
    <div id="slide" className="desktop_signup">
      <nav className="tabs">
        <div data-v-c2cf90d6="" class="register">
          <p data-v-c2cf90d6="">Login or Signup </p>{" "}
          <img
            onClick={() => setShow(false)}
            data-v-c2cf90d6=""
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9LmJ7ZmlsbDojMmYyZjJmO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzggLTg5KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3OCA4OSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc3IDkwKSI+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xOSwxLjksMTcuMSwwLDkuNSw3LjYsMS45LDAsMCwxLjksNy42LDkuNSwwLDE3LjEsMS45LDE5bDcuNi03LjZMMTcuMSwxOSwxOSwxNy4xLDExLjQsOS41WiIvPjwvZz48L2c+PC9zdmc+"
          />
        </div>
      </nav>
      <div>
        <section>
          <div class="form desk_form">
            <div class="sign_up_form">
              <form novalidate="novalidate" autocomplete="off">
                <div class="margin">
                  <span class="mobile_no_box">
                    <input
                      type="number"
                      pattern="\d*"
                      name="phone"
                      placeholder="Mobile Number"
                      class="input_padding"
                      aria-required="true"
                      aria-invalid="false"
                    />{" "}
                    <span class="country_code">+92</span>
                  </span>
                  <div class="btn-options">
                    <button type="button">Login with OTP</button>{" "}
                    <button type="button">Login with password</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default SignIn;
