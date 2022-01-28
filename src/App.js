import './App.css';
import AddButton from "./AddButton";
import ModalWindow from "./modalWindow";
import React, { useState } from 'react';

let modalMarker=false;


function addCard(){
    console.log(modalMarker)
    modalMarker=true;
    globalSetFlagState(true)
  console.log('добавление карточки')
    console.log(modalMarker)
}

function delCard(){
    console.log(modalMarker)
  console.log('удаление карточки')

    globalSetFlagState(false)
    modalMarker=false;

    console.log(modalMarker)

}
function goAnotherPage(){
  console.log('переход на другую страницу')
}
function chCard(){
  console.log('изменение карточки')
}

const buttons = [
  {title: 'добавить карточку', handleClick: addCard},
  {title: 'удалить карточку', handleClick: delCard},
  {title: 'переход на другую страницу', handleClick:goAnotherPage},
  {title: 'изменение карточки', handleClick: chCard},
]


function MoreButtons(props) {
  const numbers = props.numbers;
  const masOfButtons = numbers.map((number) =>
     <AddButton key={number.toString()} text = {buttons[number-1].title} handleClick={buttons[number-1].handleClick}/>
  );
  return (
     masOfButtons
  );
}

let globalSetFlagState

function ModalWindowMarker(props) {
    const [flagState, setFlagState] = useState(props.modalmarkerPR);

    globalSetFlagState = setFlagState

    if (flagState) {
        return <ModalWindow text={"условно созданое модальное окно "}/>
    } else {
        return <AddButton text={"условно созданая кнопка"}/>
    }
}


function App() {
  return (
    <div className="App">
      <div className="MainBody">
      <div className="buttonsContainer">
        <MoreButtons numbers={[1,2,3,4]}/>
      </div >
      <div className="ModalWindowContainer">
      </div >

      </div>
        <ModalWindowMarker modalmarkerPR={modalMarker}/>
    </div>
  );
}

export default App;
