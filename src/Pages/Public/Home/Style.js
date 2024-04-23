import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 0.3rem;
    border: 0px solid rgb(126, 145, 224);
    background-color: rgb(126, 145, 224);
    color: #ffff;
    font-size: 16px;
    padding: 12px;
    margin-top: 6%;
    width: 100%;
    cursor: pointer;

    @media only screen and (max-width: 505px){
    }
    
`

export const Container = styled.div`
    display: block;
`

export const Label = styled.label`
`

export const ContainerInput = styled.form`
    display: grid;
    justify-content: center;

`

export const Input = styled.input`
    padding: 1em;
    border-radius: 0.3rem;
    margin-top: 0.5em;
    margin-bottom: 1em;
    border: 2px solid rgb(220,220,220);
`