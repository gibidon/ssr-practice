import { RegistrationSchema } from "@/shared/api";
import { prisma } from "../db";
import { procedure, router } from "../trpc";
import { redirect } from "next/navigation";

export const userRouter = router({
    register:procedure
        .input(RegistrationSchema)
        .mutation(async({input}) => {

        const existingUser = await prisma.user.findUnique({where:{
            email: input.email
        }})

        // if(existingUser) return null
        if(existingUser){
            throw new Error('User already exists');
        }

        prisma.user.create({data: {
            name:input.name,
            email:input.email,
            password:input.password
        }})
        //TODO
        redirect('https://localhost:3000/')
    })
});
