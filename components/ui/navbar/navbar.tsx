import { ReactNode } from "react"
import Link from "next/link";
import { LinkItem } from "./LinkItem";
import { HiHeart, HiOutlineChat } from "react-icons/hi";

interface Nav {
    children: React.ReactNode,
}
const NavBar = ({ children }: Nav) => {
    return (
        <main>
            <div>
                <nav className="bg-white">
                    <ul className="flex flex-row space-x-5 pl-5 py-2">
                    
                    <LinkItem link="/form" text="Formulario">
                        <HiOutlineChat />
                    </LinkItem>
                    <LinkItem link="/mypets" text="Mis mascotas">
                        <HiHeart />
                    </LinkItem>
                       
                        
                    </ul>
                </nav>
            </div>
            <div>
                {children}
            </div>
        </main>

    );
};

export { NavBar }