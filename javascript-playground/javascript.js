const request = new XMLHttpRequest();
//あえて同期処理としてfalse
request.open("GET", "https://jsonplaceholder.typicode.com/photos", false);
request.send(null);
console.log(request);
