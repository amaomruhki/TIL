## @keyframesは%に達したの最終状態の差分だけアニメーションする

``` javascript
@keyframes move {
  0% {
    transform: none;
  }
  80% {
    transform: translateX(200px) rotate(360deg);
  }
  100% {
    transform: translateX(300px) rotate(360deg);
  }
  ```
  
keyframes には、その % に達した時点での最終状態を記述します。  
また、% 間のアニメーションはそれぞれの最終状態の差分を補完するようにアニメーションが生成します。
80% と 100% の状態の差は translateX(200px) と translateX(300px) のみです。  
回転に関してはどちらも rotate(360deg) が指定されているので、回転に関しては差分がありません。  
つまり x 方向に 100px の差分があるだけなので、その差分を補完するように直進のアニメーションのみ生成されるわけですね。
