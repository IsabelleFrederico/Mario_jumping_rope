import styled from 'styled-components'

export const ContainerStep2 = styled.div`
    margin: 0 3em;
    
    @media only screen and (max-width: 805px){
        margin: 0;
        height: 50vh;
    }
`

export const Button = styled.button`
    border-radius: 0.3rem;
    border: 0px solid rgb(126, 145, 224);
    background-color: rgb(126, 145, 224);
    color: #ffff;
    font-size: 16px;
    padding: 12px;
    margin-right: 1em;
    cursor: pointer;
`

export const ContainerFormText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${props => props.question | props.button ? "center" : ''};
    justify-content: ${props => props.button ? "center" : ''};
    margin: ${props => props.form ? "0px" : props.button ? '2em' : '2em 0'};

    @media only screen and (max-width: 1018px){
        flex-direction: ${props => props.button ? 'row' : 'column'};
        margin: ${props => props.form ? "0px" : props.button ? '2em' : '0'};
    }

`

export const Text = styled.p`
    font-weight: ${props => props.title | props.topic ? "bold" : ''};
    margin:  ${props =>
        props.form ? "0em 0 0 0" :
            props.topic ? "1.5em 0.5em 0 2em" : "0 4px"}; 
    @media only screen and (max-width: 805px){
        margin:  ${props =>
        props.form ? "1.5em 0 0 0" :
            props.topic ? "2em 0.5em 0 2em" : "0 4px"}; 
    }

`

export const Label = styled.label`
    font-size: 1em;
    max-width: 20em;
    border-radius: 0.5rem;
    margin: 0 1em ;
`

export const Input = styled.input`
    font-size: 1em;
    max-width: 20em;
    border-radius: 0.2rem;
    border: 1px solid rgb(67 81 90);
    background-color: rgb(232, 240, 253);
    color: gray;
    margin: 0;


    @media only screen and (max-width: 805px){
        /* margin: ${props => props.checkbox ? '0 1em' : ''} ; */
    }

`

export const Select = styled.select`
    font-size: 1em;
    max-width: 20em;
    border-radius: 0.2rem;
    border: 1px solid rgb(67 81 90);
    background-color: rgb(232, 240, 253);
    grid-row-start: 4;                     
    color: gray;
    margin: 0;

    @media only screen and (max-width: 805px){
        /* margin-left: 0.5em; */
    }
`

export const Options = styled.option`

`
