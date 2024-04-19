import React, { useContext, useEffect } from 'react'
import * as S from './Style'
import { useHistory } from 'react-router-dom';
import { goToLinks } from '../../../../Router/coordinator'
import GlobalStateContext from '../../../../Global/GlobalStateContext'

function LinkList() {
    const history = useHistory()
    let { setters, states } = useContext(GlobalStateContext)

    useEffect(() => {
    }, [history, states.partnerChoised, setters.setPartnerSelect, states.checkbox])


    return (
        <S.ContainerAll>
            <S.Container>
                <S.Title bold>Resumo: </S.Title>
                <S.ContainerDiv>
                    <S.Text bold>Parceiro:</S.Text><S.Text> {states.partnerChoised[0].partnerName}</S.Text>
                    <S.Text bold>ID:</S.Text><S.Text> {states.partnerChoised[0].id}</S.Text>
                </S.ContainerDiv>
                <S.ContainerDiv>
                    <S.Text bold>Detalhes da oferta:</S.Text>
                </S.ContainerDiv>
                <S.ContainerDiv>
                    <S.Text bold>Curso:</S.Text> <S.Text> {states.courseData[0].name}</S.Text>
                </S.ContainerDiv>
                <S.ContainerDiv>
                    <S.Text bold>Período do curso:</S.Text>
                </S.ContainerDiv>
                <S.ContainerDate>
                    <S.ContainerDiv>
                        <S.Text bold>Início:</S.Text><S.Text> {states.courseData[0].initialDate}</S.Text>
                    </S.ContainerDiv>
                    <S.ContainerDiv>
                        <S.Text bold>Fim: </S.Text><S.Text>{states.courseData[0].finalDate}</S.Text>
                    </S.ContainerDiv>
                </S.ContainerDate>
                <S.ContainerDiv>
                    <S.Text bold>Horário de aula:</S.Text>
                </S.ContainerDiv>
                <S.ContainerDate>
                    <S.ContainerDiv>
                        <S.Text bold>Dias da semana:</S.Text><S.Text> {states.courseData[0].period}</S.Text>
                    </S.ContainerDiv>
                    <S.ContainerDiv>
                        <S.Text bold>Horário:</S.Text><S.Text> {states.courseData[0].time}</S.Text>
                    </S.ContainerDiv>
                </S.ContainerDate>

                <S.ContainerDiv>
                    <S.Text bold>Peíoro de inscrição:</S.Text>
                </S.ContainerDiv>
                <S.ContainerDate>
                    <S.ContainerDiv>
                        <S.Text bold>Início:</S.Text><S.Text> {states.partnerChoised[0].course[0].startRegistration}</S.Text>
                    </S.ContainerDiv>
                    <S.ContainerDiv>
                        <S.Text bold>Fim: </S.Text><S.Text>{states.partnerChoised[0].course[0].endRegistration}</S.Text>
                    </S.ContainerDiv>
                </S.ContainerDate>
                <S.ContainerDiv button>
                    <S.Button onClick={() => goToLinks(history)}>Concluir</S.Button>
                </S.ContainerDiv>
            </S.Container>
        </S.ContainerAll >
    );
}

export default LinkList;