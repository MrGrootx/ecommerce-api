import { Model, Schema, model } from "mongoose";
import { TOrder } from "../../../orders/types/orders.types";

const OrderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel: Model<TOrder> = model<TOrder>("Orders", OrderSchema);

export default OrderModel;
