import React from 'react'
import Logo from './Logo';
import logo from "../../public/logo-green.png";
import Greeting from './Greeting';
const DashboardHeader = (
    {
        sidebarOpen,
        setSidebarOpen,
    }: {
        sidebarOpen: boolean;
        setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
) => {


    return (
        <header className="sticky top-0 z-[99] flex w-full bg-white overflow-hidden drop-shadow-1">
            <div className="flex flex-grow items-center justify-between py-4 px-8 shadow md:px-2 2xl:px-11">
                <div className="flex items-center gap-3 sm:gap-4 lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className="z-[9999] block rounded-sm border border-color1 bg-transparent p-1.5 shadow-sm lg:hidden"
                    >
                        <span className="relative block h-5 w-5 cursor-pointer">
                            <span className="block absolute right-0 h-full w-full">
                                <span
                                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-color1 delay-[0] duration-200 ease-in-out ${!sidebarOpen && "!w-full delay-300"
                                        }`}
                                ></span>
                                <span
                                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-color1 delay-150 duration-200 ease-in-out ${!sidebarOpen && "delay-400 !w-full"
                                        }`}
                                ></span>
                                <span
                                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-color1 delay-200 duration-200 ease-in-out ${!sidebarOpen && "!w-full delay-500"
                                        }`}
                                ></span>
                            </span>
                            <span className="absolute right-0 h-full w-full rotate-45">
                                <span
                                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-color1 delay-300 duration-200 ease-in-out ${!sidebarOpen && "!h-0 !delay-[0]"
                                        }`}
                                ></span>
                                <span
                                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-color1 duration-200 ease-in-out ${!sidebarOpen && "!h-0 !delay-200"
                                        }`}
                                ></span>
                            </span>
                        </span>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}

                    <Logo href='/user' classname="flex flex-shrink-0 lg:hidden items-center gap-1" image={logo} />

                </div>

                <div className="hidden sm:block">
                    <Greeting />
                </div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    {/* <!-- User Area --> */}
                    <button
                        type="button"
                        className={`transition-all duration-200 bg-darkgreen text-lightgreen px-4 py-2.5 rounded-[7px] text-sm flex items-center gap-1`}
                    >
                        Connect Wallet
                    </button>

                    {/* <!-- User Area --> */}
                </div>
            </div>
        </header>
    );

}

export default DashboardHeader