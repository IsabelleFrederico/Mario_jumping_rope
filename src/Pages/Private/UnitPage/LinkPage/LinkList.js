import React, { useContext, useEffect } from 'react'
import * as S from './Style'
import { useHistory } from 'react-router-dom';
import { goToForm } from '../../../../Router/coordinator'
import GlobalStateContext from '../../../../Global/GlobalStateContext'

function LinkList() {
    const history = useHistory()
    let { setters, states } = useContext(GlobalStateContext)

    useEffect(() => {

    }, [history, states.partnerChoised, setters.setPartnerSelect, states.checkbox])

    return (
        <S.ContainerAll>
            <S.Container>
                <S.Title bold>Email Modelo: </S.Title>
                <S.ContainerDiv>
                    <S.Text> Boa Tarde! {states.partnerChoised[0].partnerName},</S.Text>
                </S.ContainerDiv>
                <S.ContainerDiv text>
                    <S.Text> Venho por meio deste e-mail comunicar que o curso <b>{states.courseData[0].name}</b> estará disponível para
                        inscrição dos dias <b>{states.partnerChoised[0].course[0].startRegistration}</b> ao <b>{states.partnerChoised[0].course[0].endRegistration}</b>.
                    </S.Text>
                    <S.Text>Para o aluno realizar a inscrição basta disponibilizar um link abaixo para o aluno</S.Text>
                    <S.ContainerText link>
                        <S.Link onClick={() => goToForm(history)} >www.linkinscricao.com/vaga1</S.Link>
                        <S.Link onClick={() => goToForm(history)} >www.linkinscricao.com/vaga2</S.Link>
                        <S.Link onClick={() => goToForm(history)} >www.linkinscricao.com/vaga3</S.Link>
                    </S.ContainerText>
                    <S.ContainerDiv>
                    </S.ContainerDiv>

                    <S.Text>Auxílio para o compartilhado do link:</S.Text>
                    <S.Text> - Cada link é único, uma vez utilizado ele será automaticamente desabilitato</S.Text>
                    <S.Text> - Distribua os links de forma sequencial para facilitar seu controle dos links</S.Text>
                    <S.Text> - Cada link é individual e intransfirível, caso seja compartilhado o aluno poderá perder a vaga</S.Text>
                </S.ContainerDiv>
            </S.Container>
        </S.ContainerAll >
    );
}

export default LinkList;