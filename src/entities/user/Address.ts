import { Coordinates } from "./Coordinate";

export class Address {
  public address!: string;
  public city!: string;
  public postalCode!: string;
  public state!: string;
  public coordinates!: Coordinates;

  constructor(instance?: Partial<Address>) {
    Object.assign(this, instance);
  }
}
