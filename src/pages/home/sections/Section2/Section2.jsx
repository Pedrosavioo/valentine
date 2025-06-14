import React from "react";
import RopeCanvas from "../../canvas/RopeCanvas";
import "./Section2.css"; // Import the CSS file for styling

import img3 from "../../../../assets/photos/img3.webp";
import img4 from "../../../../assets/photos/img4.webp";
import img5 from "../../../../assets/photos/img5.webp";

import pinImg from "../../../../assets/pin.webp";
import Button from "../../../../components/Button";
import { useSelector } from "react-redux";

const Section2 = () => {
   const animation = useSelector((state) => state.animation.value);

   return (
      <section id="section-2">
         <RopeCanvas />
         <Button type="prev" />

         <div
            className={`photo-container photo-container-1 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img3} className={`photo`} />
         </div>

         <div
            className={`photo-container photo-container-2 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img4} className={`photo`} />
         </div>

         <div
            className={`photo-container photo-container-3 ${
               animation ? "fade-in" : "fade"
            }`}
         >
            <img src={pinImg} className={`pin`} />
            <img src={img5} className={`photo`} />
         </div>

         <div className="content-text">
            <p className={animation ? "slide-up" : ""}>Feliz Dia Dos Namorados Meu Amor!</p>
         </div>

         <Button type="next" />
      </section>
   );
};

export default Section2;
