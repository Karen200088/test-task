import {FC, ReactElement, ReactNode} from "react";

import {ButtonStyled} from "./Button.styled.js";

type ButtonProps = {
    children: ReactNode | ReactElement,
    type: "submit" | "button"
}

const Button: FC<ButtonProps> = ({children}) => {
    return (
        <ButtonStyled>{children}</ButtonStyled>
    );
};

export default Button;
