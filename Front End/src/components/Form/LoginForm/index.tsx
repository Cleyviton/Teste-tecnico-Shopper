import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import StyledForm from "./styles";
import { ILoginData } from "../../../Context/@Types";
import { schema } from "./validators";
import { UserContext } from "../../../Context/UserContext";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginData>({
        resolver: zodResolver(schema),
    });

    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <StyledForm onSubmit={handleSubmit((data) => userLogin(data))}>
            <div className="submit-container">
                <h1>Entrar</h1>
                <div className="input-container">
                    <label htmlFor="email" className={errors.email && "error"}>
                        E-mail:
                    </label>
                    <input
                        type="text"
                        id="email"
                        className={errors.email && "error"}
                        {...register("email")}
                    />
                </div>
                <div className="input-container">
                    <label
                        htmlFor="password"
                        className={errors.password && "error"}
                    >
                        Senha:
                    </label>
                    <input
                        type="password"
                        id="paswword"
                        className={errors.password && "error"}
                        {...register("password")}
                    />
                </div>

                <button type="submit">Entrar</button>
            </div>
            <div className="container-register">
                <h2>Ainda não possui cadastro?</h2>
                <button type="button" onClick={() => navigate("/register")}>
                    Cadastre-se
                </button>
            </div>
        </StyledForm>
    );
};
