function addSumToMiddle(array) {

  let tmp_array = array.slice();
  array.splice(0);
  
  for(let i = 0; i < tmp_array.length; i++ ){
   array[array.length] = tmp_array[i];

   if(tmp_array[i+1] != undefined){ 
       array[array.length] = tmp_array[i]+tmp_array[i+1];
   }
  }
}

console.log(addSumToMiddle([1, 2, 3, 4, 5]));
;