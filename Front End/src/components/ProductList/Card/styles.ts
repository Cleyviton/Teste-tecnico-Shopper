import { styled } from "styled-components";

const StyledCard = styled.li`
    display: flex;
    justify-content: space-between;
    color: white;

    background-color: var(--color-header);

    padding: 10px;

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;

        p {
            font-size: 1.7rem;
        }
        span {
            font-size: 1.4rem;
            color: var(--color-secondary);
        }

        .product-name {
            width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;

export { StyledCard };
