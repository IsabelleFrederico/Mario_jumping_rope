import React, { useEffect, useContext } from 'react'
import GlobalStateContext from '../../../Global/GlobalStateContext'
import * as S from './Style'
import { useHistory } from 'react-router-dom';
import { goToHomePageUnit } from '../../../Router/coordinator'

function LoginPage() {
    const history = useHistory()
    let { setters } = useContext(GlobalStateContext)


    useEffect(() => {
        // const token = localStorage.getItem('token');

        // if (token) {
        //     goToLogin(history)
        // }
    }, [history])


    return (
        <S.Button main onClick={() => goToHomePageUnit(history)} >Play</S.Button>
    );
}

export default LoginPage;