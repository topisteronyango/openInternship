function sayHelloToMyFriend(name){
    console.log("Hello, " + name + ", it's nice to meet you!");
}

sayHelloToMyFriend("Topister");

// Let's practice by writing a function that takes in three arguments!

function introduceSelf(name, hometown, funfact){
    console.log("Hi! My name is " + name + ". I'm from " + hometown + ", and " + funfact + ".");
}

introduceSelf("Topister", "Nairobi", "I love playing");

// functions with return values

function greetFriend(name){
    return name + " it's good to see you!"
}

let greet = greetFriend("Topister");

console.log(greet);

function buildEmailAddress(name, email){
    return name + "@" + email + ".com"
}

myemail = buildEmailAddress("topister", "gmail");
console.log(myemail);