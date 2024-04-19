import styled from 'styled-components'

export const ContainerAll = styled.section`
    background-color: rgb(228, 232, 241);
    height: 100vh;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 340px){
        height: 100%;
    }
`

export const Container = styled.section`
    width: 80%;
    height: 90%;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    position: relative;
    display: block;
    background-color: #ffffff;
    justify-content: flex-start;
    flex-direction: rox;
    border: 0 solid;
    margin: 1em;
    color: #004a8c;
    font-size: 20px;

        @media only screen and (max-width: 805px){
        height: 90%;
    }

    @media only screen and (max-width: 340px){
        display: inline;

    }
    
`

export const ContainerInput = styled.form`
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: repeat(1, 1fr);
    margin: 2em 0 0 2em;
    align-items: center;

    @media only screen and (max-width: 805px){
        margin: 2em 0 0 0;
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 340px){
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
`

export const ContainerSelect = styled.form`
    margin: 0 2em 0 2em;
    position: relative;

    @media only screen and (max-width: 805px){
        margin: 0 2em 0 0.5em;
    }

    @media only screen and (max-width: 340px){
        margin: 0;
    }
`

export const ContainerSel = styled.div`
    margin: 0 2em 0 2em;
    position: relative;

    @media only screen and (max-width: 805px){
        margin: 0 2em 0 0.5em;
    }

    @media only screen and (max-width: 340px){
        margin: 0;
    }
`

export const ContainerDate = styled.form`
    display: grid;
    margin: 1em 0 0 2em;
    
    @media only screen and (max-width: 805px){
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 1em 1fr 1em 1fr;
    }

    @media only screen and (max-width: 340px){
        margin: 1em 0 0 1em;
    }
`

export const Button = styled.button`
    border-radius: 0.3rem;
    border: 0px solid rgb(126, 145, 224);
    background-color: rgb(126, 145, 224);
    color: #ffff;
    padding: 1em;
    justify-self: start;
    cursor: pointer;
    grid-row-start: 2;
    margin: ${props => props.main ? '' : '2em 0'}; 


    @media only screen and (max-width: 340px){
        grid-column-start: 1;
        grid-row-start: 3;
    }
    
`

export const Label = styled.label`
    font-size: 1em;

    @media only screen and (max-width: 805px){
        grid-row-start:  ${props => props.start ? '1' : props.end ? '3' : ''};
    }
`

export const Input = styled.input`
    color: gray;
    font-size: 20px;
    max-width: ${props => props.start | props.end ? '15em' : '30em'};
    height: 2em;
    border-radius: 0.5rem;
    margin: 1em 1.5em;
    border: 1px solid rgb(67 81 90);
    background-color: rgb(232, 240, 253);
    grid-row-start: 2;
    
    @media only screen and (max-width: 805px){
        grid-row-start:  ${props => props.end ? '4' : '2'};
        width: 10em;
    }

    @media only screen and (max-width: 410px){
        margin: 1em 0.5em;
    }
`

export const Select = styled.input`
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 0 1em;

    @media only screen and (max-width: 805px){

    }
`

export const DivCheckBox = styled.div`
    display: flex;
    margin-top: 0.5em;
    @media only screen and (max-width: 805px){

    }
`

export const Text = styled.p`
    font-size: 1em;
`

export const Title = styled.p`
   font-size: 1em;
`

