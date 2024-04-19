import React, { useContext, useEffect } from 'react';
import * as S from './Style'
import { useAlert } from "../../../../../Hooks/useAlert";
import GlobalStateContext from '../../../../../Global/GlobalStateContext'


function StepOne() {
    let { setters, states } = useContext(GlobalStateContext)
    const [alert] = useAlert()


    useEffect(() => {
        alert()
    }, [states.alert])
    
    const alertReq = () => {
        setters.setRequirements('Não Se enquadra dos requisitos')
        alert('Ops, infelizmente não poderemos seguir com sua inscrição')
    }

    const textAlert = () => {
        return (
            <>
                <p> O compartilhamento deste link pode ocasionar a perda de sua vaga! </p> 
                <p> Caso queira indicar o curso entre em contato com {states.partnerChoised[0].partnerName} </p>
            </>
        )
    }

    const onSubmitNextStep = (e) => {
        e.preventDefault()
        setters.setRequirements('Se enquadra dos requisistos')
        setters.setStep(states.step + 1)
        
    }

    return (
        <S.ContainerStep1>
            {alert(textAlert(), 'alert')}
            <S.ContainerFormText form>
                <S.Text topic> Validação do curso escolhido</S.Text>
            </S.ContainerFormText>
            <S.ContainerFormText form>
                <S.Text title>Unidade: </S.Text>
                <S.Text form>{states.partnerChoised[0].unit}</S.Text>
            </S.ContainerFormText>
            <S.ContainerFormText form>
                <S.Text title>Nome do curso ou evento: </S.Text>
                <S.Text form>{states.courseData[0].name}</S.Text>
            </S.ContainerFormText>
            <S.ContainerItens>
                <S.Text title>Data de início: </S.Text>
                <S.Text form>{states.courseData[0].initialDate}</S.Text>
                <S.Text title2>Data de término: </S.Text>
                <S.Text form>{states.courseData[0].finalDate}</S.Text>
            </S.ContainerItens>
            <S.ContainerItens>
                <S.Text title>Dias da semana: </S.Text>
                <S.Text form>{states.courseData[0].period}</S.Text>
                <S.Text title2>Horário: </S.Text>
                <S.Text form>{states.courseData[0].time}</S.Text>
            </S.ContainerItens>
            <S.ContainerFormText form>
                <S.Text title>Requisitos: </S.Text>
                <S.Text form>{states.courseData[0].requirements}</S.Text>
            </S.ContainerFormText>
            <S.ContainerFormText question>
                <S.Text question>Você atende aos pré-requisitos?</S.Text>
            </S.ContainerFormText>
            <S.ContainerFormText button question>
                <S.Button onClick={onSubmitNextStep}>Sim</S.Button>
                <S.Button onClick={() => alertReq()}>Não</S.Button>
            </S.ContainerFormText>
        </S.ContainerStep1>
    );
}

export default StepOne;