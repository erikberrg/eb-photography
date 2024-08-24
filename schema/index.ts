import * as z from 'zod';

export const FormSchema = z.object({
    name: z.string().min(1,{
        message: 'Please enter your name'
    }),
    email: z.string().email({
        message: 'Please enter your email'
    }),
    service: z.string().min(1, {
        message: "Please select a service"
    }),
    message: z.string().min(1, {
        message: 'Please say something'
    }),
})