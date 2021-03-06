import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO } from "data/navigation";

function Navigation() {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative rtl:pr-20">
      {NAVIGATION_DEMO.map((item: any) => {
        return (
          <NavigationItem key={item.id} menuItem={item} />
        )
      })}
    </ul>
  );
}

export default Navigation;
