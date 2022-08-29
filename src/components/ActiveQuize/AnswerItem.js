import React from "react";
import './AnswerItem.css';

const AnswerItem = (props) => {
    return (
        <li className="answer-item" onClick={(evetn) => {props.onAnswerClick(evetn, props.answer.id);}}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem