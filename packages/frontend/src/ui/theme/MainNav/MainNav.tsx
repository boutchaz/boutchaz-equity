import React, { FC } from "react";
import Logo from "ui/Logo/Logo";
import Navigation from "ui/Navigation";
// import SearchDropdown from "./SearchDropdown";
// import ButtonPrimary from "@/ui/Button/ButtonPrimary";
import MenuBar from "@/ui/MenuBar";
import SwitchDarkMode from "ui/SwitchDarkMode";
import SwitchLanguage from "ui/SwitchLanguage";

export interface MainNavProps {
  isTop: boolean;
}

const MainNav: FC<MainNavProps> = ({ isTop }) => {
  return (
    <div
      className={`nc-MainNav relative z-10 ${
        isTop ? "onTop " : "notOnTop backdrop-filter"
      }`}
    >
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
          <Logo />
          <Navigation />
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-1">
            <SwitchDarkMode />
            <SwitchLanguage />
            {/* <SearchDropdown /> */}
            <div className="px-1" />
            {/* <ButtonPrimary href="/login">Sign up</ButtonPrimary> */}
          </div>
          <div className="flex items-center xl:hidden">
            {/* <SwitchDarkMode /> */}
            <div className="px-1" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
