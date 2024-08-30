import React from 'react'

const OurProcess = () => {
    return (
        <main className="w-full grid md:grid-cols-3 gap-6 bg-darkgreen lg:px-20 md:px-6 px-4 md:my-20 my-12">
            <div className='flex flex-col gap-6'>
                <h1 className="md:text-4xl text-3xl text-lightgreen font-semibold">Our Process</h1>
                <ul className='flex flex-col list-none'>
                    <li className='flex gap-4 items-start'>
                        <article className='w-16 h-16 flex items-center justify-center bg-lightgreen text-darkgreen'>1</article>
                        <p className='text-lg text-gray-200'>Connect wallet: Start by connecting your digital wallet to AgroVest. This step ensures secure transactions and seamless interaction with the platform, allowing you to manage investments and access features easily.</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default OurProcess