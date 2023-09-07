import { IProduct } from "../../../Context/@Types";
import { StyledCard } from "./styles";

interface ICardProps {
    product: IProduct;
}

export const Card = ({ product }: ICardProps) => {
    return (
        <StyledCard>
            <div>
                <p>Nome do produto:</p>
                <span className="product-name">{product.name}</span>
            </div>
            <div>
                <p>Código:</p>
                <span>{product.code}</span>
            </div>
            <div>
                <p>Preço de custo:</p>
                <span>R$ {product.cost_price.replace(".", ",")}</span>
            </div>
            <div>
                <p>Preço de venda:</p>
                <span>R$ {product.sales_price.replace(".", ",")}</span>
            </div>
        </StyledCard>
    );
};
