import React from 'react'
import Image from 'next/image'
import Icons from './common/Icone'
import Button from './common/Button'


const Leadership = () => {
  return (
    <div className="w-full relative overflow-hidden bg-[#3C7E35] py-10 sm:py-14 md:py-17.5">
      <div className="absolute right-0">
        <Icons icon={"bgicon"}/>
      </div>
      <div className="absolute top-80">
        <Icons icon={"bgicon2"}/>
      </div>
      <div className="max-w-285 mx-auto w-full px-2 sm:px-3">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-8">
          
          <div className="w-full md:max-w-[50%]">
           <div className='gap-3 flex flex-row items-center'>
            <Icons icon={"whiteline"}/>
            <p className='text-white '>Public Company Status</p>
            <Icons icon={"whiteline"}/>
           </div>
            <h5 className="dm-text mt-3 font-normal text-2xl sm:text-3xl md:text-5xl leading-[120%] text-[#FFFFFC]">
              Culture-Led Leadership
            </h5>

            <Button
              text={"View Investor Information"}
              className={
                "text-[#3C7E35] border border-transparent rounded-[55px] h-[52.1px] w-[274.1px] mt-5 sm:mt-6 bg-[#FFFFFC] hover:text-[#FFFFFC] hover:bg-[#3C7E35] hover:border-[#fffffc]"
              }
            />
          </div>

          <div className="w-full md:max-w-[45%]">
            <p className="poppins max-w-full md:max-w-121.25 font-normal text-sm sm:text-base leading-[160%] text-[#FFFFFC]">
              Captiva Verde operates with full transparency as a publicly traded
              company on the Canadian Securities Exchange and U.S. OTC Markets.
              Our commitment to Indigenous nations is matched by a duty to our
              investors and partners to build sustainable, high-impact projects
              that generate measurable returns.
            </p>
          </div>

        </div>

        <div className="mt-10 sm:mt-12 md:mt-15">
          <Image
            src={"/images/graph.png"}
            alt="img"
            className="w-full h-auto rounded-xl"
            height={"268"}
            width={"1139"}
          />
        </div>
      </div>
    </div>
  )
}

export default Leadership
