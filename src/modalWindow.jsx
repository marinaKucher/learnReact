import './ModalWindow.css';
import {useState} from "react";

function ModalWindow(props) {
    console.log(props.funcAddCard)
   const [value, setValue] = useState('');


  function handleChange(event) {
        console.log(event.target.value); // текущий текст инпута
       setValue(event.target.value);
   }


    function handleSubmit(event) {
    console.log(props.funcAddCard)
        props.funcAddCard(event,value,value)
       console.log(event);
      event.preventDefault()
    }

    return (
        <div className="modal" > {props.text}
            <form onSubmit={handleSubmit}>
            <label>
                Имя:
                <input  value={value} onChange={handleChange} />
            </label>
            <button className="modalButtons" onClick={props.close} > закрыть </button>
            <input type="submit" value="Отправить" />
            </form>
        </div>

    );
}



export default ModalWindow;