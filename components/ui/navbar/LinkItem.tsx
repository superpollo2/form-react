import React, { ReactNode } from "react";
import Link from "next/link";

interface LinkItemProps {
    link: string;
    text: string;
    children: ReactNode;
}
const LinkItem = ({ link, text, children }: LinkItemProps) => {
    return (
        <li>
            <Link
                href={link}
                className="flex gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
            >
                <div className="flex text-2xl">
                    {children}
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-center itemsgap-0 overflow-hidden truncate text-sm">
                    {text}
                </div>
            </Link>
        </li>
    );
};


export { LinkItem };