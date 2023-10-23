import { HtmlLinkBlueLightStyled } from '../../styled';
import { ChangeTheme, LetteringLogo } from '../';
import { HeaderStyled } from './styled-header';
import { GroupActionsStyled } from './styled-group-actions';

export const FloatingHeader = () => {
    return (
        <HeaderStyled>
            <LetteringLogo />

            <GroupActionsStyled>
                <ChangeTheme />
                <HtmlLinkBlueLightStyled href={"/#contact"}>
                    Contato
                </HtmlLinkBlueLightStyled>
            </GroupActionsStyled>
        </HeaderStyled>
    );
};
