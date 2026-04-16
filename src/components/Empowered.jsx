import React from 'react'
import { Empowereddata } from '@/utils/helper'
import Icons from './common/Icone'

const Empowered = () => {
    return (
        <div className="my-[140.1px]">
            <div className="max-w-285 mx-auto mb-10">
                <div className='flex flex-row items-center gap-3 '>
                    <Icons icon={"line"} />
                    <p className='text-[#3C7E35] leading-[160%] font-medium mb-3'>Our Mission & Vision</p>
                    <Icons icon={"line"} />
                </div>
                <div>
                    <h2 className='text-5xl dm-sns font-normal leading-[120%]'>Empowered<span className='text-[#3C7E35] dm-sns'> by Culture Driven by </span>Purpose</h2>
                </div>
            </div>
            <div className="max-w-285 mx-auto max-[1200px]:px-4">
                <div className="grid md:grid-cols-2 gap-6">
                    {Empowereddata.map((item, index) => (
                        <div
                            key={index}
                            className=" max-w-[558.1px] h-auto rounded-xl p-6 border-[#1E1E241F] border"
                        >
                            <img
                                src={item.image}
                                className=" max-w-[510.1px] w-full max-h-[236.1px] h-full object-cover rounded-lg"
                            />

                            <h2 className="text-[#3C7E35] text-2xl font-bold mt-6">
                                {item.heading}
                            </h2>

                            <p className="text-[#1E1E24] mt-4">
                                {item.para}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Empowered