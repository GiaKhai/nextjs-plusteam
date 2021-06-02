/** @format */
import Head from "next/head";
import Link from "next/link";
import BoxBlog from "../components/Blog/box-blog";
import Box from "../components/Box/Box";
import Candidate from "../components/Candidate/candidate";
import Contact from "../components/Contact/contact";
import Crypto from "../components/Crypto/crypto";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/navbar";
import Pricing from "../components/Pricing/pricing";
import Process from "../components/Process/process";
import Services from "../components/Service/service";
import JD from "../components/ShareYourResume/JD-item";
import Team from "../components/Team/team";
import TopTalent from "../components/TopTalent/TopTalent";
import Trusted from "../components/Trusted/trusted";

export default function Home({ talent, service, blog }) {
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
        <link rel="stylesheet" href="assets/css/style.css" />

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

      <TopTalent talent={talent} />
      <Trusted />
      <Box
        title="OUR SERVICES"
        des="PlusTeam assists companies to build their technology teams in Vietnam."
      >
        <Services services={service} />
      </Box>
      <Box title="OUR PRICING" des="">
        <Pricing />
      </Box>
      <Box title="WORK PROCESS" des="">
        <Process />
      </Box>
      <Box title="OUR TEAM" des="">
        <Team />
      </Box>
      <Box
        title="Crypto Payment Allowance"
        des="We accepted payment via Crypto currency USDT, BNB, BTC, ETH"
      >
        <Crypto />
      </Box>
      <Box
        title="Top talent candidates"
        des="Guarantee for top talents from leading universities and tech-driven companies"
      >
        <Candidate />
      </Box>
      <Box title="BLOG" des="">
        <div className="row">
          {blog.map((blog) => {
            return <BoxBlog blog={blog}></BoxBlog>;
          })}
        </div>
      </Box>

      <Box title="GET IN TOUCH" des="">
        <Contact />
      </Box>

      <Footer />
      <style jsx>{`
        .header.scrolled {
          background-color: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const fetchTalent = await fetch("http://127.0.0.1:8000/api/talent/");
  const fetchService = await fetch("http://127.0.0.1:8000/api/service/");
  const fetchBlog = await fetch("http://127.0.0.1:8000/api/blog/");

  const talent = await fetchTalent.json();
  const service = await fetchService.json();
  const blog = await fetchBlog.json();

  return {
    props: { talent, service, blog },
  };
}
