//Injectable are only for services, not models
export class Ingredient {

  public name;
  public amount;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

}
