import { router,procedure } from "../trpc";
import { eventRouter } from "./event";
import {z} from 'zod'
import { userRouter } from "./user";

export const appRouter = router({
  event: eventRouter,
  user:userRouter,
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
        date:new Date()
      };
      
    }),
});

export type AppRouter = typeof appRouter;
