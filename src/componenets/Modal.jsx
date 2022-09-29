import { useState } from "react";
import "./Modal.css";

function Modal({ title, cancelModal, confirmModal }) {
  const [closeModal, setCloseModal] = useState();

  return (
    <>
      <div className="modal">
        <p>{title}</p>
        <div className="modal__buttons">
          <button onClick={cancelModal} className="btn btn__cancel">
            Cancel
          </button>
          <button onClick={confirmModal} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;

// function Todo({ title, paragraph }) {
//     function deleteTodo(id) {
//       console.log("deleteTodo");
//     }

//     return (
//       <div className="todo">
//         <p>{title}</p>
//         <button onClick={() => deleteTodo(1)}>Delete</button>
//       </div>
//     );
//   }

//   export default Todo;
