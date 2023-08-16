import React from "react";

interface Params {
  title: string;
  action: () => void;
}

export default function Button({ title, action }: Params) {
  return (
    <div>
      <button
        className="w-full bg-ligth-yellow hover:bg-dark-yellow text-zinc-600 font-bold text-lg py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-150"
        type="button"
        onClick={action}
      >
        {title}
      </button>
    </div>
  );
}
