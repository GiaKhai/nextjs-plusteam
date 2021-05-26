/** @format */
export default function Footer() {
  return (
    <div>
      <footer className="footer-area mt-50">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <img src="./../static/img/logo/Logo-footer.svg" alt="Plusteam" />
            </div>
            <div className="col-lg-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Comany</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Imformation</h4>
              <ul>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Disscusion</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-8 mb-4 mb-xl-0 single-footer-widget">
              <div>
                <h4>Subsrcbe</h4>
                <div className="form-wrap" id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                  >
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        name="EMAIL"
                        placeholder="Your Email Address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Your Email Address '"
                      />
                      <div className="input-group-append">
                        <button className="btn click-btn" type="submit">
                          <img src="./../static/img/telegram.svg"></img>
                        </button>
                      </div>
                    </div>

                    <div className="info"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-area {
            padding-top: 40px;
            background: #094989;
          }
          h4 {
            font-family: Avenir;
            font-style: normal;
            font-weight: 900;
            font-size: 21px;
            line-height: 29px;

            /* White */

            color: #ffffff;
          }
          img {
            margin-bottom: 7px;
          }
          ul {
            padding: 0px;
            list-style: none;
          }
          li {
            font-family: Avenir;
            font-style: normal;
            font-weight: normal;
            font-size: 19px;
            line-height: 26px;

            /* White */

            color: #ffffff;
            padding: 15px 0;
          }
          input {
            height: 35px;
            border: 1px solid #fdb31c;
            width: 67% !important;
            font-weight: 300;
            background: transparent;
            padding-left: 20px;
            border-radius: 0;
            font-size: 14px;
            padding: 10px 22px;
            border-radius: 25px;
            border-right: none;
            color: #888888;
            margin-right: -25px;
          }
          button {
            height: 35px;
            border-radius: 24px;
            padding: 6px 21px 4px 14px;
            border-color: #fdb31c;
            background: #094989;
            color: #fdb31c;
            position: relative;
            left: 0;
            border-left: none !important;
            text-transform: capitalize;
          }
          .input-group-append {
            padding-left: 20px;
          }
        `}
      </style>
    </div>
  );
}
