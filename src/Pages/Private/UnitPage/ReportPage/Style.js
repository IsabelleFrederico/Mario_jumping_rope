import styled from 'styled-components'

export const ContainerAll = styled.section`
    display: flex;
    justify-content: center ;
    background-color: rgb(228, 232, 241);
    height: 100vh;

    @media only screen and (max-width: 805px){
        /* height: 5%; */
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
    flex-direction: row;
    border: 0 solid;
    margin: 1em;
    color: #004a8c;
    font-size: 20px;
        @media only screen and (max-width: 950px){
            height: 85vh;
    }
    @media only screen and (min-height: 950px){
            height: 80vh;
    }


`

export const ContainerCards = styled.div`
    box-sizing: border-box;
    display: flex !important;
    text-decoration: none !important;
    margin: 1.5em;

    @media only screen and (max-width: 836px){
    }
`