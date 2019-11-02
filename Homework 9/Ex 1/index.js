let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Promise is da best"), 5000);
});
promise.then(
    result => console.log(result),
    error => console.log(error)
);
