import styles from './ButtonComponent.module.css'

type ButtonComponentProps = {
    children: React.ReactNode;
}

export function ButtonComponent({ children } : ButtonComponentProps) {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    )
}