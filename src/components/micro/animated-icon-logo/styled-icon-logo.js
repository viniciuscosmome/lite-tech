import styled from "styled-components";

import { getThemeProperty } from "@helpers/utilities";

export const SvgStyled = styled.svg`
display: block;
width: 120px;
max-width: 100%;
height: min-content;

path {
    fill: ${getThemeProperty("light100")};
    transition: fill 0.2s ease-out;
}
`;
