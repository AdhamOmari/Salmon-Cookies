'use strict'
let salmonStore = [];
let huresarray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
    '4pm', '5pm', '6pm', '7pm',];

function salmon(storeName, maxCustmer, minCustmer, avgCustmerCookies) {

    this.storeName = storeName;
    this.maxCustmer = maxCustmer;
    this.minCustmer = minCustmer;
    this.avgCustmerCookies = avgCustmerCookies;


    this.pearHuresRandom = [];
    this.salesPerHour = [];
    this.totalPeruour = 0;
    salmonStore.push(this);


}
salmon.prototype.getRandom = function () {
    for (let hour = 0; hour < huresarray.length; hour++) {
        this.pearHuresRandom.push(Math.floor(Math.random() * (this.maxCustmer - this.minCustmer + 1) + this.minCustmer));

    }
}
salmon.prototype.salesCookies = function () {
    for (let i = 0; i < this.pearHuresRandom.length; i++) {
        this.salesPerHour.push(Math.ceil(this.pearHuresRandom[i] * this.avgCustmerCookies));
        this.totalPeruour += this.salesPerHour[i];

    }
}
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);

salmon.prototype.render = function () {

    let salRow = document.createElement('tr');
    table.appendChild(salRow);
    let nameTd = document.createElement('td');
    salRow.appendChild(nameTd);
    nameTd.textContent = this.storeName;



    for (let index = 0; index < huresarray.length; index++) {
        let random = document.createElement('td');
        salRow.appendChild(random);
        random.textContent = this.salesPerHour[index];

    }



    // let totalF = document.createElement('td');
    //     salRow.appendChild(totalF);
    //     totalF.textContent=(totalPeruour)



    //  for (let index = 0; index < this.huresarray.length; index++) {
    //   let h2El = document.createElement('h2');
    //    conteaner.appendChild(h2El);
    //     h2El.textContent=huresarray[index] ;
}

let total = function () {
    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let th1 = document.createElement('td');
    tr1.appendChild(th1);
    th1.textContent = 'finalTotal';
    for (let index = 0; index < huresarray.length; index++) {
        let finalTotal = 0;
        for (let key = 0; key < salmonStore.length; key++) {
            finalTotal += salmonStore[key].salesPerHour[index];

        }
        let th5 = document.createElement('td');
           tr1.appendChild(th5);
           th5.textContent = finalTotal;

    }

}
let header = function () {


    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let th1 = document.createElement('td');
    tr1.appendChild(th1);
    th1.textContent = 'location';




    for (let index = 0; index < huresarray.length; index++) {
        let th2 = document.createElement('td');
        tr1.appendChild(th2);

        th2.textContent = huresarray[index];

    }


}
let seattle = new salmon('seattle', 65, 23, 6.3);
let tokyo = new salmon('tokyo', 3, 24, 1.2);
let dubai = new salmon('Dubai', 11, 38, 3.7);
let paris = new salmon('Paris', 20, 38, 2.3);
let lima = new salmon('Lima', 2, 16, 4.6);
header();

seattle.getRandom();
seattle.salesCookies();
seattle.render();

tokyo.getRandom();
tokyo.salesCookies();
tokyo.render();

dubai.getRandom();
dubai.salesCookies();
dubai.render();

paris.getRandom();
paris.salesCookies();
paris.render();

lima.getRandom();
lima.salesCookies();
lima.render();
total() ;
