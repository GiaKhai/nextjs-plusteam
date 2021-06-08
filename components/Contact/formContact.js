/** @format */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { notification } from "antd";
import "antd/dist/antd.css";

export default function FormContact({ radio }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    content: "",
  });

  useEffect(() => {
    setValues({ ...values, content: radio });
  }, [radio]);
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("content", values.content);

    const result = await axios.post(
      "https://api-dev.plusteam.io/email",
      formData
    );
    if (result.status === 200) {
      notification.success({
        message: "Success",
        description: "Please check your email !",
      });
    } else
      notification.error({
        message: "False",
        description: "Please check again !",
      });
  };

  return (
    <div className="row mt-25">
      <div className="col-lg-8 offset-lg-2">
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name*"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email*"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-3 " style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="btn btn-outline-warning btn-hiring"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .form-control {
          display: block;
          width: 100%;
          min-height: 45px;
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
      `}</style>
    </div>
  );
}
