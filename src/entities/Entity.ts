export abstract class Entity {
  public id!: number;

  constructor(instance?: Partial<Entity>) {
    Object.assign(this, instance);
  }
}
