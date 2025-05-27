let regex = /[a-zA-Z]{3}/

const text = "as12tT24";

console.log(regex.test(text))

let regexD = /\d/

const text2 = "124a2"

console.log(regexD.test(text2))


let regexC = /[^a-zA-Z0-9]/

const text3 = "!#$$%/#%/&#/"

console.log(regexC.test(text3))
