import { NavLink } from "react-router-dom";
import { navRoutes } from "../../../constants/routes";

const Paths = () => {
  return (
    <nav className="flex h-full items-center gap-6 text-sm font-[CoFoSansMedium]">
      {navRoutes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive }) =>
            `relative flex items-center gap-2 ${
              isActive
                ? "after:absolute after:top-8 smLaptop:after:top-10 after:left-0 after:h-0.5 after:w-full after:bg-current"
                : ""
            }`
          }>
          <img
            src={`src/assets/icons/${route.icon}`}
            alt={route.name}
            className="size-4 hidden sm:block"
          />
          <span>{route.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Paths;
