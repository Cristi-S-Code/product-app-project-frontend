/* tslint:disable */
import { Product } from './product';
export interface Stock {
  price: number;
  product?: Product;
  quantity: number;
  stockId?: number;
}
