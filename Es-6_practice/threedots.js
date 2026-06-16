const ages=[23,25,256,21,18];
const ages2=[27,78,90];
const ages3 =[11,1,2,34];
/*const allAges =ages.concat(ages2).concat([8]).concat(ages3);*/
const allAges2 =[...ages, ...ages2, ...ages3];
/*console.log(allAges);*/
console.log(allAges2);


const bus=234;
const mini=3232;
const sos=33;
const taka=[234,3232,33];
const maximum =Math.max(bus,mini,sos);
const mx=Math.max(...taka);
console.log(maximum);
console.log(mx);
