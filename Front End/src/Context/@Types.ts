export interface IProductContext {
    products: [] | IProduct[];
    fileIsValided: boolean;
    setFileIsValided: React.Dispatch<React.SetStateAction<boolean>>;
    handleValidateCSV: (formData: FormData) => Promise<void>;
    handleUpdateCSV: (formData: FormData) => Promise<void>;
    isOpenModal: boolean;
    toggleModal: () => void;
}

export interface IUserContext {
    userRegister: (formData: IRegisterData) => Promise<void>;
    userLogin: (formData: ILoginData) => Promise<void>;
    userLogout: () => void;
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

export interface IUser {
    id: number;
    name: string;
    email: string;
    description?: string | null | undefined;
    phone?: string | null | undefined;
}

export interface IRegisterData {
    name: string;
    email: string;
    password: string;
    description?: string | null | undefined;
    phone?: string | null | undefined;
}

export interface ILoginData {
    email: string;
    password: string;
}
