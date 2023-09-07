import { IProvidersProps } from "./@Types";
import { ProductProvider } from "./ProductContext";

const Providers = ({ children }: IProvidersProps) => {
    return <ProductProvider>{children}</ProductProvider>;
};

export default Providers;
