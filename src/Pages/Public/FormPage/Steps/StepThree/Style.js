import styled from 'styled-components'

export const ContainerStep1 = styled.div`
    @media only screen and (max-width: 805px){
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


    @media only screen and (max-width: 505px){

    }
    
`
export const ContainerFormText = styled.div`
    display: flex;
    flex-direction:  ${props => props.form | props.button | props.question ? "row" : 'column'};
    margin: ${props => props.form ? "0px" : props.button | props.question ? '2em' : '0 6em'};
    align-items: ${props => props.question | props.button ? "center" : ''};
    justify-content: ${props => props.button | props.question ? "center" : ''};

`

export const ContainerGrid = styled.div`
    display: grid;
    margin-left: 2em;
    grid-template-columns: ${props => props.two ? '0.5fr 1.5fr 2fr 2fr' : 
    props.three ? '0fr 1fr 0fr 0.5fr 0fr 1fr' : 
    props.one ? '1fr 5fr':
    props.four ? '1fr 2fr 0.5fr 2fr' :
    props.date ? '1.5fr 1fr 1.5fr 1fr' :
    props.topic ? '0fr 1fr' :
    '1fr'};

     @media only screen and (max-width: 805px){
            margin-left: 1em;
            grid-template-columns: ${props => props.two ? '0.8fr 1.5fr' : 
    props.three ? '0.5fr 1fr' : 
    props.one ? '2.5fr 5fr':
    props.four ? '1fr 2fr' :
    props.date ? '1.5fr 1fr' :
    props.topic ? '0fr 1fr' :
    '1fr'};
}
`

export const Text = styled.p`
    /* color: rgb(67 81 90); */
    margin:  ${props => props.topic ? '1em 0' :
    props.text ? '1em 0' : 
    '0.2em 0'} ;
    font-weight: ${props => props.title | props.topic | props.title2 ? "bold" : ''};
    font-size: 16px;
    @media only screen and (max-width: 805px){
        /* font-size: ${props => props.reader ? "0px" : props => props.vote ? "12px" : ''}; */
    }
`

export const Input = styled.input`
    font-size: 16px;
    max-width: 20em;
    /* height: 2em; */
    border-radius: 0.2rem;
    border: 1px solid rgb(67 81 90);
    background-color: rgb(232, 240, 253);
    grid-row-start: ${props => props.birthDate ? '4' :
        props.cpf ? '2' :
            props.socialName ? '4' :
                props.nome ? '2' : '20'};
    margin-left: 0.5em;
    color: gray;
`

export const ContainerButtonFloat = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 80% ;

    @media only screen and (max-width: 836px){
        right:${props => props.alert ? "30vh" : '5px'};
    }

    @media only screen and (max-width: 505px){
        bottom:${props => props.alert ? "40vh" : ''};
        right:${props => props.alert ? "5vh" : ''};
    }
`