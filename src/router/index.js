import { Navigate, createBrowserRouter } from "react-router-dom";
import {
  AlumniPage,
  DashboardPage,
  ErrorPage,
  EventsPage,
  EventDetailPage,
} from "views";

const router = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  {
    path: "events",
    children: [
      { path: ":eventId", element: <EventDetailPage /> },
      { path: "", element: <EventsPage /> },
    ],
  },
  {
    path: "alumni",
    children: [
      {
        path: ":category",
        element: <AlumniPage />,
        children: [
          { path: ":id", element: <EventDetailPage /> },
          {
            path: "",
            element: <Navigate to="/alumni/pencapaian-alumni" replace />,
          },
        ],
      },
      { path: "", element: <Navigate to="/alumni/daftar-alumni" replace /> },
      { path: "*", element: <Navigate to="/alumni/daftar-alumni" replace /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
