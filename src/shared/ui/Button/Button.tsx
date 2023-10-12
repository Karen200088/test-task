import {FC, ReactElement, ReactNode} from "react";

import {ButtonStyled} from "./Button.styled.js";

type ButtonProps = {
    children: ReactNode | ReactElement,
    type: "submit" | "button"
}

const Button: FC<ButtonProps> = ({children, type}) => {
    return (
        <ButtonStyled type={type}>{children}</ButtonStyled>
    );
};

export default Button;
