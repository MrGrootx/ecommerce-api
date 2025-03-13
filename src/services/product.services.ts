import { ProductModel } from "../db/Schemas/products/product.schema";
import { TProduct } from "../products/type/product.types";

const CreateAProductIntoDB = async (ProductData: TProduct) => {
  const result = await ProductModel.create(ProductData);
  return result;
};

const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};

const getProductByName = async (product: string) => {
  const query = product ? { name: { $regex: product, $options: "i" } } : {};
  const result = await ProductModel.find(query);

  return result;
};
const getSingleProduct = async (id: string) => {
  const query = await ProductModel.findById(id);
  return query;
};

const updateProduct = async (productId: string, data: TProduct) => {
  const { _id, ...updateData } = data;

  const result = await ProductModel.findByIdAndUpdate(productId, updateData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const DeleteProduct = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId);
  return result;
};

export const ProductServices = {
  CreateAProductIntoDB,
  getAllProducts,
  getProductByName,
  getSingleProduct,
  updateProduct,
  DeleteProduct
};
