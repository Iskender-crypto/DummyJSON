import { Entity } from "../Entity";

export class CommentUser extends Entity {
  public username!: string;

  constructor(instance?: Partial<CommentUser>) {
    super(instance);
    Object.assign(this, instance);
  }
}
