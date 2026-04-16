import React from 'react'
import Icons from './Icone'
import Image from 'next/image'
import Button from './Button'

const Navbar = () => {
    return (
        <div>
            <div className='fixed w-full'>
                <div className='bg-[#3C7E35]'>
                    <div className='bg-[#3C7E35] justify-between max-w-285 mx-auto w-full py-2 px-4  flex flex-row'>
                        <div>
                            <p className='text-white pl-70'>Empowering Wellness & Sustainability Through Indigenous Partnerships</p>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <div className='h-6 w-6 bg-white flex items-center justify-center rounded-full'>
                                <Icons icon={"facebook"} />
                            </div>
                            <div className='h-6 w-6 bg-white flex items-center justify-center rounded-full'>
                                <Icons icon={"insta"} />
                            </div>
                            <div className='h-6 w-6 bg-white flex items-center justify-center rounded-full'>
                                <Icons icon={"twiter"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className='p-2.5 flex flex-row items-center justify-between max-w-285 mx-auto'>
                        <Image src={"/images/logo.png"} alt='logo' width={101} height={61} />
                        <div className='flex flex-row gap-8'>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Projects</a>
                            <a href="">News and Press Release</a>
                            <a href="">Partners</a>
                        </div>
                        <Button
                            text={"Contact"}
                            className={'w-[130.1px] h-[52.1px] hover:border hover:border-[#3C7E35] hover:text-[#3C7E35] bg-[#3C7E35] rounded-[55px] text-white hover:bg-white'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
