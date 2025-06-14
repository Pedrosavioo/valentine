import "./Home.css";
import Section1 from "./sections/Section1/Section1";
import { useSelector } from "react-redux";
import Section2 from "./sections/Section2/Section2";
import Section3 from "./sections/Section3/Section3";
import Section4 from "./sections/Section4/Section4";
import Section5 from "./sections/Section5/Section5";

const Home = () => {
   const count = useSelector((state) => state.counter.value);

   return (
      <section id="home">
         {count === 0 && (<Section1 />)}
         {count === 1 && (<Section2 />)}
         {count === 2 && (<Section3 />)}
         {count === 3 && (<Section4 />)}
         {count === 4 && (<Section5 />)}
      </section>
   );
};

export default Home;
