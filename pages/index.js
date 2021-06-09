/** @format */
import Head from "next/head";
import Link from "next/link";
import BoxBlog from "../components/Blog/box-blog";
import AIPlatform from "../components/AI/ai";
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
import { server } from "../config";

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

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>

        <title>PlusTeam</title>
        <meta name="description" content="PlusTeam Global" />
        <link rel="icon" href="/static/img/logo/Logo.svg" />

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
        id="services"
        title="OUR SERVICES"
        des="PlusTeam assists companies to build their technology teams in Vietnam."
      >
        <Services services={service} />
      </Box>
      <Box title="OUR PRICING" des="" id="pricing">
        <Pricing />
      </Box>
      <Box title="WORK PROCESS" des="" id="process">
        <Process />
      </Box>
      <Box
        title="plusteam ai platform"
        des="Where You can able to identify the right candidates based on our Customer Requirements."
        id="AI"
      >
        <AIPlatform></AIPlatform>
      </Box>
      <Box title="OUR TEAM" des="" id="team">
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
          {blog.map((blog, index) => {
            return index < 3 && <BoxBlog key={blog.id} blog={blog}></BoxBlog>;
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
  const fetchTalent = await fetch(`${server}talent/`);
  const fetchService = await fetch(`${server}service/`);
  const fetchBlog = await fetch(`${server}blog/`);

  const talent = await fetchTalent.json();
  const service = await fetchService.json();
  const blog = await fetchBlog.json();

  return {
    props: { talent, service, blog },
  };
}
