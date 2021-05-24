/** @format */

import BoxBlog from "./box-blog";

export default function Blog() {
  var dataBlog = [
    {
      id: "1",
      title: "Hire Remote Developers in Vietnam to Build Your Killer Product",
      content:
        "Remote talent has simply become a necessity, particularly for startups. Unfortunately, hiring remote developers in another country is not always easy.",
      image: "/static/img/blog/blog1.png",
    },
    {
      id: "2",
      title: "Coworking Spaces for Tech Teams in Saigon",
      content:
        "The working location of your tech team can make a big difference to their satisfaction and even your company’s ability to attract talent.",
      image: "/static/img/blog/blog2.png",
    },
    {
      id: "3",
      title: "Why Vietnam?",
      content: "Consider Vietnam as an example of an emerging market.",
      image: "/static/img/blog/blog3.png",
    },
  ];
  return (
    <section className="service-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="section-title text-center padding-t-100 margin-b-50">
              BLOG
            </h4>
          </div>
          {dataBlog?.map((blog) => {
            return <BoxBlog key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
    </section>
  );
}
