import { useForm } from "@formspree/react";
import { AiOutlineLoading } from "react-icons/ai";

import { LongTextInput, ShortTextInput } from "@components/micro";
import { ButtonBlueLightStyled, FormStyled } from "@components/styled";

export default () => {
    const [spreeState, spreeHandleSubmit] = useForm("mzbqndwl");

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const validation = form.checkValidity();

        if (!validation) {
            return form.classList.add("was-validated");
        }

        await spreeHandleSubmit(event).finally(() => {
            form.classList.remove("was-validated");
            form.reset();
        });
    }

    return (
        <FormStyled
            id="contact"
            onSubmit={handleSubmit}
            noValidate
            method="POST"
        >
            <h4>Contato</h4>

            <ShortTextInput
                describe="nome"
                name="name"
                placeholder="ex: Jhon Doe"
                invalidFeedback="O nome deve ter de 2 a 24 caracteres. Somente letras."
                extraAttributes={{
                    minLength: 2,
                    maxLength: 24,
                    pattern: "^([a-zA-ZÀ-ÿ ]){2,24}$",
                    required: true,
                }}
            />
            <ShortTextInput
                describe="e-mail"
                type="email"
                name="email"
                placeholder="ex: jhondoe@example.com"
                invalidFeedback="O formato de e-mail usado é inválido."
                extraAttributes={{
                    required: true,
                }}
            />
            <ShortTextInput
                describe="número para contato"
                type="text"
                name="tel"
                placeholder="ex: 55 12 123456789"
                invalidFeedback="Use somente números. ex: 55 12 123456789"
                extraAttributes={{
                    pattern: "^([0-9][0-9 ]{8,14}[0-9])$",
                    required: true,
                }}
            />
            <LongTextInput
                describe="mensagem"
                name="message"
                placeholder="Como podemos te ajudar?"
                invalidFeedback="Use de 10 a 500 caracteres. Seja objetivo, nós entraremos em contato para mais detalhes."
                extraAttributes={{
                    minLength: 10,
                    maxLength: 500,
                    pattern: "^([a-zA-Z0-9À-ÿ ]){10,500}$",
                    required: true,
                }}
            />

            <ButtonBlueLightStyled
                type="submit"
                data-loading={spreeState.submitting}
                disabled={spreeState.submitting}
            >
                Enviar <AiOutlineLoading />
            </ButtonBlueLightStyled>
        </FormStyled>
    );
};
