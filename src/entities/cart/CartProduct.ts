import { Entity } from "../Entity";

export class CartProduct extends Entity {
  public title!: string;
  public price!: number;
  public quantity!: number;
  public discountPercentage!: number;
  public discountedPrice!: number;

  constructor(instance?: Partial<CartProduct>) {
    super(instance);
    Object.assign(this, instance);
  }
}
