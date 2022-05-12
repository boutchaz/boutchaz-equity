import { SocialType } from "ui/SocialsShare/SocialsShare";
import React, { FC } from "react";
import client from 'utils/axios'
import { useQuery } from 'react-query'
export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
  isFooter?: boolean;
}

const socialsDemo: SocialType[] = [
  { name: "facebook", icon: "lab la-facebook-square", href: "#" },
  { name: "twitter", icon: "lab la-twitter", href: "#" },
  { name: "youtube", icon: "lab la-youtube", href: "#" },
  { name: "instagram", icon: "lab la-instagram", href: "#" },
];
async function fetchContact() {
  const { data } = await client.get('contact');
  return data
}

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block",
  socials = socialsDemo,
  isFooter = false,
}) => {
  const { isLoading, isError, data, error } = useQuery('properties', fetchContact);
  // return (
  //   <nav
  //     className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
  //     data-nc-id="SocialsList"
  //   >
  //     {data && data.socials.map((item: any, i:number) => (
  //       <a
  //         key={i}
  //         className={`${itemClass}`}
  //         href={item.href}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         title={item.name}
  //       >
  //         <i className={socialsDemo.find((one => one.name == item.name))?.icon}></i>
  //         {isFooter && <span className="hidden lg:block text-sm">{item.name}</span> }
  //       </a>
  //     ))}
  //   </nav>
  // );
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={index}
      >
       <i className={socialsDemo.find((one => one.name == item.name))?.icon}></i>
        {isFooter && <span className="hidden lg:block text-sm">{item.name}</span> }
      </a>
    );
  };
  return (
    <nav className={`nc-SocialsList1 flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`} data-nc-id="SocialsList1">
      {data && data.socials.map(renderItem)}
    </nav>
  );
};

export default SocialsList;
