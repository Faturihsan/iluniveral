import { useEffect, useRef, useState } from "react";
import { EventCard } from "components";
import { FilterCards } from "features";
import { Navbar, Footer } from "layouts";
import { LoadingPage } from "views";
import {
  FILTER_BUTTONS,
  SEARCH_INPUT,
  eventsMock,
} from "constants/eventsConstant";
// import { getAllEvents } from "utils/fetch";
import { styles } from "styles";

const EventsPage = () => {
  // const [beginSlice, setBeginSlice] = useState(0);
  // const [endSlice, setEndSlice] = useState(9);
  const [isLoading, setIsLoading] = useState(true);
  const events = useRef([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const responseData = await getAllEvents();
    //   events.current = responseData;
    //   setIsLoading(false);
    // };
    // fetchData();
    events.current = [...eventsMock];
    setIsLoading(false);
  }, []);

  if (isLoading) return <LoadingPage />;

  return (
    <>
      <Navbar />
      <main className={`${styles.padding} flex flex-col gap-6 items-center`}>
        <h1 className={`${styles.headingL} text-primary-40 text-center`}>
          Events
        </h1>
        <FilterCards
          buttons={FILTER_BUTTONS}
          search={SEARCH_INPUT}
          containerClassName="w-full max-w-[1150px]"
        />
        <section className="flex flex-wrap gap-10 w-full max-w-[1150px] justify-center">
          {events.current.map((event) => {
            // const { id, image, deskripsi, nama, lokasi, tggl_mulai } = event;
            // const date = new Date(tggl_mulai);
            return (
              // <EventCard
              //   id={id}
              //   img={image}
              //   title={nama}
              //   description={deskripsi}
              //   date={date.toLocaleString("id-ID", {
              //     day: "numeric",
              //     month: "long",
              //     year: "numeric",
              //   })}
              //   location={lokasi}
              //   author="admin"
              //   key={id}
              // />
              <EventCard
                {...event}
                key={event}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EventsPage;
