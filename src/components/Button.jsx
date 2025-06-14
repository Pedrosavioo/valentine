import React from "react";

import "./Button.css"; // Import the CSS file for styling

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

import arrowImg from "../assets/arrow-black.svg";
import { init, reset } from "../redux/animation";

const Button = ({ type }) => {
   const dispatch = useDispatch();
   const animation = useSelector((state) => state.animation.value);

   function handleClick() {
      // Iniciar animação
      dispatch(init());

      setTimeout(() => {
         dispatch(reset());
         dispatch(increment());
      }, 1000);
   }

   return (
      <>
         {type === "next" ? (
            <div className="btn-next">
               <img src={arrowImg} onClick={() => handleClick()} />
            </div>
         ) : (
            <div className="btn-prev">
               <img src={arrowImg} onClick={() => dispatch(decrement())} />
            </div>
         )}
      </>
   );
};

export default Button;
