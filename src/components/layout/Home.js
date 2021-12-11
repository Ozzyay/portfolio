import { motion } from "framer-motion";
import Btn from "./Btn";
const Home = () => {
  return (
    <motion.div
      className="App"
      animate={{
        opacity: 1,
        transition: { duration: 3 },
        staggerChildren: 0.5,
      }}
    >
      <Btn classes="btn btnFirst" text="Projects" />
      <Btn classes="btn btnSecond" text="Skills" />
      <Btn classes="btn btnFirst" text="Contact" />
    </motion.div>
  );
};

export default Home;
