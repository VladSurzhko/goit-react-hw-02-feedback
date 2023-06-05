import React from "react";
import style from "../feedback/feedbackstyle.module.css";

const Options = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={style.list}>
      {options.map((option) => (
        <li className={style.item} key={option}>
          <button
            className={style.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Options;