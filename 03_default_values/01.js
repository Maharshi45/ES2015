let welcomeMessage1 = (firstName, lastName = "Watson") => {
    console.log(firstName + " " + lastName);
};

welcomeMessage1("Roger", "Federed");
welcomeMessage1("Shane");

let getLastName = () => "Warner";

let welcomeMessage2 = (firstName, lastName = getLastName()) => {
    console.log(firstName + " " + lastName);
};

welcomeMessage2("David");

/** We can also define default function in ES5 */
let welcomeMessage3 = (lastName = () => {console.log("Smith");}) => {
    lastName();
};

welcomeMessage3(getLastName);
welcomeMessage3();