
let arr =  [7, 3, 5, 2, -4, 8, 11]; 
let first = arr.shift(); 
//console.log(first); 
let pairsArr = []; 
for (let i=0;i<arr.length;i++) {
  for(let j=0;j<arr.length;j++) {
    let tempArr = []; 
    if((j!=i)&&( arr[i] + arr[j]==first)) {
      tempArr.push(arr[i]); 
      tempArr.push(arr[j]); 
      pairsArr.push(tempArr); 
    }
  }
}
//console.log(pairsArr);
let deduplicated = removeDuplicates(pairsArr)
let formatted = formatOutput(deduplicated); 

function removeDuplicates(pairsArr) {
  //console.log("in remoev duplicate: pairsArr" + pairsArr); 
  let deduplicated = []  
  for (let i = 0; i < pairsArr.length; i++) {
    //console.log("in remove dup, iterating hour pairs array: ", pairsArr[i]); 
    if(!inArray(pairsArr[i], deduplicated)) deduplicated.push(pairsArr[i]);    
  }
  return deduplicated;   
}

function inArray(arr, pairsArr) {
  //console.log("in array, the array and pairs array are: ", arr, pairsArr); 
  //console.log("inArray, the arr is: "  + arr); 
  for(let j=0;j<pairsArr.length;j++) {
    if(sameArray(arr,pairsArr[j])) return true; 
  }
  return false; 
}

//console.log(res); 

function sameArray(arr1,arr2) {
 let arrOne = arr1.sort();
 let arrTwo = arr2.sort();   
 for(let i=0;i<arr1.length;i++) {
  //console.log(arrOne[i], arrTwo[i]); 
  if(!(arrOne[i]===arrTwo[i])) return false; 
 }  
 return true; 
}

function formatOutput(deduplicated) {
  let strArr = []; 
  deduplicated.forEach(elem=> strArr.push(elem.join(','))); 
  //console.log(strArr); 
  return deduplicated.join(" "); 
}

let arr1 = [[1,2], [2,3]]; 
let arr2 = [1,2]; 
let diff = arr1 - arr2; 
console.log(diff); 