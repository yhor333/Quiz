import React from 'react';
import './AnswersList.css';
import AnswerItem from './AnswerItem';

const AnswersList = props => {    
    return (
        <ul className='answers-list'>
            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem answer={answer}
                    key={index} onAnswerClick={props.onAnswerClick}
                    onAnswerClickChangeBg={props.onAnswerClickChangeBg}
                    />
                )
            }) }
        </ul>
    )       
}

export default AnswersList