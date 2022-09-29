import "./App.css";
// import Todo from "./componenets/Todo.jsx";
// import Title from "./componenets/Title.jsx";
// import Modal from "./componenets/Modal.jsx";
// import React, { useEffect, useState } from "react";
// import Counter from "./componenets/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./componenets/Nav";
import Users from "./pages/Users";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/users/:email" element={<Users />} />
      </Routes>
    </Router>
  );

  // return <Counter />
  // const [showModal, setShowModal] = useState(false);

  // function onTodoDelete() {
  //   setShowModal(true);
  //   console.log("onTodoDelete()");
  // }

  // function canceleModal() {
  //   setShowModal(false);
  // }

  // function confirmModal() {
  //   setShowModal(false);
  // }

  // useEffect(() => {
  //   console.log("on mount");
  // }, [showModal]);

  // useEffect(() => {
  //   console.log(`on mount AND on ${showModal} change`)
  // }, [showModal])

  // return (
  //   <div>
  //     <Title />
  //     <div>
  //       <input
  //         type="text"
  //         onChange={(event) => {
  //           console.log(event.target.value);
  //         }}
  //       />
  //       <button onClick={() => setShowModal(true)}>Add todo</button>
  //     </div>
  //     <div className="todo__wrapper">
  //       <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
  //       <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
  //       <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job" />
  //     </div>
  //     {showModal && (
  //       <Modal
  //         cancelModal={canceleModal}
  //         confirmModal={confirmModal}
  //         title="Confirm delete?"
  //       />
  //     )}
  //   </div>
  // );
}

export default App;
