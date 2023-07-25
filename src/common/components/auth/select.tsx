import React from "react";

export const Select = ({
  id,
  options,
  className,
  onChange,
  name,
  register,
}: any) => {
  return (
    <select
      id={id}
      className={className}
      onChange={onChange}
      {...register(name)}
    >
      <option selected value=''>Choose an option</option>
      {options?.length > 0 &&
        options.map((option: any, index: number) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
    </select>
  );
};

export const InputWithIcon = ({
    id,
    type,
    inputClassname,
    buttonClassname,
    icon,
    placeholder,
    name,
    onChange,
    register,
}) => {
    return (
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Search Mockups, Logos, Design Templates..."/>
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                 <svg className="h-6 text-gray-700" fill="none"  xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                      </path>
                    </svg>
            </button>
        </div>
    )
}
