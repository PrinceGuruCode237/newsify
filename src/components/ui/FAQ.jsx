import { useState } from "react";
import { faq } from "../../../constants";
import Heading from "./Heading";

const FAQ = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section className="my-[120px] mx-4 md:mx-8 lg:mx-16">
      <div>
        <Heading
          heading={"Frequently asked questions"}
          subheading={"Were are happy to answer your questions"}
        />
      </div>

      <div className="qa-container my-10 transition-all duration-500">
        {faq.map((faq) => (
          <QA
            key={faq.id}
            question={faq.question}
            anwser={faq.answer}
            selected={selected}
            setSelected={setSelected}
            index={faq.id}
          />
        ))}
      </div>
    </section>
  );
};

const QA = ({ question, anwser, selected, setSelected, index }) => {
  return (
    <div
      className={`faq border-t-2 py-4 cursor-pointer items-center justify-center duration-500   ${
        selected === index ? "max-h-[200px]" : "max-h-[75px]"
      } overflow-hidden`}
      onClick={() => setSelected(index)}
    >
      <div className="flex justify-between items-center h-full">
        <h3 className="text-lg md:text-xl font-normal">{question}</h3>
        <div
          className={`h-10 transition-colors duration-500 ${
            selected === index ? "bg-primary" : "bg-lightgray"
          }   p-2 w-10 cursor-pointer flex justify-center items-center rounded-full `}
        >
          <span className="text-2xl">
            {selected === index ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 1.95449L1.04551 24M23.0455 23.9544L1 2"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 12H1M12 23L12 1"
                  stroke="#786F77"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
        </div>
      </div>
      <div className="mt-4 w-full p-1  min-h-[120px] max-w-full lg:w-2/3">
        <h5 className="text-base  text-neutral-gray_800 w-full h-[120px]">
          {anwser}
        </h5>
      </div>
    </div>
  );
};
export default FAQ;
