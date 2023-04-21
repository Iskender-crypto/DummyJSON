import { Address } from "./Address";

export class Company {
  public companyAddress!: Address;
  public department!: string;
  public name!: string;
  public title!: string;

  constructor(instance?: Partial<Company>) {
    Object.assign(this, instance);
  }
}
