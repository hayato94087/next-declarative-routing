import { z } from "zod";

export const Route = {
  name: "ProductCategoryItem",
  params: z.object({
    category: z.string(),
    item: z.string(),
  })
};

