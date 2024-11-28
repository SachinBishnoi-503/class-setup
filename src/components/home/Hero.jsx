import React from 'react'
import { CARD_SIX } from '../../common/Helper'
import Navbar from '../../common/Navbar'


const Hero = () => {
    return (
        <div>
            <div className='  container'>
                <Navbar/>
                <div className="mt-[135px]">
                    <h2 className='  font-semibold text-[40px] font-lato justify-center  flex animate__animated animate__bounce'>Lorem ipsum</h2>
                </div>
                <div className='flex items-center gap-6 justify-center'>
                    {CARD_SIX.map((obj, index) => (
                        <div className={`${index === 1 ? 'bg-red-500' : 'bg-black'}`}>
                            <div className="p-[20px_30px] bg-[#FFF3ED] max-w-[365px] rounded-[22px] mt-[40px]" key={index}>
                                <h2 className=' font-semibold text-[24px] mb-0 font-lato pt-[32px] leading-6'>{obj.heading}</h2>
                                <p className='max-w-[282px] text-[16px]  font-normal mb-0 font-lato pt-[16px] leading-6'>{obj.para} <a href="" className='text-[16px]  font-normal mb-0 font-lato pt-[16px] leading-6 text-[#FF5501]'></a></p>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </div>
    )
}

export default Hero