import { GiHamburgerMenu } from "react-icons/gi";

import { StyledHeader } from "./styles";
import { useState } from "react";

export const Header = () => {
    const [showBtns, setShowBtns] = useState(false);

    return (
        <StyledHeader>
            <img src="/public/logo-shopper.webp" alt="" />
            <div className="buttons-container">
                <div className="container-hamburger">
                    <GiHamburgerMenu
                        className="hamburger"
                        onClick={() => setShowBtns(!showBtns)}
                    />
                </div>
                <button
                    className={
                        showBtns ? "button-login" : "button-login hidden"
                    }
                >
                    Login
                </button>
                <button
                    className={
                        showBtns ? "button-register" : "button-register hidden"
                    }
                >
                    Registre-se
                </button>
            </div>
        </StyledHeader>
    );
};
