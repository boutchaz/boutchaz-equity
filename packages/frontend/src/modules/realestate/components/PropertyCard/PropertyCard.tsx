import React, { FC } from "react";
import GallerySlider from "@/modules/realestate/components/GallerySlider";
import { DEMO_STAY_LISTINGS } from "data/listings";
// import StartRating from "components/StartRating/StartRating";
// import BtnLikeIcon from "components/BtnLikeIcon/BtnLikeIcon";
// import SaleOffBadge from "components/SaleOffBadge/SaleOffBadge";
// import Badge from "shared/Badge/Badge";
// import { StayDataType } from "data/types";
import Link from 'next/link';
import config from 'config'


export interface PropertyCardProps {
    className?: string;
    data?: any;
}

const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const PropertyCard: FC<PropertyCardProps> = ({
    className = "",
    data = DEMO_DATA,
}) => {
    let {
        galleryImages,
        title,
        href,
        like,
        saleOff,
        isAds,
        isForSale,
        isForRent,
        priceForSale,
        priceForRent,
        reviewStart,
        reviewCount,
    } = data.attributes;
    let {id} = data;
    if (galleryImages?.data?.length) {
        galleryImages = galleryImages?.data?.map((one:any)=>config.backend.url+one.attributes.url);
    }
    const renderSliderGallery = () => {
        return (
            <div className="flex-shrink-0 p-3 w-full sm:w-64 ">
                <GallerySlider
                    ratioClass="aspect-w-1 aspect-h-1"
                    galleryImgs={galleryImages}
                    className="w-full h-full rounded-2xl overflow-hidden"
                    uniqueID={`PropertyCard_${id}`}
                />

                {/* {saleOff && (
          <SaleOffBadge className="absolute left-5 top-5 !bg-orange-500" />
        )} */}
            </div>
        );
    };

    const renderTienIch = () => {
        return (
            <div className="inline-grid grid-cols-3 gap-2">
                <div className="flex items-center space-x-2">
                    <span className="hidden sm:inline-block">
                        <i className="las la-bed text-lg"></i>
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                     {data.attributes.bedrooms} beds 
                    </span>
                </div>

                {/* ---- */}
                <div className="flex items-center space-x-2">
                    <span className="hidden sm:inline-block">
                        <i className="las la-bath text-lg"></i>
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {data.attributes.bathrooms} baths
                    </span>
                </div>

                {/* ---- */}
                <div className="flex items-center space-x-2">
                    <span className="hidden sm:inline-block">
                        <i className="las la-expand-arrows-alt text-lg"></i>
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {data.attributes.space} m2
                    </span>
                </div>
            </div>
        );
    };

    const renderContent = () => {
        return (
            <div className="flex-grow p-3 sm:pr-6 flex flex-col items-start">
                <div className="space-y-4 w-full">
                    <div className="inline-flex space-x-3">
                        {/* <Badge
              name={
                <div className="flex items-center">
                  <i className="text-sm las la-share-alt"></i>
                  <span className="ml-1">4 Network</span>
                </div>
              }
            />
            <Badge
              name={
                <div className="flex items-center">
                  <i className="text-sm las la-user-friends"></i>
                  <span className="ml-1">Family</span>
                </div>
              }
              color="yellow"
            /> */}
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* {isAds && <Badge name="ADS" color="green" />} */}
                        <h2 className="text-lg font-medium capitalize">
                            <span className="line-clamp-2">{title}</span>
                        </h2>
                    </div>
                    {renderTienIch()}
                    <div className="w-14 border-b border-neutral-100 dark:border-neutral-800 "></div>
                    <div className="flex w-full justify-between items-end">
                        {/* <StartRating reviewCount={reviewCount} point={reviewStart} /> */}
                        <span className="flex items-center justify-center px-3 py-2 border border-secondary-500 rounded leading-none text-base font-medium text-secondary-500">
                            {`${isForSale? priceForSale : priceForRent },000`} DHS
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div
            className={`nc-PropertyCard group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-xl transition-shadow ${className}`}
            data-nc-id="PropertyCard"
        >
            <Link
                href={`/property/${id}`}
            >
                <a className="h-full w-full flex flex-col sm:flex-row sm:items-center">
                    {renderSliderGallery()}
                    {renderContent()}
                </a>

            </Link>
            {/* <BtnLikeIcon
        colorClass={` bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-6000 dark:text-neutral-400`}
        isLiked={like}
        className="absolute right-5 top-5 sm:right-3 sm:top-3 "
      /> */}
        </div>
    );
};

export default PropertyCard;
