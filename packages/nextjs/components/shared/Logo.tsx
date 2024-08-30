import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'


const Logo = ({ classname, image }: { classname: string, image: StaticImageData }) => {
    return (
        <Link href='/' className={classname}>
            <Image src={image} alt="Logo" className='w-full' width={1200} height={317} priority quality={100} />
        </Link>
    )
}

export default Logo