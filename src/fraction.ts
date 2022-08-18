interface fraction {
  numerator: number;
  denominator: number;
  add(...arg: fraction[]): fraction;
};

export class Fraction implements fraction {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  add(...arg: fraction[]): fraction {
    const numerators = arg.map((f) => f.numerator);
    const denominators = arg.map((f) => f.denominator);
    const numerator = numerators.reduce((a, b) => a + b);
    const denominator = denominators.reduce((a, b) => a * b);

    return new Fraction(numerator, denominator);
  }

  sub(...arg: fraction[]): fraction {
    const numerators = arg.map((f) => f.numerator);
    const denominators = arg.map((f) => f.denominator);
    const numerator = numerators.reduce((a, b) => a - b);
    const denominator = denominators.reduce((a, b) => a * b);

    return new Fraction(numerator, denominator);
  }

  mul(...arg: fraction[]): fraction {
    const numerators = arg.map((f) => f.numerator);
    const denominators = arg.map((f) => f.denominator);
    const numerator = numerators.reduce((a, b) => a * b);
    const denominator = denominators.reduce((a, b) => a * b);

    return new Fraction(numerator, denominator);
  }

  div(...arg: fraction[]): fraction {
    const numerators = arg.map((f) => f.numerator);
    const denominators = arg.map((f) => f.denominator);
    const numerator = numerators.reduce((a, b) => a * b);
    const denominator = denominators.reduce((a, b) => a * b);

    return new Fraction(numerator, denominator);
  }
}
