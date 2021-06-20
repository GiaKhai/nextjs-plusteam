/** @format */

import Link from "next/link";

export default function JD({ job }) {
  return (
    <div className="col-lg-6 col-md-6 mt-25">
      <div className="box-job">
        <div className="row">
          <div className="col col-lg-2"><img
                    src={job.image}
                    style={{width:"100%" }}
                  /></div>
          <div className="col col-lg-10">
            <h4 className="question-title">{job.title}</h4>
            <div className="badge">Urgent</div>
            <h5 className="company-name">{job.company}</h5>
            <div className="">
              <div className="row">
                <div className="col-lg-4" style={{ textAlign: "start" }}>
                  <img
                    src="./../static/img/dollar.png"
                    style={{ margin: "0px 10px 5px 5px" }}
                  />
                  <span className="text-job">{job.salary}</span>
                </div>
                <div className="col-lg-8" style={{ textAlign: "start" }}>
                  <img
                    src="./../static/img/location.png"
                    style={{ margin: "0px 10px 5px 5px" }}
                  />
                  <span className="text-job">{job.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-lg-6">
            <span className="mute-date">{job.create_at}</span>
          </div>
          <div className="col-lg-6 text">
            <Link href={"/share-your-resume/" + job.id} key={job.id}>
              View Job Description
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box-job {
          padding: 15px;
          background: #ffffff;
          box-shadow: 0px 5px 40px rgb(30 73 132 / 10%);
          border-radius: 25px;
        }
        .question-title {
          font-family: Avenir;
          font-style: normal;
          font-weight: 900;
          font-size: 23px;
          line-height: 31px;
          color: #094989;
          display: inline-block;
        }
        .badge {
          background: #f43737;
          border-radius: 17.5px;
          float: right;
          font-family: Avenir;
          font-style: normal;
          font-weight: 800;
          font-size: 17px;
          line-height: 23px;
          color: #ffffff;
        }
        .company-name {
          font-family: Avenir;
          font-style: normal;
          font-weight: 500;
          font-size: 19px;
          line-height: 26px;
          color: #094989;
        }
        .mute-date {
          font-size: 15px;
          line-height: 23px;
          color: #bdbdbd;
        }
        .job-view {
          font-size: 15px;
          line-height: 23px;
          color: #fdb31c !important;
        }
        .text-job {
          font-family: Avenir;
          font-style: normal;
          font-weight: 500;
          font-size: 19px;
          line-height: 26px;
          color: #292b33;
        }
        .text {
          text-align: end;
          color: #fdb31c !important;
        }

        @media (max-width: 991px) {
          .col-lg-10 {
            display: grid;
          }
          .badge {
            margin-bottom: 10px;
          }
          .col-lg-6 {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
