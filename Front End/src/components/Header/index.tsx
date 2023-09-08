import { useContext } from "react";

import { StyledHeader } from "./styles";
import { UserContext } from "../../Context/UserContext";

export const Header = () => {
    const { userLogout } = useContext(UserContext);

    return (
        <StyledHeader>
            <img src="/public/logo-shopper.webp" alt="" />
            <div className="buttons-container">
                <button onClick={() => userLogout()}>Logout</button>
            </div>
        </StyledHeader>
    );
};
