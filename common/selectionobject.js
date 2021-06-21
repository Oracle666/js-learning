const workers = [
    {name:"John",salary:500},
    {name:"Mike",salary:1300},
    {name:"Linda",salary:1500},
    {name:"Inda",salary:1800}];

const Massiv = workers.filter(e =>{
    return e.salary > 1000;
})
const finalArray = Massiv.map(function(e){
    return  e.name;
})

console.log(finalArray);
