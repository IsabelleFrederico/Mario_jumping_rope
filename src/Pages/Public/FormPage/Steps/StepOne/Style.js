import styled from 'styled-components'

export const ContainerStep1 = styled.div`
    /* margin: 0 8em; */
    @media only screen and (max-width: 805px){
    /* height: 90%; */
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
    flex-direction:  ${props => props.form | props.button ? "row" : 'column'};
    margin: ${props => props.form | props.button ? '0' : '0 6em'};
    align-items: ${props => props.question | props.button ? "center" : ''};
    justify-content: ${props => props.button ? "center" : ''};

    @media only screen and (max-width: 805px){
        margin: ${props => props.form | props.button | props.question ? '0' : '0 6em'};
    }

`
export const ContainerItens = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;

    @media only screen and (max-width: 1220px){
        grid-template-columns: 0.5fr 1fr;
        grid-template-rows: repeat(2, 1fr);
    }

`


export const Text = styled.p`
    margin:  ${props => props.top ? "1.5em 4px 0.5em 0" :
        props.top2 ? "1em 4px 1em 0" :
            props.form ? "1.5em 0 0 0" :
                props.title ? "1.5em 0.5em 0 2.5em" :
                    props.topic ? "2em 0.5em 0 2em" :
                        props.title2 ? "1.5em 0em 0 0.5em" :
                            props.question ? '2em 0' : "0 4px"}; 
    font-weight: ${props => props.title | props.topic | props.title2 ? "bold" : ''};

    @media only screen and (max-width: 1220px){
        margin:  ${props => props.top ? "1em 4px 0.5em 0" :
        props.top2 ? "1em 4px 1em 0" :
            props.form ? "1em 0 0 0" :
                props.title | props.title2 ? "1em 0.5em 0 2em" :
                    props.topic ? "2em 0.5em 0 2em" :
                            props.question ? '2em 0' : "0 4px"}; 
    }
`