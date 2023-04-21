export class Coordinates {
  public lat!: number;
  public lng!: number;

  constructor(instance?: Partial<Coordinates>) {
    Object.assign(this, instance);
  }
}
