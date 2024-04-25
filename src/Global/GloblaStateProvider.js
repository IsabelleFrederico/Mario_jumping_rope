import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import GlobalStateContext from "../Global/GlobalStateContext";

const GlobalStateProvider = (props) => {
    const history = useHistory()
    const [currentScreen, setCurrentScreen] = useState("Home")
    const [phase, setPhase] = useState(1)

    useEffect(() => {

    }, [phase])

    const renderScreen = (newScreen) => {
        setCurrentScreen(newScreen)
    }

    const states = { currentScreen, phase };
    const setters = { setCurrentScreen, setPhase };
    const requests = { renderScreen };

    const data = { states, setters, requests };

    return (
        <div>
            <GlobalStateContext.Provider value={data}>
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    );
};

export default GlobalStateProvider;