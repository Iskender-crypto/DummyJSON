export class Bank {
  public cardExpire!: string;
  public cardNumber!: string;
  public cardType!: string;
  public currency!: string;
  public iban!: string;

  constructor(instance?: Partial<Bank>) {
    Object.assign(this, instance);
  }
}
