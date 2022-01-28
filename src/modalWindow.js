import './ModalWindowStyle.css';

function ModalWindow(props) {
  //  const text = ""+props.text;
    return (
        <div className="modal" > {props.text} </div>
    );
}



export default ModalWindow;