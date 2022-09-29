// import { useState } from "react";

// function Counter() {
//     const [arr, setArr] = useState([])

//     function addPlus() {
//         setArr(prevArr => [ ...prevArr, "+"])
//     }

//     function addMinus() {
//         setArr(prevArr => [ ...prevArr, "-"])
//     }
    
//     return (
//     <div>
//         <button onClick={addMinus}>-</button>
//         <button onClick={addPlus}>+</button>
//         {arr.toString()}
//     </div>
//     )

  // Apple Counter
  //     const [cart, setCart] = useState({
  //     item: "apple",
  //     quantity: 0,
  //  });
  //  function addApple() {
  //     // 1. Use a callback to get the previous value
  //     // 2. Spread out all the properties of the prev state (...)
  //     // 3. Only change the property that you need to change
  //     setCart(prevCart => ({
  //         ...prevCart,
  //         quantity: prevCart.quantity + 1,
  //     }))
  //  }
  //  function subtractApple() {
  //     setCart(prevCart => ({
  //         ...prevCart,
  //         quantity: prevCart.quantity - 1,
  //     }))
  //  }
  //   return (
  //     <div>
  //       <button onClick={subtractApple}>-</button>
  //       {cart.quantity}
  //       {cart.item}
  //       <button onClick={addApple}>+</button>
  //     </div>
  //   );
  // Number Counter
  // function Counter() {
  // const [counter, setCounter] = useState(0)
  // function incrementCounter() {
  //     setCounter((prevCounter) => prevCounter + 1)
  // }
  // function decrementCounter() {
  //     setCounter((prevCounter) => prevCounter - 1)
  // }
  // return (
  //     <div>
  //         <button onClick={decrementCounter}>-</button>
  //         {counter}
  //         <button onClick={incrementCounter}>+</button>
  //     </div>
  // )
// }

// export default Counter;

// function App() {
//     const [showModal, setShowModal] = useState(false)
//     return (
//       <div>
//         <Title />
//         <div>
//           <input
//             type="text"
//             onChange={(event) => {
//               console.log(event.target.value);
//             }}
//           />
//           <button onClick={() => setShowModal(true)}>Add todo</button>
//         </div>
//         <div className="todo__wrapper">
//           <Todo title="Finish Frontend Simplified" />
//           <Todo title="Finish Interview Section" />
//           <Todo title="Land a $100k Job" />
//         </div>
//         {showModal && <Modal title="Are you sure you want to delete?" />}
//       </div>
//     );
//   }

//   export default App;
