import { styled } from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
        margin-bottom: 10px;
    }

    .container-input {
        display: flex;
        border: 1px solid var(--color-secondary);
        border-radius: 6px;

        min-width: 200px;
        padding: 10px 20px;

        input {
            display: none;
        }

        label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 32px;

            width: 100%;

            font-size: 2rem;
            cursor: pointer;

            .directory-icon {
                font-size: 25px;
                transition: 0.3s;
                color: var(--color-header);

                &:hover {
                    color: var(--color-secondary);
                }
            }
        }
    }

    .container-buttons {
        display: flex;
        gap: 25px;

        button {
            font-size: 2rem;
            color: white;

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

        .btn-atualizar {
            background-color: var(--color-header);

            &:hover {
                background-color: var(--color-primary);
            }
        }

        .disabled {
            background-color: #808080;
            &:hover {
                background-color: #808080;
            }
        }
    }
`;

export { StyledForm };
