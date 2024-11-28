import React from 'react'
import Navbar from '../../common/Navbar'
import { SIX } from '../../common/Helper'



const Seacond = () => {
    return (
        <>
            <Navbar />
            <div className='  container'>
                <div className="mt-[135px]">
                    <h2 className='  font-semibold text-[40px] font-lato justify-center  flex'>Lorem ipsum</h2>

                </div>
                <div className='flex flex-wrap items-center gap-6 justify-center'>

                    {SIX.map((obj, index) => (
                        <div className="p-[20px_30px] bg-[#CFEEFF] max-w-[365px] rounded-[22px] mt-[40px]" key={index}>
                            <img src={obj.img} alt="no-image" />
                            <h2 className=' font-semibold text-[24px] mb-0 font-lato pt-[32px] leading-6'>{obj.heading}</h2>
                            <p className='max-w-[280px] text-[16px]  font-normal mb-0 font-lato pt-[16px] leading-6'>{obj.para} <a href="" className='text-[16px]  font-normal mb-0 font-lato pt-[16px] leading-6 text-[#007AFF]'>{obj.link}</a></p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Seacond