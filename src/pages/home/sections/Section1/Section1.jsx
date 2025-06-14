import React, { useEffect } from "react";
import RopeCanvas from "../../canvas/RopeCanvas";
import "./Section1.css"; // Import the CSS file for styling

import img13 from "../../../../assets/photos/img13.webp";
import img2 from "../../../../assets/photos/img2.webp";

import pinImg from "../../../../assets/pin.webp";
import Button from "../../../../components/Button";
import { useSelector } from "react-redux";

const Section1 = () => {
   // reducer animation
   const animation = useSelector((state) => state.animation.value);

   return (
      <section id="section-1">
         <RopeCanvas />
         <div
            className={`photo-container photo-container-1 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img13} className={`photo`} />
         </div>

         <div
            className={`photo-container photo-container-2 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img2} className={`photo`} />
         </div>

         <div className="content-text">
            <p id="p1" className={animation ? "slide-up" : "fade"}>
               Amor, Primeiro, me desculpa por ter te feito passar raiva. Mas cê
               me conhece… se eu não fizesse uma gracinha, não seria eu, né?
            </p>
            <p id="p2" className={animation ? "slide-up" : "fade"}>
               A verdade é que eu só queria deixar esse Dia dos Namorados um
               pouquinho mais marcante, mesmo que você tenha me xingado
               mentalmente algumas vezes antes de chegar aqui (brincadeira...)
            </p>
            <p id="p3" className={animation ? "slide-up" : "fade"}>
               Sou imensamente grato por ter você na minha vida.
            </p>
            <p id="p3" className={animation ? "slide-up" : "fade"}>
               Você é minha paz, minha bagunça boa, minha parceira em tudo.
            </p>
            <p id="p4" className={animation ? "slide-up" : "fade"}>
               E mesmo quando eu te deixo brava (o que acontece mais do que
               deveria), você continua aqui. E isso significa o mundo pra mim.
            </p>
            <p id="p5" className={animation ? "slide-up" : "fade"}>
               Agora que você já sobreviveu à parte da raiva…
            </p>
         </div>

         <Button type="next" />
      </section>
   );
};

export default Section1;
