import React, { useContext, useEffect } from 'react';
import * as S from './style'
import { useHistory } from 'react-router';
import GlobalStateContext from "../../Global/GlobalStateContext";
import {goToHomePageUnit } from '../../Router/coordinator'

function Header() {
    const history = useHistory()
    let { states } = useContext(GlobalStateContext)

    useEffect(() => {

    }, [states.history, states.unit])

    return (
        <S.Container>

            {/* {states.history.location.pathname === '/' ?
                <S.ContainerHeader login>
                    <S.HomeIcon login src={senacLogo} ></S.HomeIcon>
                </S.ContainerHeader>
                :
                <S.ContainerHeader>
                    <S.HomeIcon src={senacLogo} onClick={() => goToHomePageUnit(history)}></S.HomeIcon>
                    <S.TextUnit>{states.unit}</S.TextUnit>
                </S.ContainerHeader>} */}

        </S.Container >
    )
}

export default Header