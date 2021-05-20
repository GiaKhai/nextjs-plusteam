/** @format */

import ProcessItem from "./process-item";

export default function Process() {
  const dataProcess = [
    {
      id: "1",
      title: "Tell us what you need",
      content:
        "Submit your requirement and chat to our specialist - an expert on our team will work to undertand you as a client.",
      image: "/static/img/process/process1.svg",
    },
    {
      id: "2",
      title: "Work with Hand-Selected Talent",
      content:
        "Work with curated talents. We will hand pick talents for your team in first 2 to 4 weeks.",
      image: "/static/img/process/process2.svg",
    },
    {
      id: "3",
      title: "The Right Fit, Guaranteed",
      content:
        "Grow together - Work with your new team member and focus on output, while PlusTeam will take care of all HR aspects locally.",
      image: "/static/img/process/process3.svg",
    },
  ];
  return (
    <div>
      <div className="row margin-t-50">
        {dataProcess.map((process) => {
          return <ProcessItem key={process.id} process={process} />;
        })}
        <div className="text-center mx-auto">
          <a href>
            <button
              type="button"
              className="btn btn-outline-warning btn-hiring"
            >
              Get Started
            </button>
          </a>
        </div>
      </div>
      <style jsx>{`
        .process-box {
          padding: 20px;
        }
        .btn-hiring:hover {
          color: #ffffff;
          background: rgba(253, 179, 28, 1);
        }
      `}</style>
    </div>
  );
}
