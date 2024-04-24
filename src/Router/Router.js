import { useContext } from "react";
import * as S from './Style'
import BackgroundPlayGame from "../Components/Background/BackgroundPlayGame";
import BackgroundHome from "../Components/Background/BackgroundHome"
import Home from "../Pages/Home/Home";
import GlobalStateContext from '../Global/GlobalStateContext'

function Router() {
    const { states } = useContext(GlobalStateContext)

    const screen = () => {
        switch (states.currentScreen) {

            case "Home":
                return <Home />
            // case "Home":
            //     return (
            //         <S.Container>
            //             <BackgroundPlayGame />
            //             <MarioGame />
            //         </S.Container>
            //     )
            // case "Home":
            //     return (
            //         <S.Container>
            //             <BackgroundPlayGame />
            //             <MarioGame />
            //         </S.Container>
            //     )
            default:
                break
        }
    }


    return (
        <S.ContainerAll>
            {screen()}
        </S.ContainerAll>

    )
}

export default Router