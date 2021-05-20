/** @format */

import BoxPricing from "./box-pricing";

export default function Pricing() {
  const dataPricing = [
    {
      id: 1,
      title: "Build Your Remote Team",
      price: "From $2500",
      billing: "Billing Per Month",
    },
    {
      id: 2,
      title: "Start Operating Your Business",
      price: "From $3200",
      billing: "Billing Per Month",
    },
    {
      id: 3,
      title: "Quality Assurance Services",
      price: "From $2000",
      billing: "Billing Per Month",
    },
  ];
  return (
    <section className="section area-padding-top" id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="section-title text-center">OUR PRICING</h1>
          </div>
        </div>
        <div className="row margin-t-50">
          {dataPricing?.map((pricing) => {
            return <BoxPricing key={pricing.id} pricings={pricing} />;
          })}
        </div>
      </div>
    </section>
  );
}
