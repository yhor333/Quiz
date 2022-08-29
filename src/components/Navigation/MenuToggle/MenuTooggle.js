import './MenuTooggle.css';

const MenuTooggle = props => {
    let cls = '';
    let clsOpen = '';
    if (props.isOpen) {
        cls = 'fa-times';
        clsOpen = 'open'
    } else {
        cls ='fa-bars';
    }
    return (
        <i 
            className={`menu_togle fa ${cls} ${clsOpen}`}
            onClick={props.onToggle}
        />
    )
}

export default MenuTooggle