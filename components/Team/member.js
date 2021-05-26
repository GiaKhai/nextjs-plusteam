/** @format */

export default function Member({ member }) {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="single-pricing ">
        <img src={member.image} alt="DatVo" />
        <div className="single-pricing-content">
          <h4>{member.name}</h4>
          <h5>{member.position}</h5>
          <span>{member.describe}</span>
        </div>
      </div>
      <style jsx>
        {`
          img {
            max-width: 100%;
            height: 230px;
            border-radius: 50%;
          }
          h4 {
            font-family: Avenir;
            font-style: normal;
            font-weight: 900;
            font-size: 25px;
            line-height: 34px;
            text-transform: capitalize;
            color: #094989;
          }
          h5 {
            font-family: Avenir;
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 34px;
            text-transform: capitalize;
            color: #094989;
          }
          span {
            font-family: Avenir;
            font-style: normal;
            font-weight: 500;
            font-size: 21px;
            line-height: 29px;
            text-align: center;
            color: #292b33;
          }
        `}
      </style>
    </div>
  );
}
