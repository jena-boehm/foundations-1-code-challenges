// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let arr2 = [];
    arr.forEach((pet) => {
        arr2.push(pet.name);
    })

    return arr2;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let arr2 = [];
    arr.forEach((pet) => {
        arr2.push(pet.type);
    })

    return arr2.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let arr2 = [];
    arr.forEach((pet) => {
        arr2.push({ nombre: pet.name, tipo: pet.type });
    })
    return arr2;
}

