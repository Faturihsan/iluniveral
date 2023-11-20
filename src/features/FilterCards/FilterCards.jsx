import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"
import { Button } from "components";

const FilterCards = ({ buttons, search, containerClassName }) => {
  const navigate = useNavigate();
  return (
    <div className={`${containerClassName} flex justify-between smdlg:flex-col-reverse smdlg:gap-4`}>
      <div className="flex gap-8">
        {buttons.map(({ text, url, isActive }, index) => <Button text={text} type={isActive ? "fill" : "outline"} onClick={() => navigate(url)} key={index} />)}
      </div>
      <div className="rounded-[100px] border border-primary-40 px-4 py-2 text-primary-40 flex justify-between items-center gap-2">
        <input
          type="text"
          className="placeholder:text-primary-40 placeholder:opacity-75 focus:outline-0"
          placeholder={search.placeholder}
          onChange={search.onSearch}
        />
        <FaSearch />
      </div>
    </div>
  );
};

export default FilterCards;
