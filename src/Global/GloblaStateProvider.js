import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import GlobalStateContext from "../Global/GlobalStateContext";

const GlobalStateProvider = (props) => {
    const history = useHistory()

    
    const states = {  };
    const setters = {};
    const requests = {};

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