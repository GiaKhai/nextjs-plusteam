/** @format */

import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/navbar";

export const getStaticPaths = async () => {
  const fetchJob = await fetch("http://localhost:8000/api/job/");
  const data = await fetchJob.json();

  const paths = data.map((job) => {
    return {
      params: { id: job.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const fetchJob = await fetch("http://localhost:8000/api/job/" + id);
  const job = await fetchJob.json();
  return {
    props: { job },
  };
};

export default function DetailJob({ job }) {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    file: null,
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setValues({ ...values, [name]: value });
  };

  const handleChangeFile = (event) => {
    setValues({ ...values, file: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("file", values.file);

    console.log(values);
    const result = axios.post(
      "http://127.0.0.1:8000/api/job-submission/",
      formData
    );
    if (result.status === 200) {
      alert("ok");
      setValues({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        file: null,
      });
    } else alert("no");
  };

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
      <div>
        <Navbar />
        <section className="section pt-5 pb-5">
          <div className="container">
            <h3 className="title">
              <img src="/static/img/icon/back.svg">
                {/* <a href="/blog/" /> */}
              </img>
              Job
            </h3>
            <h1 className="section-title to-upcase">{job.title}</h1>
            <div className="row">
              <div className="col-lg-8 mt-25">
                <div className="row">
                  <div className="col-lg-6 mt-25">
                    <span className="blue-text">
                      <img
                        src="/static/img/icon/company-blue.svg"
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                        alt={12}
                      />
                      Company
                    </span>
                    <br />
                    <a className="text-dark">{job.company}</a>
                  </div>
                  <div className="col-lg-6 mt-25">
                    <span className="blue-text">
                      <img
                        src="/static/img/icon/salary-blue.svg"
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                        alt={12}
                      />
                      Salary
                    </span>
                    <br />
                    <a className="text-dark">{job.salary}</a>
                  </div>
                  <div className="col-lg-6 mt-25">
                    <span className="blue-text">
                      <img
                        src="/static/img/icon/location-blue.svg"
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                        alt={12}
                      />
                      Location
                    </span>
                    <br />
                    <a className="text-dark">{job.location}</a>
                  </div>
                  <div className="col-lg-6 mt-25">
                    <span className="blue-text">
                      <img
                        src="/static/img/icon/vacancies-blue.svg"
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                        alt={12}
                      />
                      Varcancies
                    </span>
                    <br />
                    <a className="text-dark">{job.vacancies}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-25 content">{job.content}</div>
            <div className="form">
              <div
                className="mt-25"
                style={{ borderBottom: "2px solid #BDBDBD" }}
              ></div>
              <form
                onSubmit={handleSubmit}
                className="form-contact contact_form"
                method="post"
                id="sendCVForm"
                encType="multipart/form-data"
              >
                <div className="mt-25">
                  <h1 style={{ color: "black" }}>Submit Your Application</h1>

                  <div className="col-lg-4 file-CV">
                    <div className="input-file-container">
                      <input
                        className="input-file"
                        id="id_file"
                        type="file"
                        name="file"
                        onChange={handleChangeFile}
                      />
                      <label
                        tabIndex={0}
                        htmlFor="my-file"
                        className="input-file-trigger"
                      >
                        upload your resume (.pdf, .doc, .docx, .txt)
                      </label>
                    </div>
                    <p className="file-return" />
                  </div>
                </div>
                <div className="row mt-25 contact">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="first_name"
                        id="id_first_name"
                        type="text"
                        placeholder="First Name*"
                        value={values.first_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="last_name"
                        id="id_last_name"
                        type="text"
                        placeholder="Last Name*"
                        value={values.last_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group ">
                      <input
                        className="form-control"
                        name="phone"
                        id="id_phone"
                        type="text"
                        placeholder="Phone Number*"
                        value={values.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        id="id_email"
                        type="email"
                        placeholder="Email*"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3 text-center">
                  <button
                    type="submit"
                    className="btn btn-outline-warning btn-hiring "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <style jsx>{`
        .blue-text {
          font-weight: 600;
          font-size: 19px;
          line-height: 26px;
          margin: auto 5px;
          color: #094989;
        }
        .text-dark {
          font-family: Avenir;
          font-style: normal;
          font-weight: 600;
          font-size: 21px;
          line-height: 31px;
          color: #292b33;
          margin-left: 5px;
        }
        .btn-apply {
          border-radius: 10px;
          font-weight: 900;
          font-size: 21px;
          line-height: 29px;
          background: #2f72ac;
          align-items: center;
          text-align: center;
          padding: 10px;
          padding: 10px;
          color: #ffffff;
        }
        .input-file-trigger {
          display: block;
          color: red;
          font-size: 15px;
          transition: all 0.4s;
          cursor: pointer;
          padding: 14px 0px;
        }
        .file-return {
          font-style: italic;
          font-size: 0.9em;
          font-weight: bold;
        }
        .btn-send {
          width: 140px;
          height: 45px;
          font-size: 17px;
        }
      `}</style>
    </div>
  );
}
