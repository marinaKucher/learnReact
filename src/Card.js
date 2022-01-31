import './Card.css';
function Card(props){
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <h3>{props.text}</h3>
        </div>
    )

}
export default Card