import './Card.css';
import {useState} from "react";
function Card(props){
    const [numberToDel,setNumberToDel] = useState(props.keyToDel);

    function del(event){
        setNumberToDel(props.keyToDel)
        props.delThisCard(numberToDel)
        console.log("вызываю удаление с параметром: ",props.keyToDel)
    }

    return (
        <div className="card" >
            <div className="cardTextContainer">
                <span className="cardText1">{props.name}</span>
                <span className="cardText2" >{props.text}</span>
            </div>
            <button className="cardButtons" onClick={del}  >удалить</button>
        </div>
    )

}
export default Card