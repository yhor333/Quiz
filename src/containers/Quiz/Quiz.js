import React, {Component} from "react";
import './Quize.css'
import ActiveQuize from "../../components/ActiveQuize/ActiveQuize";
import FinishedQuize from "../../components/FiishedQuize/FinishedQuize";

class Quize extends Component {
    state = {
        result: {},
        isFinished: false,
        activeQuestion: 0,
        quize: [
                {
                    questions: 'What color is the sky?',
                    rightAnswerId: 3,
                    answers: [
                        {text: 'Blac', id: 1},
                        {text: 'Red', id: 2},
                        {text: 'Blue', id: 3},
                        {text: 'Green', id: 4}
                    ]
                },
                {
                    questions: 'When did WWI start?',
                    rightAnswerId: 1,
                    answers: [
                        {text: '28.07.1914', id: 1},
                        {text: '01.09.1914', id: 2},
                        {text: '18.03.1915', id: 3},
                        {text: '24.06.1914', id: 4}
                    ]
                },
                
            ]
        }

        isQustionOver = () => {
            if (this.state.activeQuestion + 1 === this.state.quize.length ) {
                return true;
            } else {
                return false;
            }
        }

        setGreeBg = (event) => {
            event.target.classList.add('answer-item_success');
            const timeout = window.setTimeout(() => {
                event.target.classList.remove('answer-item_success');
                window.clearTimeout(timeout);
            },1000)
        }

        setRedBg = (event) => {
            event.target.classList.add('answer-item_error');
            const timeout = window.setTimeout(() => {
                event.target.classList.remove('answer-item_error');
                window.clearTimeout(timeout);
            },1000)
        }

        retryHandler = () => {
            this.setState({
                isFinished: false,
                activeQuestion: 0,
                result: {}
            })
        }

        onAnswerClickHandler = (event, answerId) => {

            const question = this.state.quize[this.state.activeQuestion];
            let index = this.state.activeQuestion;
            let result = this.state.result;

            if (event.target.classList.contains('answer-item_success')) {
                return;
            }
            if (question.rightAnswerId === answerId) {
                if (!this.state.result[index]) {
                    result[index] = '-check success'
                    
                    this.setState({
                        result
                    })
                }
                this.setGreeBg(event);
               const timeout = window.setTimeout(() => {
                if (!this.isQustionOver()) {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                    })
                } else {
                    this.setState({
                        isFinished: true
                    })
                }
                window.clearTimeout(timeout)
               }, 1000)
            } else {
                result[index] = '-times error'
                this.setState({
                    result
                })
                this.setRedBg(event);
            }
        }
    
    render() {
        return (
             <div className="quize"> 
                <div className="quize-wrapper">
                    <h1>Quiz</h1>

                    {
                        this.state.isFinished 
                        ? <FinishedQuize
                            result={this.state.result}
                            quize={this.state.quize}
                            retry={this.retryHandler}
                        />
                        : <ActiveQuize
                            answers={this.state.quize[this.state.activeQuestion].answers}
                            question={this.state.quize[this.state.activeQuestion].questions}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizeLength={this.state.quize.length}
                            answerNumber={this.state.activeQuestion + 1}
                            onAnswerClickChangeBg={this.onAnswerClickChangeBgHandler}
                        />
                    }

                </div>
             </div>
        )
    }
}

export default Quize