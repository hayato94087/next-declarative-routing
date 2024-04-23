import { z } from "zod";

export const Route = {
  name: "UserSlug",
  params: z.object({
    slug: z.string(),
  })
};

