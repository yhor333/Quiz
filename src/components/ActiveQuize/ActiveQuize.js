import React from "react";
import './ActiveQuize.css';
import AnswersList from "./AnswersList";

const ActiveQuize = props => {
    return (
        <div className="active-quize">
            <p className="question">
                <span>
                    <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                </span> 

                <small>{props.answerNumber} of {props.quizeLength}</small>
            </p>
            <AnswersList answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            onAnswerClickChangeBg={props.onAnswerClickChangeBg}
            />
        </div>
    )
}

export default ActiveQuize