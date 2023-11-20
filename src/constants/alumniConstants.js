import { alumni1, alumni2 } from "assets/images/alumni";
import AchievementsLayout from "layouts/AlumniPageLayouts/AchievementsLayout";
import AlumniListLayout from "layouts/AlumniPageLayouts/AlumniListLayout";

export const FILTER_BUTTONS = [
  {
    text: "Daftar Alumni",
    url: "/alumni/daftar-alumni",
    isActive: true,
  },
  {
    text: "Pencapaian Alumni",
    url: "/alumni/pencapaian-alumni",
    isActive: false,
  },
]

export const SEARCH_INPUT = {
  placeholder: "Search Pencapaian Alumni..",
  onSearch: () => {},
}

export const ALUMNI_PAGE_LAYOUTS = {
  "daftar-alumni": <AlumniListLayout />,
  "pencapaian-alumni": <AchievementsLayout />
}

export const ALUMNI_LIST_HEADER = [
  {
    Header: "No.",
    accessor: "index",
    width: 6,
  },
  {
    Header: "Nama Alumni",
    accessor: "nama",
  },
  {
    Header: "Angkatan",
    accessor: "tahun_masuk",
  },
  {
    Header: "Jurusan",
    accessor: "fakultas",
  },
];

export const alumni = [
  {
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad  Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad ",
    img: alumni1,
  },
  {
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad  Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad ",
    img: alumni2,
  },
  {
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad  Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad ",
    img: alumni2,
  },
  {
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad  Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et accus temp dolor sit amet et ea rebum ad ",
    img: alumni2,
  },
];