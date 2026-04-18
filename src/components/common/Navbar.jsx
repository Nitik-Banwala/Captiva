"use client";
import React, { useState, useEffect } from 'react'
import Icons from './Icone'
import Image from 'next/image'
import Button from './Button'

const links = ["Home", "About", "Projects", "News and Press Release", "Partners"];
const socials = ["facebook", "insta", "twiter"];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div className='fixed w-full z-60'>
            <div className='bg-[#3C7E35]'>
                <div className='bg-[#3C7E35] justify-between max-w-285 mx-auto w-full py-2 px-4 flex flex-row'>
                    <p className='text-white hidden md:block min-[1130px]:pl-85 text-xs '>Empowering Wellness & Sustainability Through Indigenous Partnerships</p>
                    <div className='flex flex-row gap-3 ml-auto'>
                        {socials.map(s => (
                            <div key={s} className='h-6 w-6 bg-white flex items-center justify-center rounded-full'>
                                <Icons icon={s} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='p-2.5 flex flex-row items-center justify-between max-w-285 mx-auto'>
                    <Image src="/images/logo.png" alt='logo' width={101} height={61} />
                    <div className='hidden lg:flex flex-row gap-8'>
                        {links.map(link => (
                            <a key={link} href="#" className="text-sm font-medium hover:text-[#3C7E35] transition-colors">{link}</a>
                        ))}
                    </div>
                    <Button text="Contact" className='hidden lg:block w-[130.1px] h-[52.1px] hover:border hover:border-[#3C7E35] hover:text-[#3C7E35] bg-[#3C7E35] rounded-[55px] text-white hover:bg-white' />
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none">
                        <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>
            <div
                onClick={() => setIsOpen(false)}
                className={`lg:hidden fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />
            <div className={`lg:hidden fixed top-0 right-0 h-full w-[280.1px] bg-white z-50 shadow-2xl flex flex-col px-6 py-8 gap-6 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={() => setIsOpen(false)} className="self-end w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none">
                    <span className="block w-6 h-0.5 bg-gray-800 rotate-45 translate-y-[4.1px]" />
                    <span className="block w-6 h-0.5 bg-gray-800 -rotate-45 -translate-y-[4.1px]" />
                </button>
                <div className="flex flex-col gap-5">
                    {links.map(link => (
                        <a key={link} href="#" className="text-sm font-medium hover:text-[#3C7E35] transition-colors"
                        onClick={() => setIsOpen(false)} 
                        >{link}</a>
                    ))}
                </div>
                <div className="mt-auto">
                    <Button text="Contact" onClick={() => setIsOpen(false)}  className='w-full h-[52.1px] hover:border hover:border-[#3C7E35] hover:text-[#3C7E35] bg-[#3C7E35] rounded-[55px] text-white hover:bg-white' />
                </div>
            </div>
        </div>
    )
}

export default Navbar