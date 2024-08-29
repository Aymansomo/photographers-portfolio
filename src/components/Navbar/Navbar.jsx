import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelopeOpen,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const Links = [
          { to: "/", icon: faHome, label: "Home" },
          { to: "/About", icon: faUser, label: "About" },
          { to: "/Portfolio", icon: faBriefcase, label: "Portfolio" },
          { to: "/contact", icon: faEnvelopeOpen, label: "Contact" },
        ]

  return (
    <nav className="fixed sd:right-5 z-50 sd:bottom-1/2 max-sd:bg-blue-950 p-2 sd:transform  sd:translate-y-1/2 max-sd:bottom-0 w-full sd:w-auto">
      <ul className="flex sd:flex-col items-center justify-around  sd:space-y-4 space-x-4  sd:space-x-0">
        {Links.map((item, index) => (
          <li key={index} className="relative group">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center rounded-full ${
                  isActive ? "bg-blue-800" : "bg-blue-400"
                }`
              }
            >
              <div className="z-20 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14  transition-shadow duration-300 ease-in-out">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-white text-xl"
                />
              </div>
              <span className="z-10 absolute hidden sd:block group-hover:pr-5 bg-blue-500  p-1 pl-4 group-hover:right-14 right-20 top-1/2 transform translate-x-full -translate-y-1/2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-white font-black rounded-full transition-all duration-300 ease-in-out">
                {item.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
