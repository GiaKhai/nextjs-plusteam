/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import BoxService from "./box-service";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(async () => {
    const result = await axios.get("http://ef397a150cc0.ngrok.io/api/service/");
    setServices(result.data);
    console.log(result.data);
  }, []);
  return (
    <div>
      <div className="row margin-t-50">
        {services?.map((services) => {
          console.log(services);
          return <BoxService key={services.id} services={services} />;
        })}
      </div>
    </div>
  );
}
