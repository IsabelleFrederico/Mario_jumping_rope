import React, { useContext, useEffect, useState } from 'react'
import { partner, course } from '../../../../Constants/api'
import { initialForm } from "../../../../Constants/inputs";
import * as S from './Style'
import { useHistory } from 'react-router-dom';
import { goToconfirm } from '../../../../Router/coordinator'
import { useForm } from "../../../../Hooks/useForm";
import GlobalStateContext from '../../../../Global/GlobalStateContext'

function PartnerCourse() {
    const history = useHistory()
    const [form, onChange] = useForm(initialForm)
    const [position, setPosition] = useState('')
    const [id, setId] = useState('')
    let { setters, states } = useContext(GlobalStateContext)

    useEffect(() => {
        checkPartner()
    }, [history, states.partnerChoised, setters.setPartnerSelect, states.checkbox])

    const checkPartner = () => {
        if (states.partnerChoised.length > 0) {
            return setters.setPartnerSelect(true)
        }
    }

    const partnerData = async () => {
        const body = {
            'partnerName': form.partnerName,
        }

        try {
            setters.setPartnerChoised(partner.filter(part => part.id === body.partnerName || part.partnerName === body.partnerName))
            if (states.partnerChoised.length > 0) {
                setters.setCheckbox(new Array(states.partnerChoised[0].course.length).fill(false))
                setters.setPartnerSelect(true)
                return (
                    states.partnerSelect, states.checkbox
                )
            }
        } catch (err) {
            alert(`❌ Parceiro não encontrado`)
        }

    }

    const selectCourse = (id, position) => {
        setters.setCourseData(course.filter(course => course.id === id))
        setPosition(position)
        setId(id)
        
        if (id === states.courseData[0].id) {
            const updatedCheckedState = states.checkbox.map((item, index) =>
                index === position ? !item : item
            );
            setters.setCheckbox(updatedCheckedState);
        }

    }

    const RegistrationDate = async () => {
        const body = {
            'startRegistration': form.startRegistration,
            'endRegistration': form.endRegistration,
        }

        try {
            if (id === states.courseData[0].id) {
                states.partnerChoised[0].course[position].startRegistration = body.startRegistration
                states.partnerChoised[0].course[position].endRegistration = body.endRegistration
            }
        } catch (err) {
            alert(`❌ Erro`)
        }
    }


    const onSubmitPartner = (e) => {
        e.preventDefault()
        partnerData()
        if (states.partnerChoised.length === 0) {
            return alert(`❌ Parceiro não encontrado`)
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        RegistrationDate()
        goToconfirm(history)
    }

    const Checkbox = ({ label, value, onChange }) => {
        return (
            <>
                <S.Select type="checkbox" checked={value} onChange={onChange} />
                {label}
            </>
        );
    };

    return (
        <S.ContainerAll>
            <S.Container>
                <S.Title> Identificação do parceiro </S.Title>
                <S.ContainerInput onSubmit={onSubmitPartner}>
                    <S.Label>Informe o id do Parceiro</S.Label>
                    <S.Input
                        type={'name'}
                        name={'partnerName'}
                        value={form.partnerName}
                        onChange={onChange}
                        placeholder={"Id do parceiro"}
                        required
                    />
                    {/* {states.partnerSelect ? <></> : ( */}
                    <S.Button main>Buscar </S.Button>
                    {/* )} */}

                </S.ContainerInput>
                {states.partnerSelect ? (
                    <S.ContainerSelect onSubmit={onSubmitForm}>
                        <S.Label>Escolha o Curso desejado</S.Label>
                        {states.partnerChoised[0].course.map((partnerCorse, index) => {
                            return (
                                <S.DivCheckBox >
                                    <S.ContainerSel check>
                                        <S.DivCheckBox box key={index}>
                                            <Checkbox
                                                label={partnerCorse.name}
                                                value={states.checkbox[index]}
                                                onChange={() => { selectCourse(partnerCorse.id, index) }}
                                            />
                                        </S.DivCheckBox>
                                        {states.checkbox[index] ? (
                                            <S.ContainerDate>
                                                <S.Label>Início das incrições</S.Label>
                                                <S.Input start
                                                    type={'date'}
                                                    name={'startRegistration'}
                                                    value={form.startRegistration}
                                                    onChange={onChange}
                                                    required
                                                />
                                                <S.Label>Fim das incrições</S.Label>
                                                <S.Input end
                                                    type={'date'}
                                                    name={'endRegistration'}
                                                    value={form.endRegistration}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </S.ContainerDate>

                                        ) : <></>}
                                    </S.ContainerSel>
                                </S.DivCheckBox>
                            )
                        })}
                        <S.Button>Avançar</S.Button>
                    </S.ContainerSelect>
                ) : <></>}
            </S.Container>
        </S.ContainerAll >
    );
}

export default PartnerCourse;