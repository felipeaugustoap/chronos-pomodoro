import { PlayCircleIcon, StopCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"
import styles from "./styles.module.css"
import { useRef } from "react"
import type { TaskModel } from "../../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
//import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes"



export function MainForm() {
    const { state, dispatch } = useTaskContext()
    
    //ciclos

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)


    const taskNameInput = useRef<HTMLInputElement>(null)

    function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();
        if (!taskName) {
            alert("Digite o nome da tarefa");
            return;
        };


        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };

        const secondsRemaining = newTask.duration * 60

        // setState(prevState => {
        //     return {
        //         ...prevState,
        //         config: {...prevState.config},
        //         activeTask: newTask,
        //         currentCycle: nextCycle,
        //         secondsRemaining,
        //         formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        //         tasks:[...prevState.tasks, newTask],
        //     }
        // })
    };


    function handleInterruptTask() {
        // setState(prevState => {
        //     return {
        //         ...prevState,
        //         activeTask: null,
        //         secondsRemaining: 0,
        //         formattedSecondsRemaining: "00:00",
        //         tasks: prevState.tasks.map(task => {
        //             if (prevState.activeTask && prevState.activeTask.id === task.id) {
        //                 return {
        //                     ...task, interruptDate: Date.now()
        //                 }
        //             }
        //             return task
        //         })
        //     }
        // })
    }
    
    return (
        <form onSubmit={handleCreateNewTask} className={styles.form} action="">
            <div className={styles.formRow}>
                <DefaultInput
                    labelText="task"
                    type="text"
                    id='meuInput'
                    placeholder='Digite algo'
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />
            </div>

            <div className={styles.formRow}>
                <p>O próximo estado é de 25min</p>
            </div>

            {state.currentCycle > 0 && (
    
            <div className={styles.formRow}>
                <Cycles/>
            </div>

            )}


            <div className={styles.formRow}>
                {/* {!state.activeTask ? (
                    <DefaultButton
                        aria-label="Iniciar nova tarefa"
                        title="Iniciar nova tarefa"
                        type="submit"
                        icon={<PlayCircleIcon />} color='green'
                        key={"Este é o botao de Submit"}
                    />
                ) : (
                    <DefaultButton
                        onClick={handleInterruptTask}
                        aria-label="Interromper tarefa atual"
                        title="Interromper tarefa atual"
                        type="button"
                        color="red"
                        icon={<StopCircleIcon />}
                        key={"Não enviar o Form"}
                    />
                )} */}
    
                {!state.activeTask && (
                    <DefaultButton
                        aria-label="Iniciar nova tarefa"
                        title="Iniciar nova tarefa"
                        type="submit"
                        icon={<PlayCircleIcon />} color='green'
                        key={"botao_submit"}
                    />
                )} 
                {!!state.activeTask &&(
                    <DefaultButton
                        onClick={handleInterruptTask}
                        aria-label="Interromper tarefa atual"
                        title="Interromper tarefa atual"
                        type="button"
                        color="red"
                        icon={<StopCircleIcon />}
                        key={"botao_button"}
                    />
                )}
            </div>
        </form>
    )
}