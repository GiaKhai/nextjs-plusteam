/** @format */

import Link from "next/link";
import TalentItem from "./TalentItem";

import Head from "next/head";

export default function TopTalent({ talent }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>

        <title>PlusTeam</title>
        <meta name="description" content="PlusTeam Global" />
        <link rel="icon" href="/static/img/logo/Logo.svg" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        />
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Avenir"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Bebas Neue"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        ></link>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>
      <section className="about-area pt-3" id="home">
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
                  <Link href="/share-your-resume/">
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-hiring "
                    >
                      Share Your Resume
                    </button>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-6">
                  <Link href="/hire/">
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-hiring"
                    >
                      Become A Client
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                {talent?.map((talent) => {
                  return <TalentItem key={talent.id} talent={talent} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          Link:hover {
            color: #ffffff;
          }
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
            color: #094989;
          }
          button {
            width: 200px;
          }
          @media (max-width: 575px) {
            h4 {
              font-size: 35px;
              margin-bottom: 5px;
            }
            button {
              text-align: center;
              margin-top: 10px;
              margin-left: 20%;
            }
            .name {
              font-weight: 600;
              margin-top: 15px;
              margin-bottom: 10px;
              font-size: 23px;
            }
          }
        `}
      </style>
    </div>
  );
}
