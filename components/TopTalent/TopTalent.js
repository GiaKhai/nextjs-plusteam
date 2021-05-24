/** @format */

import Head from "next/head";
import TalentItem from "./TalentItem";
export default function TopTalent() {
  return (
    <div>
      <section className="about-area" id="home">
        <div className="container">
          <div className="row ">
            <div className="col-lg-5">
              <div className="area-heading">
                <div className="row">
                  <div className="col-lg-12">
                    <h4>MATCHING YOU WITH TOP TALENT</h4>
                  </div>
                </div>
                <h6>
                  PlusTeam matches and manages top talents in Vietnam for
                  companies located in the US, Japan, Europe and Southeast Asia.
                </h6>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <a href="">
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-hiring "
                    >
                      Share Your Resume
                    </button>
                  </a>
                </div>
                <div className="col-md-6 col-lg-6">
                  <a href="">
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-hiring "
                    >
                      Become A Client
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <TalentItem />
                <TalentItem />
                <TalentItem />
                <TalentItem />
                <TalentItem />
                <TalentItem />
                <TalentItem />
                <TalentItem />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>
        {`
          .btn-hiring:hover {
            color: #ffffff;
            background: rgba(253, 179, 28, 1);
          }
          h4 {
            font-size: 65px;
            color: #094989;
            font-family: "Bebas Neue", sans-serif;
            margin-bottom: 40px;
            line-height: 58px;
          }
          h6 {
            font-family: Avenir;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 34px;
            text-align: justify;

            /* PlusTeamBlue */

            color: #094989;
          }
          button {
          }
        `}
      </style>
    </div>
  );
}
