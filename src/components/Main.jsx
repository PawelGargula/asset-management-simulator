import Button from './Button.jsx'
import Steps from './Steps.jsx'
import SimulationPopup from './SimulationPopup.jsx'
import { useState } from 'react'

export default function Main() {
    const [ simulationStarted, setSimulationStarted ] = useState(false);

    function exitSimulation() {
        setSimulationStarted(false);
    }

    return (
        <main aria-live="polite">
            {
                !simulationStarted ? 
                <>
                    <Steps />
                    <Button onClick={() => setSimulationStarted(true)}>Start</Button>
                </>
                :
                <SimulationPopup exitSimulation={exitSimulation}/>
            }
        </main>
    )
}