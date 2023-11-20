import { FaCalendar, FaLocationArrow, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { styles } from "styles";

const EventCard = ({ img, title, description, date, location, author, id }) => {
  const navigate = useNavigate();

  const navigateToSpecificEvent = (id) => {
    navigate(`/events/${id}`)
  }

  return (
      <div className="flex flex-col w-[350px] h-[555px] border-neutral-50 border rounded-lg overflow-hidden h-[536px] cursor-pointer" onClick={() => navigateToSpecificEvent(id)}>
        <div className="w-full h-[256px] shrink-0 object-cover shadow-[0_2px_4px_0_rgba(100,100,100,0.3)]">
          {/* <img src={`https://admin.iluniveral.id/app/src/assets/images/upload/events/${img}`} alt={title} /> */}
          <img src={img} alt={title} />
        </div>
        <section className="flex flex-col justify-around gap-4 px-4 py-3">
          <div className="flex flex-col gap-2">
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={title}
              containerClassName={`${styles.headingM} text-primary-40`}
            />
            <TextTruncate
              line={3}
              element="span"
              truncateText="…"
              text={description}
              containerClassName="text-neutral-100 text-justify"
            />
          </div>
          <div className="flex flex-col gap-1 justify-self-end text-neutral-80">
            <div className="flex items-center gap-3">
              <FaCalendar />
              {date}
            </div>
            <div className="flex items-center gap-3">
              <FaLocationArrow className="shrink-0" />
              <TextTruncate
                line={2}
                element="span"
                truncateText="…"
                text={location}
              />
            </div>
            <div className="flex items-center gap-3">
              <FaUser />
              {author}
            </div>
          </div>
        </section>
      </div>
  );
};

export default EventCard;
