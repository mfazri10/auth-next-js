import * as z from "zod";


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(3, {
        message: "Password Min 6 Karakter"
    })
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Password Min 6 Karakter"
    }),
    name: z.string().min(1, {
        message: "Name Is Required"
    })
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
})

export const PasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Masukkan Minimal 6 Karakter"
    }),
})