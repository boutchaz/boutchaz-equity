import React, { FC } from "react";

import HeroRealEstateSearchForm from "@/modules/realestate/components/HeroRealEstateSearchForm";
import Heading from "@/modules/realestate/components/Heading";
import PropertyCard from "@/modules/realestate/components/PropertyCard";
import TabFilters from "@/modules/realestate/components/TabFilters";
import Pagination from "@/modules/realestate/components/Pagination";

import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import client from 'utils/axios'
export interface SectionHero2Props {
  className?: string;
}
async function fetchProperties(page:number) {
  const { data } = await client.get(`http://localhost:1337/api/properties?pagination[page]=${page}&pagination[pageSize]=5&populate=galleryImages`);
  return data
}

const RealEstate: FC<SectionHero2Props> = ({ className = "", children }: any): any => {
  const [page, setPage] = React.useState(1)
  const { t } = useTranslation('common');
  const router = useRouter()
  const { isLoading, isError, data, error } = useQuery(['properties',page], ()=> fetchProperties(page));
  
  console.log(data)
  return (
    <>
      <div className="nc-PageHome2 relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">
          <div className="lg:mt-2" >
            <div
              className={`nc-SectionHero2 relative ${className}`}
              data-nc-id="SectionHero2"
            >
              <div className="absolute bottom-0 top-60 md:inset-y-0 w-5/6 xl:w-3/4 rtl:left-0 ltr:right-0 flex-grow">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src={'images/eljadida1.avif'}
                  alt="hero"
                />
              </div>
              <div className="relative flex flex-col-reverse items-start md:block pb-14 md:py-14 lg:py-20">
                <div className="relative inline-flex">
                  <div className="w-screen ltr:right-20 ltr:md:right-52 ltr:inset-y-0  rtl:inset-y-0 rtl:left-0 absolute bg-primary-500"></div>
                  <div className="relative max-w-3xl inline-flex flex-shrink-0 flex-col items-start py-16 sm:py-20 lg:py-24 space-y-8 sm:space-y-10 text-white">
                    {children ? (
                      children
                    ) : (
                      <h2 className="font-semibold text-4xl md:text-5xl xl:text-7xl !leading-[110%]">
                        Find Your Best <br /> Smart Real Estate
                      </h2>
                    )}
                  </div>
                </div>
                <div className="mb-10 md:mb-0 md:mt-10 lg:mt-20 w-full">
                  <HeroRealEstateSearchForm />
                </div>
              </div>
            </div>
            
          </div>
          <div
        className={`nc-SectionGridFilterCard ${className}`}
        data-nc-id="SectionGridFilterCard"
      >
        <Heading
          heading="Property in Morocco"
          subHeading={
            <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
              {data && (data.meta.pagination.total > 1 ? data.meta.pagination.total+ ' Properties': data.meta.pagination.total+' Property')}
            </span>
          }
        />

        {/* <div className="mb-8 lg:mb-11">
          <TabFilters />
        </div> */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-2 ">
          {data && data.data &&  data.data.map((property:any,index:number) => (
            <PropertyCard key={index} data={property} />
          ))}
        </div>
        <div className="flex mt-16 justify-center items-center">
          {data && <Pagination pagination={data.meta.pagination} setPage={setPage} currentPage={page}/>}
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default RealEstate;
