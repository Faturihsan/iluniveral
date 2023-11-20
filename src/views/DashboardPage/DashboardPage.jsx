import { useEffect, useRef, useState } from "react";
import { Footer, Navbar } from "layouts";
import { styles } from "styles";
import { dashboardHeader } from "assets/images";
import AlumniCard from "./components/AlumniCard";
import { Button, EventCard } from "components";
import LoadingPage from "views/LoadingPage";
import { getAllAchievements, getAllEvents } from "utils/fetch";

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const events = useRef([]);
  const achievements = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      const eventsResponseData = await getAllEvents();
      const achievementsResponseData = await getAllAchievements();
      events.current = eventsResponseData;
      achievements.current = achievementsResponseData;
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <LoadingPage />;

  return (
    <>
      <Navbar />
      <header className="w-[100%] max-h-[550px] aspect-video overflow-hidden grid place-items-center relative ">
        <img
          src={dashboardHeader}
          alt="alumni univeral"
          className="absolute w-[100%] top-0"
        />
      </header>
      <main className={`${styles.padding}`}>
        <section className="flex flex-col w-full gap-12">
          <h1 className={`${styles.headingLM} text-primary-40 text-center`}>
            Pencapaian Alumni
          </h1>
          <div className="flex flex-col items-center gap-10">
            {achievements.current.slice(0, 2).map((obj) => {
              const { id, nama, deskripsi, image } = obj;
              return (
                <AlumniCard
                  title={nama}
                  description={deskripsi}
                  img={image}
                  key={id}
                />
              );
            })}
          </div>
          <Button
            link="/alumni"
            type="outline"
            text="View all pencapaian alumni"
            customization="border border-primary-40 text-primary-40 self-center"
          />
        </section>
        <section className="flex flex-col items-center w-full gap-12 py-12">
          <h1 className={`${styles.headingLM} text-primary-40 text-center`}>
            Events
          </h1>
          <div className="flex flex-wrap justify-center w-full gap-10">
            {events.current.slice(0, 3).map((event) => {
              const { id, image, deskripsi, nama, lokasi, tggl_mulai } = event;
              const date = new Date(tggl_mulai);
              return (
                <EventCard
                  id={id}
                  img={image}
                  title={nama}
                  description={deskripsi}
                  date={date.toLocaleString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  location={lokasi}
                  author="admin"
                  key={id}
                />
              );
            })}
          </div>
          <Button
            link="/events"
            type="outline"
            text="View all events"
            customization="border border-primary-40 text-primary-40"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DashboardPage;
