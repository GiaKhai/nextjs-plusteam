/** @format */

export default function ProcessItem({ process }) {
  return (
    <div className="col-lg-4 plan-line">
      <div className="text-center process-box">
        <img src={process.image} alt="" />
        <h4 className="padding-t-15">{process.title}</h4>
        <p className="text-muted">{process.content}</p>
      </div>
      <style jsx>{`
         {
          /* .plan-line:before {
          content: "";
          background: #094989;
          border: 1.5px solid #094989;
          position: absolute;
          width: 55%;
          left: 73%;
          top: 40px;
        } */
        }
        .process-box img {
          width: 80px;
        }
        .process-box h4 {
          font-family: Avenir;
          font-style: normal;
          font-weight: 900;
          font-size: 25px;
          line-height: 34px;
          text-align: center;
          text-transform: capitalize;
          color: #094989;
        }
        .text-muted {
          color: #6c757d !important;
        }
      `}</style>
    </div>
  );
}
