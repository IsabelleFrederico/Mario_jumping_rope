import styled from 'styled-components'

export const ContainerAll = styled.section`
    background-color: rgb(228, 232, 241);
    height: 100vh;
    display: flex;
    justify-content: center;
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
    flex-direction: row;
    border: 0 solid;
    margin: 1em;
    color: #004a8c;
    font-size: 20px;
        @media only screen and (max-width: 805px){
        height: 90%;
    }
`

export const ContainerDiv = styled.div`
    margin: ${props => props.text ? '0 4em': '0 2em'};

    @media only screen and (max-width: 300px){
        margin: 0 0.5em;
    }
`

export const ContainerText = styled.div`
    margin: 0 2em;
    display: flex;
    flex-direction: ${props => props.link ? 'column !important': ''};

    @media only screen and (max-width: 300px){
        margin: 0 0.5em;
    }
`

export const Text = styled.p`
    font-weight: ${props => props.bold ? 'bold': ''};
    margin: 1em 0.5em;
    
    @media only screen and (max-width: 300px){
        margin: 0.5em 0.5em;
    }
`

export const Title = styled.p`
    font-weight: ${props => props.bold ? 'bold': ''};
`

export const Link = styled.a`
    margin: 0 2em;
    cursor: pointer;
    text-decoration: underline;

    @media only screen and (max-width: 300px){
        margin: 0 0.5em;
    }
`
