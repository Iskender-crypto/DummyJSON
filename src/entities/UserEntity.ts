import { Entity } from "./Entity";

export abstract class UserEntity extends Entity {
  public userId!: string;

  constructor(instance?: Partial<UserEntity>) {
    super(instance);
    Object.assign(this, instance);
  }
}
