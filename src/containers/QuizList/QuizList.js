import { Component } from "react";
import './QuizList.css';
import { NavLink } from "react-router-dom";
export default class QuizList extends Component {

    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li key={index} >
                    <NavLink to={'/quiz/' + quiz}>
                        Test {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="quiz-list">
                <div>
                    <h1>Quiz list</h1>

                    <ul>
                        { this.renderQuizes() }
                    </ul>
                </div>
            </div>
        )
    }
}
