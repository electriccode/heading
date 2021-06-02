import React from 'react';
import styled from 'styled-components';
const H1 = styled.h1 `
    font-size: 50px;
    text-align: center;
`;
const Heading = (props) => {
    return React.createElement(H1, null, props.children);
};
export default Heading;
