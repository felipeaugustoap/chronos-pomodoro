import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"
import styles from "./styles.module.css"
//import type { HomeProps } from "../../pages/Home"



export function MainForm () {
    
    return <form className={styles.form} action="">
                    <div className={styles.formRow}>
                        <DefaultInput
                            labelText="task"
                            type="text"
                            id='meuInput'
                            placeholder='Digite algo'
                        />
                    </div>

                    <div className={styles.formRow}>
                        <p>O próximo estado é de 25min</p>
                    </div>

                    <div className={styles.formRow}>
                        <Cycles/>
                    </div>

                    <div className={styles.formRow}>
                        <DefaultButton icon={<PlayCircleIcon />} color='green' />
                    </div>
                </form>
}