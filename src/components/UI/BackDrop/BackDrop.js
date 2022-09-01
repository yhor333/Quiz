import './BackDrop.css';

const BackDrop = props => {
    return (
        <div className='back-drop' onClick={props.onClose} />
    )
}

export default BackDrop;