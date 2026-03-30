import { Heading } from './components/Heading'
import { Logo } from './components/Logo'

import './styles/theme.css'
import './styles/global.css'
import { History, HomeIcon, Settings, Sun, TimerIcon } from 'lucide-react'
import { ButtonComponent } from './components/ButtonComponent'


//PascalCase

export function App() {
    return (
        <>
            <Logo />
            <div>
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
            </div>
        <Heading>
            Olá Mundo!
            <button>
                <TimerIcon />
            </button>
        </Heading>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio maxime porro saepe accusantium, recusandae molestias nulla illo, sapiente et iste cum qui aspernatur quod, incidunt earum excepturi quasi? Consequatur, laudantium.</p>
    </>
    )
}


