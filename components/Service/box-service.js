/** @format */

export default function BoxService({ services }) {
  return (
    <div className="col-lg-4">
      <div className="box-service">
        <img src={services.image} alt="service" />
        <h4 className="services-title padding-t-15">{services.title}</h4>
        <p className="services-content">{services.description}</p>
      </div>
      <style jsx>{`
        .box-service {
          margin-bottom: 10px;
          text-align: center;
          background: #ffffff;
          box-shadow: 0px 5px 40px rgba(30, 73, 132, 0.1);
          border-radius: 25px;
          height: 410px;
          padding: 30px 10px;
        }

        .box-service:hover {
          background: rgba(9, 73, 137, 1);
        }

        .box-service:hover h4 {
          color: #fdb31c;
        }

        .box-service:hover p {
          color: #ffffff;
        }
        .box-service .services-title {
          font-size: 23px;
        }
        .box-service .services-content {
          font-size: 17px;
        }
        .services-title {
          padding: 10px 8px;
          font-family: Avenir;
          font-style: normal;
          font-weight: 900;
          font-size: 25px !important;
          line-height: 34px;
          text-align: center;
          color: #094989;
        }
        .services-content {
          font-family: Avenir;
          font-style: normal;
          font-weight: 500;
          font-size: 19px !important;
          line-height: 26px;
          text-align: center;
          color: #292b33;
        }
      `}</style>
    </div>
  );
}
