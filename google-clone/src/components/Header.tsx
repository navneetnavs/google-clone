import Link from "next/link";
import Image from "next/image";
import { TbGridDots } from 'react-icons/tb';

const Header: React.FC = () => {
    const url: string = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";
    return (
        <div className="flex justify-end tex-sm pr-4 pt-3 space-x-4 items-center">
            <Link href='https://mail.google.com' className="hover:underline text-sm">Gmail</Link>
            <Link href='https://image.google.com' className="hover:underline text-sm">Images</Link>
            <TbGridDots className="text-4xl hover:bg-gray-200 p-2 rounded-full" />
            <Image 
                src={url} 
                alt="dp" 
                className="rounded-full object-cover"
                width={30}
                height={100}
                style={{ height: 30 }}
            />
        </div>
    )
}

export default Header;