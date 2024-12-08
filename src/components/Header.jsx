import React from "react";
import Container from "./Container.jsx";
import Search from "./Search.jsx";
import Settings from "./Settings.jsx";
import Notifications from "./Notifications.jsx";
import Avatar from "./Avatar.jsx";
import {useLocation} from "react-router-dom";

const Header = () => {
  const {pathname} = useLocation();
  return (
    <header className="border-b bg-white sticky top-0 border-b-[rgb(230,239,245)]">
      <Container>
        <div className="py-5 px-10 h-[100px] flex items-center justify-between">
          <h1 className="text-[28px] text-primary-dark font-semibold">
            {pathname === '/' ? 'Overview' :pathname.at(1).toUpperCase() + pathname.slice(2,) }

          </h1>
          <div className="flex-center space-x-8">
            <Search />
            <Settings />
            <Notifications />
            <Avatar />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
