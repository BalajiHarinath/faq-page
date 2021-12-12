import { useState } from "react";
const Display = ({ question }) => {
  const [ans, setAns] = useState(false);
  function buttonHandler() {
    setAns(!ans);
  }
  if (!ans) {
    return (
      <div className="question-container">
        <p>
          {question.title}
          <button onClick={buttonHandler}>
            <i className="fa-solid fa-angle-down"></i>
          </button>
        </p>
      </div>
    );
  } else {
    return (
      <div className="question-container">
        <p>
          {question.title}
          <button onClick={buttonHandler}>
            <i className="fa-solid fa-angle-up"></i>
          </button>
        </p>
        <p className="ans">{question.info}</p>
      </div>
    );
  }
};
export default Display;
