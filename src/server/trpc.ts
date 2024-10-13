import { TRPCError, initTRPC } from "@trpc/server";
import superjson from "superjson";
import { Context } from "./context";
import { prisma } from "./db";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = t.router;
export const procedure = t.procedure;

export const isAuth = t.middleware(async (opts) => {
  const { ctx,input } = opts;

  console.log('input in isAuth middleware: ',input)

  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const isOwner = t.middleware(async (opts) => {
  const {ctx} = opts

  

  const userEvents = await prisma.event.findMany({where:{authorId:ctx.user?.id}})
  
  const isEventOwner = userEvents.find(event => event.id === ctx.user?.id)

  if (!isEventOwner){
    throw new TRPCError({code:'FORBIDDEN'})
  }

  return opts.next({
    ctx:{isOwner:true}
  })
})