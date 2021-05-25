/** @format */

import React from "react";

function Trusted(props) {
  return (
    <div className="pt-5">
      <div className="trusted-by">
        <div className="row trusted-by-col">
          <div className="col-md-3 col-md-offset-1 m-auto">
            WE ARE TRUSTED BY
          </div>
          <div
            id="carouselExampleControls"
            className="col-md-9 carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="col-md-12 row">
                  <div className="col-md-4 img-logo">
                    <img
                      src="/static/img/logoContact/ether-gray.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="col-md-3 img-logo">
                    <img
                      src="/static/img/logoContact/coinhaco-gray.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="col-md-2 img-logo">
                    <img
                      src="/static/img/logoContact/xfer-gray.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="col-md-3 img-logo">
                    <img
                      src="/static/img/logoContact/sea-gray.svg"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                {" "}
                <div className="col-md-12 row">
                  <div className="col-md-4 img-logo">
                    <img
                      src="/static/img/logoContact/ether-gray.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="col-md-3 img-logo">
                    <img
                      src="/static/img/logoContact/coinhaco-gray.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="col-md-2 img-logo">
                    <img
                      src="/static/img/logoContact/xfer-gray.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="col-md-3 img-logo">
                    <img
                      src="/static/img/logoContact/sea-gray.svg"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .trusted-by {
          width: 100%;
          background: #fdf4e2;
        }
        .trusted-by-col {
          margin-left: 7%;
          margin-right: 80px;
          color: hsla(210, 4%, 59%, 1);
          padding: 17px;
          font-size: 25px;
          font-weight: 600;
          display: flex;
          vertical-align: middle;
        }
        .img-logo {
          margin: auto;
          padding: 10px;
        }
        @media (max-width: 575px) {
          .trusted-by-col {
            margin-left: 0;
            margin-right: 0;
            text-align: center;
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}

export default Trusted;
