'use strict'

let seattle = {
    storeName: 'seattle',
    huresarray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
        '4pm', '5pm', '6pm', '7pm',],

    maxCustmer: 65,
    minCustmer: 23,
    avgCustmerCookies: 6.3,
    pearHuresRandom: [],
    salesPerHour: [],
    totalPeruour :0,
    getRandom: function () {
        for (let hour = 0; hour < this.huresarray.length; hour++) {
            this.pearHuresRandom.push(Math.floor(Math.random() * (this.maxCustmer - this.minCustmer + 1) + this.minCustmer));
        }
    },

    salesCookies: function () {
        for (let i = 0; i < this.pearHuresRandom.length; i++) {
          
            this.salesPerHour.push(Math.ceil(this.pearHuresRandom[i] * this.avgCustmerCookies));
            this.totalPeruour+=this.salesPerHour[i];
        }
    },
    render :function (){
        let conteaner = document.getElementById('sales') ;
        let h2El = document.createElement('h2');
        conteaner.appendChild(h2El);
         h2El.textContent=this.storeName;

        let ulEl = document.createElement('ul');
        conteaner.appendChild(ulEl) ;
        for (let index  = 0; index <this . salesPerHour.length; index++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${this.huresarray[index]}:${this.salesPerHour[index]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent=`Total:${this.totalPeruour} cookies`

    },
}
seattle.getRandom();
seattle.salesCookies();
seattle.render();
//Seattle.getRandom(Seattle.minCustmer, Seattle.maxCustmer);

//console.log(Seattle.pearHures);
//let avgperHouse = Seattle.pearHures * Seattle.avgCustmerCookies;
//console.log(avgperHouse)

//let div1 = document.getElementById('test1');








let tokyo = {
    storeName: 'tokyo',
    huresarray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
        '4pm', '5pm', '6pm', '7pm',],

    maxCustmer: 65,
    minCustmer: 23,
    avgCustmerCookies: 6.3,
    pearHuresRandom: [],
    salesPerHour: [],
    totalPeruour :0,
    getRandom: function () {
        for (let hour = 0; hour < this.huresarray.length; hour++) {
            this.pearHuresRandom.push(Math.floor(Math.random() * (this.maxCustmer - this.minCustmer + 1) + this.minCustmer));
        }
    },

    salesCookies: function () {
        for (let i = 0; i < this.pearHuresRandom.length; i++) {
          
            this.salesPerHour.push(Math.ceil(this.pearHuresRandom[i] * this.avgCustmerCookies));
            this.totalPeruour+=this.salesPerHour[i];
        }
    },
    render :function (){
        let conteaner = document.getElementById('sales') ;
        let h2El = document.createElement('h2');
        conteaner.appendChild(h2El);
         h2El.textContent=this.storeName;

        let ulEl = document.createElement('ul');
        conteaner.appendChild(ulEl) ;
        for (let index  = 0; index <this . salesPerHour.length; index++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${this.huresarray[index]}:${this.salesPerHour[index]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent=`Total:${this.totalPeruour} cookies`

    },
}
tokyo.getRandom();
tokyo.salesCookies();
tokyo.render();



let dubai = {
    storeName: 'dubai',
    huresarray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
        '4pm', '5pm', '6pm', '7pm',],

    maxCustmer: 65,
    minCustmer: 23,
    avgCustmerCookies: 6.3,
    pearHuresRandom: [],
    salesPerHour: [],
    totalPeruour :0,
    getRandom: function () {
        for (let hour = 0; hour < this.huresarray.length; hour++) {
            this.pearHuresRandom.push(Math.floor(Math.random() * (this.maxCustmer - this.minCustmer + 1) + this.minCustmer));
        }
    },

    salesCookies: function () {
        for (let i = 0; i < this.pearHuresRandom.length; i++) {
          
            this.salesPerHour.push(Math.ceil(this.pearHuresRandom[i] * this.avgCustmerCookies));
            this.totalPeruour+=this.salesPerHour[i];
        }
    },
    render :function (){
        let conteaner = document.getElementById('sales') ;
        let h2El = document.createElement('h2');
        conteaner.appendChild(h2El);
         h2El.textContent=this.storeName;

        let ulEl = document.createElement('ul');
        conteaner.appendChild(ulEl) ;
        for (let index  = 0; index <this . salesPerHour.length; index++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${this.huresarray[index]}:${this.salesPerHour[index]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent=`Total:${this.totalPeruour} cookies`

    },


}

dubai.getRandom();
dubai.salesCookies();
dubai.render();


let paris = {
    storeName: 'paris',
    huresarray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
        '4pm', '5pm', '6pm', '7pm',],

    maxCustmer: 65,
    minCustmer: 23,
    avgCustmerCookies: 6.3,
    pearHuresRandom: [],
    salesPerHour: [],
    totalPeruour :0,
    getRandom: function () {
        for (let hour = 0; hour < this.huresarray.length; hour++) {
            this.pearHuresRandom.push(Math.floor(Math.random() * (this.maxCustmer - this.minCustmer + 1) + this.minCustmer));
        }
    },

    salesCookies: function () {
        for (let i = 0; i < this.pearHuresRandom.length; i++) {
          
            this.salesPerHour.push(Math.ceil(this.pearHuresRandom[i] * this.avgCustmerCookies));
            this.totalPeruour+=this.salesPerHour[i];
        }
    },
    render :function (){
        let conteaner = document.getElementById('sales') ;
        let h2El = document.createElement('h2');
        conteaner.appendChild(h2El);
         h2El.textContent=this.storeName;

        let ulEl = document.createElement('ul');
        conteaner.appendChild(ulEl) ;
        for (let index  = 0; index <this . salesPerHour.length; index++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${this.huresarray[index]}:${this.salesPerHour[index]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent=`Total:${this.totalPeruour} cookies`

    },
}

paris.getRandom();
paris.salesCookies();
paris.render();

let lima = {

    storeName: 'lima',
    huresarray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
        '4pm', '5pm', '6pm', '7pm',],

    maxCustmer: 65,
    minCustmer: 23,
    avgCustmerCookies: 6.3,
    pearHuresRandom: [],
    salesPerHour: [],
    totalPeruour :0,
    getRandom: function () {
        for (let hour = 0; hour < this.huresarray.length; hour++) {
            this.pearHuresRandom.push(Math.floor(Math.random() * (this.maxCustmer - this.minCustmer + 1) + this.minCustmer));
        }
    },

    salesCookies: function () {
        for (let i = 0; i < this.pearHuresRandom.length; i++) {
          
            this.salesPerHour.push(Math.ceil(this.pearHuresRandom[i] * this.avgCustmerCookies));
            this.totalPeruour+=this.salesPerHour[i];
        }
    },
    render :function (){
        let conteaner = document.getElementById('sales') ;
        let h2El = document.createElement('h2');
        conteaner.appendChild(h2El);
         h2El.textContent=this.storeName;

        let ulEl = document.createElement('ul');
        conteaner.appendChild(ulEl) ;
        for (let index  = 0; index <this . salesPerHour.length; index++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${this.huresarray[index]}:${this.salesPerHour[index]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent=`Total:${this.totalPeruour} cookies`

    },

    
}

lima.getRandom();
lima.salesCookies();
lima.render();
