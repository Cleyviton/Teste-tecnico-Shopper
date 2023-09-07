import { useContext, useState } from "react";

import { ProductContext } from "../../Context/ProductContext";
import { Card } from "./Card";
import { StyledProductList } from "./styles";
import { IProduct } from "../../Context/@Types";
import { Modal } from "../Modal";
import { Form } from "../Form";

export const ProductList = () => {
    const { products, toggleModal, isOpenModal } = useContext(ProductContext);

    return (
        <StyledProductList>
            <div>
                <button onClick={() => toggleModal()}>Atualizar Preços</button>
            </div>
            {products.map((product: IProduct) => (
                <Card key={product.code} product={product} />
            ))}
            {isOpenModal && (
                <Modal toggleModal={toggleModal}>
                    <Form />
                </Modal>
            )}
        </StyledProductList>
    );
};
