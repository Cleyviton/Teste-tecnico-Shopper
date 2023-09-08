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
    }
`;

export { StyledHeader };
