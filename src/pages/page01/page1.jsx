import React from "react";
import './page1.css'; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const Page01 = () => {

   const navigate = useNavigate();
      
      function handleClick() {
         navigate("/2");
      }

   return (
      <section id="page01" className="default-design">
         <button className="btn" onClick={handleClick}>Clique aqui</button>
      </section>
   );
};

export default Page01;
