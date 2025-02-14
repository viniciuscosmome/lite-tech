import styled from "styled-components";

import { getThemeProperty } from '@helpers/utilities';

export const CardSolutions = styled.div`
display: inline-flex;
flex-direction: column;
gap: 1rem;

padding: 2.5rem 1.5rem;
border-radius: 1rem;
width: 368px;
max-width: 100%;
height: min-content;
border: 1px groove ${getThemeProperty("border", "theme")};
background-color: ${getThemeProperty("cardBackground", "theme")};

h4 {
    margin-bottom: .7rem;
}

h6 {
    margin-bottom: .4rem;
    text-transform: uppercase;
}

p {
    line-height: 1.05;
}
`;
