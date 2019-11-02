let pokemon_API = "https://pokeapi.co/api/v2/pokemon/pikachu/";

let promise = fetch(pokemon_API);
promise.then(connection => {
    console.log(connection);

    let promiseJson = connection.json();

    console.log(promiseJson);
})