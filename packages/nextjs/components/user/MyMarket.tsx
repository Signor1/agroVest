'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Products from './Products'

const MyMarket = () => {
    const path = usePathname()
    return (
        <section className="w-full flex flex-col gap-6 py-4">
            <h1 className='uppercase text-darkgreen font-semibold text-base md:text-xl'>Market Place</h1>

            <div className="w-full flex gap-4">
                <Link href="/user/marketplace" className={`text-base rounded font-medium py-2 px-4  ${path === '/user/marketplace' ? 'bg-darkgreen text-lightgreen' : 'text-darkgreen'}`}>All Products</Link>
                <Link href="/user/marketplace/mine" className={`text-base rounded font-medium py-2 px-4  ${path === '/user/marketplace/mine' ? 'bg-darkgreen text-lightgreen' : 'text-darkgreen'}`}>My Products</Link>
            </div>


            <div className='w-full flex justify-end items-center gap-4'>
                <button className='bg-darkgreen text-lightgreen py-2.5 px-6 rounded-[5px] text-base'>Mint</button>
                <button className='bg-darkgreen text-lightgreen py-2.5 px-6 rounded-[5px] text-base'>Add product</button>
            </div>

            <Products title='My Products' />
        </section>
    )
}

export default MyMarket