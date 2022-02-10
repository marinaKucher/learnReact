import './ModalWindow.css';
import {useState} from "react";

function ModalWindow(props) {
    console.log(props.funcAddCard)
   const [cardName, setCardName] = useState('');
    const [cardValue, setCardValue] = useState('');

  function handleChange(event) {
      if (cardName.length<30){
          console.log(event.target.value); // текущий текст инпута
          setCardName(event.target.value);
      }
      else {
          alert("слишком много знаков")
      }

   }

    function handleChange1(event) {
        if (cardValue.length<(38+10)) {
            console.log(event.target.value); // текущий текст инпута
            setCardValue(event.target.value);
        }
        else {
            alert("слишком много знаков")
        }
    }

    function handleSubmit(event) {
    console.log(props.funcAddCard)
        props.funcAddCard(event,cardName,cardValue)
       console.log(event);
      event.preventDefault()
    }

    return (
        <div className="modal" > {props.text}
            <form className="modalForm" onSubmit={handleSubmit}>
                <label className="modalForm" >
                    Название:
                    <input className="inputModal" value={cardName} onChange={handleChange} />
                    Подробнее:
                    <input className="inputModal" value={cardValue} onChange={handleChange1} />
                </label>
                <div className="modalButtonsContainer">
                    <button className="modalButtons"  onClick={props.close} > Закрыть окно </button>
                    <input className="modalButtons" type="submit" value="Создать карточку" />
                </div>
            </form>
        </div>

    );
}



export default ModalWindow;