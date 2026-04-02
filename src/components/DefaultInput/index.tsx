import styles from './styles.module.css'

type DefaultInputProps = {
    id: string;
    labelText: string;
 } & React.ComponentProps<"input">

export function DefaultInput({ type, id, labelText, ...rest }: DefaultInputProps) {
    return (
        <>
            {labelText && <label htmlFor={ id }>{ labelText }</label>}
            <input className={styles.input} id={ id } type={type} {...rest} /> 
        </>
    )
}
 
{ /* ...rest = serve para passar props adicionais para o elemento <input> que não são definidas explicitamente  e façam parte do React.ComponentProps<"input"> definido no type do componente */}