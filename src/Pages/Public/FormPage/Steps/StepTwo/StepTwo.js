import React, { useContext, useState } from 'react';
import { initialForm } from "../../../../../Constants/inputs";
import * as S from './Style'
import { useForm } from "../../../../../Hooks/useForm";
import { useAlert } from "../../../../../Hooks/useAlert";
import GlobalStateContext from '../../../../../Global/GlobalStateContext'
import { sex } from '../../../../../Constants/inputs'

function FormPage() {
    const [form, onChange] = useForm(initialForm)
    let { setters, states } = useContext(GlobalStateContext)
    const [alert] = useAlert('Cadastro realizado com sucesso!')

    const register = async () => {
        const body = {
            'name': form.name,
            'socialName': form.socialName,
            'cpf': form.cpf,
            'birthDate': form.birthDate,
            'motherName': form.motherName,
            'cep': form.cep,
            'street': form.street,
            'number': form.number,
            'complement': form.complement,
            'neighborhood': form.neighborhood,
            'state': form.state,
            'city': form.city,
            'cellphone': form.cellphone,
            'sex': form.sex,
            'checkRequisits': form.checkRequisits,
            'checkDeclaration': form.checkDeclaration
        }

        try {
            if (states.checkRequisits) {
                body.checkRequisits = states.checkRequisits
                body.checkDeclaration = states.checkDeclaration
                states.dataStudant.push(body)
                setters.setStep(states.step + 1)

            }

            // const checkData = () => {
            switch (states.checkRequisits) {
                case true:
                    states.dataStudant[2].checkRequisits = 'T'
                    break;
                case false:
                    states.dataStudant[2].checkRequisits = 'F'
                    break;
                default:
            }
            // }
            setters.setAlert(true)
        } catch (err) {
            alert('❌ Não foi possivel realizar o seu cadastro, tente novamente mais tarde')
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        register()
    }

    const checkbox = (e) => {
        e.preventDefault()
        setters.setCheckRequisits(!states.checkRequisits)
    }

    return (
        <S.ContainerStep2 onSubmit={onSubmitForm}>
            <S.ContainerFormText form>
                <S.Text topic> Dados Pessoais</S.Text>
            </S.ContainerFormText>
            <S.ContainerFormText first>
                {/* AQUI VAMOS TER QUE COLOCAR ANTES A OPÇÃO DE TROCAR DE IDIOMA E NÃO EXIGIR CPF E RG CASO SEJA EXTRANGEIRO */}
                <S.Label cpf>CPF: </S.Label>
                <S.Input cpf
                    type={'cpf'}
                    name={'cpf'}
                    value={form.cpf}
                    onChange={onChange}
                    placeholder={"CPF"}
                    pattern={"\d{3}\.\d{3}\.\d{3}-\d{2}"}
                    title={"CPF inválido"}
                    required
                />
                <S.Label name>Nome Completo: </S.Label>
                <S.Input nome
                    type={'text'}
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    placeholder={"Nome Completo"}
                    required
                />
            </S.ContainerFormText>
            <S.ContainerFormText first>
                <S.Label socialName>Nome Social: </S.Label>
                <S.Input socialName
                    type={'text'}
                    name={'socialName'}
                    value={form.socialName}
                    onChange={onChange}
                    placeholder={"Nome Social"}
                />
                <S.Label birthDate>Data de Nascimento: </S.Label>
                <S.Input birthDate
                    type={'date'}
                    name={'birthDate'}
                    value={form.birthDate}
                    onChange={onChange}
                    placeholder={"Data de Nascimento"}
                    required
                />
            </S.ContainerFormText>
            <S.ContainerFormText first>
                <S.Label sex>Sexo:</S.Label>
                <S.Select
                    name={'sex'}
                    value={form.sex}
                    onChange={onChange}
                    required >
                    <S.Options selected disable>Sexo</S.Options>
                    {sex.map((sex) => {
                        return <S.Options value={sex} key={sex}>{sex}</S.Options>
                    })}
                </S.Select>
                <S.Label motherName>Nome da Mãe: </S.Label>
                <S.Input motherName
                    type={'text'}
                    name={'motherName'}
                    value={form.motherName}
                    onChange={onChange}
                    placeholder={"Nome da Mãe"}
                />
            </S.ContainerFormText>

            <S.ContainerFormText first>
                <S.Label cep>CEP: </S.Label>
                <S.Input cep
                    type={'cep'}
                    name={'cep'}
                    value={form.cep}
                    onChange={onChange}
                    placeholder={"CEP"}
                    pattern={"\d{5}\-\d{3}"}
                    title={"O CEP deve conter no mínimo 8 caracteres"}
                    required
                />
            </S.ContainerFormText>

            <S.ContainerFormText first>
                <S.Label street>Rua: </S.Label>
                <S.Input street
                    type={'text'}
                    name={'street'}
                    value={form.street}
                    onChange={onChange}
                    placeholder={"Rua"}
                    required
                />
                <S.Label number>Número: </S.Label>

                <S.Input number
                    type={'text'}
                    name={'number'}
                    value={form.number}
                    onChange={onChange}
                    placeholder={"Número"}
                    required
                />
            </S.ContainerFormText>

            <S.ContainerFormText first>
                <S.Label complement>Complemento: </S.Label>
                <S.Input complement
                    type={'text'}
                    name={'complement'}
                    value={form.complement}
                    onChange={onChange}
                    placeholder={"Complemento"}
                />
                <S.Label neighborhood>Bairro: </S.Label>
                <S.Input neighborhood
                    type={'text'}
                    name={'neighborhood'}
                    value={form.neighborhood}
                    onChange={onChange}
                    placeholder={"Bairro"}
                    required
                />
            </S.ContainerFormText>
            <S.ContainerFormText first>
                <S.Label state>Estado: </S.Label>
                <S.Input state
                    type={'text'}
                    name={'state'}
                    value={form.state}
                    onChange={onChange}
                    placeholder={"Estado"}
                    required
                />
                <S.Label city>Cidade: </S.Label>
                <S.Input city
                    type={'text'}
                    name={'city'}
                    value={form.city}
                    onChange={onChange}
                    placeholder={"Cidade"}
                    required
                />
            </S.ContainerFormText>
            <S.ContainerFormText first>
                <S.Label cellphone>Telefone: </S.Label>
                <S.Input cellphone
                    type={'text'}
                    name={'cellphone'}
                    value={form.cellphone}
                    onChange={onChange}
                    placeholder={"Telefone"}
                    pattern={"\\w{8,}"}
                    title={"O telefone deve conter no mínimo 8 caracteres"}
                />
            </S.ContainerFormText>
            <S.ContainerFormText button>
                <S.Input checkbox type="checkbox" onChange={checkbox}></S.Input>
                <label>Aceite a <a target="blank" href={'https://www.sp.senac.br/politica-de-privacidade'}>Política de Privacidade</a> do Senac São Paulo</label>
            </S.ContainerFormText >
            <S.ContainerFormText button>
                <S.Button main onClick={onSubmitForm}>Cadastrar</S.Button>
            </S.ContainerFormText>
        </S.ContainerStep2>
    );
}

export default FormPage;