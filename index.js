// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name)
{
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
   let newCats;
   newCats = [...cats, name]
   return newCats
}

function prependCat(name) {
    let newCats;
    newCats = [name, ...cats]
    return newCats
}


function removeLastCat() {
    let newCats;
    newCats = cats.slice(0,2)
    return newCats
}

function removeFirstCat() {
    let newCats;
    newCats = cats.slice(1)
    return newCats
}