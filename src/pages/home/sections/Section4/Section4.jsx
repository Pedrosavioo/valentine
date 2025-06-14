import React from "react";
import RopeCanvas from "../../canvas/RopeCanvas";
import "./Section4.css"; // Import the CSS file for styling

import img10 from "../../../../assets/photos/img10.webp";
import img11 from "../../../../assets/photos/img11.webp";
import img12 from "../../../../assets/photos/img12.webp";

import pinImg from "../../../../assets/pin.webp";
import Button from "../../../../components/Button";
import { useSelector } from "react-redux";

const Section4 = () => {
   const animation = useSelector((state) => state.animation.value);

   return (
      <section id="section-4">
         <RopeCanvas />
         <Button type="prev" />

         <div
            className={`photo-container photo-container-1 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img10} className={`photo`} />
         </div>

         <div
            className={`photo-container photo-container-2 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img11} className={`photo`} />
         </div>

         <div
            className={`photo-container photo-container-3 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img12} className={`photo`} />
         </div>

         <div className="content-text">
            <p id="p1" className={animation ? "slide-up" : "fade"}>Te amoooo tantooo! E te admiro mais ainda.</p>
            <p id="p2" className={animation ? "slide-up" : "fade"}>
               Admiro sua coragem de enfrentar a vida todos os dias, mesmo
               morando longe de quem você ama, lutando pelos seus sonhos,
               estudando, trabalhando, conquistando cada coisinha com
               esforço.Você me enche de orgulho.
            </p>
            <p id="p3" className={animation ? "slide-up" : "fade"}>
               Amo teu jeitinho brincalhona e meiga ao mesmo tempo, é mágico
               como você consegue me fazer rir mesmo quando o dia tá pesado.
            </p>
            <p id="p4" className={animation ? "slide-up" : "fade"}>
               Amo quando topa qualquer rolê do meu lado, seja a maior aventura
               ou só ficar de bobeira.
            </p>
            <p id="p5" className={animation ? "slide-up" : "fade"}>
               E amo demais o quanto você se importa com os animais. Qualquer
               bichinho que você vê, você cuida, você sente… isso mostra o
               tamanho do seu coração.
            </p>
            <p id="p6" className={animation ? "slide-up" : "fade"}>
               São essas (e tantas outras) coisas que me fazem te amar mais a
               cada dia.
            </p>
         </div>

         <Button type="next" />
      </section>
   );
};

export default Section4;
