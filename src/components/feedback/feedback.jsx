import React, { Component } from "react";
import style from "../feedback/feedbackstyle.module.css"

class Feedback extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    };

    goodClick = () => {
        this.setState(prevState => ({
          good: prevState.good + 1
        }));
      };
    
    neutralClick = () => {
        this.setState(prevState => ({
          neutral: prevState.neutral + 1
        }));
      };
    
    badClick = () => {
        this.setState(prevState => ({
          bad: prevState.bad + 1
        }));
      };

    totalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
      };
    
    feedbackPercentage = () => {
        const { good } = this.state;
        const totalFeed = this.totalFeedback();
        return totalFeed > 0 ? Math.round((good / totalFeed) * 100) : 0;
      };
    render() {
        const { good, neutral, bad } = this.state;
        const totalFeed = this.totalFeedback();
        const positivePercentage = this.feedbackPercentage();

        return (
            <div className={style.block}>
              <div className={style.blockTwo}>
                <h2 className={style.title}>Please leave feedback</h2>
                <ul className={style.list}>
                  <li className={style.item}>
                    <button className={style.btn} type="button" onClick={this.goodClick}>
                      Good
                    </button>
                  </li>
                  <li className={style.item}>
                    <button className={style.btn} type="button" onClick={this.neutralClick}>
                      Neutral
                    </button>
                  </li>
                  <li className={style.item}>
                    <button  className={style.btn}type="button" onClick={this.badClick}>
                      Bad
                    </button>
                  </li>
                </ul>
              </div>
              <h2 className={style.titleTwo}>Statistic</h2>
              {totalFeed > 0 ? (
                <div className={style.blockThree}>
                  <ul className={style.lists}>
                    <li className={style.itemsy}>Good: {good}</li>
                    <li className={style.items}>Neutral: {neutral}</li>
                    <li className={style.itemsy}>Bad: {bad}</li>
                    <li className={style.items}>Total feedback: {totalFeed}</li>
                    <li className={style.itemsy}>Positive feedback percentage: {positivePercentage}%</li>
                  </ul>
                </div>
              ) : (
                 <p className={style.message}>There is no feedback</p>
              )}
            </div>
        )};
}

export default Feedback