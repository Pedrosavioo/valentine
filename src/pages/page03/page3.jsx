import { useState, useEffect } from "react";
import "./page3.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const Page03 = () => {
   const navigate = useNavigate();

   const [time, setTime] = useState(10);
   const [handleText, setHandleText] = useState(true);

   useEffect(() => {
      const timerId = setInterval(() => {
         setTime((prevTime) => prevTime - 1); // Atualiza os segundos usando o valor anterior
      }, 1000);

      return () => {
         clearInterval(timerId); // Limpa o intervalo para evitar vazamentos de memória
      };
   }, []);

   useEffect(() => {
    if (time === 5) {
      setHandleText(false); // Muda para o segundo texto quando 'time' for 5
    }

    if (time === 0) {
      navigate("/4"); // Redireciona para a rota '/2' quando 'time' for 0
    }
  }, [time, navigate]);

   return (
      <section id="page03" className="default-design">
         {handleText ? (
            <>
               <p>Achou q eu ia frescar ainda né??</p>
               <p>Segura a emoção e aguarda só esses segundinhos</p>
               <p>{time}</p>
            </>
         ) : (
            <>
               <p>Se prepara amor... Vem uma coisa bosbástica</p>
               <p>{time}</p>
            </>
         )}
      </section>
   );
};

export default Page03;
