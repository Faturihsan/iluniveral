import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ALUMNI_LIST_HEADER,
  FILTER_BUTTONS,
  SEARCH_INPUT,
  // ALUMNI_PAGE_LAYOUTS,
} from "constants/alumniConstants";
import { Footer, Navbar } from "layouts";
import { FilterCards, TableBuilder } from "features";
import { styles } from "styles";
import { getAllAchievements, getAllAlumni } from "utils/fetch";
import LoadingPage from "views/LoadingPage";
import AchievementCard from "./components/AchievementCard";

const AlumniPage = () => {
  const { category, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  // daftar-alumni
  const alumniList = useRef([]);

  // pencapaian-alumni
  const achievements = useRef([]);

  useEffect(() => {
    const fetchData = async (cat) => {
      if (cat === "daftar-alumni") {
        const alumniResponseData = await getAllAlumni();
        alumniList.current = alumniResponseData;
      } else if (cat === "pencapaian-alumni") {
        const achievementsResponseData = await getAllAchievements();
        achievements.current = achievementsResponseData;
      }
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchData(category);
  }, [category]);

  if (isLoading) return <LoadingPage />;

  return (
    <>
      <Navbar />
      <main className={`${styles.padding} flex flex-col gap-6 items-center`}>
        <h1 className={`${styles.headingLM} text-center text-primary-40`}>
          Pencapaian Alumni
        </h1>
        <FilterCards
          buttons={FILTER_BUTTONS}
          search={SEARCH_INPUT}
          containerClassName="w-full max-w-[1150px]"
        />

        {category === "daftar-alumni" ? (
          <TableBuilder data={alumniList.current} columns={ALUMNI_LIST_HEADER} customization={"w-full"} />
        ) : (
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
        )}
      </main>
      <Footer />
    </>
  );
};

export default AlumniPage;
