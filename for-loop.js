// Array print using for loop

const totalMoney = [10,212,543,435,45,45,543,4];

for (let i = 0 ;i < totalMoney.length ;i++){
    var elements = totalMoney[i];
    console.log(elements);
}


// Print numbers bigger than 80

const arr = [23,432,545,6546,12,,232,,12,455,124,1,4,21,73,12,9];
const threshold = 80;
const findGreater = (arr, num) => {
   const res = [];
   for(let i = 0; i < arr.length; i++){
      if(arr[i] < num){
         continue;
      };
      res.push(arr[i]);
   };
   return res;
};
console.log(findGreater(arr, threshold));