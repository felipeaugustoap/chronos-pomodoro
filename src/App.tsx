//import { Heading } from './components/Heading'

import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import { Footer } from './components/Footer'



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
                <CountDown/>
            </Container>
            <Container>
                <form className="form" action="">
                    <div className="formRow">
                        <DefaultInput
                            labelText='teste'
                            type="text"
                            id='meuInput'
                            placeholder='Digite algo'
                        />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <Cycles/>
                    </div>

                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon />} color='green' />
                    </div>
                </form>
            </Container>

            <Container>
                <Footer/>
            </Container>   
        </>
    )
}


