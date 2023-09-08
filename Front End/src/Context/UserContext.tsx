import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ILoginData, IRegisterData, IUserContext } from "./@Types";
import { IProvidersProps } from "./@Types";
import { Api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IProvidersProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("@Shopper:TOKEN");

            if (token) {
                navigate("/dashboard");
            }
        })();
    }, []);

    const userRegister = async (formData: IRegisterData) => {
        try {
            await Api.post("/users", formData);
            toast.success("Registro realizado com sucesso!", {
                autoClose: 1000,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error(
                "E-mail já existente, tente cadastrar com um E-mail diferente!",
                {
                    autoClose: 1000,
                }
            );
        }
    };

    const userLogin = async (formData: ILoginData) => {
        try {
            const response = await Api.post("/users/login", formData);
            localStorage.setItem("@Shopper:TOKEN", response.data.token);

            toast.success("Usuário logado com sucesso!", {
                autoClose: 1000,
            });

            navigate("/dashboard");
        } catch (error) {
            console.log(error);

            toast.error("Credenciais inválidas!", {
                autoClose: 1000,
            });
        }
    };

    const userLogout = () => {
        localStorage.removeItem("@Shopper:TOKEN");
        navigate("/");
        toast.success("Usuário deslogado com sucesso!", {
            autoClose: 1000,
        });
    };

    return (
        <UserContext.Provider
            value={{
                userRegister,
                userLogin,
                userLogout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
