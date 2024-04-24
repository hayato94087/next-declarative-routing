import { z } from "zod";

export const Route = {
  name: "Shop",
  params: z.object({}),
  searchParams: z.object({
    a: z.string().optional(),
    b: z.string().optional(),
  }),
};
