import { Link } from "react-router-dom";

const Button = ({ text, customization, type, link, onClick }) => {
  if (link === undefined) {
    if (type === "outline") {
      return (
        <button
          className={`${customization} cursor-pointer px-4 py-2 rounded-[100px] font-medium w-fit border border-primary-40 text-primary-40`}
          onClick={onClick}
        >
          {text}
        </button>
      );
    } else if (type === "fill") {
      return (
        <button
          className={`${customization} cursor-pointer px-4 py-2 rounded-[100px] font-medium w-fit bg-primary-40 text-white`}
          onClick={onClick}
        >
          {text}
        </button>
      );
    }
  } else {
    if (type === "outline") {
      return (
        <Link
          to={link}
          className={`${customization} cursor-pointer px-4 py-2 rounded-[100px] font-medium w-fit border border-primary-40 text-primary-40`}
        >
          {text}
        </Link>
      );
    } else if (type === "fill") {
      return (
        <Link
          to={link}
          className={`${customization} cursor-pointer px-4 py-2 rounded-[100px] font-medium w-fit bg-primary-40 text-white`}
        >
          {text}
        </Link>
      );
    }
  }
};

export default Button;
