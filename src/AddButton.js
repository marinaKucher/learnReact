import './AddButton.css';

function onButtonClickTODO(plusInfo) {
    return function(event) {
        console.log('event', event);
        console.log('plusInfo', plusInfo);
    }
}


function AddButton(props) {
    const text = ""+props.text;
    return (
        <button className="addbutton" onClick={onButtonClickTODO(text)} > кнопка + {props.text} </button>
    );
}

export default AddButton;