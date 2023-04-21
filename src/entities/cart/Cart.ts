import { Entity } from "../Entity";
import { CartProduct } from "./CartProduct";

export class Cart extends Entity {
  public cartProduct!: CartProduct;
  public userId!: number;
  public discountedTotal!: number;
  public totalProducts!: number;
  public totalQuantity!: number;

  constructor(instance?: Partial<Cart>) {
    super(instance);
    Object.assign(this, instance);
  }
}
