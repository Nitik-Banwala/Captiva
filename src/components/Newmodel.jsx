import React from 'react'
import { IndigenousCardsData, IndigenousModelData } from '@/utils/helper'
import Image from 'next/image'
import Icons from './common/Icone'

const Newmodel = () => {
    return (
        <div className='bg-[#3C7E3514] pt-16.5 pb-17.5'>
            <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4'>
                <div>
                    <Image
                        src={IndigenousModelData.image}
                        alt="main"
                        width={500}
                        height={300}
                        className='rounded-xl'
                    />
                </div>
                <div>
                    <p className='text-green-600 mt-10 flex flex-row items-center gap-3'>
                        <Icons icon={"line"}/>
                         {IndigenousModelData.tag}
                        <Icons icon={"line"}/>
                    </p>

                    <h2 className='text-5xl dm-sns font-normal mt-3'>
                        A New <span className='text-[#3C7E35] dm-sns '>Model of Shared</span> Prosperity
                    </h2>

                    <p className='mt-5 text-gray-600'>
                        {IndigenousModelData.description}
                    </p>

                    <button className='mt-8 bg-green-600 text-white px-5 py-2 rounded-full'>
                        {IndigenousModelData.buttonText}
                    </button>
                </div>
            </div>

            <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-4'>
                {IndigenousCardsData.map((item) => {
                    return (
                        <div key={item.id}  className=' h-[329.1px] bg-white rounded-xl p-3 text-center shadow'>
                            
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='rounded-lg max-h-[276.1px] w-full '
                                />
                            <p className='mt-3 font-medium'>
                                {item.title}
                            </p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Newmodel