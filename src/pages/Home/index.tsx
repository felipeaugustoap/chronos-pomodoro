import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { TaskModel } from "../../models/TaskModel";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../template/MainTemplate";

type HomeProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskModel>>,
}

export function Home(props: HomeProps) {
    console.log(props)
    return (
        <MainTemplate>
            <Container>
                <CountDown/>
            </Container>
            <Container>
                <MainForm/>
            </Container>
        </MainTemplate>
    )
}