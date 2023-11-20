/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#F4E7EB",
          20: "#EFDBE1",
          30: "#DDB4C0",
          40: "#920E34",
          50: "#830D2F",
          60: "#750B2A",
          70: "#6E0B27",
          80: "#58081F",
          90: "#420617",
          100: "#330512",
        },
        neutral: {
          10: "#FDFDFD",
          20: "#FBFBFB",
          30: "#F7F7F7",
          40: "#E6E6E6",
          50: "#CFCFCF",
          60: "#B8B8B8",
          70: "#ADADAD",
          80: "#8A8A8A",
          90: "#676767",
          100: "#515151",
        },
        success: {
          10: "#F3FAE8",
          20: "#EDF8DD",
          30: "#DAF1B8",
          40: "#87D11A",
          50: "#7ABC17",
          60: "#6CA715",
          70: "#659D14",
          80: "#517D10",
          90: "#3D5E0C",
          100: "#2F4909",
        },
        info: {
          10: "#E6F9FE",
          20: "#D9F6FD",
          30: "#B0EDFB",
          40: "#00C5F2",
          50: "#00B1DA",
          60: "#009EC2",
          70: "#0094B6",
          80: "#007691",
          90: "#00596D",
          100: "#004555",
        },
        warning: {
          10: "#F4E7EB",
          20: "#EFDBE1",
          30: "#DDB4C0",
          40: "#920E34",
          50: "#830D2F",
          60: "#750B2A",
          70: "#6E0B27",
          80: "#58081F",
          90: "#420617",
          100: "#330512",
        },
        danger: {
          10: "#F4E7EB",
          20: "#EFDBE1",
          30: "#DDB4C0",
          40: "#920E34",
          50: "#830D2F",
          60: "#750B2A",
          70: "#6E0B27",
          80: "#58081F",
          90: "#420617",
          100: "#330512",
        },
      },
      screens: {
        lg: { min: "835px", max: "1040px" },
        mdlg: { min: "526px", max: "1040px" },
        smdlg: { max: "1040px" },
        smd: { max: "834px" },
        md: { min: "526px", max: "834px" },
        sm: { max: "525px" },
      },
    },
  },
  plugins: [],
};
