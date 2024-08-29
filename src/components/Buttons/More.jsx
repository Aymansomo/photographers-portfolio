import { Link } from "react-router-dom";

const More = ({ title }) => {
  return (
    <Link to="/About">
      <button
        className="w-[150px] sd:mb-0 mb-20 bg-transparent border h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer
      relative overflow-hidden transition-all duration-500 ease-in-out shadow-md 
      hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full 
      before:w-full before:h-full before:bg-gradient-to-r before:from-blue-400 before:to-blue-500 
      before:transition-all before:duration-500 before:ease-in-out before:z-[-10] before:rounded-xl hover:before:left-0 text-[#fff]"
      >
        {title}
      </button>
    </Link>
  );
};

export default More;
