import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import GlobalStateContext from "../Global/GlobalStateContext";
import * as U from "../Utils/ImagesSrc"

const GlobalStateProvider = (props) => {
    const history = useHistory()
    const [currentScreen, setCurrentScreen] = useState("Home")
    const [phase, setPhase] = useState(1)
    const [failure, setFailure] = useState(false)
    const cursors = ['default', 'pointer'];
    const coins = [{
        image: U.coinRef,
        x: 5,
        y: 5,
        w: 20,
        h: 20
    },
    {
        image: U.coinRef,
        x: 30,
        y: 5,
        w: 20,
        h: 20
    },
    {
        image: U.coinRef,
        x: 55,
        y: 5,
        w: 20,
        h: 20
    },
    {
        image: U.coinRef,
        x: 80,
        y: 5,
        w: 20,
        h: 20
    },
    {
        image: U.coinRef,
        x: 105,
        y: 5,
        w: 20,
        h: 20
    },
    {
        image: U.coinRef,
        x: 130,
        y: 5,
        w: 20,
        h: 20
    },
    {
        image: U.coinRef,
        x: 155,
        y: 5,
        w: 20,
        h: 20
    }
    ]

    useEffect(() => {

    }, [phase])

    const renderScreen = (newScreen) => {
        setCurrentScreen(newScreen)
    }

    const states = { currentScreen, phase, failure, cursors, coins };
    const setters = { setCurrentScreen, setPhase, setFailure };
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