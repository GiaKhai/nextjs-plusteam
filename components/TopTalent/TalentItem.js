/** @format */

import Head from "next/head";

export default function TopTalent() {
  return (
    <div>
      <div className="col-sm-12 col-lg-12">
        <div className="box-talent">
          <img src="./../static/img/talent/quangtran.jpg" alt="talent" />
          <div className="content-talent">
            <div className="name">Quang Tran</div>
            <div className="job">Full Stack Developer </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        img {
          height: 135px;
          width: 135px;
        }
        .box-talent {
          background: #ffffff;
          box-shadow: 0px 5px 40px rgb(30 73 132 / 10%);
          height: 200px;
          width: 135px;
          margin-top: 10px;
          border-radius: 5px;
          display: block;
        }
        .name {
          font-family: Avenir;
          font-style: normal;
          font-weight: 800;
          font-size: 19px;
          line-height: 26px;
          /* identical to box height */

          /* PlusTeamBlue */

          color: #094989;
        }
        .job {
          font-family: Avenir;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 23px;

          /* Grey */

          color: #292b33;
        }
      `}</style>
    </div>
  );
}