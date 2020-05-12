import { ID } from '@datorama/akita';

export function createProduct(params: Partial<Product>) {
  return {} as Product;
}

export type AdditionalData = {
  price: number;
  productAdjective: string;
  productMaterial: string;
  description: string;
  department: string;
  color: string;
};

export interface BaseProduct {
  id: ID;
  title: string;
  image: string;
}

export interface Product extends BaseProduct {
  additionalData?: AdditionalData;
}
