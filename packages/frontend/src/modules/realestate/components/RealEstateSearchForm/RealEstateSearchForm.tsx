import React, { useEffect, useState } from "react";
import LocationInput from "@/modules/realestate/components/LocationInput";
import ButtonSubmit from "@/modules/realestate/components/ButtonSubmit";
import { FC } from "react";
import PropertyTypeSelect from "@/modules/realestate/components/PropertyTypeSelect";
import PriceRangeInput from "@/modules/realestate/components/PriceRangeInput";
import { useForm, useFieldArray } from "react-hook-form";
import client from 'utils/axios'

export interface RealEstateSearchFormProps {
  haveDefaultValue?: boolean;
  locationInputValue: string;
  setLocationInputValue:any;
  rangePrices:any;
  setRangePrices:any;
  onSubmit:any;
}

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Tokyo, Jappan";
async function fetchProperties(page: number) {
  const { data } = await client.get(`properties?pagination[page]=${page}&pagination[pageSize]=5&populate=galleryImages`);
  return data
}

const RealEstateSearchForm: FC<RealEstateSearchFormProps> = ({
  haveDefaultValue = false,
  locationInputValue,
  setLocationInputValue,
  rangePrices,
  setRangePrices,
  onSubmit,
}) => {
  
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "test", // unique name for your Field Array
  });
  //
  useEffect(() => {
    if (haveDefaultValue) {
      setLocationInputValue(defaultLocationValue);
    }
  }, []);
  //


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full relative xl:mt-8 flex flex-col lg:flex-row lg:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700 lg:divide-y-0">
      <LocationInput
        defaultValue={locationInputValue}
        onInputDone={(e) => setLocationInputValue(e)}
      />

      <PropertyTypeSelect register={register} />
      <PriceRangeInput rangePrices={rangePrices} setRangePrices={setRangePrices} />
      {/* BUTTON SUBMIT OF FORM */}
      <div className="px-4 py-4 lg:py-0">
        <ButtonSubmit />
      </div>
    </form>
  );
};

export default RealEstateSearchForm;
