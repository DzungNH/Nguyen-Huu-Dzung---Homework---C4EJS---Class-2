let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => reject("Promise is da best"), 5000);
});
promise1.then(
    result => console.log(result),
    error => console.log(error)
);

async function a() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Promise is da best"), 5000);
});
    let result = await promise;
    console.log(result);
}
a();