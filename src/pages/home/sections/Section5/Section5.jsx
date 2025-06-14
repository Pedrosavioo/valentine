import React from "react";
import "./Section5.css"; // Import the CSS file for styling

import imgGPT from "../../../../assets/img-gpt.png";

import Button from "../../../../components/Button";
import RopeCanvas2 from "../../canvas/RopeCanvas2";
import { useSelector } from "react-redux";

const Section5 = () => {
   const animation = useSelector((state) => state.animation.value);

   return (
      <section id="section-5">
         <RopeCanvas2 />
         <Button type="prev" />

         <div className="content-text">
            <p id="p1" className="fade1">
               Quero que você saiba que sou completamente teu, em cada detalhe.
            </p>
            <p id="p2" className="fade2">
               Te amo demais e quero viver o futuro ao seu lado, em cada passo,
               em cada sonho.
            </p>
            <p id="p3" className="fade3">
               Prometo seguir te fazendo sorrir, te apoiando, e amando cada
               detalhizinho seu
            </p>
            <p id="p4" className="fade4">
               A melhor parte de pensar no amanhã é saber que você faz parte
               dele.
            </p>
            <p id="p5" className="fade5">TE AMOOO MEU AMOR!</p>
         </div>

         <footer>
            <p className="fade">Feito com ❤️ para a garota mais especial desse mundoo!!!</p>
         </footer>

         <img src={imgGPT} id="img-bike" className="fade" />
      </section>
   );
};

export default Section5;
