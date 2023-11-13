import { LinkItem } from "./LinkItem";
import { HiOutlineChat, HiHeart, HiOutlineViewGrid } from "react-icons/hi";
import { useSession } from "next-auth/react";

const SidebarNavigation = () => {
    const { data } = useSession();


    return (
        <nav
            aria-label="side navigation"
            className="flex-1  divide-y divide-slate-100 overflow-auto"
        >
            <div>
                <ul className=" flex flex-col py-5">
                    {data?.user.role?.name === "ADMIN" && (
                    <>
                        <LinkItem link="/registros" text="Resgistros">
                            <HiOutlineViewGrid />
                        </LinkItem>
                    </>
                )}
                    <LinkItem link="/form" text="Formulario">
                        <HiOutlineChat />
                    </LinkItem>
                    <LinkItem link="/mypets" text="Mis mascotas">
                        <HiHeart />
                    </LinkItem>

                </ul>
            </div>
        </nav >
    );
};

export { SidebarNavigation }