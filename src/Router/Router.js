import { useContext } from "react";
import * as S from './Style'
import Home from "../Pages/Home/Home";
import Game from "../Pages/PlayGame/Game"
import HowToPlay from "../Pages/PlayGame/HowToPlay";
import GlobalStateContext from '../Global/GlobalStateContext'

function Router() {
    const { states } = useContext(GlobalStateContext)

    const screen = () => {
        switch (states.currentScreen) {

            case "Home":
                return <Home />
            case "Play":
                return <Game />
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