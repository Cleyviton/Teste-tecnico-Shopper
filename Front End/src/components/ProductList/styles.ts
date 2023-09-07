import { styled } from "styled-components";

const StyledProductList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 100%;
    max-width: 900px;

    margin: 0 auto 50px auto;
    padding: 0 10px;

    > div {
        display: flex;
        justify-content: end;
        margin-bottom: 10px;

        button {
            font-size: 2rem;
            color: white;

            width: 150px;
            padding: 5px 40px;
            border: 1px solid transparent;
            border-radius: 6px;

            background-color: var(--color-secondary);

            cursor: pointer;
            transition: 0.3s;

            &:hover {
                background-color: var(--color-tertiary);
            }
        }
    }
`;

export { StyledProductList };
