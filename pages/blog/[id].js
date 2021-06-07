/** @format */
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/navbar";

export const getStaticPaths = async () => {
  const fetchBlog = await fetch("https://api-dev.plusteam.io/api/blog/");
  const data = await fetchBlog.json();

  const paths = data.map((blog) => {
    return {
      params: { id: blog.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const fetchBlog = await fetch("https://api-dev.plusteam.io/api/blog/" + id);
  const blog = await fetchBlog.json();
  return {
    props: { blog },
  };
};

export default function Detail({ blog }) {
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
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        />
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
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
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <section className="section pt-5">
        <div className="container">
          <h3 className="title">
            <img src="/static/img/icon/back.svg">
              {/* <a href="/blog/" /> */}
            </img>
            Blog
          </h3>
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
                <span className="h5">{blog.create_at}</span>
              </p>
              <p className="share mt-10">
                <span className="h5">Share</span>
                <br />
                <img
                  className="mr-2"
                  src="/static/img/icon/facebook.svg"
                  alt="fb"
                />
                <img
                  className="mr-2"
                  src="/static/img/icon/in.svg"
                  alt="linked"
                />
                <img src="/static/img/icon/share.svg" alt="share" />
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
