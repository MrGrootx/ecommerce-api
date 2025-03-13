import { Request, Response } from "express";
import ProductValidation from "../products/validation/product.validation";
import { ProductServices } from "../services/product.services";

const CreateProduct = async (req: Request, res: Response) => {
  try {
    const zodParser = ProductValidation.parse(req.body);
    const result = await ProductServices.CreateAProductIntoDB(zodParser);
    res.status(200).send({
      sucess: true,
      message: "Product Created Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send({
      sucess: false,
      message: error.message || "Error in Create Product",
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();

    res.status(200).json({
      sucess: true,
      message: "All Products",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send({
      sucess: false,
      message: error.message || "Error in All Product",
      error: error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      res.status(400).send({
        sucess: false,
        message: "Product Id is required",
      });
      return;
    }
    const result = await ProductServices.getSingleProduct(productId as string);
    res.status(200).json({
      sucess: true,
      message: "Get Single product",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send({
      sucess: false,
      message: error.message || "Error in Single Product",
      error: error,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      res.status(400).send({
        sucess: false,
        message: "Product Id is required",
      });
      return;
    }
    const data = req.body;

    const result = await ProductServices.updateProduct(productId, data);
    res.status(200).json({
      sucess: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send({
      sucess: false,
      message: error.message || "Error in Update Product",
      error: error,
    });
  }
};

const DeleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      res.status(400).send({
        sucess: false,
        message: "Product Id is required",
      });
      return;
    }
    await ProductServices.DeleteProduct(productId);
    res.status(200).json({
      sucess: true,
      message: "Product Deleted successfully",
      data: [],
    });
  } catch (error: any) {
    res.status(500).send({
      sucess: false,
      message: error.message || "Error in Delete Product",
      error: error,
    });
  }
};

export {
  CreateProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  DeleteProduct,
};
