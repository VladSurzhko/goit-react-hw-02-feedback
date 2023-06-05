import React from "react";
import style from "../feedback/feedbackstyle.module.css";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) => {
  return (
    <ul className={style.lists}>
      <li className={style.itemsy}>Good: {good}</li>
      <li className={style.items}>Neutral: {neutral}</li>
      <li className={style.itemsy}>Bad: {bad}</li>
      <li className={style.items}>Total feedback: {total}</li>
      <li className={style.itemsy}>
        Positive feedback percentage: {positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;