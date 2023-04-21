export class TableColumn {
  public id: number = Math.random() * 1000;
  public caption!: string;
  public name!: string;
  constructor(instance: Partial<TableColumn>) {
    Object.assign(this, instance);
  }
}
