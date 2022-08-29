import Button from '../UI/Button/Button';
import './FinishedQuize.css';

const FinishedQuize = props => {
    let counter = 0;
    let answers = Object.values(props.result);
    for (let answer of answers) {
        if (answer === '-check success') {
            counter++;
        }
    }
    return (
        <div className='finished-quize'>
            <ul>
                { props.quize.map((quize, index) => {
                    let cls = `fa fa${props.result[index]}`
                    return (
                        <li key={index}>
                            <strong>{index + 1}.</strong>
                            {quize.questions}
                            <i className={cls}/>
                        </li>
                    )
                }) }
            </ul>

            <p>Right {counter} of {props.quize.length}</p>

            <Button onClick={props.retry} type='button_primary'>Repeat</Button>
            <Button type='button_success'>Go to others tests</Button>
        </div>
    )
}

export default FinishedQuize