/** @format */

import React, { useState } from "react";

const Question = ({ onChange, data }) => {
  const [radio, setRadio] = useState({ checked: null });
  const { id, title, answers } = data;
  const handleChange = (e) => {
    const { value } = e.target;
    console.log(data?.id, value);

    onChange({
      [id]: value,
    });
    setRadio({ checked: e.target.value });
  };
  return (
    <>
      <h1 class="section-title text-center">FIND YOUR RIGHT FIT TALENT</h1>
      <p class="text-sumary">
        Before we get started, we’d like to ask a few questions to understand
        your business needs.
      </p>
      <div class="question" key={id}>
        <h3>{title}</h3>
        {answers?.length > 0 &&
          answers?.map((item, index) => (
            <label key={index}>
              <input
                type="radio"
                id={index}
                name={index}
                value={item}
                onChange={handleChange}
                checked={radio.checked === item}
              />
              {item}
            </label>
          ))}
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
        h3 {
          margin-bottom: 20px;
          color: #094989;
        }
        input {
          margin-right: 10px;
        }
      `}</style>
    </>
  );
};

export default Question;
