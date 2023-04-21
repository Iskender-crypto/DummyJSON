import { UserEntity } from "./UserEntity";

export class Post extends UserEntity {
  public title!: string;
  public body!: string;
  public tags: string[] = [];
  public reactions!: number;

  constructor(instance?: Partial<Post>) {
    super(instance);
    Object.assign(this, instance);
  }
}
