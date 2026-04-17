import React from 'react'
import Button from './common/Button'
import Icons from './common/Icone'

const Build = () => {
  return (
    <div className='w-full relative py-12 sm:py-20 md:py-35 px-4 sm:px-6'>
      <div className='absolute left-0 -top-50'><Icons icon={"lastbg"}/></div>
        <div className='max-w-285 overflow-hidden relative py-10 sm:py-12 md:py-15 px-2 flex items-center justify-center flex-col mx-auto w-full rounded-3xl bg-[radial-gradient(76.91%_76.91%_at_50%_37.47%,#6DE460_0%,#3C7E35_100%),linear-gradient(0deg,#3C7E35,#3C7E35)]'>
            <div className='absolute top-0 left-0'>
                <Icons icon={"build"}/>
               </div>
            <h8 className="text-[#FFFFFC] text-2xl sm:text-3xl md:text-[40px] dm-sns leading-[120%] font-normal text-center">
              Let’s Build a Regenerative Future, Together
            </h8>

            <p className='max-w-full sm:max-w-2xl md:max-w-156.25 text-center pop w-full font-normal text-[#FFFFFC] leading-[160%] text-sm sm:text-base mt-4'>
              Whether you’re an investor, Indigenous leader, or global partner, there’s a place for you at Captiva.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-8'>
                <Button 
                  text={"Invest in Captiva"} 
                  className={"bg-[#fffffc] pop rounded-[55px] h-[52.1px] w-[205.1px] hover:bg-transparent hover:text-[#fffffc]  text-[#3C7E35] hover:border hover:border-[#fffffc] "}
                />
                <Button 
                  text={"Partner with MDC"} 
                  className={"border border-[#fffffc] pop text-[#fffffc] hover:text-[#3C7E35] hover:bg-white rounded-[55px] h-[52.1px] w-[205.1px]"}
                />
            </div>
               <div className='absolute top-45 right-0'>
                <Icons icon={"build2"}/>
               </div>
        </div>
    </div>
  )
}

export default Build