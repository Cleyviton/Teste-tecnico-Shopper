import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { IProduct, IProductContext } from "./@Types";
import { IProvidersProps } from "./@Types";
import { Api } from "../services/api";

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IProvidersProps) => {
    const [products, setProducts] = useState<IProduct[] | []>([]);
    const [fileIsValided, setFileIsValided] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const response = await Api.get("/products/");
            setProducts(response.data);
        })();
    }, []);

    const [isOpenModal, setIsOpenModal] = useState(false);

    const toggleModal = () => {
        setFileIsValided(false);
        setIsOpenModal(!isOpenModal);
    };

    const handleValidateCSV = async (formData: FormData) => {
        try {
            await Api.post("/products/validate", formData);
            toast.success(
                "Sucesso!! Todos os dados do arquivo foram validados, agora clique em 'atualizar' para salvar os preços!",
                {
                    autoClose: 2000,
                }
            );
            setFileIsValided(true);
        } catch (error) {
            setFileIsValided(false);
            console.log(error);
            toast.error(
                "Não foi possível validar o arquivo, verifique os campos e tente novamente!",
                {
                    autoClose: 1500,
                }
            );
        }
    };

    const handleUpdateCSV = async (formData: FormData) => {
        try {
            const response = await Api.patch("/products", formData);
            response.data.map((newProduct: IProduct) => {
                products.filter((oldProduct: IProduct, index: number) => {
                    if (oldProduct.code == newProduct.code) {
                        products[index] = newProduct;
                    }
                });
                setProducts([...products]);
            });

            toggleModal();
            toast.success("Produtos atualizados com sucesso!!", {
                autoClose: 1000,
            });
        } catch (error) {
            console.log(error);
            toast.error("Não foi possivel atualizar os preços", {
                autoClose: 1000,
            });
        }
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                fileIsValided,
                setFileIsValided,
                handleValidateCSV,
                handleUpdateCSV,
                toggleModal,
                isOpenModal,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
