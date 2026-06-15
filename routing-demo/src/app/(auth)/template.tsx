"use client"
import Link from 'next/link'
import {usePathname} from "next/navigation";
import './styles.css'
import {useState} from "react";

const navLinks = [
    {name: 'Forgot Password', href: '/forgot-password'},
    {name: 'Register', href: '/register'},
    {name: 'login', href: '/login'},
]


export default function AuthLayout({children,}: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [input, setInput] = useState("")

    return (
        <div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            {navLinks.map((element) => {
                const isActive = pathname === element.href ||
                    (pathname.startsWith(element.href) && element.href !== '/')
                return (
                    <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                          href={element.href} key={element.name}>{element.name}</Link>
                )
            })}
            {children}
        </div>
    )
}