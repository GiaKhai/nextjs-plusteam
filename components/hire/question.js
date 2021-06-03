/** @format */

import React, { useState } from "react";

const Question = ({ onChange, data }) => {
  const [radio, setRadio] = useState({ checked: null });
  const { id, question, answers } = data;
  const handleChange = (e) => {
    const { value } = e.target;

    onChange({
      [id]: value,
    });
    setRadio({ checked: e.target.value });
  };
  return (
    <div>
      <h1 className="section-title text-center">FIND YOUR RIGHT FIT TALENT</h1>
      <p className="text-sumary">
        Before we get started, we’d like to ask a few questions to understand
        your business needs.
      </p>
      <div className="question" key={id}>
        <h3>{question}</h3>
        {answers?.length > 0 &&
          answers?.map((item, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  id={index}
                  name={index}
                  value={item.title}
                  onChange={handleChange}
                  checked={radio.checked === item.title}
                />
                {item.title}
                <p>{item.description}</p>
              </label>
            );
          })}
      </div>
      <style jsx>{`
        .section-title-find {
          margin-top: 30px;
          font-weight: 600;
          font-size: 40px;
          color: #094989 !important;
          font-family: "Bebas Neue", sans-serif;
        }
        .question {
          height: 260px;
          padding: 20px 17% 20px 20%;
          display: block;
        }
        label {
          display: block;
          font-size: 20px;
          font-weight: 600;
          padding: 5px;
        }
        label p {
          display: block;
          font-size: 15px;
          font-weight: 350;
          padding-left: 23px;
        }
        h3 {
          margin-bottom: 20px;
          color: #094989;
        }
        input {
          margin-right: 10px;
        }
        @media (max-width: 575px) {
          .question {
          padding: 20px 17% 20px 3%;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Question;
