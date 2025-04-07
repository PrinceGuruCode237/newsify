import Heading from "./Heading";

import { delay, motion } from "framer-motion";

const rowVariant = {
  hidden: {
    transition: {
      staggerChildren: 0.3,
    },
  },

  visible: {
    transition: {
      type: "tween",
      staggerChildren: 0.3,
    },
  },
};

const Content = () => {
  return (
    <section className="my-[115px] lg:my-[220px]">
      <Heading
        heading={"Let your newsletter do the talk"}
        subheading={` Let's clam it , today we don't the time to talk or time to scroll over
          groups or other plateforms . So it is better for your automated
          newsletter to do the tlk. What cloud be done better? Stay connected to
          your community.`}
      />
      <div className="mx-4 my-10">
        <div className="image lg:w-[900px] lg:h-[480px] mx-auto">
          <img
            src="./assets/images/dashboard.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <motion.div
        variants={rowVariant}
        initial="hidden"
        whileInView={"visible"}
        className="flex flex-col lg:my-44  my-32 lg:mx-16  gap-16 lg:flex-row lg:gap-6"
      >
        <Box
          title={"Direct connection"}
          description={
            "No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of connecting with others."
          }
          isFeatured={false}
        />

        <Box
          title={"Direct connection"}
          description={
            "No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of connecting with others."
          }
          isFeatured={true}
        />

        <Box
          title={"Direct connection"}
          description={
            "No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of connecting with others."
          }
          isFeatured={false}
        />
      </motion.div>
    </section>
  );
};

const Box = ({ title, description, isFeatured = false }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      className={`box relative  ${
        isFeatured ? "bg-primary" : "bg-lightgray"
      } w-[80%]  px-6   pb-10 mx-auto lg:w-1/3`}
    >
      <span
        className={`arrow p-5 absolute left-1/2 -translate-x-1/2  -top-10 ${
          isFeatured ? "bg-primary" : "bg-lightgray"
        } border-4 border-white rounded-full`}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.481 8.95947C11.481 8.37155 11.9575 7.89502 12.5454 7.89501L26.5963 7.89494C26.8786 7.89484 27.1494 8.00705 27.349 8.20667C27.5486 8.40629 27.6608 8.67708 27.6608 8.9595V23.0104C27.6608 23.5984 27.1843 24.0749 26.5964 24.0749C26.0085 24.0749 25.5318 23.5983 25.5318 23.0103L25.5317 11.5294L9.28354 27.7776C8.86782 28.1933 8.19379 28.1933 7.77809 27.7776C7.36238 27.3619 7.36237 26.6879 7.77809 26.2721L24.0263 10.024L12.5455 10.024C11.9576 10.024 11.481 9.5474 11.481 8.95947Z"
            fill={`${isFeatured ? "white" : "black"}`}
          />
        </svg>
      </span>
      <h3
        className={`text-2xl font-medium mb-4 pt-24 ${
          isFeatured ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h3>
      <p className={`${isFeatured ? "text-white" : "text-black"}`}>
        {description}
      </p>
    </motion.div>
  );
};

export default Content;
