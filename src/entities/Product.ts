import { Entity } from "./Entity";

export class Product extends Entity {
  public title!: string;
  public description!: string;
  public brand!: string;
  public category!: string;
  public thumbnail!: string;
  public images: string[] = [];
  public price!: number;
  public discountPercentage!: number;
  public rating!: number;
  public stock!: number;

  constructor(instance?: Partial<Product>) {
    super(instance);
    Object.assign(this, instance);
  }
}
