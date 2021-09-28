const studentInfo = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${studentInfo.name} and I'm from ${studentInfo.campus}`,
    e : "oO",
    T : "U "
}));