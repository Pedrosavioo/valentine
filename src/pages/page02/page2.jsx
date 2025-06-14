import React, { use } from "react";
import "./page2.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const Page02 = () => {
   const navigate = useNavigate();
   
   function handleClick() {
      navigate("/valentine/3");
   }

   return (
      <section id="page02" className="default-design">
         <button className="btn" onClick={handleClick}>Clique aqui novamente...</button>
         <p>Opss... errou <br /> Tenta novamente</p>
      </section>
   );
};

export default Page02;
