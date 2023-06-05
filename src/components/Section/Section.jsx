import React from "react";
import style from "../feedback/feedbackstyle.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={style.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;