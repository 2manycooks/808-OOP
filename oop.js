let gabe = {
    eyeColor: "brown",
    height: 70,
    name: "Gabe",
    //this is a method
    sayHello() {
        console.log(`Hi! my name is ${this.name}`)
    }
}

console.log(gabe.eyeColor)

let indoorVoice = "hello"

// everything in javascript is an object! look at this method that belongs to a "string"!

let outdoorVoice = indoorVoice.toUpperCase()

gabe.sayHello()

class Dog {
    // this is a static variable. It resides inside of the class itself, although each instance of the class has access to it.
    static totalDogs = 0;

    // constructor runs when a new instance of this class is created
    constructor(name, age) {
        this.name = name
        this.age = age
        Dog.totalDogs++
    }

    bork() {
        console.log(`Bork bork! Am doge. Name is ${this.name}, me ${this.age} hooman years old`)
        console.log(`There are ${Dog.totalDogs} heccin puppers`)
    }
}

let gracie = new Dog('Gracie', 8)
let spitz = new Dog('Spitz', 5)
let buck = new Dog('Buck', 3)

gracie.bork()

//these are all instance variables. This means they have their own copies of these variables, even though they have different values

// inheritance: when we extend a class, all extensions of said class retain its properties.

class Shibe extends Dog {
    constructor(name, age) {
        //super invokes the constructor of the class that this class extends from. It "goes above" to run the constructor
        super(name, age)
    }

    bonk() {
        console.log('Get heccin bonked lol')
    }
}

let cheems = new Shibe('Cheems', 3)
let zoey = new Dog('Zoey', 10)

cheems.bork()
cheems.bonk()
// zoey cannot bonk, only shibes can bonk. this will throw an error.
zoey.bonk()