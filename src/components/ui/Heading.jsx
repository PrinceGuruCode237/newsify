import { motion } from "framer-motion";
import { FadeIn } from "../../constants/variants";

const Heading = ({ heading, subheading }) => {
  return (
    <motion.div
      variants={FadeIn("up", 0, 1)}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col justify-center items-center w-[90%] md:w-[600px] mx-auto gap-4"
    >
      <motion.h1 className="text-3xl text-center capitalize sm:text-3xl md:text-5xl font-semibold">
        {heading}
      </motion.h1>
      <p className="text-base text-center md:text-lg text-neutral-gray_800">
        {subheading}
      </p>
    </motion.div>
  );
};

export default Heading;
