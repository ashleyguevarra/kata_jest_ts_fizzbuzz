import { FizzBuzz } from "../src/fizzbuzz";

// Un argument de 1 retourne "1"
test("Un argument de 1 retourne 1.", () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getFizzBuzz(1)).toBe("1");
});

// Un argument de 2 retourne "2"
test("Un argument de 2 retourne 2.", () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getFizzBuzz(2)).toBe("2");
});

// Un argument de 3 retourne "Fizz"
test("Un argument de 3 retourne Fizz.", () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getFizzBuzz(3)).toBe("Fizz");
});

// Un argument de 6 retourne "Fizz"
test("Un argument de 6 retourne Fizz.", () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getFizzBuzz(6)).toBe("Fizz");
});

// Un argument de 5 retourne "Buzz"
test("Un argument de 5 retourne Buzz.", () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getFizzBuzz(5)).toBe("Buzz");
});

// Un argument de 10 retourne "Buzz"
test("Un argument de 10 retourne Buzz.", () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getFizzBuzz(10)).toBe("Buzz");
});

// Un argument de 15 retourne "FizzBuzz"
test("Un argument de 15 retourne FizzBuzz.", () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getFizzBuzz(15)).toBe("FizzBuzz");
});

// Un argument de 30 retourne "FizzBuzz"
test("Un argument de 30 retourne FizzBuzz.", () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getFizzBuzz(30)).toBe("FizzBuzz");
});

// Il faut imprimer "Fizz" au lieu du nombre si le nombre est un multiple de 3 ou contient un 3 (ex. : 13 → "Fizz")
test("Un argument de 13 retourne Fizz (contient un 3).", () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getFizzBuzz(13)).toBe("Fizz");
});

// Il faut imprimer "Buzz" au lieu du nombre si le nombre est un multiple de 5 ou contient un 5 (ex. : 59 → "Buzz")
test("Un argument de 59 retourne Buzz (contient un 5).", () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getFizzBuzz(59)).toBe("Buzz");
});

// Il faut imprimer "FizzBuzz" si le nombre est un multiple de 5 et de 3 ou contient un 5 et un 3 (ex. : 53 → "FizzBuzz")
test("Un argument de 53 retourne FizzBuzz (contient un 3 et un 5).", () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getFizzBuzz(53)).toBe("FizzBuzz");
});
