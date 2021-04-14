// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

// export function makeMoreScreamingKeys(someObject) {
//     let newObject = {};
//     const arrays = Object.entries(someObject)

//     for (let [key, value] of arrays) {
//         newObject[key.toUpperCase()] = value;
//     }
//     return newObject;
// }

export function makeMoreScreamingKeys(someObject) {
    const newObject = {};
    for (let key in someObject) {
        let value = someObject[key];
        let upperCaseKey = key.toUpperCase();
        newObject[upperCaseKey] = value;
    }
    return newObject;
}

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return Object.keys(someObject).toString();
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    return Object.entries(someObject);
}
