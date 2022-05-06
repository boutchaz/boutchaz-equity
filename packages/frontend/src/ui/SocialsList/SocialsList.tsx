import { SocialType } from "ui/SocialsShare/SocialsShare";
import React, { FC } from "react";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemo: SocialType[] = [
  { name: "facebook", icon: "lab la-facebook-square", href: "#" },
  { name: "twitter", icon: "lab la-twitter", href: "#" },
  { name: "youtube", icon: "lab la-youtube", href: "#" },
  { name: "instagram", icon: "lab la-instagram", href: "#" },
];

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block",
  socials = socialsDemo,
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials.map((item:any, i) => (
        <a
          key={i}
          className={`${itemClass}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <i className={socialsDemo.find((one=>one.name == item.name))?.icon}></i>
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
