import styled from 'styled-components'

export const ContainerAll = styled.section`
    background-color: rgb(228, 232, 241);
    height: 100vh;
    display: flex;
    justify-content: center;

        @media only screen and (max-height: 653px){
        height: 150vh;
    }

    @media only screen and (max-width: 540px){
        height: 180vh;
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
        /* height: 90%; */
    }

    @media only screen and (max-width: 540px){
        /* height: 94%; */
    }
`