

function sum(x){
    let total=x;
     function innerFunction(y){
        if(y===undefined){
            return total;
        }
        total+=y
        return innerFunction;
    }
   return innerFunction;
  }
  
  console.log(sum(1)(2)(3)(4)(5)());
  console.log(sum(3)(7)()); 