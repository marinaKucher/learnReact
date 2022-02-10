import './App.css';
import AddButton from "./AddButton";
import ModalWindow from "./modalWindow";
import React, {useState} from 'react';
import Card from "./Card";
//АЙДИ ТЕПЕРЬ НАДО СЧИТАТЬ ПО НОВОМУ Т К УДАЛИТЬ МОЖНО ЛЮБОЙ АЙДИ


let listNumber=0
const maxCardOnPage = 6
let cards=
    [
        {id:1,name:"пример1",text:"написать курсовую, сделать домашку"},
        {id:2,name:"пример2",text:"сделать задачу"},
        {id:3,name:"пример3",text:"пригтовить ужин"}
    ]

let idNewCard=cards.length+1

function AllCards(props) {

    const cards = props.cards;
    const masOfCards = cards.map((card) =>
        <Card key={card.id.toString()} keyToDel={card.id} name={card.name} text={card.text} delThisCard={props.del}/>
    );
    return (
        masOfCards.slice(props.list,props.list+maxCardOnPage)

    );
}


const buttonsTitles = ['добавить карточку', 'удалить все карточки', 'создать пустую карточку', 'в начало','в конец']

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

    if (props.isOpen) {
        return <ModalWindow text={"Создание карточки"} close={props.delfunc} funcAddCard={props.funcAddCard}/>
    }
    else {

        return  null
    }
}

function nextList(){
   const maxListNumber =  Math.ceil(cards.length/maxCardOnPage)*maxCardOnPage
    listNumber=listNumber+maxCardOnPage
    if (listNumber >= maxListNumber) {
    listNumber=maxListNumber-maxCardOnPage;
    }
}
function lastList(){
    listNumber=listNumber-maxCardOnPage
    if (listNumber < 0) {
        listNumber=0;
    }
}

function  delCardGlobal(cardID=2){
    const valueId=cardID
    //составляем идентичный массив только индексов
    const masOfID = cards.map((card) =>
       card.id
    );
    //находим в этом массиве номер элемента с текущим индеком
    const  myIndex =masOfID.indexOf(valueId);
    //удаляем элемент с текущим индексом
    if (myIndex !== -1) {
        cards.splice(myIndex, 1);
    }
}

function App() {
    const [open, setOpen] = useState(false);
    const [flasher,setFlasher] = useState(false);



    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    function delAllCards (){
        cards.splice(0,cards.length);
        setFlasher(!flasher)
        listNumber=0
    }

    function makeNewCard(event, cardName="нет имени",cardText="нет текста") {

        setFlasher(!flasher)
        idNewCard=idNewCard+1
        cards.push( {id:idNewCard,name:cardName,text:cardText})
        closeModal()
    }

    function goToFirstList() {

        listNumber=0
        setFlasher(!flasher )
    }

    function goToLastList(){
        listNumber=(Math.ceil(cards.length/maxCardOnPage)-1)*maxCardOnPage
        setFlasher(!flasher )
    }


    function nextListRender(){
        nextList();
        setFlasher(!flasher)
    }
    function lastListRender(){
        lastList();
        setFlasher(!flasher)
    }

    function delCard(value){
        delCardGlobal(value)
        setFlasher(!flasher)
    }

    return (

    <div className="intro">

        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">Rest Menu</div>
                    <div className="header__social">
                        <a className="a_href" href="#" >
                            <i className="fa fa-twitter" />
                            <i className="fa fa-facebook" />
                            <i className="fa fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <div className="maincontant">
            <div className="buttonsmenu">
                <MoreButtons numbers={[1, 2, 3, 4, 5]} functions={[openModal, delAllCards, makeNewCard,goToFirstList,goToLastList]}/>
            </div>
            <div className="cardcontainer">
                <div className="cardcontent">
                    <AllCards cards={cards} list={listNumber} del={delCard} />


                </div>
                <div className="cardfooter">
                    <button className="cardfooterbutton" onClick={nextListRender} >следующая страница с карточками </button>
                    <button className="cardfooterbutton" onClick={lastListRender} >предыдущая страница с карточками </button>
                </div>
            </div>
        </div>

        <footer className="footer">
            <div className="footertext">НАШИ СОЦСЕТИ :  </div>
            <div className="footer__social">
                <a className="a_href" href="#" >
                    <i className="fa fa-twitter" />
                    <i className="fa fa-facebook" />
                    <i className="fa fa-instagram" />
                </a>
            </div>
        </footer>
        <ModalWindowMarker isOpen={open} delfunc={closeModal} funcAddCard={makeNewCard}/>



</div>
    );
}

export default App;
