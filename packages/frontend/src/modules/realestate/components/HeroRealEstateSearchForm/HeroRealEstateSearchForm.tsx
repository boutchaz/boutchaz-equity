import React, { FC, useState } from "react";
// import "react-dates/initialize";
import RealEstateSearchForm from "@/modules/realestate/components/RealEstateSearchForm";
import useTranslation from 'next-translate/useTranslation';

export type SearchRealEstateTab = "buy" | "rent" | "Sell";

export interface HeroRealEstateSearchFormProps {
  className?: string;
  currentTab?: SearchRealEstateTab;
  locationInputValue: string;
  setLocationInputValue: any;
  rangePrices: any;
  setRangePrices: any;
  onSubmit: any;
}

const HeroRealEstateSearchForm: FC<HeroRealEstateSearchFormProps> = ({
  className = "",
  currentTab = "buy",
  locationInputValue,
  setLocationInputValue,
  rangePrices,
  setRangePrices,
  onSubmit

}) => {
  const tabs: SearchRealEstateTab[] = ["buy", "rent"];
  const [tabActive, setTabActive] = useState<SearchRealEstateTab>(currentTab);
  const { t, lang } = useTranslation('common');

  const renderTab = () => {
    return (
      <ul className="rtl:mr-6 ltr:ml-6 ltr:md:ml-16 ltr:xl:ml-20 inline-flex space-x-4 sm:space-x-8 lg:space-x-11 bg-white dark:bg-neutral-900 pb-6 md:p-6 !pl-0 xl:p-0 rounded-t-3xl">
        {tabs.map((tab) => {
          const active = tab === tabActive;
          return (
            <li
              onClick={() => setTabActive(tab)}
              className={`flex  rtl:ml-10 items-center cursor-pointer text-sm lg:text-base font-medium ${active
                ? ""
                : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-100"
                } `}
              key={tab}
            >
              {active && (
                <span className="rtl:text-right block w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-neutral-100 ltr:mr-2 rtl:ml-2" />
              )}
              <span>{t(tab)}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderForm = () => {
    switch (tabActive) {
      case "buy":
        return <RealEstateSearchForm locationInputValue={locationInputValue}
          setLocationInputValue={setLocationInputValue}
          rangePrices={rangePrices}
          setRangePrices={setRangePrices} 
          onSubmit={onSubmit}
          />;

      default:
        return <RealEstateSearchForm locationInputValue={locationInputValue}
          setLocationInputValue={setLocationInputValue}
          rangePrices={rangePrices}
          setRangePrices={setRangePrices} 
          onSubmit={onSubmit}
          />;
    }
  };

  return (
    <div
      className={`nc-HeroRealEstateSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
      data-nc-id="HeroRealEstateSearchForm"
    >
      {renderTab()}
      {renderForm()}
    </div>
  );
};

export default HeroRealEstateSearchForm;
