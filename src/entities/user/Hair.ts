export class Hair {
  public color!: string;
  public type!: string;

  constructor(instance?: Partial<Hair>) {
    Object.assign(this, instance);
  }
}
