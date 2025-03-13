import { Model, Schema, model } from "mongoose";
import { TProduct } from "../../../products/type/product.types";

const ProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: [String],
    variants: [
      {
        _id: false,
        type: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    inventory: {
      _id: false,
      quantity: {
        type: Number,
        required: true,
      },
      inStock: {
        type: Boolean,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel: Model<TProduct> = model<TProduct>(
  "Products",
  ProductSchema
);
