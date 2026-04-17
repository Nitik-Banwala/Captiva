import React from 'react'
import { IndigenousCardsData, IndigenousModelData } from '@/utils/helper'
import Image from 'next/image'
import Icons from './common/Icone'
import Button from './common/Button'

const Newmodel = () => {
    return (
        <div className='bg-[#3C7E3514] pt-16.5 pb-17.5 px-4'>
            <div className='max-w-285 mx-auto flex flex-col lg:flex-row justify-between gap-10'>

                <div className='max-w-[550.1px] w-full mx-auto lg:mx-0'>
                    <Image
                        src={IndigenousModelData.image}
                        alt="main"
                        width={550}
                        height={510}
                        className='rounded-xl w-full h-auto'
                    />
                </div>

                <div className='max-w-[527.1px] w-full mx-auto lg:mx-0'>
                    <p className='text-[#3C7E35] mt-12.5 font-medium leading-[160%] flex flex-row items-center gap-3'>
                        <Icons icon={"line"} />
                        {IndigenousModelData.tag}
                        <Icons icon={"line"} />
                    </p>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl dm-sns leading-[120%] font-normal mt-3'>
                        A New <span className='text-[#3C7E35] dm-sns'>Model of Shared</span> Prosperity
                    </h2>
                    <p className='mt-4 leading-[160%] pop font-normal text-[#5F5F5F] text-base max-w-[527.1px]'>
                        {IndigenousModelData.description}
                    </p>
                    <Button
                        text={"Know More"}
                        className='bg-[#3C7E35] text-white hover:bg-white hover:border hover:border-[#3C7E35] hover:text-[#3C7E35] w-[154.1px] h-[52.1px] rounded-[55px] font-semibold mt-8'
                    />
                </div>
            </div>

            <div className='max-w-285 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16'>
                {IndigenousCardsData.map((item) => (
                    <div key={item.id} className='h-[329.1px] cursor-pointer hover:shadow-xl duration-300 bg-white rounded-xl text-center shadow'>
                        <img
                            src={item.image}
                            alt={item.title}
                            className='rounded-t-lg max-h-[276.1px] w-full object-cover'
                        />
                        <p className='mt-3 text-[#3C7E35] font-medium'>{item.title}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Newmodel