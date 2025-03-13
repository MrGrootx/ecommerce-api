import { TOrder } from "../orders/types/orders.types";
import OrderSchema from "../db/Schemas/orders/order.schema";
import OrderModel from "../db/Schemas/orders/order.schema";
const CreateANewOrder = async (OrderData: TOrder) => {
  const order = new OrderSchema(OrderData);
  await order.save();
  return order;
};

const GetAllOrdersFromDb = async (query: string) => {
  const getEmail = query ? { query } : {};
  const orders = await OrderModel.find(getEmail);
  return orders;
};

export const OrderServices = {
  CreateANewOrder,
  GetAllOrdersFromDb,
};
