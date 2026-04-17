import React from 'react'
import { Empowereddata } from '@/utils/helper'
import Icons from './common/Icone'

const Empowered = () => {
    return (
        <div className="my-[140.1px] px-4">
            <div className="max-w-285 mx-auto mb-10">
                <div className='text-[#3C7E35] mt-12.5 font-medium leading-[160%] flex flex-wrap items-center gap-3'>
                    <Icons icon={"line"} />
                    <p className='pop'>Our Mission & Vision</p>
                    <Icons icon={"line"} />
                </div>
                <h2 className='text-2xl sm:text-4xl md:text-5xl dm-sns font-normal leading-[120%] break-words'>
                    Empowered<span className='text-[#3C7E35] dm-sns'> by Culture Driven by </span>Purpose
                </h2>
            </div>

            <div className="max-w-285 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {Empowereddata.map((item, index) => (
                        <div key={index} className="w-full h-auto rounded-xl p-6 border border-[#1E1E241F]">
                            <img
                                src={item.image}
                                className="w-full max-h-[236.1px] object-cover rounded-lg"
                            />
                            <h2 className="text-[#3C7E35] pop text-2xl font-bold mt-6">
                                {item.heading}
                            </h2>
                            <p className="text-[#1E1E24] pop mt-4">
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