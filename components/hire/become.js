/** @format */

import React, { useEffect, useState } from "react";
import Question from "./question";
import dataQuestion from "./dataQuestion";
import Box from "../Box/Box";
import FormContact from "../Contact/formContact";

function Become() {
  const [step, setStep] = useState(1);
  const [hiden, setHiden] = useState(true);
  const [radio, setRadio] = useState({});
  const nextStep = () => {
    if (step < 10) {
      setStep(step + 1);
    } else if (step === 10) {
      setHiden(!hiden);
    }
  };

  const handleChange = (value) => {
    setRadio({
      ...radio,
      ...value,
    });
  };
  const content = `\n${radio[1]}\n
    ${radio[2]}\n
    ${radio[3]}\n
    ${radio[4]}\n
    ${radio[5]}\n
    ${radio[6]}\n
    ${radio[7]}\n
    ${radio[8]}\n
    ${radio[9]}\n
    ${radio[10]} `;
  return (
    <div className="section">
      <div className="col-lg-8 offset-lg-2 question-area">
        <div className={hiden ? "" : "none"}>
          <Question
            onChange={handleChange}
            data={dataQuestion?.find((item) => item.id === step)}
          />
        </div>
        <div className={hiden ? "none" : ""}>
          <Box title="SUCCESS! LET'S CONNECT YOU WITH TALENT" des="">
            <FormContact radio={content} />
          </Box>
        </div>
        <div className={hiden ? "btn-next text-right" : "none"}>
          <img src="/static/img/icon/btnNext.svg" onClick={nextStep} />
        </div>
      </div>
      <style jsx>{`
        img {
          width: 50px;
        }
        .question-area {
          height: 620px;
        }
        @media (max-width: 575px) {
          .question-area {
            height: 890px;
          }
        }
        .test {
          display: none;
        }
        .none {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Become;
