import { Heading } from './components/Heading'

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react'


//PascalCase

export function App() {
    return (
    <>
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


