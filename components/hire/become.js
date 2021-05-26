/** @format */

import React, { useEffect, useState } from "react";
import Question from "./question";
import dataQuestion from "./dataQuestion";

function Become() {
  const [step, setStep] = useState(1);
  const [radio, setRadio] = useState({});
  const [values, setValues] = useState({});
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    console.log(radio);
  }, [radio]);

  const handleChange = (value) => {
    setRadio({
      ...radio,
      ...value,
    });
    console.log(value, radio);
  };

  return (
    <div class="section area-padding-top">
      <div className="col-lg-8 offset-lg-2">
        <Question
          onChange={handleChange}
          data={dataQuestion?.find((item) => item.id === step)}
        />
        <div className="btn-next">
          {/* {step === dataQuestion?.length ? "Submit" : "Next"} */}
          <img src="/static/img/btnNext.svg" onClick={nextStep} />
        </div>
      </div>
      <style jsx>{`
        img {
          width: 5%;
        }
      `}</style>
    </div>
  );
}

export default Become;
