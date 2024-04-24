import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import GlobalStateContext from "../Global/GlobalStateContext";

const GlobalStateProvider = (props) => {
    const history = useHistory()

    const [currentScreen, setCurrentScreen] = useState("Home")

    const renderScreen = (newScreen) => {
        setCurrentScreen(newScreen)
    }

    const states = { currentScreen };
    const setters = { setCurrentScreen };
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