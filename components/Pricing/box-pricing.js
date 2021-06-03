/** @format */

export default function BoxPricing({ pricings }) {
  return (
    <div className="col-lg-4">
      <div className="box">
        <h5 className="title">{pricings.title}</h5>
        <h1 className="text-price">{pricings.price}</h1>
        <h6 className="text-time">{pricings.billing}</h6>
        <a href="/contact-us">
          <button type="button" className="btn btn-outline-warning btn-hiring">
            Contact Us
          </button>
        </a>
      </div>
      <style jsx>{`
        .box {
          margin-top: 10px;
          text-align: center;
          background: white;
          box-shadow: 0px 5px 40px rgb(30 73 132 / 10%);
          border-radius: 25px;
          height: 325px;
          padding: 50px 10px;
        }
        .box:hover {
          background-color: #094989;
        }

        .box:hover .title {
          color: rgba(253, 179, 28, 1);
        }

        .box:hover .text-price {
          color: #ffffff;
        }
        .box:hover .text-time {
          color: #ffffff;
        }

        .box:hover .btn-hiring {
          color: #ffffff;
          background: rgba(253, 179, 28, 1);
        }
        .text-sumary {
          font-family: Avenir;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 34px;
          text-align: center;
          color: #292b33;
        }

        .title {
          font-family: Avenir;
          font-style: normal;
          font-weight: 500;
          font-size: 23px;
          line-height: 31px;
          text-transform: capitalize;

          /* PlusTeamBlue */

          color: #094989;
        }
        .text-price {
          font-family: Bebas Neue;
          font-style: normal;
          font-weight: normal;
          font-size: 65px;
          line-height: 78px;
          color: #292b33;
        }
        .text-time {
          font-family: Avenir;
          font-style: normal;
          font-weight: 500;
          font-size: 23px;
          line-height: 31px;
          color: #292b33;
        }
      `}</style>
    </div>
  );
}
