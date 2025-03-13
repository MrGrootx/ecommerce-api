import { Request, Response } from "express";
import OrderValidations from "../orders/validation/order.validations";

import { ProductModel } from "../db/Schemas/products/product.schema";
import { OrderServices } from "../services/order.services";

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const zodValidation = OrderValidations.safeParse(req.body);

    if (
      typeof zodValidation.error !== "undefined" &&
      zodValidation.error.name === "ZodError"
    ) {
      const errorList = zodValidation.error?.issues.map((err) => err.message);
      res.status(400).send({
        sucess: false,
        message: "Validation Error",
        error: errorList,
      });
      return;
    }
    if (zodValidation.success) {
      const product = await ProductModel.findById(zodValidation.data.productId);

      if (
        product &&
        Number(product.get("inventory")) < zodValidation.data.quantity
      ) {
        res.status(400).send({
          sucess: false,
          message: "Inventory is not enough",
          error: [],
        });
      }
      if (product) {
        product.set(
          "inventory",
          Number(product.get("inventory")) - zodValidation.data.quantity
        );
        product.set(
          "inStock",
          Number(product.get("inventory")) === 0 ? false : true
        );
        const newOrder = await OrderServices.CreateANewOrder(
          zodValidation.data
        );
      }
    }

    res.status(200).send({
      sucess: true,
      message: "Order Created Successfully",
      data: [],
    });
  } catch (error: any) {
    res.status(500).send({
      sucess: false,
      message: error.message || "Error in Create Product",
      error: error,
    });
  }
};

const GetAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    
    const getorders = await OrderServices.GetAllOrdersFromDb(email as string);
    if (getorders.length === 0) {
      res.status(404).send({
        sucess: false,
        message: "No Orders Found",
        data: [],
      });
      return;
    }
    res.status(200).send({
      sucess: true,
      message: "Orders Fetched Successfully",
      data: getorders,
    });
  } catch (error: any) {
    res.status(500).send({
      sucess: false,
      message: error.message || "Error in Get Product",
      error: error,
    });
  }
};

export { CreateOrder, GetAllOrders };
