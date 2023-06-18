

import Link from "next/link"
import styles from '../page.module.css'

const MENU_ITEMS = [
    { title: 'Home', path: '/'},
    { title: 'Email', path: '/igerzon@gmail.com'}
]


export default function header() {
    return (
        <header>
            <nav className={styles.nav}>
    
                    <ul className={styles.ul}>
                         {MENU_ITEMS.map((item) => (
                        <li key={item.path} className={styles.li}>
                            <Link href={item.path}>{item.title}</Link>
                        </li>
                        ))}
                    </ul>
               
            </nav>
        </header>
    )
}