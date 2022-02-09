import './App.css';
import AddButton from "./AddButton";
import ModalWindow from "./modalWindow";
import React, {useState} from 'react';
import Card from "./Card";

let listNumber=0
const maxCardOnPage = 6
let cards=
    [
        {id:1,name:"учеба",text:"написать курсовую,сделать домашку"},
        {id:2,name:"работа",text:"сделать задачу"},
        {id:3,name:"быт",text:"пригтовить ужин"}
    ]

function AllCards(props) {

    const cards = props.cards;
    const masOfCards = cards.map((card) =>
        <Card key={card.id.toString()} name={card.name} text={card.text}/>
    );
    console.log(props.list,"  ",props.list+maxCardOnPage)
    return (
        masOfCards.slice(props.list,props.list+maxCardOnPage)

    );
}


const buttonsTitles = ['добавить карточку', 'удалить карточку', 'создать новую карточку', 'удалить последню карточку']

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
        return <ModalWindow text={"условно созданое модальное окно "} close={props.delfunc} funcAddCard={props.funcAddCard}/>
    }
    return  null
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
function App() {
    const [open, setOpen] = useState(false);
    const [flasherMakeCard,setFlasherMakeCard] = useState(false);


    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    function makeNewCard(event, cardName="нет имени",cardText="нет текста") {

        setFlasherMakeCard(!flasherMakeCard)
        console.log('переход на другую страницу')
        console.log(cardName)
        console.log(cardText)
        cards.push( {id:cards.length+1,name:cardName,text:cardText})
        console.log(cards)
        closeModal()
    }

    function delLastCard() {
        setFlasherMakeCard(!flasherMakeCard )
        console.log('изменение карточки')
        cards.pop()
    }

    function nextListRender(){
        nextList();
        setFlasherMakeCard(!flasherMakeCard)
    }
    function lastListRender(){
        lastList();
        setFlasherMakeCard(!flasherMakeCard)
    }
    return (
/*
        <div className="App">
            <div className="MainBody">
                <div className="buttonsContainer">
                    <MoreButtons numbers={[1, 2, 3, 4]} functions={[openModal, closeModal, makeNewCard, delLastCard]}/>
                </div>
                <div className="ModalWindowContainer">
                </div>

            </div>
            <ModalWindowMarker isOpen={open} delfunc={closeModal}/>
        </div>*/
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
                <MoreButtons numbers={[1, 2, 3, 4]} functions={[openModal, closeModal, makeNewCard, delLastCard]}/>
            </div>
            <div className="cardcontainer">
                <div className="cardcontent">
                    <AllCards cards={cards} list={listNumber} />


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

        <div className="modalWindowContainer">
            <ModalWindowMarker isOpen={open} delfunc={closeModal} funcAddCard={makeNewCard}/>
    </div>


</div>
    );
}

export default App;
