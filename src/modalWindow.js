import './ModalWindowStyle.css';

function ModalWindow(props) {
  //  const text = ""+props.text;
    return (
        <div className="modal" > {props.text}
            <button onClick={props.close} > закрыть </button>
        </div>

    );
}



export default ModalWindow;