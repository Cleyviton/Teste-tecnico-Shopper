import { styled } from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

    width: 80%;

    max-width: 600px;

    .submit-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 20px 0px;

        border-radius: 10px 10px 0 0;
        background-color: var(--color-bg-form);

        h1 {
            font-size: 4rem;
            color: white;
            margin-bottom: 20px;
        }

        .input-container {
            display: flex;
            flex-direction: column;

            margin-bottom: 10px;
            width: 55%;

            label {
                font-size: 1.4rem;
                color: white;
            }

            input {
                font-family: "Lucida Sans", "Lucida Sans Regular",
                    "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana,
                    sans-serif;

                color: white;
                padding: 5px 3px;

                border: none;
                background-color: transparent;

                border-bottom: 1px solid white;
            }
            .error {
                color: red;
                border-color: red;
            }
        }

        button {
            font-size: 2rem;
            font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
                "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
            color: var(--color-secondary);

            margin-top: 20px;
            width: 55%;
            padding: 10px 0;

            border: none;
            border-radius: 6px;
            transition: 0.1s;

            &:hover {
                color: var(--color-tertiary);
            }
        }
    }

    .container-register {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        background-color: white;

        border-radius: 0 0 10px 10px;
        padding: 30px;

        h2 {
            font-size: 2rem;
            color: var(--color-secondary);
        }

        button {
            font-size: 2rem;
            font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
                "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
            color: white;

            width: 70%;
            padding: 10px 0;

            border: none;
            border-radius: 6px;

            background-color: var(--color-bg-form);
            transition: 0.1s;

            &:hover {
                background: var(--color-tertiary);
            }
        }
    }
`;

export default StyledForm;
