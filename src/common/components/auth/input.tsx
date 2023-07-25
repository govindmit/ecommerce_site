import React from "react";
import { Select } from "./select";
import { ErrorShowing } from "../errorshowingcmp/errorshowingcmp";

const fixedInputClass =
  "bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white";

  const fixedSelectClass =
  "bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  export default function Input({
  handleChange,
  labelText,
  labelFor,
  id,
  name,
  type,
  placeholder,
  customClass,
  options,
  register,
  errors
}: any) {

  return (
    <div className="mt-5">
      <label
        htmlFor={labelFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelText}
      </label>
      {type !== "select" ? (
        <input
          onChange={handleChange}
          id={id}
          type={type}
          className={fixedInputClass + " " + customClass}
          placeholder={placeholder}
          {...register(name)}
        />
      ) : (
        <Select
          onChange={handleChange}
          options={options}
          id={id}
          register={register}
          name={name}
          className={fixedSelectClass + " " + customClass}
        />
      )}
       {errors ? ErrorShowing(errors[name]?.message): ""}
    </div>
  );
}
