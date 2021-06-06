/** @format */
import axios from "axios";
import React, { useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    content: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(event.target.value);
    const name = event.target.name;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("content", values.content);

    const result = await axios.post("http://localhost:8000/email", formData);
    if (result.status === 200) {
      alert("ok");
      setValues({ name: "", email: "", content: "" });
    } else alert("no");
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-box">
              <div className="col-lg-6">
                <div className="infor">
                  <div className="single-infor">
                    <svg
                      width={21}
                      height={21}
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.69358 0.953125C7.46667 0.953125 7.33701 0.953125 7.33701 0.953125C7.33701 0.953125 7.20735 0.953125 6.98045 0.953125C1.56716 1.37452 -1.6095 6.65815 0.951274 11.0017L6.62388 20.5641C6.94803 21.1152 7.72599 21.1152 8.05014 20.5641L13.7552 11.0017C16.3159 6.65815 13.1393 1.37452 7.69358 0.953125ZM7.33701 9.80239C5.81351 9.80239 4.58174 8.57063 4.58174 7.04713C4.58174 5.52363 5.81351 4.29186 7.33701 4.29186C8.86051 4.29186 10.0923 5.52363 10.0923 7.04713C10.1247 8.57063 8.86051 9.80239 7.33701 9.80239Z"
                        fill="#094989"
                      />
                    </svg>
                    <p>
                      HALO BUILDING, 186 Tran Quang Khai Street, Tan Dinh wards,
                      District 1, Ho Chi Minh City, Vietnam
                    </p>
                  </div>
                  <div className="single-infor">
                    <svg
                      width={21}
                      height={21}
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3372 0.729492C4.81555 0.729492 0.353271 5.19177 0.353271 10.7134C0.353271 16.2351 4.81555 20.7295 10.3372 20.7295C15.8589 20.7295 20.3533 16.2351 20.3533 10.7134C20.3533 5.19177 15.8589 0.729492 10.3372 0.729492ZM15.6984 11.4839H10.3372C9.95199 11.4839 9.63096 11.1629 9.63096 10.7776V3.49033C9.63096 2.55935 11.0756 2.55935 11.0756 3.49033V10.0393H15.6984C16.6294 10.0393 16.6294 11.4839 15.6984 11.4839Z"
                        fill="#094989"
                      />
                    </svg>
                    <p>9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="single-infor">
                    <svg
                      width={21}
                      height={20}
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.353271 4.82991C0.385478 3.28402 0.997394 1.99577 1.99578 0.836352C2.41446 0.35326 3.02638 0.256642 3.57388 0.0956112C3.83153 0.0311989 4.08918 -0.00100722 4.34683 -0.0332133C4.7011 -0.0976256 4.99095 0.0311989 5.15198 0.35326C5.44184 0.836352 5.69949 1.31944 5.98934 1.83474C6.40802 2.57548 6.7945 3.34843 7.30979 4.05696C7.37421 4.12138 7.40641 4.21799 7.47082 4.31461C7.69627 4.66888 7.66406 5.02315 7.37421 5.34521C7.05214 5.69948 6.73008 6.02154 6.34361 6.31139C5.98934 6.60125 5.63508 6.8911 5.31301 7.21316C5.05537 7.47081 4.99095 7.76067 5.15198 8.08273C5.60287 9.01671 6.15037 9.88627 6.76229 10.7236C7.95392 12.3661 9.4676 13.6222 11.2389 14.6206C11.5932 14.8138 11.9153 15.0715 12.3017 15.2003C12.5916 15.2969 12.817 15.2647 13.0425 15.0715C13.3968 14.7816 13.6866 14.4273 13.9443 14.0731C14.2341 13.7188 14.524 13.3645 14.8782 13.0425C15.3291 12.656 15.619 12.5916 16.1021 12.9136C17.2293 13.6866 18.4531 14.2985 19.6447 14.9426C20.3533 15.3291 20.4177 15.4901 20.2889 16.2953C20.2567 16.5529 20.1922 16.8428 20.1278 17.1004C19.999 17.7768 19.6125 18.2921 19.065 18.6785C17.9378 19.4837 16.714 20.0312 15.2969 19.9668C14.6528 19.9346 14.0087 19.7736 13.429 19.5803C12.656 19.2905 11.8509 19.0328 11.0779 18.7108C9.4354 18.0344 8.05053 17.036 6.73008 15.8444C5.11978 14.4273 3.70271 12.8492 2.54329 11.0457C1.80255 9.88627 1.38387 8.63023 0.932982 7.3742C0.61092 6.56904 0.353271 5.73168 0.353271 4.82991Z"
                        fill="#094989"
                      />
                    </svg>
                    <p>+84931959588</p>
                  </div>
                  <div className="single-infor">
                    <svg
                      width={23}
                      height={21}
                      viewBox="0 0 23 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.3881 0.259277H1.35318C0.863672 0.259277 0.444092 0.678858 0.444092 1.16837V19.3852C0.444092 19.8747 0.863672 20.2942 1.35318 20.2942H21.3881C21.8777 20.2942 22.2972 19.8747 22.2972 19.3852V1.16837C22.2623 0.678858 21.8777 0.259277 21.3881 0.259277ZM20.0944 6.16837C18.9756 6.79774 17.8567 7.46207 16.7028 8.09144L12.7867 10.3292C12.1574 10.6789 11.493 10.9586 10.7588 10.7138C10.3742 10.6089 9.98955 10.3292 9.6399 10.1194C7.29724 8.79075 4.98955 7.46207 2.64689 6.1334C1.77276 5.67886 2.54199 4.31522 3.45108 4.80473C4.535 5.4341 5.61892 6.02851 6.66787 6.65788C7.99654 7.42711 9.29025 8.16137 10.6189 8.9306C10.9336 9.10543 11.2483 9.38515 11.6329 9.21033C11.9126 9.07047 12.1923 8.89564 12.4721 8.75578C14.7448 7.46207 17.0175 6.1334 19.2902 4.8397C20.1644 4.31522 20.9686 5.67886 20.0944 6.16837Z"
                        fill="#094989"
                      />
                    </svg>
                    <p>support@plusteam.io</p>
                  </div>
                  <h5>Let's Connect!</h5>
                  <a href="https://www.linkedin.com/company/plusteam-global/">
                    <img src="/static/img/icon/in.svg" alt="in" />
                  </a>
                  <a href="https://www.facebook.com/plusteamglobal">
                    <img
                      className=" ml-1"
                      src="/static/img/icon/facebook.svg"
                      alt="facebook"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <form id="contactForm" method="post" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control name"
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Name*"
                          value={values.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control mail"
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Email*"
                          value={values.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control textarea"
                          name="content"
                          id="content"
                          cols={30}
                          rows={9}
                          placeholder="Tell us your problematic headache..."
                          value={values.content}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button
                      style={{ width: "90px" }}
                      type="submit"
                      className="btn btn-outline-warning btn-hiring"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .name {
          background-repeat: no-repeat;
          background-position: 7px center;
          text-indent: 20px;
          background-image: url(./../static/img/yellow-people.png);
        }
        .mail {
          background-repeat: no-repeat;
          background-position: 7px center;
          text-indent: 20px;
          background-image: url(./../static/img/yellow-mail.png);
        }
        .textarea {
          background-repeat: no-repeat;
          background-position: 7px 10px;
          text-indent: 20px;
          background-image: url(/static/img/yellow-pen.png);
        }
        .contact-box {
          width: 100%;
          box-shadow: 0px 5px 40px rgb(30 73 132 / 10%);
          border-radius: 25px;
          padding: 30px 10px;
          display: flex;
        }
        .form-control {
          display: block;
          width: 100%;
          height: 45px;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
          color: #094989;
          background-color: #fff;
          background-clip: padding-box;
          border: 2px solid #094989;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
        .textarea {
          height: 100px;
        }
        .infor .single-infor {
          margin: 10px 0;
          display: flex;
        }
        .row svg {
          min-width: 21px;
          margin-right: 10px;
        }
        @media (max-width: 575px) {
          .contact-box {
            display: block;
          }
          .infor {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
}
