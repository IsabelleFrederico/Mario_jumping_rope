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
    flex-direction: rox;
    border: 0 solid;
    margin: 1em;
    color: #004a8c;
    font-size: 20px;
        @media only screen and (max-width: 805px){
        height: 90%;
    }
`

export const ContainerDiv = styled.div`
    margin: 0 2em;
    display: flex;
    justify-content: ${props => props.button ? 'center': ''};

    @media only screen and (max-width: 300px){
        margin: 0 0.5em;
    }

    @media only screen and (max-width: 805px){
        justify-content: ${props => props.button ? 'end': ''};
    }

`

export const ContainerDate = styled.div`
    margin: 0 2em;
    display: flex;

    @media only screen and (max-width: 805px){
        display: inline;
        margin: 0;
    }   
    
    @media only screen and (max-width: 300px){
        margin: 0;
    }

`

export const Text = styled.p`
    font-weight: ${props => props.bold ? 'bold': ''};
    margin: 0.5em 0.5em ;
    
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
export const Button = styled.button`
    border-radius: 0.3rem;
    border: 0px solid rgb(126, 145, 224);
    background-color: rgb(126, 145, 224);
    color: #ffff;
    padding: 1em;
    /* justify-self: flex-end; */
    cursor: pointer;
    /* margin: 1em 50em;  */


    @media only screen and (max-width: 340px){

    }
    
`