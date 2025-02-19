import styled, { css } from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

const BaseInputStyle = css`
padding: .75rem 1rem;
width: 100%;
border: 1px solid ${getThemeProperty("border", "theme")};
border-radius: .5rem;
background-color: ${getThemeProperty("background", "theme")};
`;

export const InputStyled = styled.input`
${BaseInputStyle}
`;

export const TextareaStyled = styled.textarea`
${BaseInputStyle}

max-height: 350px;
resize: vertical;
`;
