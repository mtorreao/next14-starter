'use client'
import Link from "next/link"
import styles from './navlink.module.css'
import { usePathname } from "next/navigation"

const NavLink = ({ to, children, ...rest }) => {
    const pathName = usePathname()
    return (
        <Link href={to} className={`${pathName === to ? styles.linkActive : styles.link}`} {...rest}>{children}</Link>
    )
}

export default NavLink