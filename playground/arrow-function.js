var square = (x) => x * x;
console.log(square(10));

var user = {
    name: "charan",
    sayHi : () => {
        console.log(`Hi ${this.name}`)
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi ${this.name}`)
    }
};

user.sayHiAlt(1,2,3);