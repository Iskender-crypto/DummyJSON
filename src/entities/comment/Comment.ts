import { Entity } from "../Entity";
import { CommentUser } from "./User";

export class Comment extends Entity {
  public body!: string;
  public postId!: string;
  public user!: CommentUser;

  constructor(instance?: Partial<Comment>) {
    super(instance);
    Object.assign(this, instance);
  }
}
