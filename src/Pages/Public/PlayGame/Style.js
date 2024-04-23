import styled from 'styled-components'

export const ContainerAll = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: rgb(228, 232, 241);
    min-height: 100vh;
`

export const Container = styled.div`
    position: relative;
`

export const ContainerCards = styled.div`
    box-sizing: border-box;
    display: flex !important;
    text-decoration: none !important;
    margin: 1.5em;

    @media only screen and (max-width: 805px){
        display: inline !important;
    }
`

export const Title = styled.h1`
    font-size: 1em;
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

export const Character = styled.img`
    width: ${props => props.marioJumps ? '20%' : props.marioFront ? '20%' : props.luigiJumps ? '20%' : props.luigiFront ? '10%' : props.princessJumps || props.princessFront ? '11%' : props.yoshiJumps ? '12%' : '25%'};
    position: absolute;
    top: ${props => props.marioJumps ? '10%' : props.marioFront ? '20%' : props.luigiJumps ? '5%' : props.luigiFront ? '21%' : props.princessJumps ? '0%' : props.princessFront ? '16%' : props.yoshiJumps ? '8%' : '10%'};
    left: ${props => props.marioJumps || props.marioFront ? '24%' : props.luigiJumps ? '35%' : props.luigiFront ? '41%' : props.princessJumps || props.princessFront ? '52%' : props.yoshiJumps ? '65%' : '58%'};
    right: 0%;
    bottom: 0%;
`

export const Video = styled.video`
    margin-left: 10%;
    width: 80% !important;
    height: auto !important;
    
`

export const Source = styled.source`
    // width: 10%
    
`