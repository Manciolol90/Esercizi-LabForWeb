const number: number = 3;
console.log(number);
const text: string = "ciao";
console.log(text);
let bool: boolean = true;
console.log(bool);

const arrayNumber: number[] = [1, 2, 3];
console.log(arrayNumber);
const arrayString: string[] = ["a", "b", "c"];
console.log(arrayString);
const arrayBoolean: boolean[] = [true, false, true];
console.log(arrayBoolean);

const findNumber = (array: number[], number: number): number | undefined => {
    return array.find(element => element === number);
};

console.log(findNumber([1,2,3], 2));

interface IProduct {
    id: number;
    name: string;
}

type Product = {
    id: number;
    name?: string;
}

const product: IProduct = {
    id: 2,
    name: "computer"
}
console.log(product);