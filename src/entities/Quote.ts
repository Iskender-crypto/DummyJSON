import { Entity } from "./Entity";

export class Quote extends Entity {
  public quote!: string;
  public author!: string;

  constructor(instance?: Partial<Quote>) {
    super(instance);
    Object.assign(this, instance);
  }
}
