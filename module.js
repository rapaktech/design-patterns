let myNameSpace = (function () {
    let myPrivateVar, myPrivateMethod;

    myPrivateVar = 0;

    myPrivateMethod = function (message) {
        console.log(message);
    }

    return {
        myPublicVar: "This is a public variable",
        myPublicFunction: function (message) {
            myPrivateVar++;
            myPrivateMethod(message);
        }
    }
})();

console.log(myNameSpace.myPublicVar);
console.log(myNameSpace.myPublicFunction("This is a public method"));