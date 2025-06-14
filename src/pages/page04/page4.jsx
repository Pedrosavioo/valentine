import { useState, useEffect } from "react";
import "./page4.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

import imgBack from "../../assets/img1.jpg";

const Page04 = () => {
   const navigate = useNavigate();

   const [time, setTime] = useState(0);
   const [handleText, setHandleText] = useState(true);

   useEffect(() => {
      const timerId = setInterval(() => {
         setTime((prevTime) => prevTime + 1); // Atualiza os segundos usando o valor anterior
      }, 1000);

      return () => {
         clearInterval(timerId); // Limpa o intervalo para evitar vazamentos de memória
      };
   }, []);

   useEffect(() => {
    if (time === 5) {
      setHandleText(false);
    }
  }, [time]);

   return (
      <section id="page04" className="default-design" style={{ backgroundImage: `url(${imgBack})` }}>
         {handleText ? (
            <>
               <p>hehehehehehehe</p>
            </>
         ) : (
            <>
               <p>Agora é sério chega de gracinha, clica ali no avançar pfv</p>
               <button className="btn" onClick={() => navigate("/valentine/home")}>Avançar </button>
            </>
         )}
      </section>
   );
};

export default Page04;
