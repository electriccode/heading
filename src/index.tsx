import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 50px;
    text-align: center;
`

const Heading = (props: {children: JSX.Element}) => {
    return <H1>{props.children}</H1>;
}

export default Heading;