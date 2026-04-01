//import { Heading } from './components/Heading'

import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'


//PascalCase

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu/>
            </Container>
            <Container>
                <Heading>Chronos Pomodoro</Heading>
            </Container>


            
            
        
    </>
    )
}


