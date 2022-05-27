import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FC } from "react";
import  Range from "rc-slider";
import convertNumbThousand from "utils/convertNumbThousand";

export interface PriceRangeInputProps {
  rangePrices:number[];
  setRangePrices?:any;
  fieldClassName?: string;
}

const PriceRangeInput: FC<PriceRangeInputProps> = ({
  rangePrices,
  setRangePrices,
  fieldClassName = "[ nc-hero-field-padding ]",
}) => {

  return (
    <Popover className="flex relative [ nc-flex-1 ]">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`flex text-left w-full flex-shrink-0 items-center ${fieldClassName} space-x-3 focus:outline-none cursor-pointer ${
              open ? "nc-hero-field-focused" : ""
            }`}
          >
            <div className="text-neutral-300 dark:text-neutral-400">
              <svg
                className="nc-icon-field nc-icon-field-2"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="7.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></circle>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M14.25 8.75H11.375C10.4775 8.75 9.75 9.47754 9.75 10.375V10.375C9.75 11.2725 10.4775 12 11.375 12H12.625C13.5225 12 14.25 12.7275 14.25 13.625V13.625C14.25 14.5225 13.5225 15.25 12.625 15.25H9.75"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 7.75V8.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 15.75V16.25"
                ></path>
              </svg>
            </div>
            <div className="flex-grow">
              <span className="block xl:text-lg font-semibold truncate">
                {`${convertNumbThousand(
                  rangePrices[0] / 1000
                )}k MADs ~ ${convertNumbThousand(rangePrices[1] / 1000)}k MADs`}
              </span>
              <span className="block mt-1 text-sm text-neutral-400 leading-none font-light ">
                Choose price range
              </span>
            </div>
          </Popover.Button>

            <Popover.Panel className="absolute left-0 lg:right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
              <div className="relative flex flex-col space-y-8">
                <div className="space-y-5">
                  <span className="font-medium">Range Price </span>
                  <Range
                    className="text-red-400"
                    range={true}
                    min={10000}
                    max={10000000}
                    defaultValue={[rangePrices[0], rangePrices[1]]}
                    allowCross={false}
                    step={1000}
                    onChange={(values:number | number[]) => {setRangePrices(values as number[])}}
                  />
                </div>

                <div className="flex justify-between space-x-3">
                  <div>
                    <label
                      htmlFor="minPrice"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      Min price
                    </label>
                    <div className="mt-1 relative rounded-md">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-neutral-500 sm:text-sm">MAD</span>
                      </div>
                      <input
                        type="text"
                        disabled
                        name="minPrice"
                        id="minPrice"
                        className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-12 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                        value={convertNumbThousand(rangePrices[0])}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="maxPrice"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      Max price
                    </label>
                    <div className="mt-1 relative rounded-md">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-neutral-500 sm:text-sm">MAD</span>
                      </div>
                      <input
                        disabled
                        type="text"
                        name="maxPrice"
                        id="maxPrice"
                        className="focus:ring-primary-500 focus:border-priring-primary-500 block w-full pl-12 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                        value={convertNumbThousand(rangePrices[1])}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default PriceRangeInput;
