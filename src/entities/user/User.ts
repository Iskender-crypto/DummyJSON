import { Entity } from "../Entity";
import { Address } from "./Address";
import { Bank } from "./Bank";
import { Company } from "./Company";
import { Hair } from "./Hair";

export class User extends Entity {
  public firstName!: string;
  public lastName!: string;
  public maidenName!: string;
  public age!: number;
  public gender!: string;
  public email!: string;
  public phone!: string;
  public userName!: string;
  public password!: string;
  public birthDate!: string;
  public image!: string;
  public bloodGroup!: string;
  public height!: number;
  public weight!: number;
  public eyeColor!: string;
  public ip!: string;
  public domain!: string;
  public macAddress!: string;
  public university!: string;
  public ein!: string;
  public ssn!: string;
  public userAgent!: string;
  public hair!: Hair;
  public address!: Address;
  public bank!: Bank;
  public company!: Company;

  constructor(instance?: Partial<User>) {
    super(instance);
    Object.assign(this, instance);
  }
}
