import './App.css';
import AddButton from "./AddButton";
import ModalWindow from "./modalWindow";
import React, {useState} from 'react';

const buttonsTitles = ['добавить карточку', 'удалить карточку', 'переход на другую страницу', 'изменение карточки']

function MoreButtons(props) {
    const numbers = props.numbers;
    const masOfButtons = numbers.map((number) =>
        <AddButton key={number.toString()} text={buttonsTitles[number - 1]} handleClick={props.functions[number - 1]}/>
    );
    return (
        masOfButtons
    );
}

function ModalWindowMarker(props) {

    if (props.modalmarkerPR) {
        return <ModalWindow text={"условно созданое модальное окно "}/>
    } else {
        return <AddButton text={"условно созданая кнопка"}/>
    }
}

function App() {
    const [open, setOpen] = useState(true);

    const addCard = () => setOpen(true);
    const delCard = () => setOpen(false);

    function goAnotherPage() {
        console.log('переход на другую страницу')
    }

    function chCard() {
        console.log('изменение карточки')
    }

    return (

        <div className="App">
            <div className="MainBody">
                <div className="buttonsContainer">
                    <MoreButtons numbers={[1, 2, 3, 4]} functions={[addCard, delCard, goAnotherPage, chCard]}/>
                </div>
                <div className="ModalWindowContainer">
                </div>

            </div>
            <ModalWindowMarker modalmarkerPR={open}/>
        </div>
    );
}

export default App;
