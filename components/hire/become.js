/** @format */

import React, { useEffect, useState } from "react";
import Question from "./question";
import dataQuestion from "./dataQuestion";

function Become() {
  const [step, setStep] = useState(1);
  const [radio, setRadio] = useState({});
  const nextStep = () => {
    if (step < 10) {
      setStep(step + 1);
    } else if (step === 10) {
    }
  };
  // useEffect(() => {
  //   console.log(radio);
  // }, [radio]);

  const handleChange = (value) => {
    setRadio({
      ...radio,
      ...value,
    });
  };

  return (
    <div class="section">
      <div className="col-lg-8 offset-lg-2 question-area">
        <Question
          onChange={handleChange}
          data={dataQuestion?.find((item) => item.id === step)}
        />
        <div className="btn-next text-right">
          <img src="/static/img/icon/btnNext.svg" onClick={nextStep} />
        </div>
      </div>
      <style jsx>{`
        img {
          width: 50px;
        }
        .question-area {
          height: 570px;
        }
        @media (max-width: 575px) {
          .question-area {
            height: 860px;
          }
        }
      `}</style>
    </div>
  );
}

export default Become;
