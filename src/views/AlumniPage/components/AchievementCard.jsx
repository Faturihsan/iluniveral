import TextTruncate from "react-text-truncate"
import { styles } from "styles"

const AchievementCard = ({ img, title, description }) => {
  return (
    <div className="flex shrink-0 h-[130px] sm:flex-col sm:h-fit sm:items-center sm:gap-2 w-full">
      <div className="h-full w-[240px] grid place-items-center rounded-lg overflow-hidden shrink-0 sm:w-full">
        <img src={img} alt="alumni" className="object-cover" />
      </div>
      <div className="flex flex-col w-full gap-2 px-6 sm:px-0">
        <TextTruncate line={1} text={title} containerClassName={`${styles.headingM} text-primary-40`} />
        <TextTruncate line={3} text={description} containerClassName="text-justify text-neutral-80" />
      </div>
    </div>
  )
}

export default AchievementCard
