import React, { useContext, useEffect, useState } from 'react';
import * as S from './Style'
import GlobalStateContext from '../../../../../Global/GlobalStateContext'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

function StepThree() {
    let { setters, states } = useContext(GlobalStateContext)
    const user = states.dataStudant[2]
    const [success, setSuccess] = useState(false)


    useEffect(() => {
    }, [states.alert, success])


    const checkbox = (e) => {
        e.preventDefault()
        setters.setCheckDeclaration(!states.checkDeclaration)
    }

    const closeAlert = () => {
        setSuccess(true)
    }

    const nextStep = () => {
        switch (states.checkDeclaration) {
            case true:
                states.dataStudant[2].checkDeclaration = 'T'
                break;
            case false:
                states.dataStudant[2].checkDeclaration = 'F'
                break;
            default:
        }

        if (states.checkDeclaration) {
            setSuccess(true)
        }
    }


    const aqui = () => {
        return (
            <S.ContainerButtonFloat>
                <Stack sx={{ width: '50%' }} spacing={2}>
                    <Alert severity="success"
                        onClose={() => { closeAlert() }}>
                        <AlertTitle>Concluido com sucesso</AlertTitle>
                    </Alert>
                </Stack >
            </S.ContainerButtonFloat>
        )
    }


    return (
        <S.ContainerStep1>
            {success ? aqui() : <></>}
            <S.ContainerFormText form>
                <S.Text topic> Autodeclaração de Renda</S.Text>
            </S.ContainerFormText>
            <S.ContainerGrid one>
                <S.Text title>Nome: </S.Text>
                <S.Text name>{user.name}</S.Text>
            </S.ContainerGrid>
            <S.ContainerGrid two>
                <S.Text title>CPF: </S.Text>
                <S.Text form>{user.cpf}</S.Text>
                <S.Text title>Data de nascimento: </S.Text>
                <S.Text form>{user.birthDate}</S.Text>
            </S.ContainerGrid>
            <S.ContainerGrid one>
                <S.Text title2>Endereço: </S.Text>
                <S.Text form>{user.street}, {user.number}</S.Text>
            </S.ContainerGrid>
            <S.ContainerGrid four>
                <S.Text title>Complemento: </S.Text>
                <S.Text form>{user.complement}</S.Text>
                <S.Text title>Bairro: </S.Text>
                <S.Text form>{user.neighborhood}</S.Text>
            </S.ContainerGrid>
            <S.ContainerGrid three>
                <S.Text title2>Cidade: </S.Text>
                <S.Text form>{user.city}</S.Text>
                <S.Text title>UF: </S.Text>
                <S.Text form>{user.state}</S.Text>
                <S.Text title2>CEP: </S.Text>
                <S.Text form>{user.cep}</S.Text>
            </S.ContainerGrid>
            <S.ContainerGrid one>
                <S.Text title>Telefone: </S.Text>
                <S.Text form>{user.cellphone}</S.Text>
            </S.ContainerGrid>
            <S.ContainerGrid two>
                <S.Text title2>Curso: </S.Text>
                <S.Text form>{states.courseData[0].name}</S.Text>
                <S.Text title2>Horário: </S.Text>
                <S.Text form>{states.courseData[0].time}</S.Text>
            </S.ContainerGrid>
            <S.ContainerGrid date>
                <S.Text title>Data de Início: </S.Text>
                <S.Text form>{states.courseData[0].initialDate}</S.Text>
                <S.Text title2>Data de Término: </S.Text>
                <S.Text form>{states.courseData[0].finalDate}</S.Text>
            </S.ContainerGrid>
            <S.ContainerGrid text>
                <S.Text text>Eu, acima identificado, declaro e atesto que a renda familiar mensal per capita (renda mensal total da família dividida pelo número de membros residentes no endereço acima) não ultrapassa o valor de dois salários mínimos da Federação, (R$ 2.604,00) estando, assim, apto(a) a me candidatar a uma vaga da Política Senac de Concessão de Bolsas de Estudo, atendendo à condição de baixa renda. Declaro também que:</S.Text>
            </S.ContainerGrid>
            <S.ContainerGrid topic>
                <S.Text topic> a) </S.Text><S.Text text>recebi do Senac São Paulo todas as informações necessárias para a perfeita compreensão das condições que me habilitam a solicitar bolsa;</S.Text>
                <S.Text topic> b) </S.Text><S.Text text>devo informar ao Senac São Paulo qualquer modificação na renda familiar mensal per capita;</S.Text>
                <S.Text topic> c) </S.Text><S.Text text>compreendo e aceito o acima exposto e declaro que as informações ora prestadas correspondem exatamente à situação de fato, podendo ser consideradas verdadeiras para todos os efeitos legais cabíveis.</S.Text>
            </S.ContainerGrid>
            <S.ContainerFormText question>
                <S.Input type="checkbox" onChange={checkbox}></S.Input>
                <S.Text>Confirmar declarção de renda</S.Text>
            </S.ContainerFormText >
            <S.ContainerFormText button>
                <S.Button main onClick={() => nextStep()}>concluir</S.Button>
            </S.ContainerFormText>
        </S.ContainerStep1>
    );
}

export default StepThree;