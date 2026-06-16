/*function doubleIt(num){

    return num*2;
}*/

/*const doubleIt = function(num){
    return num*2;
}
*/
const doubleIt =(num) => num*2;

const add=(x,y)=>x+y;

const result = doubleIt(2);

const result2= add(55,223);
console.log(result2)
console.log(result);


const give4=()=>5;

const math =(x,y)=>{

    const sum =x+y;
    const dif=x-y;
    const result=sum*dif;
    return result ;

}


const result3 =give4();
console.log(result3);

const result4 =math(33,22);
console.log(result4);
