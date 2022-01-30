import './App.css';
import AddButton from "./AddButton";
import ModalWindow from "./modalWindow";
import React, {useState} from 'react';
import Card from "./Card";

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

    if (props.isOpen) {
        return <ModalWindow text={"условно созданое модальное окно "} close={props.delfunc}/>
    }
    return  null
}



function App() {
    const [open, setOpen] = useState(false);

    const addCard = () => setOpen(true);
    const delCard = () => setOpen(false);

    function goAnotherPage() {
        console.log('переход на другую страницу')
    }

    function chCard() {
        console.log('изменение карточки')
    }

    return (
/*
        <div className="App">
            <div className="MainBody">
                <div className="buttonsContainer">
                    <MoreButtons numbers={[1, 2, 3, 4]} functions={[addCard, delCard, goAnotherPage, chCard]}/>
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
                <MoreButtons numbers={[1, 2, 3, 4]} functions={[addCard, delCard, goAnotherPage, chCard]}/>
            </div>
            <div className="cardcontainer">
                <div className="cardcontent">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

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
