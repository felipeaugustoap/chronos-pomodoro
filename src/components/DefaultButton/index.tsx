import styles from './styles.module.css'

type DefaultButtonProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<"button">

export function DefaultButton({
    icon,
    color = 'green',
    ...props
}: DefaultButtonProps) {
    return (
        <>
            <button className={`${styles.button} ${styles[color]}`} {...props}> 
                {icon}
            </button>
        </>
    )
}
 
{ /* ...rest = serve para passar props adicionais para o elemento <button> que não são definidas explicitamente  e façam parte do React.ComponentProps<"button"> definido no type do componente */}