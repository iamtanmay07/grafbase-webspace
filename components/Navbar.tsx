import Link from "next/link"
import Image from "next/image"
import { NavLinks } from "@/constant" // making constant is good habit for larger projects !
import AuthProvider from "./AuthProvider"
const Navbar = () => {
    const session = {};
    return (
        <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href="/">
                <Image
                    src="/logo.png"
                    width={144}
                    height={43}
                    alt="webSpace"
                />
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
                {NavLinks.map((link) => (
                    <Link 
                        href={link.href}
                        key={link.key} 
                    >
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>
        
        <div className="flexCenter gap-4">
                { session ? (
                    <>
                     User Photo 
                     <Link href="/create-project">
                        Share Work !
                     </Link>
                    </>
                ) : (
                    <AuthProvider />
                )

                }
        </div>


        </nav>
    )
}

export default Navbar
