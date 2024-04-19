import styled from 'styled-components'

export const ContainerAll = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: rgb(228, 232, 241);
    min-height: 100vh;
    @media only screen and (max-width: 805px){
    }
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
    width: ${props => props.marioJumps ? '25%' : props.marioFront ? '25%' : props.luigiJumps ? '25%' : props.luigiFront ? '13%' : props.princessJumps || props.princessFront ? '15%' : props.yoshiJumps ? '15%' : '30%'};
    position: absolute;
    top: ${props => props.marioJumps ? '5%' : props.marioFront ? '15%' : props.luigiJumps ? '5%' : props.luigiFront ? '15%' : props.princessJumps ? '0%' : props.princessFront ? '8%' : props.yoshiJumps ? '8%' : '8%'};
    left: ${props => props.marioJumps || props.marioFront ? '15%' : props.luigiJumps ? '30%' : props.luigiFront ? '35%' : props.princessJumps || props.princessFront ? '49%' : props.yoshiJumps ? '65%' : '54%'};
    right: 0%;
    bottom: 0%
}
`
export const Video = styled.video`
    margin-left: 10%;
    width: 80% !important;
    height: auto !important;
    }
`
export const Source = styled.source`
    // width: 10%
    }
`