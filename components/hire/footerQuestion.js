/** @format */

import React from "react";

function FooterQuestion() {
  return (
    <div>
      <footer className="footer-question text-center">
        <h2>WE ARE TRUSTED BY</h2>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <img src="/static/img/logoContact/ether-white.svg" alt="logo" />
          </div>
          <div className="col-sm-6 col-lg-3">
            <img src="/static/img/logoContact/coinhaco-white.svg" alt="logo" />
          </div>
          <div className="col-sm-6 col-lg-3">
            <img src="/static/img/logoContact/xfes-white.svg" alt="logo" />
          </div>
          <div className="col-sm-6 col-lg-3">
            <img src="/static/img/logoContact/sea-white.svg" alt="logo" />
          </div>
        </div>
        <style jsx>{`
          .footer-question {
            background-color: #fdb31c;
            width: 100%;
            padding-top: 10px;
          }
          .row img {
            margin: 20px;
          }
          .footer-question h2 {
            color: #ffffff;
            text-align: center;
            font-weight: 550;
          }
        `}</style>
      </footer>
    </div>
  );
}

export default FooterQuestion;
