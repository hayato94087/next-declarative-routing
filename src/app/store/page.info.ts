import { z } from "zod";

export const Route = {
  name: "Store",
  params: z.object({}),
  searchParams: z.object({
    a: z.string().optional(),
    b: z.string().optional(),
  }),
};
