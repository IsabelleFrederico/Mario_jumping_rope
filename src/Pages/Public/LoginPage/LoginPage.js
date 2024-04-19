import React, { useEffect, useContext } from 'react'
import GlobalStateContext from '../../../Global/GlobalStateContext'
import { initialForm } from "../../../Constants/inputs";
import * as S from './Style'
import { useHistory } from 'react-router-dom';
import { goToHomePageUnit } from '../../../Router/coordinator'
import { useForm } from "../../../Hooks/useForm";

function LoginPage() {
    const history = useHistory()
    const [form, onChange] = useForm(initialForm)
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