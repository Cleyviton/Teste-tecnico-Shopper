import { z } from "zod";

const isValidPhoneNumber = (value: string) => {
    // Verifica se o valor é uma string
    if (typeof value !== "string") return false;

    // Remove qualquer espaço ou caracteres especiais do número de telefone
    const cleanedPhoneNumber = value.replace(/\s|\(|\)|\-/g, "");

    // Verifica se o número de telefone consiste apenas de dígitos e tem no máximo 20 caracteres
    return /^\d{1,20}$/.test(cleanedPhoneNumber);
};

export const schema = z
    .object({
        name: z.string().max(55).nonempty(),
        email: z.string().nonempty().email(),
        password: z.string().nonempty(),
        confirmPassword: z.string().nonempty(),
        description: z.string().nonempty(),
        phone: z.string().max(20).nonempty().refine(isValidPhoneNumber),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não correspondem",
        path: ["confirmPassword"],
    });
