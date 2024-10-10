import { z } from "zod";

export const CreateEventSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  date: z.coerce.date(),
});

export type CreateEventSchema = z.infer<typeof CreateEventSchema>;

export const UpdateEventSchema = z.object({
  id:z.number(),
  title: z.string().min(1),
  description: z.string().optional(),
  date: z.coerce.date(),
  // date: z.date(),
})

export type UpdateEventSchema = z.infer<typeof UpdateEventSchema>

export const JoinEventSchema = z.object({
  id: z.number().int().positive(),
});

export const QuitEventSchema = z.object({
  id:z.number().int().positive()
})