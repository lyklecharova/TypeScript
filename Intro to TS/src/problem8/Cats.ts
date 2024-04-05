class Cat {
    constructor(public name: string, public age: number) {}

    meow(): void {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function createCats(arr: string[]): void {
    arr.forEach((catStr) => {
        const [name, ageStr] = catStr.split(" ");
        const age = parseInt(ageStr);
        const cat = new Cat(name, age);
        cat.meow();
    });
}

createCats(["Mellow 2", "Tom 5"]);
createCats(["Candy 1", "Poppy 3", "Nyx 2"]);
