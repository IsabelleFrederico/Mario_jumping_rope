import { useContext } from "react";
import * as S from './Style'
import Home from "../Pages/Home/Home";
import Game from "../Pages/PlayGame/Game"
import HowToPlay from "../Pages/Home/HowToPlay";
import PhaseOne from "../Pages/PlayGame/Phases/PhaseOne";
import PhaseTwo from "../Pages/PlayGame/Phases/PhaseTwo";
import PhaseThree from "../Pages/PlayGame/Phases/PhaseThree";
import PhaseFour from "../Pages/PlayGame/Phases/PhaseFour"
import GlobalStateContext from '../Global/GlobalStateContext'

function Router() {
    const { states } = useContext(GlobalStateContext)

    const screen = () => {
        switch (states.currentScreen) {

            case "Home":
                return <Home />
            case "Play":
                return <PhaseOne />
            case "PhaseTwo":
                return <PhaseTwo />
            case "PhaseThree":
                return <PhaseThree />
            case "PhaseFour":
                return <PhaseFour />
            case "HowToPlay":
                return <HowToPlay />
            default:
                return <Home />
        }
    }


    return (
        <S.ContainerAll>
            {screen()}
        </S.ContainerAll>

    )
}

export default Router