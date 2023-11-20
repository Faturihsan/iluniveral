import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "utils/fetch";
import LoadingPage from "views/LoadingPage";

const EventDetailPage = () => {
  const { eventId } = useParams();
  const event = useRef({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEventById(eventId);
      event.current = response;
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <LoadingPage />;
  
  return <main></main>;
};

export default EventDetailPage;
