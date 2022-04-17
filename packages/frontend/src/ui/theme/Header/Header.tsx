import React, { FC } from "react";
import MainNav from "../MainNav/MainNav";
import Head from 'next/head';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [isTop, setisTop] = React.useState(true);

  React.useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    const $head = document.getElementById("nc-chifis-header");
    if (!$head) return;
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      !!isTop && setisTop(false);
    } else {
      setisTop(true);
    }
  }

  return (
    <div
      id="nc-chifis-header"
      className="nc-Header lg:sticky lg:top-0 w-full lg:left-0 lg:right-0 z-40"
    >
      <Head>
        <title>Boutchaz equity works</title>
      </Head>
      <MainNav isTop={isTop} />
    </div>
  );
};

export default Header;
