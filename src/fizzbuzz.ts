export class FizzBuzz {
    getFizzBuzz(n: number): string {
        const contains3 = n.toString().includes("3");
        const contains5 = n.toString().includes("5");
        const multipleOf3 = n % 3 === 0;
        const multipleOf5 = n % 5 === 0;

        if ((multipleOf3 && multipleOf5) || (contains3 && contains5)) return "FizzBuzz";
        if (multipleOf3 || contains3) return "Fizz";
        if (multipleOf5 || contains5) return "Buzz";
        return n.toString();
    }
}
