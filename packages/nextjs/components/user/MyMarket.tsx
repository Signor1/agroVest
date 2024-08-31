'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Products from './Products'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~~/~/components/ui/dialog'

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


                <Dialog>
                    <DialogTrigger asChild>
                        <button className='bg-darkgreen text-lightgreen py-2.5 px-6 rounded-[5px] text-base'>Add product</button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you&apos;re done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label htmlFor="name" className="text-right">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    defaultValue="Pedro Duarte"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label htmlFor="username" className="text-right">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    defaultValue="@peduarte"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <button type="submit">Submit</button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <Products title='My Products' />
        </section>
    )
}

export default MyMarket