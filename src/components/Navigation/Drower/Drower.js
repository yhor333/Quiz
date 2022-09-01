import React,{ Component } from 'react';
import BackDrop from '../../UI//BackDrop/BackDrop';
import './Drower.css';
import { Link } from "react-router-dom";

const links = [
    {to: '/', label: 'List'},
    {to: '/auth', label: 'Authorization', },
    {to: '/quiz-creator', label: 'Create quiz', },
]

class Drower extends Component {

    renderLinks = () => {
        return links.map((link, index) => {
            return (
                <li key={index}>
                     <Link to={link.to} onClick={this.props.onClose}>{link.label}</Link>
                </li>
            )
        })
    }
    render() {
        let cls = ''
        if (!this.props.isOpen) {
            cls = 'close';
        }
        return (
            <React.Fragment>
                 { this.props.isOpen ? <BackDrop onClose={this.props.onClose}/> : null }
                <nav className={`drower ${cls}`}>
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Drower;