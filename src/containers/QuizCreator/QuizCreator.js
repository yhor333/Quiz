import React, { Component } from "react"
import Button from "../../components/UI/Button/Button"
import './QuizCreator.css'
import { createControl, validate, validateForm } from '../../Form/Form'
import Input from "../../components/UI/Input/Input"
import Select from "../../components/UI/Select/Select";

function createOptionControl(number) {
    return createControl({
        label: `Answer ${number}`,
        errorMessage: 'Question can not be empty',
        id: number,
        
    }, {required: true})
}

function createFormContol() {
    return {
        question: createControl({
            label: 'Enter question',
            errorMessage: 'Question can not be empty',
            touched: false,
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

export default class QuizCreator extends Component {

    state = {
        quiz: [],
        isFormValid: false,
        formControls: createFormContol(),
        rightAnswerId: 1
    }

    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = event => {
        event.preventDefault();

        const quiz = this.state.quiz.concat();
        const index = quiz.length + 1;

        const {question, option1, option2, option3, option4} = this.state.formControls

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id},
            ]
        }

        quiz.push(questionItem)

        this.setState({
            quiz,
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormContol()

        })
    }

    createQuestion = event => {
        event.preventDefault();
        console.log('asd')
        console.log(this.state.quiz);
    }

    changeHandler = (value, controlName) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];

            return (
            <React.Fragment>
                <Input 
                    key={controlName + index}
                    lable={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event => this.changeHandler(event.target.value, controlName)}
                />
                { index === 0 ? <hr /> : null  }
                </React.Fragment>
            )
        })
    }

    selectChangeHandler = event => {
        this.setState({rightAnswerId: +event.target.value})
    }

    render() {
        return (
            <div className="quize-creator">
                <div>
                    <h1>Creatе quize</h1>

                    <form onSubmit={this.submitHandler}>

                        { this.renderControls() }

                        <Select 
                            label='Choose the correct answer'
                            value={this.state.rightAnswerId}
                            onChange={this.selectChangeHandler}
                            options={[
                                {text: 1, value: 1},
                                {text: 2, value: 2},
                                {text: 3, value: 3},
                                {text: 4, value: 4},
                            ]}
                        />

                        <Button type='button_primary' onClick={this.addQuestionHandler} disabled={!this.state.isFormValid}>Add Question</Button>
                        <Button type='button_success' onClick={this.createQuestion} disabled={this.state.quiz.length === 0}>Create question</Button>
                    </form>
                </div>
            </div>
        )
    }
}
