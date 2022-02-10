import './Card.css';
function Card(props){
    return (
        <div className="card" >
            <div className="cardTextContainer">
                <span className="cardText1">{props.name}</span>
                <span className="cardText2" >{props.text}</span>
            </div>

            <button className="allButtons" >удалить</button>
        </div>
    )

}
export default Card