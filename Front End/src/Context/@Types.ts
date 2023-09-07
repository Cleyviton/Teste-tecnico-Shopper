export interface IProductContext {
    products: [] | IProduct[];
    fileIsValided: boolean;
    setFileIsValided: React.Dispatch<React.SetStateAction<boolean>>;
    handleValidateCSV: (formData: FormData) => Promise<void>;
    handleUpdateCSV: (formData: FormData) => Promise<void>;
    isOpenModal: boolean;
    toggleModal: () => void;
}

export interface IProvidersProps {
    children: React.ReactNode;
}

export interface IProduct {
    code: number;
    name: string;
    cost_price: string;
    sales_price: string;
}
