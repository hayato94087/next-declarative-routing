import { z } from "zod";

export const Route = {
  name: "ProductDetail",
  params: z.object({
    category: z.string(),
    item: z.string(),
  })
};

