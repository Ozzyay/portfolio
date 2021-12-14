import { motion } from "framer-motion";
import Btn from "./Btn";
const projInnerText =
  "Click here for a list of my projects that I have created on my learning adventure!";

const skillsInnerText =
  "Click here for a list of the levels of my applicable skills and knowledge!";

const contactInnerText = "Click here for my contact details!";

const Home = () => {
  return (
    <motion.div
      className="App"
      animate={{
        opacity: 1,
        transition: { duration: 1.5 },
      }}
    >
      <Btn text="Projects" innerText={projInnerText} />
      <Btn text="Skills" innerText={skillsInnerText} />
      <Btn text="Contact" innerText={contactInnerText} />
    </motion.div>
  );
};

export default Home;
