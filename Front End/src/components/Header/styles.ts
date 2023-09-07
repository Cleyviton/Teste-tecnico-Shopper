import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;

    width: 100%;

    padding: 20px 80px;
    background-color: var(--color-header);

    .buttons-container {
        display: flex;
        gap: 25px;

        button {
            font-size: 2rem;
            color: white;

            padding: 5px 40px;
            border: 1px solid var(--color-secondary);
            border-radius: 6px;

            background-color: transparent;

            cursor: pointer;
            transition: 0.3s;

            &:hover {
                background-color: var(--color-tertiary);
            }
        }

        .button-register {
            background-color: var(--color-secondary);
            border-color: var(--color-secondary);
        }
    }

    .container-hamburger {
        display: none;
    }

    .hamburger {
        font-size: 32px;
        color: white;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            color: var(--color-tertiary);
        }
    }

    @media (max-width: 769px) {
        padding: 20px 30px;

        img {
            width: 145px;
        }

        .hidden {
            display: none;
        }

        .buttons-container {
            flex-direction: column;
            gap: 5px;

            button {
                width: 120px;
                padding: 5px 0;
            }
        }

        .container-hamburger {
            display: flex;
            justify-content: end;
        }
    }
`;

export { StyledHeader };
