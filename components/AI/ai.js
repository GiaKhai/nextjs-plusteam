/** @format */

export default function AIPlatform() {
  return (
    <section className="section area-padding-top" id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="section-title text-center ">PLUSTEAM AI PLATFORM</h1>
            <p className="text-sumary">
              Where You can able to identify the right candidates based on our
              Customer Requirements
            </p>
            <p></p>
          </div>
          <div className="col-lg-4">
            <div className="image-box">
              <img src="/static/img/AI/aiPlatform.svg" alt="AL" />
            </div>
          </div>
          <div className="offset-lg-1 col-lg-7">
            <div className="area-heading">
              <p>
                The innovations in AI for recruiting are intelligent screening
                software that automates resume screening, recruiter chatbots
                that engage candidates in real-time, and digitized interviews
                that help assess a candidate’s fit.
              </p>
            </div>
            <div className="row box-al">
              <div className="col-lg-4 img-al">
                <img src="/static/img/AI/ai1.svg" alt="ser1" />
                <div className="al-flatform">
                  Intelligent screening software
                </div>
              </div>
              <div className="col-lg-4 img-al">
                <img src="/static/img/AI/ai2.svg" alt="ser1" />
                <div className="al-flatform">Recruiter chatbots</div>
              </div>
              <div className="col-lg-4 img-al">
                <img src="/static/img/AI/ai3.svg" alt="ser1" />
                <div className="al-flatform">Digitized interviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          img {
            max-width: 100%;
          }
          .area-heading p {
            font-weight: 400;
            font-size: 14px;
            font-family: "Poppins", sans-serif;
            color: rgba(41, 43, 51, 1);
            margin-bottom: 40px;
            line-height: 27px;
          }
          .al-flatform {
            font-family: Avenir;
            font-style: normal;
            font-weight: 500;
            font-size: 21px;
            line-height: 29px;
            color: #292b33;
          }
          .img-al img {
            width: 60px;
            height: 60px;
            margin-top: 15px;
          }
          .img-al {
            text-align: center;
          }
        `}
      </style>
    </section>
  );
}
