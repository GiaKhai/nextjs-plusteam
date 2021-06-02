/** @format */

import React from "react";

function DetailJob(props) {
  return (
    <div>
      <div>
        <section className="section pt-5 pb-5">
          <div className="container">
            <div>
              <img
                src="{% static 'img/blog/Frame.png' %}"
                style={{ marginBottom: "5px" }}
              />
              <h1 className="blog-title">Job</h1>
            </div>
            {"{"}% for job in job %{"}"}
            <h1 className="section-title to-upcase">
              {"{"}
              {"{"} job.title{"}"}
              {"}"}
            </h1>
            <div className="row">
              <div className="col-lg-6 mt-25">
                <div className="row">
                  <div className="col-lg-6 mt-25">
                    <span className="blue-text">
                      <img
                        src="{% static 'img/company-blue.png' %}"
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                        alt={12}
                      />
                      Company
                    </span>
                    <br />
                    <a className="text-dark">
                      {"{"}
                      {"{"} job.company{"}"}
                      {"}"}
                    </a>
                  </div>
                  <div className="col-lg-6 mt-25">
                    <span className="blue-text">
                      <img
                        src="{% static 'img/blue-usd.png' %}"
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                        alt={12}
                      />
                      Salary
                    </span>
                    <br />
                    <a className="text-dark">
                      ${"{"}
                      {"{"}job.salary{"}"}
                      {"}"}
                    </a>
                  </div>
                  <div className="col-lg-6 mt-25">
                    <span className="blue-text">
                      <img
                        src="{% static 'img/blue-location.png' %}"
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                        alt={12}
                      />
                      Location
                    </span>
                    <br />
                    <a className="text-dark">
                      {"{"}
                      {"{"} job.location{"}"}
                      {"}"}
                    </a>
                  </div>
                  <div className="col-lg-6 mt-25">
                    <span className="blue-text">
                      <img
                        src="{% static 'img/people.png' %}"
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                        alt={12}
                      />
                      Varcancies
                    </span>
                    <br />
                    <a className="text-dark">
                      {"{"}
                      {"{"}job.vacancies{"}"}
                      {"}"} persons
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-25 content">
              {"{"}
              {"{"}job.content| safe |linebreaks{"}"}
              {"}"}
            </div>
            {"{"}% endfor %{"}"}
            <div
              className="mt-25"
              style={{ borderBottom: "2px solid #BDBDBD" }}
            ></div>
            <form
              className="form-contact contact_form"
              method="post"
              id="sendCVForm"
              encType="multipart/form-data"
            >
              <div className="mt-25">
                <h1 style={{ color: "black" }}>Submit Your Application</h1>
                <h5 className="text-mute mt-25">
                  Signin to apply with Linkedld
                </h5>
                <div className="row">
                  <div className="col-lg-3" style={{ padding: "1rem" }}>
                    <a href="#" className="btn-apply">
                      Apply with Linkedid
                    </a>
                  </div>
                  <div className="col-lg-2" style={{ padding: "1rem" }}>
                    <span>Or</span>
                  </div>
                  <div
                    className="col-lg-4 file-CV"
                    style={{ marginLeft: "-130px" }}
                  >
                    <div className="input-file-container">
                      <input
                        className="input-file"
                        id="id_file"
                        type="file"
                        name="file"
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
                <span style={{ display: "flex" }}>
                  {"{"}% csrf_token %{"}"}
                </span>
              </div>
              <div className="row mt-25 contact">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      style={{
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10px center",
                        textIndent: "20px",
                        backgroundImage:
                          'url({% static "img/yellow-people.png" %})',
                      }}
                      className="form-control"
                      name="first_name"
                      id="id_first_name"
                      type="text"
                      placeholder="First Name*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      style={{
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10px center",
                        textIndent: "20px",
                        backgroundImage:
                          'url({% static "img/yellow-people.png" %})',
                      }}
                      className="form-control"
                      name="last_name"
                      id="id_last_name"
                      type="text"
                      placeholder="Last Name*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group ">
                    <input
                      style={{
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10px center",
                        textIndent: "20px",
                        backgroundImage: 'url({% static "img/phone-2.png" %})',
                      }}
                      className="form-control"
                      name="phone"
                      id="id_phone"
                      type="text"
                      placeholder="Phone Number*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      style={{
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10px center",
                        textIndent: "20px",
                        backgroundImage:
                          'url({% static "img/email-yellow.png" %})',
                      }}
                      className="form-control"
                      name="email"
                      id="id_email"
                      type="email"
                      placeholder="Email*"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3 text-center">
                <button
                  type="submit"
                  className="btn btn-outline-warning btn-send "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="section area-padding-top pb-5" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1 className="section-title text-center to-upcase">
                  you might also interested in
                </h1>
              </div>
            </div>
            <div className="row mt-25">
              {"{"}% for item in all_jobs %{"}"}
              <div className="col-md-6 col-lg-6  mt-25">
                <div className="box-job">
                  <div className="row">
                    <div className="col col-lg-2">
                      <img src="{{item.image.url}}" alt="plusteam" />
                    </div>
                    <div className="col col-lg-10">
                      <h4 className="question-title">
                        {"{"}
                        {"{"}item.title{"}"}
                        {"}"}
                      </h4>
                      {"{"}% if item.urgent %{"}"}
                      <div className="badge">Urgent</div>
                      {"{"}% endif %{"}"}
                      <h5 className="company-name">
                        {"{"}
                        {"{"}item.company{"}"}
                        {"}"}
                      </h5>
                      <div className="row">
                        <div className="col-lg-4">
                          <img
                            style={{ marginBottom: "5px", marginRight: "10px" }}
                            src="{% static 'img/usd.png' %}"
                            alt="usd"
                          />
                          <span className="text-job">
                            {"{"}
                            {"{"}item.salary{"}"}
                            {"}"}
                          </span>
                        </div>
                        <div className="col-lg-8">
                          <img
                            src="{% static 'img/location.png' %}"
                            style={{ marginBottom: "5px", marginRight: "10px" }}
                            alt="location"
                          />
                          <span className="text-job">
                            {"{"}
                            {"{"}item.location{"}"}
                            {"}"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div className="col-lg-6">
                      <span className="mute-date">
                        {"{"}
                        {"{"}item.update_at{"}"}
                        {"}"}
                      </span>
                    </div>
                    <div className="col-lg-6">
                      <a
                        className="job-view"
                        href="{% url 'job:job' %}{{item.id}}"
                      >
                        View Job Description
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {"{"}% endfor %{"}"}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailJob;
