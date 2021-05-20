/** @format */

export default function Crypto() {
  return (
    <section className="section area-padding-top ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="section-title text-center">
              Crypto Payment Allowance
            </h4>
            <p className="text-sumary">
              We accepted payment via Crypto currency USDT, BNB, BTC, ETH
            </p>
            <p></p>
          </div>
          <div className="col-12">
            <div style={{ width: "80%", margin: "auto" }}>
              <div className="col-12 margin-t-50">
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div
                          className="col-lg-3"
                          style={{ textAlign: "center", margin: "10px 0" }}
                        >
                          <img src="/static/img/crypto/USDT.svg" alt="" />
                        </div>
                        <div
                          className="col-lg-3"
                          style={{ textAlign: "center", margin: "10px 0" }}
                        >
                          <img src="/static/img/crypto/BNB.svg" alt="" />
                        </div>
                        <div
                          className="col-lg-3"
                          style={{ textAlign: "center", margin: "10px 0" }}
                        >
                          <img src="/static/img/crypto/BTC.svg" alt="" />
                        </div>
                        <div
                          className="col-lg-3"
                          style={{ textAlign: "center", margin: "10px 0" }}
                        >
                          <img src="/static/img/crypto/ETH.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="..." className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
