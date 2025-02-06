import z from "zod";

export const signUpSchema = z
    .object({
        username: z
        .string({ message: "Username is required!" })
        .min(3, "Username must be at least 3 characters!")
        .max(20, "Username maximum length is 20 characters!"),
        email: z
        .string({ message: "Email is required!"})
        .email("Invalid email address!")
        .max(35, "Email maximum length is 35 characters!"),
        password: z
        .string({ message: "Password is required!"})
        .min(6, "Password must be atleast 6!")
        .max(20, "Password maximum length is 20 characters!")
    })
    .strict();