import { ReactNode } from "react"
import Link from "next/link";

interface Nav {
    children: React.ReactNode,
}
const NavBar = ({ children }: Nav) => {
    return (
        <main>
            <div>
                <nav >
                    <ul className="flex flex-row space-x-5 pl-5 py-2">
                    <li>
                            <Link rel="stylesheet" href="/" >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link rel="stylesheet" href="/form" >
                                Formulario
                            </Link>
                        </li>
                        <li>
                            <Link rel="stylesheet" href="/datos" >
                                Ver datos
                            </Link>
                        </li>
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