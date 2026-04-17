import React from 'react'
import Icons from './common/Icone'
import { paradata } from '@/utils/helper'
import Image from 'next/image'

const Board = () => {
    return (
        <div className='px-4'>
            <div className='max-w-285 mx-auto w-full flex flex-col lg:flex-row gap-11 py-35'>

                <div className='max-w-[546.1px]'>
                    <div className='text-[#3C7E35] font-medium leading-[160%] flex flex-row items-center gap-3'>
                        <Icons icon={"line"} />
                        <p className='pop'>Advisory Board Highlights</p>
                        <Icons icon={"line"} />
                    </div>
                    <h2 className='leading-[120%] mt-3 text-3xl md:text-4xl lg:text-5xl font-normal text-black dm-sns'>Leading with Experience, Culture & Vision</h2>
                    <p className='max-w-[481.1px] text-[#5F5F5F] pop font-normal text-base mt-4 leading-[160%]'>Captiva and MDC are guided by Indigenous elders, economic leaders, and global innovators in defense, infrastructure, and community development.</p>
                    <div className='mt-3'>
                        {paradata.map((item, index) => (
                            <div key={index} className='flex flex-row gap-3 mt-4'>
                                <div>
                                    <Icons icon={"tick"} />
                                </div>
                                <div className='flex flex-row gap-1 flex-wrap'>
                                    <p className='text-[#1E1E24] leading-[160%] font-medium pop'>{item.heading}</p>
                                    <p className='text-[#5F5F5F] leading-[160%] font-normal pop'>{item.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mx-auto lg:mx-0'>
                    <Image src="/images/Board.png" alt='image' width={550} height={581} />
                </div>

            </div>
        </div>
    )
}

export default Board