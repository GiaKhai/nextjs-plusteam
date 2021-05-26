/** @format */

import Head from "next/head";

export default function TopTalent() {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="box-talent">
        <img src="./../static/img/talent/quangtran.jpg" alt="talent" />
        <div className="content-talent">
          <div className="name">Quang Tran</div>
          <div className="job">Full Stack Developer </div>
        </div>
      </div>

      <style jsx>{`
        img {
          width: 100%;
        }
        .box-talent {
          background: #ffffff;
          box-shadow: 0px 5px 40px rgb(30 73 132 / 10%);
          height: 200px;
          width: 140px;
          margin-top: 10px;
          border-radius: 5px;
          display: block;
        }
        .box-talent .content-talent {
          padding: 6px;
        }
        .name {
          color: #094989;
          font-weight: 600;
          font-size: 14px;
        }
        .job {
          font-weight: 500;
          font-size: 12px;
        }
        @media (max-width: 575px) {
          .box-talent {
            height: auto;
            width: auto;
            display: flex;
          }
          img {
            max-width: 140px;
          }
          .content-talent {
            padding: 20px !important;
            margin: auto;
          }
          .name {
            color: #094989;
            font-weight: 600;
            font-size: 25px;
          }
          .job {
            font-weight: 500;
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
