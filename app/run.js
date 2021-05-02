'use strict'

let Seattle = {
    maxCustmer: 23,
    minCustmer: 65,
    avg: 6.3,
    pearHures: 0,

    getRandom: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.pearHures = Math.floor(Math.random() * (max - min + 1) + min);
    }

}

Seattle.getRandom(Seattle.minCustmer, Seattle.maxCustmer);

console.log(Seattle.pearHures);
let avgperHouse = Seattle.pearHures * Seattle.avg;
console.log(avgperHouse)

let div1 = document.getElementById('test1');








let Tokyo = {
    maxCustmer: 3,
    minCustmer: 24,
    avg: 1.2,
    pearHures: 0,

    // getage : function(min,max) {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    //  this.pearHures = Math.floor(Math.random() * (max - min + 1) + min); 
    // }   
}

//Tokyo.getage(Tokyo.minCustmer,Tokyo.minCustmer);
//console.log(Tokyo .pearHures);
//a= Tokyo.pearHures * Tokyo.avg  ;
//  console.log(a)

let Dubai = {
    maxCustmer: 11,
    minCustmer: 38,
    avg: 2.3,

}
let Paris = {
    maxCustmer: 20,
    minCustmer: 38,
    avg: 2.3,

}
let Lima = {
    maxCustmer: 2,
    minCustmer: 16,
    avg: 4.6,

}