import React, { FC } from "react";

export interface CheckboxProps {
  label?: string;
  subLabel?: string;
  className?: string;
  name: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  register:any
}

const Checkbox: FC<CheckboxProps> = ({
  subLabel = "",
  label = "",
  name,
  className = "",
  defaultChecked,
  onChange,
  register
}) => {
  return (
    <div className={`flex rtl:text-align text-sm sm:text-base ${className}`}>
      <input
        id={name}
        name={name}
        type="checkbox"
        className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-primary-500 focus:ring-primary-500"
        defaultChecked={defaultChecked}
        // onChange={(e) => onChange && onChange(e.target.checked)}
        {...register(`test.${name}.value`)} 
      />
      {label && (
        <label
          htmlFor={name}
          className="rtl:pr-5 ml-3.5 flex flex-col flex-1 justify-center"
        >
          <span className="rtl:text-align text-neutral-900 dark:text-neutral-100">
            {label}
          </span>
          {subLabel && (
            <p className=" rtl:text-alignmt-1 text-neutral-500 dark:text-neutral-400 text-sm font-light">
              {subLabel}
            </p>
          )}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
