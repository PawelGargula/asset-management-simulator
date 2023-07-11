import './SimulationPopup.css'
import ExitSimulationButton from './ExitSimulationButton';
import Button from './Button'
import { useState } from 'react'
import { contents } from '../data/contents'

export default function SimulationPopup({ exitSimulation }) {
    const [ simulationStep, setSimulationStep ] = useState(0);
    const [ animating, setAnimating ] = useState(false);

    const stepsLength = contents.length;

    return (
        <div className='popup'>
            <ExitSimulationButton onClick={exitSimulation} />
            <progress max={stepsLength - 1} value={simulationStep} aria-label='simulation progress'></progress>
            <h2>{contents[simulationStep].title}</h2>
            <div className='body'>{contents[simulationStep].body}</div>
            {!animating && <Button onClick={
                () => {
                    if (simulationStep === stepsLength - 1) {
                        exitSimulation()
                    } else {
                        setAnimating(true)
                        contents[simulationStep].animate()
                        setTimeout(() => {
                            setSimulationStep(simulationStep + 1)
                            setAnimating(false)
                        }, 3000)
                    }
                }
            }>{contents[simulationStep].buttonName}</Button>}   
        </div>
    )
}