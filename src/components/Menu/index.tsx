
import { useState } from 'react'
import styles from './styles.module.css'

import { HomeIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react'

type AvailableThemes = 'light' | 'dark' ;

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        console.log("Clicado", Date.now())

        setTheme(prevTheme => {
            const nexTheme = prevTheme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", nexTheme)
            return nexTheme;
            
            });
     }

    return <nav className={styles.menu}>
        <h1>{theme}</h1>
        <a className={styles.menuLink} aria-label='Ir para a Home' title='Ir para a Home'>
            <HomeIcon />
        </a>
        <a className={styles.menuLink} aria-label='Ver o Histórico' title='Ver o Histórico'>
            <HistoryIcon />
        </a>
        <a className={styles.menuLink} aria-label='Ver as Configurações' title='Ver as Configurações'>
            <SettingsIcon />
        </a>
        <a
            href='#'
            className={styles.menuLink}
            aria-label='Mudar Tema'
            title='Mudar Tema'
            onClick={handleThemeChange}
        >
            <SunIcon />
        </a>
    </nav>
}