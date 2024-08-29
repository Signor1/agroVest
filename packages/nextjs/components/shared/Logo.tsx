import Image from 'next/image'
import Link from 'next/link'
import logo from "../../public/logo-white.png"

const Logo = ({ classname }: { classname: string }) => {
    return (
        <Link href='/' className={classname}>
            <Image src={logo} alt="Logo" className='w-full' width={1200} height={317} priority quality={100} />
        </Link>
    )
}

export default Logo