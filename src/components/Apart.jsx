import {ApartData } from "@/utils/helper";
import React from "react";
import Icons from "./common/Icone";
import Button from "./common/Button";

const Apart = () => {
  return (
    <div className="w-full bg-[#fffffc]">
      <div className="max-w-285 w-full flex items-center justify-center flex-col mx-auto px-4 sm:px-6 ">
        
        <h7 className="text-[#1E1E24] dm-sns font-normal text-2xl sm:text-3xl md:text-5xl leading-[120%] text-center">
          What <span className="text-[#3C7E35]"> Sets Us </span> Apart
        </h7>

        <p className="text-[#5F5F5F] pop text-sm sm:text-base font-normal leading-[160%] mt-4 text-center max-w-xl">
          Why Captiva Verde is the Indigenous Development Partner of Choice
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {ApartData.map((item, i) => (
            <div
              key={i}
              className="rounded-xl w-full max-w-[267.1px] mx-auto p-3 sm:p-6 border border-[#0000001F] group hover:shadow-[0px_0px_21.9px_0px_rgba(0,0,0,0.08)] duration-300 ease-in cursor-pointer"
            >
              <div className="flex max-w-54.75 w-full flex-col gap-4 items-center text-center mx-auto">
                <span className="h-14 w-14 sm:h-17.5 sm:w-17.5 rounded-full bg-[#3C7E35]/10 flex justify-center items-center group-hover:bg-[#3C7E35] duration-300 ease-in">
                  <Icons
                    className={"duration-300 ease-in"}
                    icon={item.icon}
                    pathClass={`group-hover:fill-white fill-[#3C7E35] duration-300 ease-in`}
                  />
                </span>

                <p className="pop font-medium leading-[130%] tracking-normal text-sm sm:text-xl text-secondary">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-10 sm:mt-12.5">
          <Button
            className={"bg-[#3C7E35] border pop border-transparent text-[#FFFFFC] rounded-[55px] h-[52.1px] w-[186.1px] hover:border hover:bg-white hover:text-[#3C7E35] hover:border-[#3C7E35] "}
            text={"Contact Us"}
          />
          <Button
            className={"text-[#3C7E35] border pop border-[#3C7E35] rounded-[55px] hover:bg-[#3C7E35] hover:text-white h-[52.1px] w-[186.1px]"}
            text={"Meet the Team"}
          />
        </div>

      </div>
    </div>
  );
};

export default Apart;