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
    <div className="row margin-t-50">
      {dataPricing?.map((pricing) => {
        return <BoxPricing key={pricing.id} pricings={pricing} />;
      })}
    </div>
  );
}
