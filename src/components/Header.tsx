import { FC } from "react";
import { NavLink } from "react-router-dom";
import LeftArrow from "../assets/icons/left-arrow.svg";

const Header: FC = () => {
  return (
    <header className="flex justify-start pt-2 pl-4 w-full">
      <NavLink
        to="/"
        className="flex items-center gap-2 text-sm font-semibold hover:underline"
      >
        <img src={LeftArrow} alt="Back" className="h-5 w-5 inline" />
        <span>Home</span>
      </NavLink>
    </header>
  );
};

export default Header;
