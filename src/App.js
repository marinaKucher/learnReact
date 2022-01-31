import './App.css';
import AddButton from "./AddButton";
import ModalWindow from "./modalWindow";
import React, {useState} from 'react';
import Card from "./Card";

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
    return (
        masOfCards
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
        return <ModalWindow text={"условно созданое модальное окно "} close={props.delfunc}/>
    }
    return  null
}



function App() {
    const [open, setOpen] = useState(false);
    const [flasherMakeCard,setFlasherMakeCard] = useState(false);


    const addCard = () => setOpen(true);
    const delCard = () => setOpen(false);

    function makeNewCard() {
        setFlasherMakeCard(flasherMakeCard ? false:true)
        console.log('переход на другую страницу')
        cards.push( {id:4,name:"быт",text:"пригтовить ужин"})
        console.log(cards)
    }

    function delLastCard() {
        setFlasherMakeCard(flasherMakeCard ? false:true)
        console.log('изменение карточки')
        cards.pop()
    }

    return (
/*
        <div className="App">
            <div className="MainBody">
                <div className="buttonsContainer">
                    <MoreButtons numbers={[1, 2, 3, 4]} functions={[addCard, delCard, makeNewCard, delLastCard]}/>
                </div>
                <div className="ModalWindowContainer">
                </div>

            </div>
            <ModalWindowMarker isOpen={open} delfunc={delCard}/>
        </div>*/
    <body>
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
                <MoreButtons numbers={[1, 2, 3, 4]} functions={[addCard, delCard, makeNewCard, delLastCard]}/>
            </div>
            <div className="cardcontainer">
                <div className="cardcontent">
                    <AllCards cards={cards}/>


                </div>
                <div className="cardfooter">
                    <button className="cardfooterbutton">следующая страница с карточками ---></button>
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
            <ModalWindowMarker isOpen={open} delfunc={delCard}/>
    </div>


</div>
    </body>
    );
}

export default App;
