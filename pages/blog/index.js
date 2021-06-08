/** @format */
import Head from "next/head";
import BoxBlog from "../../components/Blog/box-blog";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/navbar";

export default function Home({ blog }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>

        <title>PlusTeam</title>
        <meta name="description" content="PlusTeam Global" />
        <link rel="icon" href="/static/img/logo/Logo.svg" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        />

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        ></link>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <section className="section mt-5">
        <div className="container">
          <div className="row blog-box">
            <div
              className="col-lg-6 col-lg-4"
              style={{ padding: "0px !important" }}
            >
              <img
                src="/static/img/blog/blog1.png"
                className="img-lastest"
                alt="img4"
              />
            </div>
            <div className="col-lg-6  text-center">
              <div style={{ padding: "15px" }}>
                <a className="text-yellow" href="#">
                  Lastest News
                </a>
                <br />
                <h1 className="lastest-title mt-3">
                  Vietnam Is One Of Top Global Outsource Market In 2021
                </h1>
                <p className="text-muted mt-1 mb-3">
                  Remote talent has simply become a necessity, particularly for
                  startups. Unfortunately, hiring remote developers in another
                  country ...
                </p>
                <a className="read-btn" href="#">
                  Read More &gt; <i className="mdi mdi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h1 className="section-title text-center text-blue mt-5">Blog</h1>
        <div className="row">
          {blog.map((blog) => {
            return <BoxBlog blog={blog}></BoxBlog>;
          })}
        </div>
      </div>

      <section className="section pt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center text-blue">
                Lastest News Update
              </h1>
              <p className="section-subtitle text-muted text-center font-secondary">
                Subscribe and stay updated with latest articles and news to your
                inbox.
              </p>
            </div>
          </div>
          <div
            className="col-lg-8 offset-lg-2 pt-5"
            style={{ textAlign: "center" }}
          >
            <div className="email-control">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control email-box"
                  name="EMAIL"
                  placeholder="Email "
                />
                <div className="input-group-append">
                  <a className="btn-sub" href="#">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        .blog-box {
          background: #ffffff;
          box-shadow: 0px 5px 40px rgb(30 73 132 / 10%);
          border-radius: 25px;
          height: auto;
        }
        .single-service {
          box-shadow: 0px 5px 40px rgb(30 73 132 / 10%);
          border: 1px solid #edf1f6;
          background: #fff;
          text-align: left;
          border: rgb(199, 198, 198) 2 solid;
          border-radius: 25px;
          background-position: right top;
          background-repeat: no-repeat;
          transition: all 300ms linear 0s;
        }
        .single-service p {
          font-family: Avenir;
          font-style: normal;
          font-weight: 500;
          font-size: 17px;
          line-height: 23px;
          color: black;
        }
        .single-service:hover {
          background: rgba(9, 73, 137, 1);
        }
        .single-service:hover h5 {
          color: #fdb31c;
        }
        .single-service:hover p {
          color: #fff;
        }
        .single-service:hover a {
          color: #fdb31c;
        }
        .service-icon img {
          max-width: 100%;
          border-top-left-radius: 25px;
          border-top-right-radius: 25px;
        }
        .service-content {
          margin: 15px 20px;
        }
        .service-content h5 {
          font-family: Avenir;
          font-style: normal;
          font-weight: 900;
          font-size: 19px;
          line-height: 29px;
          color: #292b33;
        }
        .img-lastest {
          border-radius: 25px;
          width: 80%;
        }
        @media (max-width: 991px) {
          .img-lastest {
            border-radius: 25px;
            width: 100%;
          }
        }
        .text-yellow {
          font-family: Avenir;
          font-style: normal;
          font-weight: 800;
          font-size: 21px;
          line-height: 29px;
          background: #f6e3ce;
          color: #fdb31c;
          padding: 10px;
          border-radius: 25px;
        }
        .read-btn {
          font-family: Avenir;
          font-style: normal;
          font-weight: 500;
          font-size: 17px;
          line-height: 26px;
          color: #fdb31c;
        }
        .lastest-title {
          font-family: Avenir;
          font-style: normal;
          font-weight: 900;
          font-size: 28px;
          line-height: 38px;
          color: #094989;
        }
        .email-control {
          width: 60%;
          margin: auto;
        }
        .btn-sub {
          border-radius: 24px;
          padding: 6px 15px;
          background-color: #fdb31c;
          border-color: #fdb31c;
          line-height: 33px;
          margin: auto;
          color: white;
          font-weight: 700;
          text-transform: capitalize;
          z-index: 999;
        }
        .btn-sub:hover {
          color: white !important;
        }

        .email-box {
          border: 1px solid #fdb31c;
          width: 67% !important;
          font-weight: 300;
          background: transparent;
          padding-left: 20px;
          border-radius: 0;
          font-size: 14px;
          padding: 10px 22px;
          border-radius: 25px;
          color: #888888;
          margin-right: -25px;
          height: 45px;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const fetchBlog = await fetch(
    "`${process.env.NEXT_PUBLIC_PLUSTEAM_API}blog/`"
  );

  const blog = await fetchBlog.json();

  return {
    props: { blog },
  };
}
