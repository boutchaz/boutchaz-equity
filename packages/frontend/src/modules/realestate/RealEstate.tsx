import React, { FC } from "react";
import HeroRealEstateSearchForm from "@/modules/realestate/components/HeroRealEstateSearchForm";
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface SectionHero2Props {
  className?: string;
}

const RealEstate: FC<SectionHero2Props> = ({ className = "", children }) => {
  const { t } = useTranslation('common');
  const router = useRouter()

  return (
    <div className="nc-PageHome2 relative overflow-hidden">
      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">
        <div className="lg:mt-2" >
          <div
            className={`nc-SectionHero2 relative ${className}`}
            data-nc-id="SectionHero2"
          >
            <div className="absolute bottom-0 top-60 md:inset-y-0 w-5/6 xl:w-3/4 right-0 flex-grow">
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src={'images/hero-right-3.png'}
                alt="hero"
              />
            </div>
            <div className="relative flex flex-col-reverse items-start md:block pb-14 md:py-14 lg:py-20">
              <div className="relative inline-flex">
                <div className="w-screen right-20 md:right-52 inset-y-0 absolute bg-primary-500"></div>
                <div className="relative max-w-3xl inline-flex flex-shrink-0 flex-col items-start py-16 sm:py-20 lg:py-24 space-y-8 sm:space-y-10 text-white">
                  {children ? (
                    children
                  ) : (
                    <h2 className="font-semibold text-4xl md:text-5xl xl:text-7xl !leading-[110%]">
                      Find Your Best <br /> Smart Real Estate
                      {t('home')}
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
      </div>
    </div>
  );
};

export default RealEstate;
