import { NavLink } from "react-router-dom";
import { logoUniveral } from "assets/images/logo";
import { styles } from "styles";

const Navbar = () => {
  return (
    <nav className={`${styles.padding} flex flex-col w-[100%] items-center py-4 gap-4`}>
      <div className="flex gap-4">
        <img src={logoUniveral} alt="logo-univeral" className="w-16" />
        <img src={logoUniveral} alt="logo-univeral" className="w-16" />
      </div>
      <div className="flex gap-16 smdlg:justify-between sm:gap-8">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#920E34", color: "#FFF" } : {}
          }
          className="px-4 py-2 rounded-[100px] border-primary-40 border text-primary-40 font-medium"
        >
          Home
        </NavLink>
        <NavLink
          to="/alumni"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#920E34", color: "#FFF" } : {}
          }
          className="px-4 py-2 rounded-[100px] border-primary-40 border text-primary-40 font-medium"
        >
          Alumni
        </NavLink>
        <NavLink
          to="/events"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#920E34", color: "#FFF" } : {}
          }
          className="px-4 py-2 rounded-[100px] border-primary-40 border text-primary-40 font-medium"
        >
          Event
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
