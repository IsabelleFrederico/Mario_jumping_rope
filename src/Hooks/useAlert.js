import GlobalStateContext from '../Global/GlobalStateContext'
import { ContainerButtonFloat } from '../Styles/style'
import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';


export const useAlert = () => {
    let { states, setters } = useContext(GlobalStateContext)

    const closeAlert = () => {
        setters.setAlert(false)
    }

    const alert = (text, tipe) => {
        if (states.alert) {
            return (
                <ContainerButtonFloat>
                    <Stack sx={{ width: '50%' }} spacing={2}>
                        {tipe === 'confirm' ?
                            <Alert severity="success"
                                onClose={() => { closeAlert()}}>
                                <AlertTitle>Concluido com sucesso</AlertTitle>
                                {text}
                            </Alert> : tipe === 'alert' ?
                                <Alert severity="warning"
                                    onClose={() => { closeAlert()}}>
                                    <AlertTitle>Atenção!</AlertTitle>
                                    {text}
                                </Alert> :
                                <Alert severity="error"
                                    onClose={() => { closeAlert()}}>
                                    <AlertTitle>Erro</AlertTitle>
                                    {text}
                                </Alert>
                        }
                    </Stack >
                </ContainerButtonFloat>
            )
        }
    }

    const resetAlert = () => {
        setters.setAlert(false)
      };

      
    return [alert, resetAlert]
}