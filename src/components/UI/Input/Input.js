import React from "react";
import './Input.css';

function isInvalid({valid, touched, shouldValidation}) {
    return !valid && shouldValidation && touched;

}

const Input = props => {
    const inputType = props.type || 'text';
    const cls = ['input'];
    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid(props)) {
        cls.push(' invalid')
    }
    return (
        <div className={cls.join('')}>
            <label htmlFor={htmlFor}>{props.lable}</label>
            <input
              type={inputType}
              id={htmlFor}
              value={props.value}
              onChange={props.onChange}
             />

             {isInvalid(props) ? <span>{props.errorMessage}</span> : null}
        </div>
    )
}

export default Input;