import React from 'react';
import { Title, Container } from '../Styles/style';

function Error() {

    return (
        <Container>

            <Title error>Ooops! Erro 404</Title>

            <Title errorPage>Página não encontrada</Title>

        </Container>
    )
}

export default Error