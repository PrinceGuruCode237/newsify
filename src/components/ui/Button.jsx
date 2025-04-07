const Button = ({ className, title }) => {
  return (
    <button
      className={`${className} px-6  hover:bg-blue-400 transition-colors duration-200  font-medium  rounded-full  py-3 bg-primary`}
    >
      {title}
    </button>
  );
};

export default Button;
