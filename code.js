// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(value){
    if(value === undefined){
        return "Hello, World!";
    } else if(value === true) {
        return "Hello, World!";
    } else if(value === false){
            return "Hello, World!";
    } else {
        return 'Hello, ' + value + '!';
    }
}