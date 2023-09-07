import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { StyledDashboard } from "./styles";

export const Dashboard = () => {
    return (
        <>
            <Header />
            <StyledDashboard>
                <h1>Produtos</h1>
                <ProductList />
            </StyledDashboard>
        </>
    );
};
