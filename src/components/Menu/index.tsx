
import styles from './styles.module.css'

import { HomeIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react'


export function Menu() {
    
    return <nav className={styles.menu}>
        <a className={styles.menuLink}>
            <HomeIcon />
        </a>
        <a className={styles.menuLink}>
            <HistoryIcon />
        </a>
        <a className={styles.menuLink}>
            <SettingsIcon />
        </a>
        <a className={styles.menuLink}>
            <SunIcon />
        </a>
    </nav>
}