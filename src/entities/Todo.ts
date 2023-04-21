import { UserEntity } from "./UserEntity";

export class Todo extends UserEntity {
  public todo!: string;
  public completed!: string;

  constructor(instance?: Partial<Todo>) {
    super(instance);
    Object.assign(this, instance);
  }
}
