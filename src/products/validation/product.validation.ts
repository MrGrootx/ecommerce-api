import { z } from "zod";

const ProductValidation = z.object({
  name: z.string({
    required_error: "Name of Product is required",
    invalid_type_error: "Name must be a string",
  }),
  price: z.number().positive(),
  description: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(
    z.object({
      type: z.string(),
      value: z.string(),
    })
  ),
  inventory: z.object({
    quantity: z.number().positive(),
    inStock: z.boolean(),
  }),
});

export default ProductValidation;