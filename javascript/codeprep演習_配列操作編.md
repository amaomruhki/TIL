# JavaScript演習 配列操作編

## 2-4 要素の中間への挿入
隣り合う整数の和を間に挿入する関数addSumToMiddle()を実装してください。

実装内容

- この関数は整数を要素として持つ配列arrayを引数にとり、その配列の隣り合う要素の合計値を、それぞれ要素の間に挿入します
- この関数では返り値は返しても返さなくても構いません
- 要素の挿入は引数の配列自体に対して行ってください

```JavaScript
function yoshio_new(array) {

  let tmp_array = [];
  
  for(let i = 0; i < array.length; i++ ){
  
   //▼arrayの要素を追加する処理▼
   tmp_array[tmp_array.length] = array[i];
   //1回目[]：tmp_array[0] = array[0] (1番目に「1」を代入) →[1] .length==1;
   //2回目[1,3]：tmp_array[2] = array[1] (3番目に「2」を代入) →[1,3,2] .length==3;
   //3回目[1,3,2,5]：tmp_array[4] = array[2] (5番目に「3」を代入)→[1,3,2,5,3] .length==5;

   //▼arrayのとなりあう要素の合計値を追加する処理▼
   if(array[i+1] != undefined){ // array[i+1]が実際のインデックス数を超えていなければ実行
       tmp_array[tmp_array.length] = array[i]+array[i+1];
       //1回目[1]：tmp_array[1] = 1 + 2 (tmp_array 2番目に3が入る) →[1,3] .length==2;
       //2回目[1,3,2]：tmp_array[3] = 2 + 3 (tmp_array 4番目に5が入る) →[1,3,2,5] .length==4;
       //3回目[1,3,2,5,3]：tmp_array[5] = 3 + 4 (tmp_array 6番目に7が入る) →[1,3,2,5,3,7] .length==6;
   }
  }
  console.log(tmp_array);
}

yoshio_new([1, 2, 3, 4, 5]); //[1, 3, 2, 5, 3, 7, 4, 9, 5]
yoshio_new([3, 5, 7]); //[3,8,5,12,7]
```

## 2-5 素数配列の生成
素数配列を生成する関数makePrimeArray()を実装してください。
この関数は整数nを引数にとり、その値以下の素数をすべて含む配列を生成します

```JavaScript
function makePrimeArray(n) { 
  // nが2未満だったら素数はないので空の配列を返す（１は素数じゃない） 
  if( n < 2 ){ return []; }  
  //２は唯一の偶数の素数。最初から素数配列に入れておく。 
  let arr = [2];  
  //２はあらかじめセットされてるので、iは３から開始。 
  //２以外の素数は奇数なので"i += 2"にして奇数のみ判定する 
  //素数判定法：対象の数値が素数配列のどれでも割り切れないなら素数。 
  for( let i = 3 ; i <= n ; i += 2 ){ 
    if( arr.every( v => i % v !== 0 )){ 
      arr.push(i); 
    } 
  } 
  return arr; 
} 
function makePrimeArray(n) { 
  let primes = []; 
  for (let i = 2; i <= n; i++) { 
    //every()メソッドは、空の配列ではあらゆる条件式に対して true を返す 
    let result = primes.every(p => { 
      return i % p !== 0; 
    }); 
    if (result) primes.push(i); 
  } 
    return primes; 
} 
console.log(makePrimeArray(7)); 
console.log(makePrimeArray(2)); 
console.log(makePrimeArray(8)); 
console.log(makePrimeArray(120));
``
