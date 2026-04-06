import {z} from "zod"

export const UserSchema = z.object({
    name: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(60, "El nombre no puede tener más de 50 caracteres"),

    userEmail: z
    .email("El correo electrónico no es válido"),

    phone: z
    .string()
    .regex(/^[0-9]{10}$/, "El número de teléfono debe tener 10 dígitos"),

    documentType: z
    .string()
    .min(1, "Debe seleccionar un tipo de documento"),

    documentNumber: z
    .string()
    .min(5, "Numero de dovumento invalido")
    .max(20, "Numero de documento demasiado largo"),

    password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
    .regex(/[a-z]/, "La contraseña debe contener al menos una letra minúscula")
    .regex(/[0-9]/, "La contraseña debe contener al menos un número")
    .regex(/[^A-Za-z0-9]/, "La contraseña debe contener al menos un carácter especial"),

    avatarUrl: z
    .url("La URL del avatar no es válida")
    .nullable()
    .optional()

})
