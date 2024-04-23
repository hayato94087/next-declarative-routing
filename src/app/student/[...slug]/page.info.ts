import { z } from "zod";

export const Route = {
  name: "StudentSlug",
  params: z.object({
    slug: z.string().array(),
  })
};

