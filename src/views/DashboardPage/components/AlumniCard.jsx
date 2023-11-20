import { Link } from "react-router-dom";
import { Button } from "components";
import TextTruncate from "react-text-truncate";
import { styles } from "styles";

const AlumniCard = ({ title, description, img, id }) => {
  return (
    <div className="w-full flex gap-6 odd:flex-row-reverse max-w-[1300px] smd:flex-col smd:h-fit smd:odd:flex-col smd:items-center">
      <div className="w-[490px] h-[300px] rounded-lg overflow-hidden shrink-0 lg:w-[400px] lg:h-[300px] smd:max-w-[350px]">
        <img src={`https://admin.iluniveral.id/app/src/assets/images/upload/achievements/${img}`} alt="foto alumni" className="w-[100%]" />
      </div>
      <div className="flex flex-col w-full gap-4">
        <h2 className={`${styles.headingM} text-primary-40`}>{title}</h2>
        <p
          className={`${styles.textLRegular} text-neutral-100 smd:hidden text-justify`}
        >
          {description}
        </p>
        <TextTruncate
          line={3}
          text={description}
          containerClassName="hidden text-justify text-neutral-80 smd:block"
        />
        {/* //TODO: Link button to specific achievement link */}
        <Link to={`/alumni/${id}`}>
          <Button
            type="fill"
            text="Button"
            customization="bg-primary-40 text-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default AlumniCard;
