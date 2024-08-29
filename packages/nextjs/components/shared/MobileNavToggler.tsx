import { Sheet, SheetClose, SheetContent, SheetTrigger } from "~~/~/components/ui/sheet"
import Logo from "./Logo"
import { navLinks } from "./Header"
import { Link } from "lucide-react"
import { cn } from "~~/~/lib/utils"


const MobileNavToggler = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="bg-white text-darkgreen rounded-[10px] p-1.5" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            </SheetTrigger>
            <SheetContent >
                <main className="w-full flex flex-col gap-16">
                    <div className="w-full flex justify-between items-center">
                        <Logo classname="w-[150px]" />
                    </div>
                    <ul className="flex flex-col gap-6 pl-2">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <SheetClose asChild>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-base font-medium text-white transition"
                                        )}>
                                        {link.name}
                                    </Link>
                                </SheetClose>
                            </li>
                        ))}
                    </ul>
                </main>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavToggler