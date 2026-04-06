import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formatedSecondsRemainig: string;
    activeTask: TaskModel | null;
    currentCycel: number;
    config: {
        workTime: number;
        shortBreaktime: number;
        longBreakTime: number;
    };
}