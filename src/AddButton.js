import './AddButton.css';
/*
//если бы мы оставили для всех кнопок схожие по смыслу события то в онклик прописали бы танную функцию и ее параметры
function onButtonClickTODO(plusInfo) {
    return function(event) {
        console.log('event', event);
        console.log('plusInfo', plusInfo);
    }
}*/
function AddButton(props) {
   // const text = ""+props.text;
    return (
        <button className="addbutton" onClick={props.handleClick} > {props.text} </button>
    );
}

export default AddButton;