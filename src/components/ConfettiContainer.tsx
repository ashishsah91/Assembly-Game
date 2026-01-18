
import Confetti from 'react-confetti'
import type {JSX} from 'react'
import type { ConfettiContainerProps } from '../types'

export default function ConfettiContainer({ isGameWon }:ConfettiContainerProps):JSX.Element | null {

    if (!isGameWon) {
        return null
    } else {
        return <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
        />
    }
}