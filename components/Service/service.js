/** @format */

import BoxService from "./box-service";

export default function Services({ services }) {
  return (
    <div>
      <div className="row margin-t-50">
        {services.map((service) => {
          return <BoxService key={service.id} service={service} />;
        })}
      </div>
    </div>
  );
}
