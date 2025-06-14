import React from "react";
import RopeCanvas from "../../canvas/RopeCanvas";
import "./Section3.css"; // Import the CSS file for styling

import img6 from "../../../../assets/photos/img6.webp";
import img7 from "../../../../assets/photos/img7.webp";
import img8 from "../../../../assets/photos/img8.webp";
import img9 from "../../../../assets/photos/img9.webp";

import pinImg from "../../../../assets/pin.webp";
import Button from "../../../../components/Button";
import { useSelector } from "react-redux";

const Section3 = () => {
   const animation = useSelector((state) => state.animation.value);

   return (
      <section id="section-3">
         <RopeCanvas />
         <Button type="prev" />

         <div
            className={`photo-container photo-container-1 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img6} className={`photo`} />
         </div>

         <div
            className={`photo-container photo-container-2 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img7} className={`photo`} />
         </div>

         <div
            className={`photo-container photo-container-3 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img8} className={`photo`} />
         </div>

         <div
            className={`photo-container photo-container-4 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img9} className={`photo`} />
         </div>

         <div className="content-text">
            <p id="p1" className={animation ? "slide-up" : "fade"}>
               lembro como se fosse hoje, o dia que fui na sua casa pela
               primeira vez… a gente nem namorava ainda. Você tava dormindo, era
               teu aniversário e a gente te acordou kkkkkkk
            </p>
            <p id="p2" className={animation ? "slide-up" : "fade"}>
               Mesmo com aquela carinha brava porque passamos o dia todo te
               ignorando, você tava linda.
            </p>
            <p id="p3" className={animation ? "slide-up" : "fade"}>
               Teve também aquele dia na festa junina… a gente ainda mal se
               falava, mas lembro de segurar a Laís no colo, pequenininha como a
               Lis.
            </p>
            <p id="p4" className={animation ? "slide-up" : "fade"}>
               A gente ali na quadra, morrendo de vergonha um do
               outro, quase sem coragem de puxar conversa. Sem falar das nossas
               noites jogando Hago, cada dia uma competição diferente
            </p>
         </div>

         <Button type="next" />
      </section>
   );
};

export default Section3;
