import React from 'react'
import Navbar from './common/Navbar'

const Hero = () => {
    return (
        <div>
            <div className=" bg-[url('/images/heri-bg.jpg')] bg-cover bg-center bg-no-repeat mt-15 h-150 ">
                <div className='bg-[#31303099] px-4 h-full w-full flex flex-row justify-center text-center items-center'>
                    <div>
                        <h1 className='text-white dm-sns sm:text-[64px] font-normal leading-[120%] text-5xl'>About Captiva Verde</h1>
                        <p className='text-white max-w-[750.1px] text-base font-normal leading-[160%]'>Captiva Verde is a publicly traded company (Canadian Security Exchange - Symbol PWR, OTC: CPIVF) working hand-in-hand with Indigenous communities to lead sovereign, sustainable development across North America. Through our partnership with the Matnaggewinu Development Corporation (MDC), we’re reshaping how housing, water, defense, and wellness solutions are created and delivered—by communities, for communities.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
