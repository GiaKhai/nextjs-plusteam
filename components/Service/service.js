/** @format */

import Head from "next/head";
import BoxService from "./box-service";

export default function Services() {
  const dataService = [
    {
      id: 1,
      title: "Building Your Remote Working Team",
      content:
        "We specialize in connecting companies to the best talent resources from Vietnam and provides a seamless end-to-end solution for remote team management.",
      image: "/static/img/services/service1.png",
    },
    {
      id: 2,
      title: "Recruitment and HR Advice",
      content:
        "We supports you to build your operations with recruitment and HR advice, allowing you to remain focused on your core operations",
      image: "/static/img/services/service2.png",
    },
    {
      id: 3,
      title: "Coworking and Office Spaces",
      content:
        "We have a network of plug-and-play office spaces ready for your team. These spaces are private and flexible, ideal for new teams. We can also arrange similar amenities in a range of recommended coworking spaces.",
      image: "/static/img/services/service3.png",
    },
    {
      id: 4,
      title: "Company Registration",
      content:
        "Start operating your business in Vietnam with investment approval, a business license and bank accounts.",
      image: "/static/img/services/service4.png",
    },
    {
      id: 5,
      title: "Project Management Services",
      content:
        "We help specialize in planning, coordinating, and executing projects according to specific requirements and constraints. The end goal is to complete the project on time and within budget.",
      image: "/static/img/services/service5.png",
    },
    {
      id: 6,
      title: "Quality Assurance Services",
      content:
        "We provide QA services to help preventing defects and bugs in software products and applications to make sure that the developed software or application meets all standardized quality specifications.",
      image: "/static/img/services/service6.png",
    },
  ];

  return (
    <div>
      <div className="row margin-t-50">
        {dataService?.map((service) => {
          return <BoxService key={service.id} services={service} />;
        })}
      </div>
    </div>
  );
}
