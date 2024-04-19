import styled from 'styled-components'

export const HomeIcon = styled.img`
    width: ${props => props.login ? '10em' : '5em'};
    margin: 4px 16px 8px;
    margin-bottom: ${props => props.login ? '4em' : '0em'};

    @media only screen and (max-width: 805px){
        margin: ${props => props.login ? '' : '4px 1px 8px;'};
    }

`

export const Container = styled.div`
    margin-top: ${props => props.login ? '5%' : ''};

    @media only screen and (max-width: 805px){
            margin-top: ${props => props.login ? '30%' : ''};
    }

`

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: ${props => props.login ? 'center' : 'space-between !important'};
    margin: ${props => props.login ? '1% 0' : '1em 2em'};

    @media only screen and (max-width: 805px){
        /* margin: ${props => props.login ? '1% 0' : '1em em'}; */
    }
`

export const TextUnit = styled.p`
    font-size: 1em;
    margin-bottom: 1em;
    align-self: flex-end;
    font-weight: bold;
    color: rgb(0, 85, 148);

`
export const Button = styled.button`
    width: 14em;
    height: 14em;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    /* position: relative; */
    display: flex;
    background-color: #ffffff;
    justify-content: flex-end;
    flex-direction: column;
    border: 0 solid;
    margin: 1em;
    color: #004a8c;
    cursor: pointer;
    font-size: 1em;

    @media only screen and (max-width: 805px){

    }
    
`