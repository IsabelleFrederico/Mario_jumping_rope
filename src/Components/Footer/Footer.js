import React, { useContext, useEffect } from 'react';
import * as S from './style'
import GlobalStateContext from "../../Global/GlobalStateContext";
// import senacLogo from '../img/Senac_logo.png'

function Footer() {
    let { states } = useContext(GlobalStateContext)

    useEffect(() => {

    }, [states.history, states.unit])

    return (
        <>
            {
                states.history.location.pathname === '/' ?
                    <></>
                    :
                    < S.Container >
                        Rodapé
                    </S.Container >
            }
        </>
    )
}

export default Footer