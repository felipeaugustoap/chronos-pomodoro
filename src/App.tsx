//import { Heading } from './components/Heading'

import './styles/theme.css'
import './styles/global.css'
import { History, HomeIcon, Settings, Sun } from 'lucide-react'
import { ButtonComponent } from './components/ButtonComponent'
import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'



//PascalCase

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <section>
                    <ButtonComponent>
                        <HomeIcon />
                    </ButtonComponent>
                    <ButtonComponent>
                        <History />
                    </ButtonComponent>
                    <ButtonComponent>
                        <Settings />
                    </ButtonComponent>
                    <ButtonComponent>
                        <Sun />
                    </ButtonComponent>
                </section>
            </Container>
            <Container>
                <Heading>Chronos Pomodoro</Heading>
            </Container>


            
            
        
    </>
    )
}


