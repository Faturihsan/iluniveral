import { useEffect, useRef, useState } from "react";
import { getAllAchievements } from "utils/fetch";
import AchievementCard from "views/AlumniPage/components/AchievementCard";

const AchievementsLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  // pencapaian-alumni
  const achievements = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      const achievementsResponseData = await getAllAchievements();
      achievements.current = achievementsResponseData;
    };
    fetchData();
    setIsLoading(false);
  }, []);

  if (isLoading) return <h1>Loading...</h1>

  return (
    <section className="flex flex-col items-center w-full max-w-[1150px] gap-6 sm:gap-8">
      {achievements.current.map((achievement) => {
        const { nama, deskripsi, image, id } = achievement;
        return (
          <AchievementCard
            title={nama}
            description={deskripsi}
            img={image}
            key={id}
          />
        );
      })}
    </section>
  );
};

export default AchievementsLayout;
