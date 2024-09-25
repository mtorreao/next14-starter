'use client'
import styles from './links.module.css'
import NavLink from "../navlink/navlink"
import { useState } from 'react'

const links = [
    {
        text: 'Home',
        to: '/'
    },
    {
        text: 'About',
        to: '/about'
    },
    {
        text: 'Contact',
        to: '/contact'
    },
    {
        text: 'Blog',
        to: '/blog'
    }
]

const Links = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>
            <div className={styles.desktopLinks}>
                {links.map((link, index) => (
                    <NavLink key={index} to={link.to}>{link.text}</NavLink>
                ))}
            </div>
            <div className={styles.mobileLinks}>
                <button className={styles.menuButton} onClick={() => setIsMenuOpen(prev => !prev)}>Menu</button>
                {isMenuOpen && (
                    <div className={styles.menu}>
                        {links.map((link, index) => (
                            <NavLink key={index} to={link.to}>{link.text}</NavLink>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Links