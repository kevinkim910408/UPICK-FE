import React from "react";
import Image from "next/image";
import Search from "../assets/images/icons/Search.svg";

export const SearchInput = ({ top, width }: { top: string; width: number }) => {
  return (
    <>
      <div className=" h-[48px] bg-searchInput rounded-[24px] backdrop-blur flex items-center pl-2 mx-auto">
        <Image src={Search} alt="" className="ml-5" />
      </div>
      <input
        type="text"
        className="bg-coolgray1 bg-opacity-0 z-40 border-[1px] border-[#E4E5E6] h-[48px] rounded-[24px] pl-12 focus:outline-none text-white text-[18px] font-sdg-m"
      />
      <style jsx>
        {`
          div {
            position: absolute;
            top: ${top};
            width: ${width}%;
          }
          input {
            position: absolute;
            top: ${top};
            width: ${width}%;
          }
        `}
      </style>
    </>
  );
};
