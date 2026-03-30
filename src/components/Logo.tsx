import { TimerIcon } from 'lucide-react'
import styles from './Logo.module.css'


export function Logo() {
    return (
        <div className={styles.logoContainer}>
            <TimerIcon className={styles.logo} />
            <h1 className={styles.textLogo}>Chronos</h1>
        </div>
    ) 
    
 }