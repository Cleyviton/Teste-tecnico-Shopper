import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    name: z.string().max(255),
    email: z.string().max(255),
    password: z.string().max(255),
    description: z.string().nullish(),
    phone: z.string().max(20).nullish(),
});

export const userSchemaRequest = userSchema.omit({
    id: true,
});

export const userSchemaResponse = userSchema.omit({
    password: true,
});

export const loginSchema = z.object({
    email: z.string().max(255),
    password: z.string().max(255),
});
