import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserContext } from "../../../Context/UserContext";
import StyledForm from "./styles";
import { schema } from "./validators";

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const { userRegister } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <StyledForm onSubmit={handleSubmit((data) => userRegister(data))}>
            <div className="submit-container">
                <h1>Crie sua conta</h1>
                <div className="input-container">
                    <label htmlFor="name" className={errors.name && "error"}>
                        Seu nome:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className={errors.name && "error"}
                        {...register("name")}
                    />
                </div>
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
                <div className="input-container">
                    <label
                        htmlFor="confirmPassword"
                        className={errors.confirmPassword && "error"}
                    >
                        Confirme sua senha:
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className={errors.confirmPassword && "error"}
                        {...register("confirmPassword")}
                    />
                </div>
                <div className="input-container">
                    <label
                        htmlFor="description"
                        className={errors.description && "error"}
                    >
                        Descrição (Um poquinho sobre você):
                    </label>
                    <input
                        type="text"
                        id="description"
                        className={errors.description && "error"}
                        {...register("description")}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="phone" className={errors.phone && "error"}>
                        Telefone:
                    </label>
                    <input
                        type="text"
                        id="phone"
                        className={errors.phone && "error"}
                        {...register("phone")}
                    />
                </div>

                <button type="submit">Cadastrar-se</button>
            </div>
            <div className="container-login">
                <h2>Já possui cadastro?</h2>
                <button type="button" onClick={() => navigate("/")}>
                    Entrar
                </button>
            </div>
        </StyledForm>
    );
};
