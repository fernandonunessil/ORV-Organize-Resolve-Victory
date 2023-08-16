import React from "react";

interface Params {
  label: string;
  placeHolder: string;
  type: string;
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({
  label,
  placeHolder,
  type,
  action,
}: Params) {
  return (
    <div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-1 ml-2"
          htmlFor="username"
        >
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type={type}
          placeholder={placeHolder}
          onChange={action}
        />
      </div>
    </div>
  );
}
