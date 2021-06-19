const workers = [
    {name:"John",salary:500},
    {name:"Mike",salary:1300},
    {name:"Linda",salary:1500}];

const getWorthyWorkers = massivfilter =>{
    const finalmassiv = [];

    for(let i = 0; i<massivfilter.length; i++){
        const a = massivfilter[i]
        if(a.salary > 1000){
            finalmassiv.push(a.name);
        }
    }

    return finalmassiv;
}


console.log(getWorthyWorkers(workers));

