import { LinkItem } from "./LinkItem";
import { HiOutlineChat, HiOutlineUsers, HiOutlineViewGrid } from "react-icons/hi";

const SidebarNavigation = () => {
    return (
        <nav
            aria-label="side navigation"
            className="flex-1  divide-y divide-slate-100 overflow-auto"
        >
            <div>
                <ul className=" flex flex-col py-5">
                    <LinkItem link="/registros" text="Resgistros">
                        <HiOutlineViewGrid />
                    </LinkItem>
                    <LinkItem link="/form" text="Formulario">
                        <HiOutlineChat />
                    </LinkItem>
                </ul>
            </div>
        </nav >
    );
};

export { SidebarNavigation }