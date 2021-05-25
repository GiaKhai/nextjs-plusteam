/** @format */
import Head from "next/head";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
export default function Post() {
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

  const blog = dataBlog.find((blog) => blog.id == 1);
  console.log(blog);
  return (
    <div>
      <Head>
        <title>PlusTeam</title>
        <meta name="description" content="PlusTeam Global" />
        <link rel="icon" href="/static/img/logo/Logo.svg" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        />
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Avenir"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Bebas Neue"
        ></link>
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        ></link> */}
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <section className="section pt-5">
        <div className="container">
          <h1 className="title"> &#8249; Blog </h1>
          <div className="row mt-25">
            <div className="col-lg-12 text-center">
              <img className="img-title" src={blog.image} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-25">
        <div className="container">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="section-title text-center">{blog.title}</h1>
            <div className="section-title-border margin-t-20" />
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-3">
              <p className="mt-4">
                <span className="text-muted d-block mt-2">Author</span>
                <span className="h5">ADMIN</span>
              </p>
              <p className="mt-4">
                <span className="text-muted d-block mt-2">Date</span>
                <span className="h5">1/1/2021</span>
              </p>
              <p className="share mt-10">
                <span className="h5">Share</span>
                <br />
                <img className="mr-2" src="/static/img/facebook.svg" alt="fb" />
                <img className="mr-2" src="/static/img/in.svg" alt="linked" />
                <img src="/static/img/share.svg" alt="share" />
              </p>
            </div>
            <div className="col-lg-9 content">
              <p className="mt-4">{blog.content}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        .img-title {
          border-radius: 20px;
          width: 800px;
        }
        .section-title {
          margin-top: 30px;
          font-family: Bebas Neue;
          font-style: normal;
          font-weight: normal;
          font-size: 35px;
          line-height: 30px;
          color: #094989;
        }
      `}</style>
    </div>
  );
}
