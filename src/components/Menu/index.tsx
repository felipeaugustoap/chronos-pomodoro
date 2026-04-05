
import { useState, useEffect } from 'react'
import styles from './styles.module.css'

import { HomeIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react'

type AvailableThemes = 'light' | 'dark' ;

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem("theme") as AvailableThemes || "dark"

        return storageTheme
    });

    const nexThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon/>
    }

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nexTheme = prevTheme === "dark" ? "light" : "dark";
            
            return nexTheme;
            });
    }
    
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme]) //Executa apenas quando o valor de Theme muda

    return <nav className={styles.menu}>
        
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
            {nexThemeIcon[theme]}
        </a>
    </nav>
}